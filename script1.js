document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".container-cart-products");
    const cartIcon = document.querySelector(".icon-cart");
    const productCounter = document.getElementById("contador-productos");
    const totalAmount = document.querySelector(".total-pagar");
    const addButtons = document.querySelectorAll(".btn-add-cart");

    let cart = [];

    // Mostrar/Ocultar carrito
    cartIcon.addEventListener("click", () => {
        cartContainer.classList.toggle("hidden-cart");
    });

    // Añadir producto al carrito
    addButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const productElement = event.target.closest(".item");
        const productTitle = productElement.querySelector("h2").textContent;
        const productPrice = productElement.querySelector(".price").textContent.replace("$", "");

        const existingProductIndex = cart.findIndex(product => product.title === productTitle);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity++;
        } else {
            cart.push({
                title: productTitle,
                price: parseFloat(productPrice),
                quantity: 1
            });
        }

        updateCart();
    }

    function updateCart() {
        // Actualizar el contador de productos
        productCounter.textContent = cart.reduce((total, product) => total + product.quantity, 0);

        // Actualizar el contenido del carrito
        const cartProductContainer = cartContainer.querySelector(".cart-product");
        cartProductContainer.innerHTML = "";
        cart.forEach(product => {
            const productHTML = `
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">$${product.price}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" data-title="${product.title}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
            `;
            cartProductContainer.innerHTML += productHTML;
        });

        // Actualizar el total a pagar
        totalAmount.textContent = `$${cart.reduce((total, product) => total + product.price * product.quantity, 0)}`;

        // Añadir evento para eliminar productos
        cartProductContainer.querySelectorAll(".icon-close").forEach(icon => {
            icon.addEventListener("click", removeFromCart);
        });
    }

    function removeFromCart(event) {
        const productTitle = event.target.getAttribute("data-title");
        const productIndex = cart.findIndex(product => product.title === productTitle);

        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }

        updateCart();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".container-cart-products");
    const cartIcon = document.querySelector(".icon-cart");
    const productCounter = document.getElementById("contador-productos");
    const totalAmount = document.querySelector(".total-pagar");
    const addButtons = document.querySelectorAll(".btn-add-cart");

    let cart = [];

    // Mostrar/Ocultar carrito
    cartIcon.addEventListener("click", () => {
        cartContainer.classList.toggle("hidden-cart");
    });

    // Añadir producto al carrito
    addButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const productElement = event.target.closest(".item");
        const productTitle = productElement.querySelector("h2").textContent;
        const productPrice = productElement.querySelector(".price").textContent.replace("$", "");

        const existingProductIndex = cart.findIndex(product => product.title === productTitle);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity++;
        } else {
            cart.push({
                title: productTitle,
                price: parseFloat(productPrice),
                quantity: 1
            });
        }

        updateCart();
    }

    function updateCart() {
        // Actualizar el contador de productos
        productCounter.textContent = cart.reduce((total, product) => total + product.quantity, 0);

        // Actualizar el contenido del carrito
        const cartProductContainer = cartContainer.querySelector(".cart-product");
        cartProductContainer.innerHTML = "";
        cart.forEach(product => {
            const productHTML = `
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">$${product.price}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" data-title="${product.title}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
            `;
            cartProductContainer.innerHTML += productHTML;
        });

        // Actualizar el total a pagar
        totalAmount.textContent = `$${cart.reduce((total, product) => total + product.price * product.quantity, 0)}`;

        // Añadir evento para eliminar productos
        cartProductContainer.querySelectorAll(".icon-close").forEach(icon => {
            icon.addEventListener("click", removeFromCart);
        });
    }

    function removeFromCart(event) {
        const productTitle = event.target.getAttribute("data-title");
        const productIndex = cart.findIndex(product => product.title === productTitle);

        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }

        updateCart();
    }
});

