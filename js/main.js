const burger = document.getElementById("burger01");
const nav2 = document.getElementById("nav-secondary-id");
let nav2isOpen = false;

burger.addEventListener("click", () => {
    if (nav2isOpen === false) {
        nav2.classList.add("nav-secondary-active");
        burger.classList.add("burger-active");
        nav2isOpen = true;
        console.log("secondary nav open");
    } else {
        nav2.classList.remove("nav-secondary-active");
        burger.classList.remove("burger-active");
        nav2isOpen = false;
        console.log("secondary nav closed");
    }
});
