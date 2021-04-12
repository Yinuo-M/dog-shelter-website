import "../../common.css";
import "./profile.css";
import debounce from "lodash-es/debounce";
import { update } from "lodash";

//ANCHOR animation

const doginalities = document.querySelector(".doginalities");
const adoptButton = document.querySelector(".adopt");

window.addEventListener("scroll", debounce(slideUp, 100));

function slideUp() {
	[doginalities, adoptButton].forEach((elem) => {
		const threshold =
			document.documentElement.clientHeight - elem.offsetHeight * 0.1;
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
