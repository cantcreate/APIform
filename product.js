const storage = "product";

window.onload = function () {
  const addBtn = document.getElementById("addproductdata");
  if (addBtn) {
    addBtn.onclick = function () {
      const entry = {
        id: document.getElementById("id").value,
        title: document.getElementById("productname").value,
        price: document.getElementById("price").value,
      };

      const products = JSON.parse(localStorage.getItem("product")) || [];
      products.unshift(entry);
      localStorage.setItem("product", JSON.stringify(products));

      document.getElementById("form").reset();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 100);
    };
  }

  const table = document.getElementById("tablue");
  if (table) {
    firstload();
  }
};

function firstload() {
  const saved = JSON.parse(localStorage.getItem("product")) || [];
  saved.forEach((entry) => addToTable(entry));
}

function addToTable(entry) {
  const tableBody = document
    .getElementById("tablue")
    .getElementsByTagName("tbody")[0];
  const row = tableBody.insertRow(0);

  row.insertCell(0).textContent = entry.id;
  row.insertCell(1).textContent = entry.title;
  row.insertCell(2).textContent = entry.price;
}
