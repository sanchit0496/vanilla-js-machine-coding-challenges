const form = document.getElementById("contact-form");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById('password');

const fNameErrorSpan = document.getElementById("fNameError");
const lNameErrorSpan = document.getElementById("lNameError");
const emailErrorSpan = document.getElementById("emailError");
const passwordErrorSpan = document.getElementById("passwordError");

let fName = "";
let lName = "";
let email = "";
let password  = "";

firstNameInput.addEventListener("change", (e) => {
  fName = e.target.value;
});

lastNameInput.addEventListener("change", (e) => {
  lName = e.target.value;
});

emailInput.addEventListener("change", (e) => {
  email = e.target.value;
});

passwordInput.addEventListener("change", (e) => {
  password = e.target.value;
});

const setError = (inputElement, errorSpan, errorMessage) => {
  errorSpan.textContent = errorMessage;
  inputElement.style.border = '1px solid red';
};

const removeError = (inputElement, errorSpan) => {
  errorSpan.textContent = '';
  inputElement.style.border = '1px solid black';
};

const validateForm = () => {
  let errorArr = [];
  
  if (fName.length === 0) {
    setError(firstNameInput, fNameErrorSpan, "First Name cannot be empty");
    errorArr.push('First Name cannot be empty');
  } else {
    removeError(firstNameInput, fNameErrorSpan);
  }

  if (lName.length === 0) {
    setError(lastNameInput, lNameErrorSpan, "Last Name cannot be empty");
    errorArr.push('Last Name cannot be empty');
  } else {
    removeError(lastNameInput, lNameErrorSpan);
  }

  if (email.length === 0) {
    setError(emailInput, emailErrorSpan, "Email cannot be empty");
    errorArr.push('Email cannot be empty');
  } 
  else if(!email.includes('@')){
    setError(emailInput, emailErrorSpan, "Incorrect Format");
    errorArr.push('Incorrect Format');
  }
  else {
    removeError(emailInput, emailErrorSpan);
  }

  if (password.length === 0) {
    setError(passwordInput, passwordErrorSpan, "Password cannot be empty");
    errorArr.push('password cannot be empty');
  }
  if (password.length <= 5  || password.length >= 12) {
    setError(passwordInput, passwordErrorSpan, "Password must be between 5 and 12 characters long");
    errorArr.push('password cannot be empty');
  }
  else {
    removeError(passwordInput, passwordErrorSpan);
  }
  
  return errorArr;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = validateForm();
  console.log(err);
  if (err.length === 0) {
    console.log('call the API here');
  }
});
