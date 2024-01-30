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
console.log(sub_Links);
  
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
      const clickedLink = e.target;

      // Remove 'active' class from all links
      const links = topMenuEl.querySelectorAll("a");
      links.forEach(link => {
          if (link !== clickedLink) {
              link.classList.remove("active");
          }
      });

      // Toggle 'active' class for the clicked link
      clickedLink.classList.toggle("active");

      // Toggle submenu visibility based on the clicked link
      if (clickedLink.textContent.toLowerCase() === "catalog" || 
          clickedLink.textContent.toLowerCase() === "orders" || 
          clickedLink.textContent.toLowerCase() === "account") {
          // Toggle submenu visibility
          subMenuEl.style.top = subMenuEl.style.top === "100%" ? "0" : "100%";
      } else {
          // Hide the submenu for other links with sublinks
          subMenuEl.style.top = "0";
      }
  }
});

sub_Links.forEach((sub) => {
  sub.forEach((link) => {
    if (link.text === "all" || link.text === "new" || link.text === "profile") {
      const subLink = document.createElement("a");
      subLink.innerText = link.text;
      subLink.href = link.href;
      subMenuEl.appendChild(subLink);
      console.log(subLink);
    }
  });
});

    // subMenuEl.addEventListener("click", (e) => {
    //   e.preventDefault();
      
    //   if (e.target.tagName === "A") {
    //       e.target.classList.toggle("active"); // Toggle the "active" class on the clicked submenu link
    //       window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  //   //   }
  // });
  
    
    //   subMenuEl.forEach((link) => {
    //     if (link.text === "all" || link.text === "top selling" || link.text === "search") {
    //         // For the link that goes to all , set its behavior to scroll to top when clicked
    //         link.addEventListener('click', (event) => {
    //             event.preventDefault(); // Prevent the default behavior of the link
    //             window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    //         });
    //     } else if (link.text === "new" || link.text === "pending" || link.text === "history") {
    //       // For the link that goes to "/about", set its behavior to scroll to top when clicked
    //       link.addEventListener('click', (event) => {
    //           event.preventDefault(); // Prevent the default behavior of the link
    //           window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    //       });
    //   } else if (link.text === "profile" || link.text === "sign out") {
    //     // For the link that goes to "/about", set its behavior to scroll to top when clicked
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault(); // Prevent the default behavior of the link
    //         window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    //     });
    // }
    // });


  

// Part 5: Adding Submenu Interaction


// console.log(sub_Links);