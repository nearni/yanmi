const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = cart.length;
}

function addToCart(product) {
  const cart = loadCart();
  cart.push(product);
  saveCart(cart);
}

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="images/${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>加入購物車</button>
    `;
    productList.appendChild(div);
  });
}

saveCart(loadCart()); // 初始化數量
renderProducts();
