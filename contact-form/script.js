const form = document.getElementById("contact-form");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const feedbackInput = document.getElementById('feedback')

const fNameErrorSpan = document.getElementById("fNameError");
const lNameErrorSpan = document.getElementById("lNameError");
const emailErrorSpan = document.getElementById("emailError");
const feedbackErrorSpan = document.getElementById("feedbackError");

let fName = "";
let lName = "";
let email = "";
let feedback  = "";

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

const validateForm = () => {
  let errorArr = []
  if (fName.length === 0) {
    fNameErrorSpan.textContent = "First Name cannot be empty";
    firstNameInput.style.border = "1px solid red";
    errorArr.push('First Name cannot be empty')
    errorArr.p
  } else {
    fNameErrorSpan.textContent = "";
    firstNameInput.style.border = "1px solid black";
  }
  if (lName.length === 0) {
    lNameErrorSpan.textContent = "Last Name cannot be empty";
    lastNameInput.style.border = "1px solid red";
    errorArr.push('Last Name cannot be empty')

  } else {
    lNameErrorSpan.textContent = "";
    lastNameInput.style.border = "1px solid black";
  }

  if (email.length === 0) {
    emailErrorSpan.textContent = "Email cannot be empty";
    emailInput.style.border = "1px solid red";
    errorArr.push('Email cannot be empty')

  } 
  else if(!email.includes('@')){
    emailErrorSpan.textContent = "Incorrect Format";
    emailInput.style.border = "1px solid red";
    errorArr.push('Incorrect Format')

  }
  else {
    emailErrorSpan.textContent = "";
    emailInput.style.border = "1px solid black";
  }

  if (feedback.length === 0) {
    feedbackErrorSpan.textContent = "Feedback cannot be empty";
    feedbackInput.style.border = "1px solid red";
    errorArr.push('Format cannot be empty')

  } else {
    feedbackErrorSpan.textContent = "";
    feedbackInput.style.border = "1px solid black";
  }
  return errorArr
};

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let err = validateForm();
  console.log(err)
  if(err.length === 0){
    console.log('call the api here ')
  }

});
