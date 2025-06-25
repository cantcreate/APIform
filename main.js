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

  products.forEach((products, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${products.id}</td>
        <td>${products.title}</td>
        <td>${products.price}</td>
        <td><button onclick="deleteRow(${index})" id="iddeletebutton"><i class="fa-solid fa-trash"></i></button></td>

      `;
    tbody.appendChild(row);
  });
}
function deleteRow(index) {
  const products = JSON.parse(localStorage.getItem(storage)) || [];
  products.splice(index, 1);
  localStorage.setItem(storage, JSON.stringify(products));
  displayProducts(products);
}
document.getElementById("deleteproduct").onclick = function () {
  localStorage.clear();
  location.reload();
};
