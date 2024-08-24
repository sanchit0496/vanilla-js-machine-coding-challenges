const form = document.getElementById("main-div");

const principalInput = document.getElementById("principal-container");
const rateInput = document.getElementById("rate");
const timePeriodInput = document.getElementById("time-period");

const principalErrorSpan = document.getElementById("principalError");
const rateErrorSpan = document.getElementById("rateError");
const timePeriodErrorSpan = document.getElementById("timePeriodError");

let principal = "";
let rate = "";
let timePeriod = "";

principalInput.addEventListener("change", (e) => {
    principal = e.target.value;
});

rateInput.addEventListener("change", (e) => {
  rate = e.target.value;
});

timePeriodInput.addEventListener("change", (e) => {
  timePeriod = e.target.value;
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
  
  if (principal.length === 0) {
    setError(principalInput, principalErrorSpan, "Principal cannot be empty");
    errorArr.push('Principal cannot be empty');
  } else {
    removeError(principalInput, principalErrorSpan);
  }

  if (rate.length === 0) {
    setError(rateInput, rateErrorSpan, "Rate cannot be empty");
    errorArr.push('Rate cannot be empty');
  } else {
    removeError(rateInput, rateErrorSpan);
  }

  if (timePeriod.length === 0) {
    setError(timePeriodInput, timePeriodErrorSpan, "Time Period cannot be empty");
    errorArr.push('Time Period cannot be empty');
  }
  else {
    removeError(emailInput, emailErrorSpan);
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
