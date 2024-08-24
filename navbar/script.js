var currentWidth = window.innerWidth;
const navbar = document.querySelector('.navbar')
const hambHolder = document.getElementById('hamb-holder')
const handle = document.getElementById('hamburger-handle')
const hamburgerItem = document.getElementById('hamburger-item')

const hamburgerItems = document.getElementById('hamburger-items')
const displayNavbar = (currWidth) => {
    console.log(currWidth)
    if(currWidth < 460){
        navbar.style.display = 'none'
        hambHolder.style.display = 'block'

    }else{   
        hambHolder.style.display = 'none'
        navbar.style.display = 'block'

    }
}
window.addEventListener('load', () => {
    currentWidth = window.innerWidth;
    displayNavbar(currentWidth)
});

window.addEventListener('resize', () => {
    currentWidth = window.innerWidth;
    displayNavbar(currentWidth)
});

handle.addEventListener('click', ()  => {

    if(hamburgerItems.style.display === 'block'){
        hamburgerItems.style.display = 'none'
    }else{
        hamburgerItems.style.display = 'block'
    }
})

hamburgerItem.addEventListener('click', () => {
    hamburgerItems.style.display = 'none'
})