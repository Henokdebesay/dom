
const mainEl = document.getElementsByTagName("main")[0]; 
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((menu) => {
  const link = document.createElement("a");
  link.innerText = menu.text;
  link.href = `${menu.href}`;
  topMenuEl.appendChild(link);
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
console.log(menuLinks);
