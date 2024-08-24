const dropdownContainer = document.getElementById("dropdown");
const searchBar = document.getElementById('search')
const searchItems = document.getElementById('search-items')  
const selectedOptionDisplay = document.getElementById('selected-option')

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
  searchItems.innerHTML = null
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const listItem = document.createElement('div')
    listItem.classList.add('list-item')
    listItem.textContent = element

    listItem.addEventListener('click', () => {
      selectedOptionDisplay.textContent = `Your Selected City Is ${element}`
    })

    searchItems.appendChild(listItem)
  }
  dropdownContainer.appendChild(searchItems)
}

window.addEventListener('load', () => createList(OPTIONS))

searchBar.addEventListener('keyup', (e) => {
  let searchTerm = e.target.value.toLowerCase()
  let filteredList = OPTIONS.filter((item) => item.toLowerCase().includes(searchTerm))
  createList(filteredList)
  console.log(filteredList)
})