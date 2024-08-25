const toggleBtn = document.getElementById("toggle-theme");
const bodyContainer = document.getElementById("body-container");
const card = document.querySelector(".card");
const intro = document.querySelector(".intro");
const desc = document.querySelector(".desc");

toggleBtn.addEventListener("click", () => {
  bodyContainer.classList.toggle("dark");

  if(bodyContainer.classList.contains('dark')){
    localStorage.setItem('theme', 'dark')
  }else{
    localStorage.setItem('theme', 'light')
  }

  card.classList.toggle("dark");
  intro.classList.toggle("dark");
  desc.classList.toggle("dark");
});

(() => {
    let currentTheme = localStorage.getItem('theme')   
    if(currentTheme === null){
        localStorage.setItem('theme', 'light')
        bodyContainer.classList.add('light')
        card.classList.add('light')
        intro.classList.add('light')
        desc.classList.add('light')
    }
    if(currentTheme === 'dark'){
        bodyContainer.classList.add('dark')
        card.classList.add('dark')
        intro.classList.add('dark')
        desc.classList.add('dark')
    }
})()