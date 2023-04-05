// Banner

let imgWrap = document.querySelector('.img-wrap img')
let listDivImg = document.querySelectorAll('.list-img div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let currentIndex = 0
setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src
}

next.addEventListener('click', () => {
    if(currentIndex == listDivImg.length -1) {
        currentIndex = 0
    } else
        currentIndex++
    setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
    if(currentIndex == 0) {
        currentIndex = listDivImg.length - 1
    } else
        currentIndex--
    setCurrent(currentIndex)
})

// Start ordering
let ordering = document.querySelector('.header-nav-right div')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    Math.ceil(scrolled) > 120
    ? ordering.classList.add('active')
    : ordering.classList.remove('active')
})

// Menu
let bttMenu = document.querySelector('.btt__menu')
let menuU = document.querySelector('.menu')
let closeMenu = document.querySelector('.close__menu')


bttMenu.addEventListener('click', () => {
    menuU.classList.add('menu__active')
})

closeMenu.addEventListener('click', () => {
    menuU.classList.remove('menu__active')
})

