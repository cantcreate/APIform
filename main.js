document.getElementById("btn").addEventListener("click", fetchData);
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const product = data.products[0];
    const newrow = `<tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.price}</td>
    </tr>
    `;
    document.querySelector("#tablue tbody").innerHTML = newrow;

    document.getElementById("id").value = product.id;
    document.getElementById("productname").value = product.title;
    document.getElementById("price").value = product.price;
  } catch (error) {
    document.querySelector("#tablue tbody").innerHTML = `${error.message}`;
  }
}
