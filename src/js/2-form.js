const formData = {
    email: "",
    message: "",
}
const formKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput);
populateText();

const email = form.elements.email;
const message = form.elements.message;

function handleSubmit(event) {
    event.preventDefault();
    
    if (formData.email.trim() === "" || formData.message.trim() === "") {
     alert("Fill please all fields")   
    } else {
    localStorage.removeItem(formKey);
    console.log(formData);  
    }
    form.reset();
}

function handleInput(event) {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem(formKey, JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem(formKey));
    
    if (data) {
    email.value = data.email;
    message.value = data.message;
    }
}