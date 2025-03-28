const productData = [
    { image: "product1.jpg.jpg", name: "Product 1", price: 10 },
    { image: "product2.jpg.jpg", name: "Product 2", price: 20 },
    { image: "product3.jpg.jpg", name: "Product 3", price: 15 },
    { image: "product4.jpg.jpg", name: "Product 4", price: 25 },
  ];
  
  const productGrid = document.querySelector(".product-grid");
  
  productData.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });