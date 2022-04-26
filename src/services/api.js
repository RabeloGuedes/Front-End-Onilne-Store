export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?${query ? `q=${query}` : `category=${categoryId}`}`;
  const response = await fetch(url, { method: 'GET' });
  const data = response.json();

  return data;
}
