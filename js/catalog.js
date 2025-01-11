async function generateCardsFromJSON() {
  const response = await fetch("cards.json");
  const data = await response.json();
  const products = data.cards; // Access the array inside the object

  const container = document.querySelector(".catalog-cards");
  container.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("smCatalog-card-el");
    card.innerHTML = `
          <img class="smCatalog-card-el-img" src="${product.img}" alt="${product.title}" />
          <p class="smCatalog-card-el-title">${product.title}</p>
          <p class="smCatalog-card-el-desc">${product.desc}</p>
          <p class="smCatalog-card-el-price">${product.price}</p>
        `;
    card.addEventListener("click", () => {
      localStorage.setItem("product", index);
      window.location.href = `product.html`;
    });
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateCardsFromJSON();
});
