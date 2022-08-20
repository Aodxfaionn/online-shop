let productService;
const cartService = new CartService();
const htmlService = new HTMLService();

const productsContainer = document.getElementById("products");
const filterInput = document.getElementById("filter");
const cartContainer = document.getElementById("cart");

filterInput.addEventListener("input", (event) => {
  const value = event.target.value;

  const filteredProducts = productService.filterBy(value);
  renderProducts(filteredProducts);
});

function renderProducts(products) {
  productsContainer.innerHTML = htmlService.paintProducts(products);
}

function renderCart() {
  cartContainer.innerHTML = htmlService.paintCart(cartService.getInfo());
}

async function startApplication() {
    const responce = await fetch('https://fakestoreapi.com/products')
const data = await response.json()

productService = new ProductService(data)


renderCart();
renderProducts(productService.products);
}

startApplication()