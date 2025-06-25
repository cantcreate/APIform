window.onload = function () {
  const addBtn = document.getElementById("addproductdata");
  if (addBtn) {
    addBtn.onclick = function () {
      const entry = {
        id: document.getElementById("id").value,
        producttitle: document.getElementById("productname").value,
        price: document.getElementById("price").value,
      };

      const entries = JSON.parse(localStorage.getItem("formentries")) || [];
      entries.push(entry);
      localStorage.setItem("formentries", JSON.stringify(entries));

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
  const saved = JSON.parse(localStorage.getItem("formentries")) || [];
  saved.forEach((entry) => addToTable(entry));
}

function addToTable(entry) {
  const tableBody = document
    .getElementById("tablue")
    .getElementsByTagName("tbody")[0];
  const row = tableBody.insertRow(0);

  row.insertCell(0).textContent = entry.id;
  row.insertCell(1).textContent = entry.producttitle;
  row.insertCell(2).textContent = entry.price;
}
