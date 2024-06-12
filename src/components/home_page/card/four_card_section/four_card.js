// Import the CSS file for styling
import "./four_card.css";

// Select the container element where the cards will be added
const cardContent = document.querySelector('.card-container');

// Array of card objects containing image paths, headers, and sub-headers
const cards = [
    {
        img: "/Users/anbschool0016/Desktop/nike-test/Deploy_Nike_page/src/public/nike_Image/nke_images/nike_hiking.jpeg",
        header: "Latest From Jordan",
        sub_header: "Air Jordan 11 Retro Low OG",
    },
    {
        img: "/nike_Image/nke_images/fitness.jpg",
        header: "Make Your Move",
        sub_header: "Fitness Essentials",
    },
    {
        img: "src/public/nike_Image/nke_images/running.jpg",
        header: "Nike Trails GR11 Pack",
        sub_header: "Featuring the Zegama 2",
    },
    {
        img: "src/public/nike_Image/nke_images/golfman.jpg",
        header: "Brooks Koepka's Picks",
        sub_header: "AF1s, Golf Shoes & More",
    }
];

// Loop through each card object and create the HTML structure for each card
cards.forEach(item => {
    // Append the card's HTML structure to the container's innerHTML
    cardContent.innerHTML += `
        <div class="column">
            <div class="overlay">
                <p>${item.header}</p>
                <p class="big-paragraph">${item.sub_header}</p>
                <button type="button" class="btn btn-light" id="grit-shop-btn">shop</button>
            </div>
            <img src="${item.img}" draggable="false"/>
        </div>
    `;
});
