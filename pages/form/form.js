import "./form.css";

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
}
