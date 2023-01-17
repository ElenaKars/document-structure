'use strict'

const cartProducts = document.querySelector('.cart__products')
const productControlsEls = document.querySelectorAll(
  '.product__quantity-control',
)
const addToCart = document.querySelectorAll('.product__add')

productControlsEls.forEach((control) => {
  control.addEventListener('click', (e) => {
    let currentControl = e.target
    let parentProduct = e.target.closest('.product')
    let counter = parentProduct.querySelector('.product__quantity-value')
    if (currentControl.classList.contains('product__quantity-control_inc')) {
      counter.innerText = ++counter.innerText
    }
    if (currentControl.classList.contains('product__quantity-control_dec')) {
      if (parseInt(counter.innerText) < 2) {
        return false
      }
      counter.innerText = --counter.innerText
    }
  })
})

addToCart.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let currentBtn = e.target
    let parentEl = currentBtn.closest('.product')
    const productInfo = {
      id: parentEl.dataset.id,
      imgSrc: parentEl.querySelector('.product__image').getAttribute('src'),
      quantity: parentEl.querySelector('.product__quantity-value').innerText,
    }
    const itemInCart = cartProducts.querySelector(
      `[data-id = "${productInfo.id}"]`,
    )
    if (itemInCart) {
      const counterEL = itemInCart.querySelector('.cart__product-count')
      counterEL.innerText =
        parseInt(counterEL.innerText) + parseInt(productInfo.quantity)
    } else {
      const cartItemHTML = `<div class="cart__product" data-id="${productInfo.id}">
            <img class="cart__product-image" src="${productInfo.imgSrc}" />
            <div class="cart__product-count">${productInfo.quantity}</div>
          </div>`

      cartProducts.insertAdjacentHTML('beforeend', cartItemHTML)
    }
  })
})
