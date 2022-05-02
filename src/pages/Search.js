import React from 'react';
import SearchByQuery from '../components/SearchByQuery';
import SearchByCategory from '../components/SearchByCategory';
import CartButton from '../components/CartButton';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    this.showQuantity();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.quantity);
    const { quantity } = this.state;
    const teste = JSON.parse(localStorage.getItem('quantity'));
    if (quantity !== teste) {
      console.log('mudou');
      return true;
    }
  }

  componentDidUpdate() {
    this.showQuantity();
  }

  showQuantity() {
    const teste = JSON.parse(localStorage.getItem('quantity'));
    this.setState({ quantity: teste });
  }

  render() {
    const { quantity } = this.state;
    return (
      <>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <SearchByQuery />
        <CartButton quantity={ quantity } />
        <SearchByCategory />
      </>
    );
  }
}

export default Search;

//
