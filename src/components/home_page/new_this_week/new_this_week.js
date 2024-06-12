// Import the CSS file for styling the "New This Week" component
import "./new_this_week.css";

// Select the element with the class 'new-this-week' where the content will be inserted
const newWeek = document.getElementsByClassName('new-this-week')[0];
const newWeekImage = document.getElementsByClassName('just-img')[0];
// Define the content for "New This Week" in an array of objects
const newWeekContent = [
	{
		header: "NEW THIS WEEK",
		first_button: "Shop Men's New Arrivals",
		second_button: "Shop Women's New Arrivals",
	}
];

// Define the content for "new this week image"
const newWeekImageContent = [
	{
		img_desktop: "src/public/nike_Image/nke_images/ball.png",
		img_mobile: "src/public/nike_Image/nke_images/manstanding.png"
	}
]

// Iterate over the newWeekContent array and generate HTML for the content
newWeekContent.forEach(item => {
	// Append the generated HTML to the selected newWeek element
	newWeek.innerHTML += `
        <h1 id="new-this-week">
            ${item.header}
        </h1>
        <div class="shop-button-for-new-feed">
            <button type="button" class="btn" id="new-feed-shop-button">
                ${item.first_button}
            </button>
            <button type="button" class="btn" id="new-feed-shop-button">
                ${item.second_button}
            </button>
        </div>
    `;
});

newWeekImageContent.forEach(item => {
	newWeekImage.innerHTML += `
		<img
			src="${item.img_desktop}"
			id="man_standing_desktop"
			draggable="false"
		/>
		<img
			src="${item.img_mobile}"
			id="man_standing"
			draggable="false"
		/>
	`
})