const TAB_COUNT = 5
const tabContainer = document.getElementById('tab-container')
const contentContainer = document.getElementById('content-container')

const tabArray =  new Array(TAB_COUNT).fill().map((_, index) => index)
const descriptionArray = new Array(TAB_COUNT).fill().map((_, index) => {
  return `Content of ${index}`
})

let activeTab = 0
contentContainer.textContent = descriptionArray[activeTab]

tabArray.forEach((item, index) => {
  const tabDiv = document.createElement('div')
  index === 0 ? tabDiv.classList.add('tab', 'active') : tabDiv.classList.add('tab')
  tabDiv.textContent = `Tab ${item}`

  tabDiv.addEventListener('click', () => {
    let divs = document.querySelectorAll('.tab')
    divs.forEach((item) => item.classList.remove('active'))
    tabDiv.classList.add('active')
    activeTab = index

    contentContainer.textContent = descriptionArray[activeTab]

  })
  tabContainer.appendChild(tabDiv)
})


