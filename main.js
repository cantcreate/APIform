document.getElementById("btn").addEventListener("click", fetchData);

async function fetchData() {
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

    const productname = data.products[0];
    document.getElementById("id").value = productname.id;
    document.getElementById("productname").value = productname.title;
    document.getElementById("price").value = productname.price;
  } catch (error) {
    document.querySelector("#tablue tbody").innerHTML = `
     ${error.message}
    `;
  }
}
