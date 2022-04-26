import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <h2>Carrinho de compras</h2>
        <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
      </section>
    );
  }
}
