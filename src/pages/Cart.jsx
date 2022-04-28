import React, { Component } from 'react';
import { showCartItems } from '../services/cartFunc';
import { getProductsFromID } from '../services/api';
import CartItemsComponent from '../components/CartItemsComponent';

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: '',
    };
  }

  async componentDidMount() {
    const items = showCartItems();
    if (items) {
      const result = items.filter((item, index) => items.indexOf(item) === index);
      const teste = await Promise.all(result.map((item) => getProductsFromID(item)));
      this.setState({ cartItems: teste });
    }
  }

  render() {
    const { cartItems } = this.state;
    const emptyMessage = (
      <h4 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h4>);
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        {cartItems
          ? cartItems.map((item, index) => (
            <CartItemsComponent key={ index } result={ item } />))
          : emptyMessage}
        {cartItems && <h3>{`TotalR$${0}`}</h3>}
      </div>
    );
  }
}
