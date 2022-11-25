// Imagem de Carregamento
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

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
const prodCard2 = document.getElementById("prod-card-2");
const prodCard3 = document.getElementById("prod-card-3");

let cardWidth = prodCard1.clientWidth;

prodAnchor1.addEventListener("click", (event) => {
    event.preventDefault();
    prodContainer1.scrollLeft += cardWidth;
});

prodAnchor2.addEventListener("click", (event) => {
    event.preventDefault();
    prodContainer1.scrollLeft -= cardWidth;
});

// Card Flip

const flip_btn1 = document.getElementById("flip-btn-1");
const flip_btn2 = document.getElementById("flip-btn-2");
const flip_btn3 = document.getElementById("flip-btn-3");

flip_btn1.addEventListener("click", (event) => {
    event.preventDefault();
    prodCard1.classList.toggle("card-active");
});

flip_btn2.addEventListener("click", (event) => {
    event.preventDefault();
    prodCard2.classList.toggle("card-active");
});

flip_btn3.addEventListener("click", (event) => {
    event.preventDefault();
    prodCard3.classList.toggle("card-active");
});

// Menu de Soluções

const myAnchor1 = document.getElementById("anchor-1");
const myAnchor2 = document.getElementById("anchor-2");
const myAnchor3 = document.getElementById("anchor-3");
const myAnchor4 = document.getElementById("anchor-4");

let anchor1_open = true;
let anchor2_open = false;
let anchor3_open = false;
let anchor4_open = false;

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

        if (anchor1_open === false) {
            myAnchor1.classList.add("solution-active");
            anchor1_open = true;
        }

        myAnchor2.classList.remove("solution-active");
        anchor2_open = false;
        myAnchor3.classList.remove("solution-active");
        anchor3_open = false;
        myAnchor4.classList.remove("solution-active");
        anchor4_open = false;

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

        if (anchor2_open === false) {
            myAnchor2.classList.add("solution-active");
            anchor2_open = true;
        }

        myAnchor1.classList.remove("solution-active");
        anchor1_open = false;
        myAnchor3.classList.remove("solution-active");
        anchor3_open = false;
        myAnchor4.classList.remove("solution-active");
        anchor4_open = false;

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

        if (anchor3_open === false) {
            myAnchor3.classList.add("solution-active");
            anchor3_open = true;
        }

        myAnchor1.classList.remove("solution-active");
        anchor1_open = false;
        myAnchor2.classList.remove("solution-active");
        anchor2_open = false;
        myAnchor4.classList.remove("solution-active");
        anchor4_open = false;

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

        if (anchor4_open === false) {
            myAnchor4.classList.add("solution-active");
            anchor4_open = true;
        }

        myAnchor1.classList.remove("solution-active");
        anchor1_open = false;
        myAnchor2.classList.remove("solution-active");
        anchor2_open = false;
        myAnchor3.classList.remove("solution-active");
        anchor3_open = false;

        console.log("feito");
    } else {
        console.log("não feito");
    }
});
