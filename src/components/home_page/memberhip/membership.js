// Import the CSS file for styling the membership component
import "./membership.css";

// Select the element with the class 'nike-container' where the membership content will be inserted
const membership = document.querySelector('.nike-container');
const membershipHeader = document.querySelector('.nike-membership-header')

// Define the membership list content in an array of objects
const membershipList = [
    {
        header: "Mother's Day",
        sub_header: "Gifts That Celebrate Mom",
        button: "shop",
        img: "src/public/nike_Image/nke_images/nike_membership-1.jpeg"
    },
    {
        header: "Mother's Day",
        sub_header: "Gifts That Celebrate Mom",
        button: "Move",
        img: "src/public/nike_Image/nke_images/nike_mebership-2.jpeg"
    },
    {
        header: "Mother's Day",
        sub_header: "Gifts That Celebrate Mom",
        button: "Custom",
        img: "src/public/nike_Image/nke_images/nike_membership_3.jpeg"
    }
];

const nikeMembershipHeader = [
    {
        nike_membership_header: "NIKE MEMBERSHIP"
    }
]
nikeMembershipHeader.forEach(item => {
    membershipHeader.innerHTML += `
    <h1 id="nike-membership">
        ${item.nike_membership_header}
    </h1>
    `
})
// Iterate over the membershipList array and generate HTML for each membership item
membershipList.forEach(item => {
    // Append the generated HTML to the selected membership element
    membership.innerHTML += `
        
        <div class="row-nike-membership">
            <div class="column-nike-membership">
                <!-- Overlay text for the membership item -->
                <div class="overlay-nike-membership-text">
                    <p>
                        ${item.header}
                    </p>
                    <p>
                        ${item.sub_header}
                    </p>
                    <!-- Button for the membership item -->
                    <button type="button" class="btn btn-light" id="grit-shop-btn">
                        ${item.button}
                    </button>
                </div>
                <!-- Image for the membership item -->
                <img
                    src="${item.img}"
                    draggable="false"
                />
            </div>
        </div>
    `;
});
