const dropdownContainer = document.getElementById("dropdown");
const OPTIONS = [
  "Sydney",
  "Tokyo",
  "New York",
  "London",
  "Paris",
  "Toronto",
  "Rio de Janeiro",
  "Cape Town",
  "Berlin",
  "Buenos Aires",
];

const createList = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const listItem = document.createElement('div')
    listItem.classList.add('list-item')
    listItem.textContent = element
    dropdownContainer.appendChild(listItem)
  }
}

window.addEventListener('load', () => createList(OPTIONS))