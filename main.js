document.getElementById("getApiData").addEventListener("click", fetchApiData);

async function fetchApiData() {
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
