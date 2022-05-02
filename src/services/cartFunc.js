export function addToCart(element) {
  element.quantity = 1;
  let items = [];
  if (localStorage.getItem('cartItems')) {
    items = JSON.parse(localStorage.getItem('cartItems'));
    if (items.some((i) => i.id === element.id)) {
      items.find((i) => i.id === element.id).quantity += 1;
    } else {
      items.push(element);
    }
  } else {
    items.push(element);
  }
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function removeItem(element) {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  const remove = items.indexOf(element);
  items.splice(remove, 1);
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function showCartItems() {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  return items;
}

//
