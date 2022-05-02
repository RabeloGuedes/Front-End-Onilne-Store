import React from 'react';
import SearchByQuery from '../components/SearchByQuery';
import SearchByCategory from '../components/SearchByCategory';
import CartButton from '../components/CartButton';

export default class Search extends React.Component {
  constructor() {
    super();

    this.countQuantity = this.countQuantity.bind(this);
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    this.countQuantity();
  }

  countQuantity() {
    this.setState({ quantity: JSON.parse(localStorage.getItem('quantity')) });
  }

  render() {
    const { quantity } = this.state;
    return (
      <>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <SearchByQuery func={ this.countQuantity } />
        <CartButton quantity={ quantity } />
        <SearchByCategory func={ this.countQuantity } />
      </>
    );
  }
}
