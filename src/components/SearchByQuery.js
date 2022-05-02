import React from 'react';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchByQuery extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.searchBtn = this.searchBtn.bind(this);
    this.state = {
      queryParam: '',
      searchResult: '',
    };
  }

  handleChange({ target }) {
    this.setState({ queryParam: target.value });
  }

  searchBtn() {
    const { queryParam } = this.state;
    this.setState(async () => {
      const data = await getProductsFromCategoryAndQuery('', queryParam)
        .then((product) => product);
      this.setState({ searchResult: data.results });
    });
  }

  render() {
    const { queryParam, searchResult } = this.state;

    return (
      <div>
        <section>
          <input
            data-testid="query-input"
            type="text"
            value={ queryParam }
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchBtn }
          >
            Pesquisar
          </button>
        </section>
        {searchResult && <ProductCard results={ searchResult } />}
      </div>
    );
  }
}

export default SearchByQuery;

//
