let quantityValue = document.getElementsByClassName("product__quantity-value");
let controlInc = document.getElementsByClassName("product__quantity-control_inc");
let controlDec = document.getElementsByClassName("product__quantity-control_dec");

for (let i = 0; i < quantityValue.length; i++) {
    controlInc[i].addEventListener("click", () => {
        quantityValue[i].textContent++;
    })
    controlDec[i].addEventListener("click", () => {
        quantityValue[i].textContent--;

        if (quantityValue[i].textContent < "1") {
            quantityValue[i].textContent = "1"
        }
    });
    let addProduct = document.getElementsByClassName("product__add");
    addProduct[i].addEventListener("click", () => {
        if (quantityValue[i].textContent === "0") {
            return;
        } 
        let cartProducts = document.querySelector(".cart__products");
        let product = document.getElementsByClassName("product");
        for (let n = 0; n < cartProducts.children.length; n++) {
            if (cartProducts.children[n].dataset.id === product[i].dataset.id) {
                let cartProductsCount = cartProducts.children[n].querySelector(".cart__product-count").textContent;
                let newProductValue = Number(cartProductsCount) + Number(quantityValue[n].textContent);

                return cartProducts.children[n].querySelector('.cart__product-count').textContent = newProductValue;
            }
        }
        cartProducts.insertAdjacentHTML("beforeend", `
            <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantityValue[i].textContent}</div>
            </div>
            `);
    })
};