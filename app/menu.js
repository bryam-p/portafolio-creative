let menu__responsive = document.querySelector('.menu__responsive')
let container__menu = document.querySelector('.cont__extra')
let footer = document.querySelector('#footer')

menu__responsive.addEventListener('click', () => {
    container__menu.classList.toggle('active__menu')
})

window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    if (scrolled > 800) {
        footer.style.display = 'block'
    } else {
        footer.style.display = 'none'
    }
});