const form = document.getElementById("main-div");
const instalmentDiv = document.getElementById("instalment-calculated");

const principalInput = document.getElementById("principal-container");
const rateInput = document.getElementById("rate");
const timePeriodInput = document.getElementById("time-period");

const principalErrorSpan = document.getElementById("principalError");
const rateErrorSpan = document.getElementById("rateError");
const timePeriodErrorSpan = document.getElementById("timePeriodError");

let principal = "";
let rate = "";
let timePeriod = "";

const allowOnlyNumbers = (e) => {
    let retVal = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = retVal
    return retVal
};

principalInput.addEventListener("input", (e) => {
    principal = allowOnlyNumbers(e);
});

rateInput.addEventListener("input", (e) => {
  rate = allowOnlyNumbers(e);
});

timePeriodInput.addEventListener("input", (e) => {
  timePeriod = allowOnlyNumbers(e);
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
    removeError(timePeriodInput, timePeriodErrorSpan);
  }

  return errorArr;
};

function calculateEMI(principal, annualInterestRate, loanTenureYears) {
    // Convert annual interest rate to a monthly interest rate
    let monthlyInterestRate = annualInterestRate / (12 * 100);

    // Convert loan tenure in years to months
    let numberOfMonths = loanTenureYears * 12;

    let instalment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
              (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    return isNaN(instalment) ? 0.00 : instalment.toFixed(2); 
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = validateForm();
  console.log(err);
  if (err.length === 0) {
    console.log('call the API here');
    const instalmentAmount = calculateEMI(principal, rate, timePeriod)
    instalmentDiv.textContent = `Your instalment comes up to be Rs ${instalmentAmount}`
  }
});
