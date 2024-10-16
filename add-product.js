document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const product = {
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
            image: reader.result // Armazenar a URL da imagem
        };

        // Armazenar o produto em localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        alert(`${productName} added!`);
        document.getElementById('product-form').reset(); // Limpa o formulário
    };
    
    if (productImage) {
        reader.readAsDataURL(productImage); // Lê a imagem como URL
    }
});
