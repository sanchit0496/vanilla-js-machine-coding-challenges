const form = document.getElementById("main-div");
const tempDiv = document.getElementById("temp-calculated");

const celciusInput = document.getElementById("celcius-container");

const celciusErrorSpan = document.getElementById("celciusError");

let celcius = "";

const allowOnlyNumbers = (e) => {
    let retVal = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = retVal
    return retVal
};

celciusInput.addEventListener("input", (e) => {
    celcius = allowOnlyNumbers(e);
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
  
  if (celcius.length === 0) {
    setError(celciusInput, celciusErrorSpan, "Celcius cannot be empty");
    
    errorArr.push('Celcius cannot be empty');
  } else {
    removeError(celciusInput, celciusErrorSpan);
  }

  return errorArr;
};

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = validateForm();
  if (err.length === 0) {
    const fTemp = celsiusToFahrenheit(celcius)
    tempDiv.textContent = `Your fahrenheit temperate comes up to be ${fTemp} F`
  }
});
