const NUMBER_OF_STARS = 5
const starHolder = document.getElementById('star-holder')

for (let i = 0; i < NUMBER_OF_STARS; i++) {
    const star = document.createElement('div')
    star.innerHTML = '*'
    star.classList.add('star-icon')

    starHolder.appendChild(star)
}


