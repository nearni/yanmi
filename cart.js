const cartContainer = document.getElementById("cart-items");

function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index) {
  const cart = loadCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = loadCart();
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>購物車是空的。</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="images/${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeItem(${index})">刪除</button>
    `;
    cartContainer.appendChild(div);
  });
}

document.getElementById("checkout").onclick = () => {
  alert("感謝您的訂購！");
  localStorage.removeItem("cart");
  renderCart();
};

renderCart();
