let cart = [];

// Add product to cart
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartCount();
  alert(`${productName} has been added to your cart!`);
  renderCartItems();
}

// Update the cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Show/Hide cart section
function toggleCart() {
  const cartSection = document.getElementById("cart-section");
  cartSection.style.display =
    cartSection.style.display === "block" ? "none" : "block";
}

// Render list of cart items
function renderCartItems() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – ₹${item.price}`;
    cartItemsList.appendChild(li);
  });
}
