let products = [];

// Load Cart Count
function loadCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}
loadCartCount();

// Show Skeleton
function showSkeleton(){
  let html = "";

  for(let i=0; i<8; i++){
    html += `
    <div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
    </div>`;
  }

  document.getElementById("skeleton").innerHTML = html;
}

showSkeleton();

// Fetch API
fetch("https://fakestoreapi.com/products")
.then(res => {
  if(!res.ok) throw new Error("Error");
  return res.json();
})
.then(data => {
  document.getElementById("skeleton").style.display = "none";
  products = data;
  displayProducts(products);
})
.catch(err => {
  document.getElementById("skeleton").style.display = "none";
  document.getElementById("error").innerText = "❌ Failed to load products!";
});

// Display Products
function displayProducts(data){
  let html = "";

  data.map(p => {
    html += `
    <div class="card">
      <img src="${p.image}">
      <h4>${p.title.substring(0,50)}</h4>
      <p class="rating">⭐ ${p.rating.rate}</p>
      <p class="price">₹ ${p.price}</p>
      <p>${p.category}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });

  document.getElementById("productList").innerHTML = html;
}

// Search
document.getElementById("search").addEventListener("input", function(){
  let value = this.value.toLowerCase();

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(value) ||
    p.category.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// Category Filter
document.getElementById("category").addEventListener("change", function(){
  let value = this.value;

  if(value === ""){
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === value);
    displayProducts(filtered);
  }
});

// Sorting
function sortLow(){
  let sorted = [...products].sort((a,b) => a.price - b.price);
  displayProducts(sorted);
}

function sortHigh(){
  let sorted = [...products].sort((a,b) => b.price - a.price);
  displayProducts(sorted);
}

// Add to Cart
function addToCart(id){
  let item = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(c => c.id === id);

  if(existing){
    existing.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartCount();

  alert("Added to cart ✅");
}