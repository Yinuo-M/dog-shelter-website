import "./form.css";
import "focus-visible";
import dogList from "../../dogs";

//ANCHOR form validation
const form = document.querySelector(".adopt-form");
const formControls = Array.from(form.elements);
formControls.forEach((elem) => elem.addEventListener("change", validateField));

function validateField() {
	if (this.checkValidity()) return;

	this.parentElement.classList.add("invalid");
	this.setAttribute("aria-invalid", "true");
	this.addEventListener("change", updateValidation);

	const oldMessage = this.parentElement.querySelector(".invalid-message");
	if (oldMessage) oldMessage.remove();
	const message = document.createElement("p");
	message.style.width = this.offsetWidth + "px";
	this.parentElement.append(message);

	message.textContent = this.validationMessage;
	message.classList.add("invalid-message");
	message.id = this.name + "-message";
	this.setAttribute("aria-describedby", message.id);

	this.addEventListener("change", updateValidation);
}

function updateValidation() {
	if (this.checkValidity()) {
		this.parentElement.classList.remove("invalid");
		if (this.nextElementSibling) this.nextElementSibling.remove();
		this.removeAttribute("aria-describedby");
		this.removeAttribute("aria-invalid");
	}
}

const experienceDropdown = document.querySelector("#experience");
const historyTextarea = document.querySelector("#history").parentElement;
experienceDropdown.addEventListener("change", toggleQuestion);
function toggleQuestion() {
	if (this.value === "yes") {
		historyTextarea.classList.remove("hidden");
	} else {
		historyTextarea.classList.add("hidden");
	}
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	console.log("hi");
	const formValidity = formControls.every((elem) => elem.checkValidity());
	if (!formValidity) {
		e.preventDefault();
		formControls.forEach((elem) => validateField.call(elem));
		const firstInvalid = formControls.find((elem) => !elem.checkValidity());
		firstInvalid.focus();
	}
	window.onbeforeunload = null;
}

//ANCHOR set date input min and max
const dateInput = document.getElementById("start-date");
const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1);
const date = now.getDate();

let nextYear, nextMonth, nextDate;

if (month == 12) {
	nextYear = year + 1;
	nextMonth = 1;
} else {
	nextYear = year;
	nextMonth = month + 1;
}

if (nextMonth == 2 && nextYear%4 == 0) {
	nextDate = (date > 29)? date - 29 : date;
	nextMonth = (date > 29)? nextMonth + 1 : nextMonth;
} else if (nextMonth == 2 && nextYear%4 != 0) {
	nextDate = (date > 28)? date - 28 : date;
	nextMonth = (date > 28)? nextMonth + 1 : nextMonth;
} else {
	nextDate = date;
}



const min = `${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
const max = `${nextYear}-${nextMonth.toString().padStart(2, "0")}-${nextDate.toString().padStart(2, "0")}`;
dateInput.min = min;
dateInput.max = max;

//ANCHOR check before user leaves
window.onbeforeunload = function () {
	return false;
};

//ANCHOR Generating dog list
const dogDropDown = document.querySelector("#dog");
dogList.forEach((dog) => {
	const option = document.createElement("option");
	option.textContent = `${dog.name} (${dog.age}-year-old ${dog.breed})`;
	option.value = dog.name;
	dogDropDown.append(option);
});
