let menu = document.querySelector(".hambuger-menu");
let removeMenu = document.querySelector(".remove-menu");
let pageMenu = document.querySelector(".page-menu");
menu.addEventListener("click", showMenu);
removeMenu.addEventListener("click", hideMenu);

function showMenu() {
    menu.style.display = "none";
    removeMenu.style.display = "inline";
    pageMenu.style.display = "block";
    console.log("yooo Whatsapp")
}
function hideMenu() {
    menu.style.display = "inline";
    menu.style.textAlign = "right";
    removeMenu.style.display = "none";
    pageMenu.style.display = "none";
}
console.log("hello world!!");

