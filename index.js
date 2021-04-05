//ANCHOR homepage background images

//ANCHOR buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("mousedown", cancelDefault)
);

function cancelDefault(e) {
	e.preventDefault();
}