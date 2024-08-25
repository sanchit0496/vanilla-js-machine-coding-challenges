const form = document.getElementById("contact-form");

const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const feedbackInput = document.getElementById("feedback");

const fNameErrorSpan = document.getElementById("fNameError");
const lNameErrorSpan = document.getElementById("lNameError");
const emailErrorSpan = document.getElementById("emailError");
const feedbackErrorSpan = document.getElementById("feedbackError");

let fName = "";
let lName = "";
let email = "";
let feedback = "";
let count = 0;

const inputElements = [
  firstNameInput,
  lastNameInput,
  emailInput,
  feedbackInput,
];

window.addEventListener("load", () => {
  console.log(inputElements[count]);
});
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  count++;
  if (count === inputElements.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  }
  console.log(inputElements[count]);
});

firstNameInput.addEventListener("change", (e) => {
  fName = e.target.value;
});

lastNameInput.addEventListener("change", (e) => {
  lName = e.target.value;
});

emailInput.addEventListener("change", (e) => {
  email = e.target.value;
});

feedbackInput.addEventListener("change", (e) => {
  feedback = e.target.value;
});

const setError = (inputElement, errorSpan, errorMessage) => {
  errorSpan.textContent = errorMessage;
  inputElement.style.border = "1px solid red";
};

const removeError = (inputElement, errorSpan) => {
  errorSpan.textContent = "";
  inputElement.style.border = "1px solid black";
};

const validateForm = () => {
  let errorArr = [];

  if (fName.length === 0) {
    setError(firstNameInput, fNameErrorSpan, "First Name cannot be empty");
    errorArr.push("First Name cannot be empty");
  } else {
    removeError(firstNameInput, fNameErrorSpan);
  }

  if (lName.length === 0) {
    setError(lastNameInput, lNameErrorSpan, "Last Name cannot be empty");
    errorArr.push("Last Name cannot be empty");
  } else {
    removeError(lastNameInput, lNameErrorSpan);
  }

  if (email.length === 0) {
    setError(emailInput, emailErrorSpan, "Email cannot be empty");
    errorArr.push("Email cannot be empty");
  } else if (!email.includes("@")) {
    setError(emailInput, emailErrorSpan, "Incorrect Format");
    errorArr.push("Incorrect Format");
  } else {
    removeError(emailInput, emailErrorSpan);
  }

  if (feedback.length === 0) {
    setError(feedbackInput, feedbackErrorSpan, "Feedback cannot be empty");
    errorArr.push("Feedback cannot be empty");
  } else {
    removeError(feedbackInput, feedbackErrorSpan);
  }

  return errorArr;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = validateForm();
  console.log(err);
  if (err.length === 0) {
    console.log("call the API here");
  }
});
