/* ==========================================
   DATOS DE PRODUCTOS
   ========================================== */
const products = [
  {
    id: 1,
    title: "Chaqueta Cyber Hoodie",
    category: "Outerwear",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    desc: "Hoodie de corte oversized confeccionado en algodón pesado de 400g. Gráficos en serigrafía reflectante."
  },
  {
    id: 2,
    title: "Pantalón Cargo Tactical",
    category: "Pantalones",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80",
    desc: "Pantalón técnico con múltiples bolsillos funcionales y ajuste en tobillos. Resistente al agua."
  },
  {
    id: 3,
    title: "Camiseta Heavyweight Neon",
    category: "T-Shirts",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    desc: "Camiseta básica con corte boxy fit y detalle bordado de alta densidad en el pecho."
  },
  {
    id: 4,
    title: "Sneakers Urban Runner",
    category: "Calzado",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    desc: "Zapatillas con suela volumétrica de alta respuesta y materiales mixtos transpirables."
  }
];

/* ==========================================
   1. RENDERIZADO DINÁMICO DE PRODUCTOS
   ========================================== */
const productGrid = document.getElementById('productGrid');

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = products.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <div class="card-img-container">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="card-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="card-footer">
          <span class="price">${product.price}</span>
          <span style="color: var(--accent-color); font-weight: 800;">+</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   2. MODAL INTERACTIVO DE PRODUCTOS
   ========================================== */
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

function openModal(id) {
  const product = products.find(p => p.id === id);
  if(!product || !modal) return;

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalPrice').textContent = product.price;
  document.getElementById('modalDesc').textContent = product.desc;

  modal.classList.add('active');
}

if (closeModal) {
  closeModal.addEventListener('click', () => modal.classList.remove('active'));
}

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

/* ==========================================
   3. SELECTOR DE TEMA (Modo Oscuro / Claro)
   ========================================== */
const themeToggleBtn = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const htmlElement = document.documentElement;

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    themeLabel.textContent = newTheme === 'dark' ? 'Modo Oscuro' : 'Modo Claro';
    themeToggleBtn.firstChild.textContent = newTheme === 'dark' ? '🌙 ' : '☀️ ';
  });
}

// Cargar catálogo al inicio
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});