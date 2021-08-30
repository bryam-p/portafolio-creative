const data = [
    {
        "id": 1,
        "alt": 'photo 1',
        "url": 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        "category": 'photography'
    },
    {
        "id": 2,
        "alt": 'photo 2',
        "url": 'https://images.unsplash.com/photo-1590102425828-07f1fa2ed1f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'branding'
    },
    {
        "id": 3,
        "alt": 'photo 3',
        "url": 'https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
        "category": 'web'
    },
    {
        "id": 4,
        "alt": 'photo 4',
        "url": 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        "category": 'web'
    },
    {
        "id": 5,
        "alt": 'photo 5',
        "url": 'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=992&q=80',
        "category": 'photography'
    },
    {
        "id": 6,
        "alt": 'photo 6',
        "url": 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80',
        "category": 'branding'
    },
    {
        "id": 7,
        "alt": 'photo 7',
        "url": 'https://images.unsplash.com/photo-1612188842101-f976582906fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        "category": 'branding'
    },
    {
        "id": 8,
        "alt": 'photo 8',
        "url": 'https://images.unsplash.com/photo-1606936632783-c8005fb79a81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'branding'
    },
    {
        "id": 9,
        "alt": 'photo 9',
        "url": 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        "category": 'branding'
    },
    {
        "id": 10,
        "alt": 'photo 10',
        "url": 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        "category": 'app'
    },
    {
        "id": 11,
        "alt": 'photo 11',
        "url": 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'web'
    },
    {
        "id": 12,
        "alt": 'photo 12',
        "url": 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80',
        "category": 'branding'
    },
    {
        "id": 13,
        "alt": 'photo 13',
        "url": 'https://images.unsplash.com/photo-1609428079875-ae186c562aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80',
        "category": 'app'
    },
    {
        "id": 14,
        "alt": 'photo 14',
        "url": 'https://images.unsplash.com/photo-1627243969661-5733a115acc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'photography'
    },
    {
        "id": 15,
        "alt": 'photo 15',
        "url": 'https://images.unsplash.com/photo-1567016209704-e8e5153034ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'app'
    },
    {
        "id": 16,
        "alt": 'photo 16',
        "url": 'https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        "category": 'photography'
    },
    {
        "id": 17,
        "alt": 'photo 17',
        "url": 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        "category": 'branding'
    },
    {
        "id": 18,
        "alt": 'photo 18',
        "url": 'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        "category": 'web'
    },
    {
        "id": 19,
        "alt": 'photo 19',
        "url": 'https://images.unsplash.com/photo-1630246077511-349597f03edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
        "category": 'photography'
    },
    {
        "id": 20,
        "alt": 'photo 20',
        "url": 'https://images.unsplash.com/photo-1630231141061-ec6b1384245e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        "category": 'photography'
    },
    {
        "id": 21,
        "alt": 'photo 21',
        "url": 'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        "category": 'photography'
    },
    {
        "id": 22,
        "alt": 'photo 22',
        "url": 'https://images.unsplash.com/photo-1630254900877-083cac57e0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
        "category": 'photography'
    },
    {
        "id": 23,
        "alt": 'photo 23',
        "url": 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
        "category": 'photography'
    },
    {
        "id": 23,
        "alt": 'photo 23',
        "url": 'https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
        "category": 'photography'
    },
    {
        "id": 24,
        "alt": 'photo 24',
        "url": 'https://images.unsplash.com/photo-1487846698364-db1316e3d140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
        "category": 'app'
    },
    {
        "id": 25,
        "alt": 'photo 25',
        "url": 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        "category": 'app'
    },
    {
        "id": 26,
        "alt": 'photo 26',
        "url": 'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        "category": 'app'
    }
]

const cantidad__datos = data.length

let column__1 = document.querySelector('#column__1')
let column__2 = document.querySelector('#column__2')
let column__3 = document.querySelector('#column__3')
let content__columns = document.querySelector('.content__columns')
let ver__mas = document.querySelector('#ver__mas')


const llenarColumnas = (column, min, max) => {
    let contador = 0;
    data.map(image => {
        contador++
        if (contador > min && contador <= max) {
            column.innerHTML += `<figure class="container__img ${image.category}" id="${image.category}" loading="lazy">
            <img src="${image.url}"
                alt="${image.alt}">
            </figure>
            `
        }
    })
}

class Config {
    constructor(min, max) {
        this.min = min
        this.max = max
    }
    //Rango de imagenes por columna
}

let column1__config = new Config(0, Math.trunc(cantidad__datos / 3))
let column2__config = new Config(Math.trunc(cantidad__datos / 3), Math.trunc((cantidad__datos / 3) * 2))
let column3__config = new Config(Math.trunc((cantidad__datos / 3) * 2), Math.trunc((cantidad__datos / 3) * 3))


llenarColumnas(column__1, column1__config.min, column1__config.max)
llenarColumnas(column__2, column2__config.min, column2__config.max)
llenarColumnas(column__3, column3__config.min, column3__config.max)

ver__mas.addEventListener('click', () => {
    content__columns.classList.add('overflow__visible')
    ver__mas.style.display = 'none'
})






