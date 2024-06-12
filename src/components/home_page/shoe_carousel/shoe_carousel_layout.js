// Import the shoeCarousel function from the shoe_carousel module
import { shoeCarousel } from "./shoe_carousel";

// Import the CSS file for styling the shoe carousel
import "./shoe_carousel.css"

// Define the list of carousel items, each with an image path
const carouselList = [
    {
        img: "src/public/nike_Image/nike_shoe/air-force-1-07-womens-shoes-b19lqD.png",
    },
    {
        img: "src/public/nike_Image/nike_shoe/nike-just-Air-Max.jpg"
    },
    {
        img: "src/public/nike_Image/nike_shoe/nike-just-Blazer.jpg"
    },
    {
        img: "src/public/nike_Image/nike_shoe/nike-just-do-it (1).jpg"
    },
    {
        img: "src/public/nike_Image/nike_shoe/nike-shoe-Air-joradan.jpg"
    }
]

// Generate HTML for each carousel item
const carouselHTML = carouselList.map((item) =>
    `
        <img
            src="${item.img}"
            draggable="false"
        />
    `
).join(""); // Join the array of HTML strings into a single string

// Select the element with the class 'shoe-carousel' and set its innerHTML
document.querySelector('.shoe-carousel').innerHTML = `
    <div class="shop-by-classic">
        <h1 id="shop-by-classics">
            SHOP BY CLASSICS
        </h1>
    </div>
    <div class="shoe-carousel">
        <div class="wrapper">
            <!-- Left navigation button -->
            <img
                class="left-button"
                id="left"
                src="src/public/nike_Image/nike_logo/arrow.png"
            />

            <!-- Container for carousel images -->
            <div class="carousel-img">
                ${carouselHTML}
            </div>

            <!-- Right navigation button -->
            <img
                class="right-button"
                id="right"
                src="src/public/nike_Image/nike_logo/arrow.png"
            />
        </div>
    </div>
`

// Initialize the shoeCarousel functionality on the carousel element
shoeCarousel(document.querySelector('.shoe-carousel'));
