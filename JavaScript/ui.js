// js/ui.js
const grid = document.getElementById("products-grid");
const navLinks = document.querySelectorAll(".nav-link");
const chips = document.querySelectorAll(".chip");
const searchInput = document.getElementById("search-input");

function discountPercent(p) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}">
        <span class="badge-discount">${discountPercent(p)}% OFF</span>
      </div>
      <div class="product-body">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-code">Code: ${p.code}</p>
        <div class="price-row">
          <span class="price">₹${p.price}</span>
          <span class="mrp">₹${p.mrp}</span>
        </div>
        <div class="meta-row">
          <span>★ ${p.rating}</span>
          <span>(${p.reviews})</span>
        </div>
        <button class="btn-add" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterByCategory(cat) {
  if (cat === "all") return PRODUCTS;
  if (cat === "offers") return PRODUCTS.filter(p => p.tags.includes("offers"));
  return PRODUCTS.filter(p => p.category === cat);
}

// initial render
renderProducts(PRODUCTS);

// navbar filter
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove("nav-link-active"));
    link.classList.add("nav-link-active");
    const cat = link.dataset.category;
    renderProducts(filterByCategory(cat));
  });
});

// chips filter
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("chip-active"));
    chip.classList.add("chip-active");
    const cat = chip.dataset.category;
    renderProducts(filterByCategory(cat));
  });
});

// search
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q)
  );
  renderProducts(filtered);
});