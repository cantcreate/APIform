const storage = "product";
document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(storage);
  if (savedData) {
    const data = JSON.parse(savedData);
    displayProducts(data);
  }
});
document.getElementById("getApiData").addEventListener("click", fetchApiData);

async function fetchApiData() {
  const getApi = document.getElementById("getApiData");
  getApi.disabled = true;

  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    localStorage.setItem(storage, JSON.stringify(data.products));
    displayProducts(data.products);
  } catch (error) {
    document.querySelector("#tablue tbody").innerHTML = `
        ${error.message}
      `;
  }
}
function displayProducts(products) {
  const tbody = document.querySelector("#tablue tbody");
  tbody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
      `;
    tbody.appendChild(row);
  });
}

document.getElementById("deleteproduct").onclick = function () {
  localStorage.clear();
  location.reload();
};
