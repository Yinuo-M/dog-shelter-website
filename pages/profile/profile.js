import "../../common.css";
import "./profile.css";
import debounce from "lodash-es/debounce";
import "focus-visible";

//ANCHOR animation

const doginalities = document.querySelector(".doginalities-list");
const adoptButton = document.querySelector(".adopt");

window.addEventListener("scroll", debounce(slideUp, 100));

function slideUp() {
	[doginalities, adoptButton].forEach((elem) => {
		const threshold = document.documentElement.clientHeight;
		const top = elem.getBoundingClientRect().top;
		if (top < threshold) {
			elem.classList.add("show");
		}
	});
}

//ANCHOR Carousel
initiateCarousel();

function initiateCarousel() {
	const activeImage = document.querySelector(".dog-image.active");
	if (activeImage.nextElementSibling) {
		activeImage.nextElementSibling.classList.add("next");
	}
	if (activeImage.previousElementSibling) {
		activeImage.previousElementSibling.classList.add("prev");
	}
}

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
prevButton.addEventListener("click", handleCarousel);
nextButton.addEventListener("click", handleCarousel);

function handleCarousel() {
	const prevImage = document.querySelector(".dog-image.prev");
	const nextImage = document.querySelector(".dog-image.next");

	if (this === prevButton && prevImage) {
		resetCarousel();
		prevImage.classList.add("active");
	} else if (this === nextButton && nextImage) {
		resetCarousel();
		nextImage.classList.add("active");
	} else return;

	updateDots();

	initiateCarousel();
}

function resetCarousel() {
	const prev = document.querySelector(".prev");
	const next = document.querySelector(".next");
	const active = document.querySelector(".dog-image.active");

	if (prev) {
		prev.classList.remove("prev");
	}
	if (next) {
		next.classList.remove("next");
	}
	if (active) {
		active.classList.remove("active");
	}
}

function updateDots() {
	const activeImage = document.querySelector(".dog-image.active");
	const images = Array.from(document.querySelectorAll(".dog-image"));
	const index = images.indexOf(activeImage);

	const dots = Array.from(document.querySelectorAll(".dot"));
	dots.forEach((dot) => dot.classList.remove("active"));
	dots[index].classList.add("active");
}

//ANCHOR touch event for carousel
const carousel = document.querySelector(".image-wrapper");
const carouselHammer = new Hammer(carousel);
carouselHammer.on("swipeleft", () => {
	prevButton.click();
});
carouselHammer.on("swiperight", () => {
	nextButton.click();
});

//ANCHOR focus for carousel
prevButton.addEventListener("focus", trackFocus);
nextButton.addEventListener("focus", trackFocus);
prevButton.addEventListener("blur", trackFocus);
nextButton.addEventListener("blur", trackFocus);
function trackFocus(e) {
	const carouselButtons = document.querySelectorAll(".carousel-button");
	const dots = document.querySelector(".dots");
	if (e.type === "focus") {
		carouselButtons.forEach((button) => button.classList.add("full-opacity"));
		dots.classList.add("full-opacity");
	} else {
		carouselButtons.forEach((button) =>
			button.classList.remove("full-opacity")
		);
		dots.classList.remove("full-opacity");
	}
}
