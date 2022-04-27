import React from 'react';
import { Link } from 'react-router-dom';
import SearchByQuery from '../components/SearchByQuery';
import SearchByCategory from '../components/SearchByCategory';

class Search extends React.Component {
  render() {
    return (
      <>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <SearchByQuery />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
        <SearchByCategory />
      </>
    );
  }
}

export default Search;
