export function addToCart(id) {
  let items = [];
  if (localStorage.getItem('cartItems')) {
    items = JSON.parse(localStorage.getItem('cartItems'));
  }
  items.push(id);
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function removeToCart(id) {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  const remove = items.indexOf(id);
  items.splice(remove, 1);
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function showCartItems() {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  return items;
}
