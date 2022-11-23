// Hamburger e Menu Secundário

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

// Menu dos Produtos

const prodAnchor1 = document.getElementById("prod-anchor-1");
const prodAnchor2 = document.getElementById("prod-anchor-2");

const prodContainer1 = document.getElementById("prod-container-1");
const prodCard1 = document.getElementById("prod-card-1");

let cardWidth = prodCard1.clientWidth;

prodAnchor1.addEventListener("click", (event) => {
    event.preventDefault();
    prodContainer1.scrollLeft += cardWidth;
});

prodAnchor2.addEventListener("click", (event) => {
    event.preventDefault();
    prodContainer1.scrollLeft -= cardWidth;
});

// Menu de Soluções

const myAnchor1 = document.getElementById("anchor-1");
const myAnchor2 = document.getElementById("anchor-2");
const myAnchor3 = document.getElementById("anchor-3");
const myAnchor4 = document.getElementById("anchor-4");

const scrollContainer = document.querySelector(".video-container");

myAnchor1.addEventListener("click", (event) => {
    // Prevents the link's default behavior:
    event.preventDefault();

    // Gives us the string: "#my-element":
    const link = $(myAnchor1).attr("href");

    // Finds the corresponding element:
    const element = document.querySelector(link);

    if (element) {
        const leftPosition = element.offsetLeft;

        // This line actually takes us to the element:
        document.getElementById("video-container-01").scrollLeft = leftPosition;
        console.log("feito");
    } else {
        console.log("não feito");
    }
});

myAnchor2.addEventListener("click", (event) => {
    // Prevents the link's default behavior:
    event.preventDefault();

    // Gives us the string: "#my-element":
    const link = $(myAnchor2).attr("href");

    // Finds the corresponding element:
    const element = document.querySelector(link);

    if (element) {
        const leftPosition = element.offsetLeft;

        // This line actually takes us to the element:
        document.getElementById("video-container-01").scrollLeft = leftPosition;
        console.log("feito");
    } else {
        console.log("não feito");
    }
});

myAnchor3.addEventListener("click", (event) => {
    // Prevents the link's default behavior:
    event.preventDefault();

    // Gives us the string: "#my-element":
    const link = $(myAnchor3).attr("href");

    // Finds the corresponding element:
    const element = document.querySelector(link);

    if (element) {
        const leftPosition = element.offsetLeft;

        // This line actually takes us to the element:
        document.getElementById("video-container-01").scrollLeft = leftPosition;
        console.log("feito");
    } else {
        console.log("não feito");
    }
});

myAnchor4.addEventListener("click", (event) => {
    // Prevents the link's default behavior:
    event.preventDefault();

    // Gives us the string: "#my-element":
    const link = $(myAnchor4).attr("href");

    // Finds the corresponding element:
    const element = document.querySelector(link);

    if (element) {
        const leftPosition = element.offsetLeft;

        // This line actually takes us to the element:
        document.getElementById("video-container-01").scrollLeft = leftPosition;
        console.log("feito");
    } else {
        console.log("não feito");
    }
});
