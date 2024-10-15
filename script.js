let productCounter = 1; // To track the number of products

function addProduct() {
    const productList = document.getElementById('product-list');

    // Create a new product div
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Set inner HTML for the new product
    productDiv.innerHTML = `
        <img src="product${productCounter}.jpg" alt="Product ${productCounter}">
        <h3>Product ${productCounter}</h3>
        <p>Brief description of Product ${productCounter}. Highlight its features and benefits.</p>
        <p>Price: $${(19.99 + (productCounter - 1) * 10).toFixed(2)}</p>
        <button onclick="addToCart('Product ${productCounter}')">Add to Cart</button>
    `;

    // Append the new product div to the product list
    productList.appendChild(productDiv);
    productCounter++;
}

function addToCart(productName) {
    alert(productName + ' added to cart!');
};