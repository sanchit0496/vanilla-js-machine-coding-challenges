const tabContainer = document.getElementById('tab-container')
const contentContainer = document.getElementById('content-container')

const tabArray =  new Array(5).fill().map((_, index) => index+1)

tabArray.forEach((index) => {
  const tabDiv = document.createElement('div')
  tabDiv.classList.add('tab')
  tabDiv.textContent = `Tab ${index}`

  tabContainer.appendChild(tabDiv)
})