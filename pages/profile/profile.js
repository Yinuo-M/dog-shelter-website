import "../../common.css";
import "./profile.css";
import { debounce } from "lodash";

const doginalities = document.querySelector(".doginalities");
const adoptButton = document.querySelector(".adopt");

window.addEventListener("scroll", debounce(slideUp, 100));

function slideUp() {
	[doginalities, adoptButton].forEach((elem) => {
    const threshold = document.documentElement.clientHeight - elem.offsetHeight * 0.1;
    const top = elem.getBoundingClientRect().top;
		if (
			top < threshold
		) {
			elem.classList.add("show");
		}
	});
}
