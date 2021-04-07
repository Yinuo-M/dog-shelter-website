import dogList from "./dogs.js";

//ANCHOR homepage background images

//ANCHOR buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("mousedown", cancelDefault)
);

function cancelDefault(e) {
	e.preventDefault();
}

//ANCHOR list page dog profiles
//TODO make something that remember the position on the list to come back to.
let displayList = [...dogList].sort((a, b) => (a.name > b.name ? 1 : -1));

let listStatus = {
	done: false,
	index: 0,
	itemsPerPage: 5,
};

function populatePage(list) {
	const startIndex = listStatus.index;
	const endIndex = listStatus.index + listStatus.itemsPerPage;
	const listToInsert = list.slice(startIndex, endIndex);

	listToInsert.forEach((dog) => {
		const previewList = document.getElementById("dogs");
		const index = dog.index;
		const html = `
		<li class="dog-preview">
		<img
			width="200"
			height="200"
			src="../../assets/dogs/dog${index}/profile${index}.jpg"
			alt="${dog.alt}";
		/>
		<ul class="info-list">
			<li class="location">${dog.location}</li>
			<li class="name">${dog.name}</li>
			<div class="info-wrapper">
				<li class="other-info">
					<span class="other-label">Age:</span> ${dog.age}
				</li>
				<li class="other-info">
					<span class="other-label">Breed:</span> ${dog.breed}
				</li>
			</div>
		</ul>
	</li>
		`;

		previewList.insertAdjacentHTML("beforeend", html);
	});

	const numOnScreen = document.querySelectorAll(".dog-preview").length;

	listStatus.done = list.length === numOnScreen ? true : false;
	listStatus.index += listStatus.itemsPerPage;
}

const loadButton = document.querySelector(".load-more-button");
const backToTopButton = document.querySelector(".back-to-top-button");
loadButton.addEventListener("click", loadMore);
backToTopButton.addEventListener("click", scrollToTop);

function loadMore() {
	populatePage(displayList);
	if (listStatus.done) {
		loadButton.style.display = "none";
		backToTopButton.style.display = "block";
	} else {
		loadButton.style.display = "block";
		backToTopButton.style.display = "none";
	}
}

function scrollToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const sortByInput = document.getElementById("sort");
const regionInput = document.getElementById("region");
const minAgeInput = document.getElementById("min-age");
const maxAgeInput = document.getElementById("max-age");
sortByInput.addEventListener("change", sortDogs);
regionInput.addEventListener("change", sortDogs);
minAgeInput.addEventListener("change", sortDogs);
maxAgeInput.addEventListener("change", sortDogs);

function sortDogs() {
	const sortBy = sortByInput.value;
	const region = regionInput.value;
	const minAge = minAgeInput.value;
	const maxAge = maxAgeInput.value;

	displayList = dogList.filter((dog) => {
		const regionMatch =
			region === "any" || dog.location.toLowerCase().includes(region);
		if (!regionMatch) return;

		if (dog.age >= minAge && dog.age <= maxAge) return true;
	});

	if (sortBy === "age-ascend") {
		displayList.sort((a, b) => (a.age > b.age ? 1 : -1));
	} else if (sortBy === "age-descend") {
		displayList.sort((a, b) => (a.age < b.age ? 1 : -1));
	}

	const previewList = document.getElementById("dogs");
	previewList.innerHTML = "";
	resetStatus();
	populatePage(displayList);
}

function resetStatus() {
	listStatus = {
		done: false,
		index: 0,
		itemsPerPage: 5,
	};
}

populatePage(displayList);
