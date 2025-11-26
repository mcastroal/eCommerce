// Find the container where the products will go
const container = document.getElementById("products-container");

// Get the JSON file
fetch("products.json")
  .then(function(response) {
    return response.json(); // Convert response to JSON
  })
  .then(function(data) {
    // data.products is the array of products
    const products = data.products;

    // Loop through each product
    products.forEach(function(product) {
      // Create a div for the product card
      const card = document.createElement("div");
      card.classList.add("product-card");

      // Create the image
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;

      // Create the product name
      const title = document.createElement("h2");
      title.textContent = product.name;

      // Create the description
      const desc = document.createElement("p");
      desc.textContent = product.description;

      // Create the price
      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = "$" + product.price;

      // Add elements to the card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(price);

      // Add the card to the container
      container.appendChild(card);
    });
  })
  .catch(function(error) {
    console.log("Error loading products:", error);
  });


const hamburger = document.getElementById("hamburger-nav");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav");
});




// Find the container where the best sellers will go
const bestContainer = document.getElementById("best-selling-container");

// Get the JSON file
fetch("products.json")
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    const products = data.products;

    products.forEach(function(product) {

      // Only show best sellers
      if (product.bestSeller) {

        const card = document.createElement("div");
        card.classList.add("product-card");

        // Image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        // Name
        const title = document.createElement("h2");
        title.textContent = product.name;

        // Add to card
        card.appendChild(img);
        card.appendChild(title);

        // Add card to the container
        bestContainer.appendChild(card);
      }
    });
  })
  .catch(function(error) {
    console.log("Error loading best sellers:", error);
  });
