import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CartButton extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <Link
        to="/cart"
      >
        <button data-testid="shopping-cart-button" type="button">
          Carrinho de compras
          <p data-testid="shopping-cart-size">{quantity}</p>
        </button>
      </Link>
    );
  }
}

CartButton.propTypes = {
  quantity: propTypes.number.isRequired,
};
