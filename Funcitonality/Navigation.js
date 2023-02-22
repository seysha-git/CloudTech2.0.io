const menuBlock = document.querySelector('.menu-block')
const navMenu = document.querySelector('.nav-menu')
const navCross = document.querySelector('.cross')
const body = document.querySelector('body')
const subLinks = document.querySelector('.sub-links')
const arrow = document.querySelector('#arrow')

// Controller for Hamburger and Cross 

navMenu.addEventListener('click', () => {
    menuBlock.classList.toggle('active')

})


navCross.addEventListener('click', () => {
    menuBlock.classList.toggle('active')
})

//Controller for submenu
arrow.addEventListener('click', () => {
    subLinks.classList.toggle('subActive')
})




