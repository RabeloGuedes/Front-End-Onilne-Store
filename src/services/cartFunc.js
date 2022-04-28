export function addToCart(id) {
  let items = [];
  if (localStorage.getItem('cartItems')) {
    items = JSON.parse(localStorage.getItem('cartItems'));
  }
  items.push(id);
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function showCartItems() {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  return items;
}
