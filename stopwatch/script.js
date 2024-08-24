const form = document.getElementById("main-div");

const secInput = document.getElementById("input-sec");
const secInputErrorSpan = document.getElementById("inputSecError");

let sec = "";

const onlyNumbers = (e) => {
  let temp = e.target.value.replace(/[^0-9]/g, '')
  e.target.value = temp
  return temp
}

secInput.addEventListener("input", (e) => {
  sec = onlyNumbers(e)
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
  
  if (sec.length === 0) {
    setError(secInput, secInputErrorSpan, "Input cannot be empty");
    errorArr.push('Input cannot be empty');
  } else {
    removeError(secInput, secInputErrorSpan);
  }
  
  return errorArr;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = validateForm();
  if (err.length === 0) {
    console.log('call the API here');
  }
});
