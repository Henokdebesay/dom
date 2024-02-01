// Part 1: Getting Started

const mainEl = document.getElementsByTagName("main")[0]; 
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Part 2 & 3: Creating the Submenu

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top= 0;


// Part 4: Adding Menu Interaction

// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];


let topMenuLinks = [];

menuLinks.forEach((menu) => {
  const link = document.createElement("a");
  link.innerText = menu.text;
  link.href = `${menu.href}`;
  topMenuEl.appendChild(link);
  topMenuLinks.push(link)
});

// console.log(menuLinks);
// console.log(topMenuLinks);


let catalogArray = [
    { text: "all", href: "/catalog/all" },
    { text: "top selling", href: "/catalog/top" },
    { text: "search", href: "/catalog/search" },
  ];
  let ordersArray = [
    { text: "new", href: "/orders/new" },
    { text: "pending", href: "/orders/pending" },
    { text: "history", href: "/orders/history" },
  ];
  let accountArray = [
    { text: "profile", href: "/account/profile" },
    { text: "sign out", href: "/account/signout" },
  ];
  
  menuLinks.forEach((menu) => {
    if (menu.text === "catalog") {
      menu.subLinks = catalogArray;
    } else if (menu.text === "orders") {
      menu.subLinks = ordersArray;
    } else if (menu.text === "account") {
      menu.subLinks = accountArray;
    }
  });

  let sub_Links = []
  
  menuLinks.forEach((sub) => {
    if (sub.text === "catalog") {
      sub_Links.push(sub.subLinks);
    } else if (sub.text === "orders") {
      sub_Links.push(sub.subLinks)
    } else if (sub.text === "account") {
      sub_Links.push(sub.subLinks)
    }
  });
  
  topMenuEl.addEventListener("click", e => {
    e.preventDefault();
    const clickedLink = e.target.closest("a");
  
    if (!clickedLink) return;
  
    // Remove 'active' class from all links
    topMenuEl.querySelectorAll("a").forEach(link => {
      link.classList.remove("active");
    });
  
    // Toggle 'active' class for the clicked link
    clickedLink.classList.add("active");
  
    // Clear submenu
    subMenuEl.innerHTML = "";
  
    // Check if the clicked link has sublinks
    
    const linkData = menuLinks.find(link => link.text === clickedLink.textContent.toLowerCase());
    if (linkData && linkData.subLinks) {
      // Populate submenu with sublinks
      linkData.subLinks.forEach(sublink => {
        const subLink = document.createElement("a");
        subLink.innerText = sublink.text;
        subLink.href = sublink.href;
        subMenuEl.appendChild(subLink);
        if( subLink === topMenuEl.querySelectorAll("a")){
          console.log("hello")
          mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
        }

      });
      // Toggle submenu visibility
      subMenuEl.style.top = subMenuEl.style.top === "100%" ? "0" : "100%";
    } else {
      // Hide the submenu for links without sublinks
      subMenuEl.style.top === "0";
    }

    
    
  });

  subMenuEl.addEventListener("click", e => {
    e.preventDefault();
    const clickedSubLink = e.target.closest("a");

    if (!clickedSubLink) return;

    // Display heading in mainEl
    mainEl.innerHTML = `<h1>${clickedSubLink.textContent.toUpperCase()}</h1>`;
});
