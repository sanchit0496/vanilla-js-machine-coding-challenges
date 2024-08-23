const hourHolder = document.getElementById('hours');
const minsHolder = document.getElementById('mins');
const secondsHolder = document.getElementById('seconds');

window.addEventListener('load', () => {
  setInterval(() => {
    const now = new Date();

    let currentHour = now.getHours();
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();
    
    let hourRotation = (currentHour % 12) * 30 + (currentMin / 60) * 30;
    let minuteRotation = currentMin * 6;
    let secondRotation = currentSec * 6;

    hourHolder.style.transform = `rotate(${hourRotation}deg)`;
    minsHolder.style.transform = `rotate(${minuteRotation}deg)`;
    secondsHolder.style.transform = `rotate(${secondRotation}deg)`;
  }, 1000);
});
