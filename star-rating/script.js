const NUMBER_OF_STARS = 5
const starHolder = document.getElementById('star-holder')

for (let i = 0; i < NUMBER_OF_STARS; i++) {
    const star = document.createElement('div')
    star.innerHTML = '*'
    star.classList.add('star-icon', `${i}`)

    starHolder.appendChild(star)
}

const stars = document.querySelectorAll('.star-icon')

console.log(stars)

const updateStar = (index) => {
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
        if(i <= index){
            stars[i].style.color = 'orange'
        }
    }
}

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateStar(index)
    })
})
