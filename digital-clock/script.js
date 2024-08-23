const hourHolder = document.getElementById('hours');
const minsHolder = document.getElementById('mins');
const secondsHolder = document.getElementById('seconds');

const dateHolder = document.getElementById('date');
const monthHolder = document.getElementById('month');
const yearHolder = document.getElementById('year');
const dayHolder = document.getElementById('day');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

window.addEventListener('load', () => {
  setInterval(() => {
    const now = new Date();
    
    dateHolder.textContent = now.getDate();
    monthHolder.textContent = monthsOfYear[now.getMonth()];
    yearHolder.textContent = now.getFullYear();
    dayHolder.textContent = daysOfWeek[now.getDay()];
    
    hourHolder.textContent = now.getHours().toString().padStart(2, '0');
    minsHolder.textContent = now.getMinutes().toString().padStart(2, '0');
    secondsHolder.textContent = now.getSeconds().toString().padStart(2, '0');
  }, 1000);
});
