import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

export default class SearchByCategory extends Component {
  constructor() {
    super();
    this.state = {
      showCategory: '',
      results: [],
    };
    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory({ target: { name } }) {
    this.setState(({ showCategory: name }), async () => {
      const { showCategory } = this.state;
      const response = await getProductsFromCategoryAndQuery(showCategory);
      const { results } = response;
      this.setState({ results });
    });
  }

  render() {
    const { results } = this.state;
    return results && (
      <section>
        <h2>
          SearchByCategory
        </h2>
        <Categories func={ this.filterCategory } />
        <ProductCard results={ results } />
      </section>
    );
  }
}

//
