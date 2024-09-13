const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = SccrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', { delay: 200, origin: top })
sr.reveal('.hero-img', { delay: 450, origin: top })
sr.reveal('.icons', { delay: 300, origin: left })
sr.reveal('.scrool-down', { delay: 600, origin: right })