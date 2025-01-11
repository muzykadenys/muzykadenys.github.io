async function getCardsInfo() {
  const index = parseInt(localStorage.getItem("product"));

  const response = await fetch("cards.json");
  const data = await response.json();
  const product = data.cards; // Access the array inside the object

  const card = document.getElementsByClassName("product-card")[0]; // Select the first card

  if (card) {
    card.innerHTML = `
    <img class="smCatalog-card-el-img" src="${product[index].img}" alt="${product[index].title}" />
    <p class="smCatalog-card-el-title">${product[index].title}</p>
    <p class="smCatalog-card-el-desc">${product[index].desc}</p>
    <p class="smCatalog-card-el-price">${product[index].price}</p>
  `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getCardsInfo();
});
