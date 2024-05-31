// Lấy các phần tử DOM cần thiết
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Danh sách các sản phẩm trong giỏ hàng
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Hàm cập nhật giao diện giỏ hàng
function updateCart() {
  // Xóa các mục sản phẩm cũ
  cartItems.innerHTML = '';

  // Tính tổng giá trị giỏ hàng
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice += product.price;

    // Tạo một phần tử mới cho mỗi sản phẩm
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price} VND`;
    cartItems.appendChild(li);
  }

  // Cập nhật tổng giá trị giỏ hàng
  totalPriceElement.textContent = totalPrice.toLocaleString();
}
