//TODO make something that remember the position on the list to come back to.

import "./list.css";
import dogList from "../../dogs";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

//ANCHOR loading and back to top buttons

const loadButton = document.querySelector(".load-more-button");
const backToTopButton = document.querySelector(".back-to-top-button");
loadButton.addEventListener("click", loadMore);
backToTopButton.addEventListener("click", scrollToTop);

let displayList = [...dogList].sort((a, b) => (a.name > b.name ? 1 : -1));
let listStatus = {
	done: false,
	index: 0,
	itemsPerPage: 5,
};

populatePage(displayList);

function populatePage(list) {
	const startIndex = listStatus.index;
	const endIndex = listStatus.index + listStatus.itemsPerPage;
	const listToInsert = list.slice(startIndex, endIndex);

	listToInsert.forEach((dog) => {
		const previewList = document.getElementById("dogs");
		const html = `
		<li class="dog-preview">
		<a class="preview-anchor" href="${dog.name}-profile.html">
		<img
			width="200"
			height="200"
			src="assets/dogs/dog${dog.index}/${dog.name}-profile.jpg"
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
		</a>
	</li>
		`;

		previewList.insertAdjacentHTML("beforeend", html);
	});

	const numOnScreen = document.querySelectorAll(".dog-preview").length;

	listStatus.done = list.length === numOnScreen ? true : false;
	listStatus.index += listStatus.itemsPerPage;

	toggleButtons();
	const sorryMessage = document.getElementById("error");
	sorryMessage.style.display = "none";
}

function loadMore() {
	populatePage(displayList);
	const dogs = document.querySelectorAll(".preview-anchor");
	const firstNewDog = dogs[listStatus.index - listStatus.itemsPerPage];
	firstNewDog.focus({ preventScroll: true });
}

function toggleButtons() {
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
	const firstDog = document.querySelector(".preview-anchor");
	firstDog.focus({ preventScroll: true });
}

//ANCHOR the filter

const sortByInput = document.getElementById("sort");
const regionInput = document.getElementById("region");
const minAgeInput = document.getElementById("min-age");
const maxAgeInput = document.getElementById("max-age");
const applyButton = document.querySelector(".apply");
applyButton.addEventListener("click", sortDogs);
applyButton.addEventListener("click", jumpToTop);
applyButton.addEventListener("click", autoSave);

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

	if (displayList.length === 0) {
		noMatchFound();
		return;
	}

	populatePage(displayList);
}

function resetStatus() {
	listStatus = {
		done: false,
		index: 0,
		itemsPerPage: 5,
	};
}

function noMatchFound() {
	const sorryMessage = document.getElementById("error");
	sorryMessage.style.display = "block";

	loadButton.style.display = "none";
	backToTopButton.style.display = "none";
}

function jumpToTop() {
	window.scrollTo(0, 0);
}

//ANCHOR filter autosave
applyButton.addEventListener("click", autoSave);
document.addEventListener("DOMContentLoaded", applyFilter);

function applyFilter() {
	if (!sessionStorage.getItem("sortBy")) return;

	sortByInput.value = sessionStorage.getItem("sortBy");
	regionInput.value = sessionStorage.getItem("region");
	minAgeInput.value = sessionStorage.getItem("minAge");
	maxAgeInput.value = sessionStorage.getItem("maxAge");
	sortDogs();
}

function autoSave() {
	sessionStorage.setItem("sortBy", sortByInput.value);
	sessionStorage.setItem("region", regionInput.value);
	sessionStorage.setItem("minAge", minAgeInput.value);
	sessionStorage.setItem("maxAge", maxAgeInput.value);
}

//ANCHOR filter bar
const filterButton = document.querySelector(".filter-toggle");
const filterWrapper = document.querySelector(".filter-wrapper");
filterButton.addEventListener("click", toggleFilter);

function toggleFilter() {
	if (filterWrapper.classList.contains("filter-open")) {
		closeFilter();
	} else {
		openFilter();
	}
}

function openFilter() {
	filterWrapper.classList.add("filter-open");
	filterButton.classList.add("filter-open");
	filterWrapper.setAttribute("aria-hidden", "false");
	filterWrapper
		.querySelectorAll("input, button, select")
		.forEach((a) => (a.tabIndex = 0));
}

function closeFilter() {
	filterWrapper.classList.remove("filter-open");
	filterButton.classList.remove("filter-open");
	filterWrapper.setAttribute("aria-hidden", "true");
	filterWrapper
		.querySelectorAll("input, button, select")
		.forEach((a) => (a.tabIndex = -1));
}

window.addEventListener("resize", restoreFilter);
function restoreFilter() {
	restorePCFilter();
	restorePhoneFilter();
}

function restorePCFilter() {
	if (document.documentElement.clientWidth > 660) {
		filterWrapper.classList.remove("filter-open");
		filterWrapper.setAttribute("aria-hidden", "false");
		filterWrapper
			.querySelectorAll("input, button, select")
			.forEach((a) => (a.tabIndex = 0));
	}
}

function restorePhoneFilter() {
	if (document.documentElement.clientWidth <= 660) {
		filterWrapper.setAttribute("aria-hidden", "true");
		filterWrapper
			.querySelectorAll("input, button, select")
			.forEach((a) => (a.tabIndex = -1));
	}
}

window.addEventListener("DOMContentLoaded", restorePhoneFilter);
