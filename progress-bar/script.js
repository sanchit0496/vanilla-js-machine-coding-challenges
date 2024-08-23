const currentProgressBar = document.getElementById('current-progress')

let initialProgress = 10;
currentProgressBar.style.width = `${initialProgress}%`

window.addEventListener('load', () => {
  const intv = setInterval(() => {
    initialProgress = initialProgress + 10
    currentProgressBar.style.width = `${initialProgress}%`

    if(initialProgress >= 100){
      clearInterval(intv)
    }
    }, 500);
  
})

