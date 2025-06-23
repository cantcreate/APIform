window.onload = firstload;

function myfunction() {
  const entry = {
    id: document.getElementById("id").value,
    producttitle: document.getElementById("productname").value,
    price: document.getElementById("price").value,
  };

  const entries = JSON.parse(localStorage.getItem("formentries")) || [];
  entries.push(entry);
  localStorage.setItem("formentries", JSON.stringify(entries));

  addToTable(entry);

  document.getElementById("form").reset();
}
function firstload() {
  const saved = JSON.parse(localStorage.getItem("formentries")) || [];
  saved.forEach((entry) => addToTable(entry));
}
function addToTable(entry) {
  const table = document
    .getElementById("tablue")
    .getElementsByTagName("tbody")[0];
  const row = table.insertRow(0);

  row.insertCell(0).textContent = entry.id;
  row.insertCell(1).textContent = entry.producttitle;
  row.insertCell(2).textContent = entry.price;
}

document.getElementById("getApiData").addEventListener("click", fetchApiData);
async function fetchApiData() {
  const getApiData = document.getElementById("getApiData");
  getApiData.disabled = true;
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const tbody = document.querySelector("#tablue tbody");

    data.products.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    document.querySelector("#tablue tbody").innerHTML = `
     ${error.message}
    `;
  }
}
