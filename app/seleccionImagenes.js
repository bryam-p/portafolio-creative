let container__img = document.querySelectorAll('.container__img')
let content_columns = document.querySelector('.content__columns')
let links = document.querySelectorAll('.link__filter')


const categoriaACtual = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            links.forEach((link__active) => {
                link__active.classList.remove('link__active')
            })
            e.currentTarget.classList.toggle('link__active')
            const categoria__actual = e.currentTarget.id
            container__img.forEach((imagenes) => {
                if (categoria__actual === 'all') {
                    imagenes.style.display = 'flex'
                } else if (imagenes.classList.contains(categoria__actual)) {
                    imagenes.style.display = 'flex'
                } else {
                    imagenes.style.display = 'none'
                }
            })
        })
    })
}

categoriaACtual()

let btn__grid = document.querySelector('.btn__primary')
let btn__full = document.querySelector('.btn__second')

btn__full.addEventListener('click', () => {
    content_columns.classList.add('flex__wrap')
    container__img.forEach((imagenes) => {
        imagenes.classList.add('full__img')
    })
})

btn__grid.addEventListener('click', () => {
    content_columns.classList.remove('flex__wrap')
})