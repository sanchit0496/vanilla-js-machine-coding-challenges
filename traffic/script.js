const redBulb = document.getElementById('red')
const yellowBulb = document.getElementById('yellow')
const greenBulb = document.getElementById('green')

const colors = ['red', 'yellow', 'green']

let activeIndex = 0;

(() => {
  setInterval(() => {
    
    const bulbs = document.querySelectorAll('.bulb')
    bulbs.forEach((item) => {
      if(item.classList.contains(colors[activeIndex])){
        item.style.backgroundColor = (colors[activeIndex]);
      }else{
        item.style.backgroundColor = 'white';
      }
    })
    if(activeIndex === colors.length -1){
      activeIndex = 0
    }else{
      activeIndex++
    }

  }, 1000);
})()
