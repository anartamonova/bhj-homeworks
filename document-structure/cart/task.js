const products = document.querySelectorAll(".product");

products.forEach((item) =>  {
  const controlInc = item.querySelector(".product__quantity-control_inc");
  const controlDec = item.querySelector(".product__quantity-control_dec");
  let quantityValue = item.querySelector(".product__quantity-value");

  controlInc.addEventListener("click", () => {
    quantityValue.textContent++;
    });

  controlDec.addEventListener("click", () => {
    quantityValue.textContent--;
    if (quantityValue.textContent < 1){
      quantityValue.textContent = 1;
    } 
   });

  const addProduct = item.querySelector(".product__add");

  addProduct.addEventListener("click", (e) => {
    let cartProducts = document.querySelector(".cart__products");
    let productId = item.dataset.id;
    let productImg = item.querySelector("img").getAttribute('src');
    let cartQuantity = quantityValue.textContent;
    let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
    let cart = cartProduct.find((el) => el.dataset.id === productId);
      if (cart){
        cart.querySelector(".cart__product-count").innerHTML = Number(cart.querySelector(".cart__product-count").innerHTML) + Number(cartQuantity);
        } else {
          cartProducts.insertAdjacentHTML("beforeend", 
            `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImg}">
            <div class="cart__product-count">${cartQuantity}</div>
            </div>`);}
  });
});