const container = document.getElementById('content-container')
const sentinel = document.getElementById('sentinel')

const BATCH_SIZE = 25
let count = 0

const generateItems = () => {
    for (let i = 0; i <= BATCH_SIZE; i++) {
        const item = document.createElement('div')
        item.textContent = `Div ${count}`
        item.classList.add('item', `Div${count}`)
        container.appendChild(item)
        count++
    }
}


window.addEventListener('load', () => {
    generateItems()
})

const intersectionObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting){
        generateItems()
    }
   })
})

intersectionObserver.observe(sentinel)