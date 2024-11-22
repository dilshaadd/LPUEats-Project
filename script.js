let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${cartItem.item} - ₹${cartItem.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Thank you for your order! Your total is ₹${total}.`);
    cart = [];
    total = 0;
    renderCart();
}
