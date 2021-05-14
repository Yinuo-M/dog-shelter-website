import "./common.css";
import "focus-visible";

//ANCHOR setting up the service worker

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then((registration) => {
				console.log("SW registered: ", registration);
			})
			.catch((registrationError) => {
				console.log("SW registration failed: ", registrationError);
			});
	});
}

//ANCHOR setting up HMR for the dev server.
if (module.hot) {
	module.hot.accept();
}

//ANCHOR hamburger menu
const menuButton = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
menuButton.addEventListener("click", toggleMenu);
function toggleMenu() {
	if (navList.classList.contains("menu-open")) {
		closeMenu();
	} else {
		openMenu();
	}
}

function openMenu() {
	navList.classList.add("transition");
	navList.classList.add("menu-open");
	navList.setAttribute("aria-hidden", "false");
	navList.querySelectorAll("a").forEach((a) => (a.tabIndex = 0));
	menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
	navList.classList.remove("menu-open");
	navList.setAttribute("aria-hidden", "true");
	navList.querySelectorAll("a").forEach((a) => (a.tabIndex = -1));
	menuButton.setAttribute("aria-expanded", "false");
}

function restorePhoneMenu() {
	if (document.documentElement.clientWidth <= 580) {
		navList.setAttribute("aria-hidden", "true");
		navList.querySelectorAll("a").forEach((a) => (a.tabIndex = -1));
		menuButton.setAttribute("aria-expanded", "false");
	}
}

window.addEventListener("DOMContentLoaded", restorePhoneMenu);
