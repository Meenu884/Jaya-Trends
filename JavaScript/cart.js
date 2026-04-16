// js/cart.js

const CART_KEY = "jaya_trends_cart";

function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage();
  updateCartCount();
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    const idx = cart.indexOf(item);
    cart.splice(idx, 1);
  }
  saveCart(cart);
  renderCartPage();
  updateCartCount();
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalQty;
}

// Cart page rendering
function renderCartPage() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const cart = getCart();
  if (!cart.length) {
    container.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
    document.getElementById("subtotal-amount").textContent = "₹0";
    document.getElementById("discount-amount").textContent = "- ₹0";
    document.getElementById("total-amount").textContent = "₹0";
    return;
  }

  let subtotal = 0;
  let mrpTotal = 0;

  const rows = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";
    const lineMRP = product.mrp * item.qty;
    const linePrice = product.price * item.qty;
    mrpTotal += lineMRP;
    subtotal += linePrice;

    return `
      <div class="cart-item">
        <div class="cart-item-left">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="cart-item-right">
          <h3>${product.name}</h3>
          <p class="product-brand">${product.brand}</p>
          <p class="product-code">Code: ${product.code}</p>
          <div class="cart-price-row">
            <span class="price">₹${product.price}</span>
            <span class="mrp">₹${product.mrp}</span>
          </div>
          <div class="cart-qty-row">
            <button onclick="changeQty(${product.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${product.id}, 1)">+</button>
            <button class="cart-remove" onclick="removeFromCart(${product.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = rows.join("");

  const discount = mrpTotal - subtotal;
  document.getElementById("subtotal-amount").textContent = `₹${subtotal}`;
  document.getElementById("discount-amount").textContent = discount > 0 ? `- ₹${discount}` : "- ₹0";
  document.getElementById("total-amount").textContent = `₹${subtotal}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartPage();
});