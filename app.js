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

topMenuEl.addEventListener("click",(e) => {
    e.preventDefault();
    
    if (e.target.tagName === "A"){
        e.target.classList.add("active");
        console.log(e.target)
        // assuming "active" is a class name
    } 
    if(e.target.classList.contains("active")){
        e.target.classList.remove("active")
    }

    menuLinks.forEach((link) => {
        if (link.text === "about" && link.href === "/about"){
            subMenuEl.style.top= 0;
        }else if (link["subLinks"]){
            subMenuEl.style.top= "100%";
        }
    
    })
})

// Part 5: Adding Submenu Interaction

let subCatagories = [
    
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]}

];

subCatagories.forEach((category) => {
        const link = document.createElement("a");

        if(category.text === "catalog"){
            link.innerText = category.subLinks.text;
            link.href = `${category.subLinks.href}`;
            subMenuEl.appendChild(link);

        }else if(category.text === "orders"){
            link.innerText = category.subLinks.text;
            link.href = `${category.subLinks.href}`;
            subMenuEl.appendChild(link);

        }else if(category.text === "account"){
            link.innerText = category.subLinks.text;
            link.href = `${category.subLinks.href}`;
            subMenuEl.appendChild(link);
        }
    })






// console.log(sublinks);