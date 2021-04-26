import "./form.css";

//ANCHOR form validation
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", validateForm);
function validateForm() {
  submitButton.elements.forEach(elem => {
    if (elem.checkValidity) return;
    elem.placeholder = validationMessage;
  })
}