const incBtn = document.getElementById('inc-button')
const decBtn = document.getElementById('dec-button')

const currentCountDiv = document.getElementById('current-count')
let count = 0
currentCountDiv.textContent = count

const counterChange = (type) => {
  type === 'inc' ? count++ :  count--
  currentCountDiv.textContent = count
}

incBtn.addEventListener('click', () => counterChange('inc'))
decBtn.addEventListener('click', () => counterChange('dec'))