let dec = document.querySelectorAll('.product__quantity-control_dec')
let inc = document.querySelectorAll('.product__quantity-control_inc')
let value = document.querySelectorAll('.product__quantity-value')
let addCart = document.querySelectorAll('.product__add')
let cart = document.querySelector('.cart__products')
let productImage = document.querySelectorAll('.product__image')
let dataId = document.querySelectorAll('[data-id]')

for (let i = 0; i < dataId.length; i++) {
  dec[i].onclick = function() {
    if (value[i].textContent > 1) {
      value[i].textContent--
    }
  }
  inc[i].onclick = function() {
    if (value[i].textContent) {
      value[i].textContent++
    }
  }
  addCart[i].onclick = function() {
    const productId = i + 1;
    let existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`)
    if (existingProduct) {
      const existingCount = existingProduct.querySelector('.cart__product-count');
      const newValue = parseInt(existingCount.textContent) + parseInt(value[i].textContent);
      existingCount.textContent = newValue;
    } else {
      let cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.setAttribute('data-id', productId);

      let productImageCopy = productImage[i].cloneNode(true);
      productImageCopy.classList.remove('product__image');
      productImageCopy.classList.add('cart__product-image');
      cartProduct.appendChild(productImageCopy);
      
      let cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = value[i].textContent;

      cartProduct.appendChild(cartProductCount);
      cart.appendChild(cartProduct);
    }
  }
}