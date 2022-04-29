export function addToCart(element) {
  element.quantity = 1;
  if (localStorage.getItem('cartItems')) {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items.some((i) => i.id === element.id)) {
      const newObj = items.find((i) => i.id === element.id);
      newObj.quantity += 1;
      const teste = items.find((i) => i.id === newObj.id && i
        .quantity <= newObj.quantity);
      const remove = items.indexOf(teste);
      items.splice(remove, 1);
      items.push(newObj);
    } else {
      items.push(element);
    }
    localStorage.setItem('cartItems', JSON.stringify(items));
  } else {
    const items = [];
    items.push(element);
    localStorage.setItem('cartItems', JSON.stringify(items));
  }
}

export function removeToCart(element) {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  const remove = items.indexOf(element);
  items.splice(remove, 1);
  localStorage.setItem('cartItems', JSON.stringify(items));
}

export function showCartItems() {
  const items = JSON.parse(localStorage.getItem('cartItems'));
  return items;
}
