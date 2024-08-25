const itemHolder = document.getElementById('item-holder')
const NUMBER_OPTIONS = 8

const items = new Array(NUMBER_OPTIONS).fill().map((_, index) => index)
console.log(items)

items.forEach((item) => {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    itemDiv.draggable = true
    itemDiv.textContent = item
    itemHolder.appendChild(itemDiv)
})