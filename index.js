const productsList = [
  {
    id: 1,
    name: "Product A",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 11,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product B",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 20,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product C",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 16,
    quantity: 1,
  },
  {
    id: 4,
    name: "Product D",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 30,
    quantity: 1,
  },
  {
    id: 5,
    name: "Product E",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 46,
    quantity: 1,
  },
  {
    id: 6,
    name: "Product F",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 50,
    quantity: 1,
  },
  {
    id: 7,
    name: "Product G",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 6,
    quantity: 1,
  },
  {
    id: 8,
    name: "Product H",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 100,
    quantity: 1,
  },
  {
    id: 9,
    name: "Product I",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 12,
    quantity: 1,
  },
  {
    id: 10,
    name: "Product J",
    image:
      "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    price: 25,
    quantity: 1,
  },
];

let currentSortOrder = "ascending";
let shoppingCart = [];

// Function to add a product to the cart
function addToCart(product) {
  const existingProduct = shoppingCart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    shoppingCart.push({ ...product });
  }
  updateCart(); // Update the cart display
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  shoppingCart = shoppingCart.filter((item) => item.id !== productId);
  updateCart(); // Update the cart display
}

// Function to calculate the total price of the cart
function calculateTotalPrice() {
  return shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Function to calculate the average price of products in the cart
function calculateAveragePrice() {
  const total = calculateTotalPrice();
  const avg = total / shoppingCart.length;

  return Math.round(avg * 10) / 10;
}

// Function to clear the cart
function clearCart() {
  shoppingCart = [];
  updateCart(); // Update the cart display
}

// Function to update the cart display
function updateCart() {
  // Add code to update the cart display
  displayCart();
}

// create and append product item
function productItem(product) {
  const productContainer = document.getElementById("productsContainer");

  const productElement = document.createElement("div");
  productElement.className = "product-item";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  productElement.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.name;
  productElement.appendChild(name);

  const price = document.createElement("p");
  price.innerHTML = `Price: &#8377;${product.price}`;
  productElement.appendChild(price);

  const quantityContainer = document.createElement("div");
  quantityContainer.className = "quantity-container";

  const decreaseBtn = document.createElement("button");
  decreaseBtn.textContent = "-";
  decreaseBtn.addEventListener("click", () => {
    if (product.quantity > 0) {
      product.quantity -= 1;
      quantity.textContent = product.quantity;
    }
  });
  quantityContainer.appendChild(decreaseBtn);

  const quantity = document.createElement("span");
  quantity.className = "quantity";
  quantity.textContent = product.quantity;
  quantityContainer.appendChild(quantity);

  const increaseBtn = document.createElement("button");
  increaseBtn.textContent = "+";
  increaseBtn.addEventListener("click", () => {
    product.quantity += 1;
    quantity.textContent = product.quantity;
  });
  quantityContainer.appendChild(increaseBtn);

  productElement.appendChild(quantityContainer);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => addToCart(product));
  productElement.appendChild(addToCartBtn);

  productContainer.appendChild(productElement);
}

productsList.forEach((product) => productItem(product));

// Function to display cart details
function displayCart() {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = ""; // Clear previous content

  if (shoppingCart.length === 0) {
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Your cart is empty.";
    emptyCartMessage.style.textAlign = "center";
    cartContainer.appendChild(emptyCartMessage);
  } else {
    const cartHeaderEl = document.createElement("div");
    cartHeaderEl.style.marginBottom = "12px";
    cartHeaderEl.style.display = "flex";
    cartHeaderEl.style.alignItems = "center";
    cartHeaderEl.style.justifyContent = "space-between";
    cartHeaderEl.style.flexWrap = "wrap";

    cartContainer.appendChild(cartHeaderEl);

    // Display total price
    const totalPrice = document.createElement("p");
    totalPrice.innerHTML = `Price: &#8377;${calculateTotalPrice()}`;
    cartHeaderEl.appendChild(totalPrice);

    // Display average price
    const averagePrice = document.createElement("p");
    averagePrice.innerHTML = `Average Price: &#8377;${calculateAveragePrice()}`;
    cartHeaderEl.appendChild(averagePrice);

    // Add button to clear cart
    const clearCartBtn = document.createElement("button");
    clearCartBtn.textContent = "Clear Cart";
    clearCartBtn.addEventListener("click", clearCart);
    cartHeaderEl.appendChild(clearCartBtn);

    // Create select element for sorting
    const sortSelect = document.createElement("select");
    const ascendingOption = document.createElement("option");
    ascendingOption.value = "ascending";
    ascendingOption.textContent = "Sort Ascending";
    const descendingOption = document.createElement("option");
    descendingOption.value = "descending";
    descendingOption.textContent = "Sort Descending";
    sortSelect.appendChild(ascendingOption);
    sortSelect.appendChild(descendingOption);
    sortSelect.addEventListener("change", (event) => {
      currentSortOrder = event.target.value;
      sortCart(currentSortOrder);
    });
    cartHeaderEl.appendChild(sortSelect);

    // Update select element value based on currentSortOrder
    sortSelect.value = currentSortOrder;

    shoppingCart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      // Image container
      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      imageContainer.appendChild(img);

      cartItem.appendChild(imageContainer);

      // Details container
      const detailsContainer = document.createElement("div");
      detailsContainer.className = "details-container";

      const itemName = document.createElement("p");
      itemName.textContent = item.name;
      detailsContainer.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `Price: $${item.price}`;
      detailsContainer.appendChild(itemPrice);

      const itemQuantity = document.createElement("p");
      itemQuantity.textContent = `Quantity: ${item.quantity}`;
      detailsContainer.appendChild(itemQuantity);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeFromCart(item.id));
      detailsContainer.appendChild(removeBtn);

      cartItem.appendChild(detailsContainer);

      cartContainer.appendChild(cartItem);
    });
  }
}

function sortCart(order) {
  const sortSelect = document.querySelector("select");
  if (order === "ascending") {
    shoppingCart.sort((a, b) => a.price - b.price);
    sortSelect.value = "ascending"; // Update select element value
  } else if (order === "descending") {
    shoppingCart.sort((a, b) => b.price - a.price);
    sortSelect.value = "descending"; // Update select element value
  }
  updateCart(); // Update the cart display after sorting
}
displayCart();
