window.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll('.card'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.shop');


    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');


        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')


        heading.textContent = 'Your cart'
        closeBtn.textContent = "X"


        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    }
    createCart()
    console.log(createCart())
    let cart = document.querySelector('.cart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.cart-field')


    openBtn.addEventListener('click', function () {
        cart.style.display = "block"
    })
    closeBtn.addEventListener('click', function () {
        cart.style.display = 'none'
    })



    buttons.forEach(function (item, i) {
        item.addEventListener('click', function () {
            let cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button');


            btn.remove()
            field.appendChild(cloneItem)
            products[i].remove()

        })
    })

})

let menu = document.querySelector("#menu-bar")
let navbar = document.querySelector('.navbar')


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})