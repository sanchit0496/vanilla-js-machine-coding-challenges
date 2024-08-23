const hourHolder = document.getElementById('hours')
const minsHolder = document.getElementById('mins')
const secondsHolder = document.getElementById('seconds')

const dateHolder = document.getElementById('date')
const monthHolder = document.getElementById('month')
const yearHolder = document.getElementById('year')
const dayHolder = document.getElementById('day')



window.addEventListener('load', () => {
  setInterval(() => {
    dateHolder.textContent = new Date().getDate()
    monthHolder.textContent = new Date().getMonth()
    yearHolder.textContent = new Date().getFullYear()
    dayHolder.textContent = new Date().getDay()
   
    hourHolder.textContent = new Date().getHours()
    minsHolder.textContent = new Date().getMinutes()
    secondsHolder.textContent = new Date().getSeconds()
  }, 1000);

})