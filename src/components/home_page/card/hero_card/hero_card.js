// Import the CSS file for styling the hero card component
import "./hero_card.css";

// Select the element with the class 'hero-card' where the hero card content will be inserted
const cardContent = document.querySelector('.hero-card');

// Define the hero card content in an array of objects
const heroCard = [
    {
        img_desktop: "src/public/nike_Image/nke_images/nike play_at_peak_desktop_image.jpeg",
        img_mobile: "src/public/nike_Image/nke_images/nike_play_at_peak_mobile.jpg",
        header: "PLAY AT YOUR PEAK",
        sub_header: "From 5.20-5.24, shop fresh kicks, adventure essentials, and the best of summer style-with exclusive rewards for Nike Members",
        button: "Shop Summer Event",
    }
];

// Iterate over the heroCard array and generate HTML for each card item
heroCard.forEach(item => {
    // Append the generated HTML to the selected cardContent element
    cardContent.innerHTML += `
    <div class="hero-card">
        <a href="#">
            <!-- Mobile version of the hero card image -->
            <img
                src="${item.img_mobile}"
                class="card-img-top"
                id="card-img-top-mobile"
                alt="Mobile version of the hero card image"
                draggable="false"
            />
        </a>
        <a href="#">
            <!-- Desktop version of the hero card image -->
            <img
                src="${item.img_desktop}"
                class="card-img-top"
                id="card-img-top-desktop"
                alt="Desktop version of the hero card image"
                draggable="false"
            />
        </a>
        <div class="card-body">
            <!-- Header text of the hero card -->
            <p class="card-text" id="jordan">
                ${item.header}
            </p>
            <!-- Sub-header text of the hero card -->
            <p class="card-text" id="exclusive">
                ${item.sub_header}
            </p>
        </div>
        <!-- Button for the hero card -->
        <button type="button" class="btn btn-dark">
            ${item.button}
        </button>
    </div>
    `;
});
