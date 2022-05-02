import React from 'react';
import propTypes from 'prop-types';
import { removeItem } from '../services/cartFunc';

class CartItemsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };

    this.decreaseQuant = this.decreaseQuant.bind(this);
    this.increaseQuant = this.increaseQuant.bind(this);
  }

  componentDidMount() {
    const { result } = this.props;
    this.setState({ quantity: result.quantity });
  }

  decreaseQuant() {
    const { result } = this.props;
    result.quantity -= 1;
    this.setState({ quantity: result.quantity });
    if (result.quantity !== 0) {
      const items = JSON.parse(localStorage.getItem('cartItems'));
      items.find((i) => i.id === result.id).quantity -= 1;
      localStorage.setItem('cartItems', JSON.stringify(items));
    } else {
      removeItem(result);
    }
  }

  increaseQuant() {
    const { result } = this.props;
    result.quantity += 1;
    this.setState({ quantity: result.quantity });
    const items = JSON.parse(localStorage.getItem('cartItems'));
    items.find((i) => i.id === result.id).quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  render() {
    const { result } = this.props;
    const { quantity } = this.state;
    return quantity > 0 && (
      <div key={ result.id }>
        <img src={ result.thumbnail } alt={ result.title } />
        <p data-testid="shopping-cart-product-name">{result.title}</p>
        <p>{`R$ ${result.price}`}</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decreaseQuant }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQuant }
        >
          +
        </button>
        <button
          type="button"
        >
          X
        </button>
        {`Total R$ ${result.price * quantity}`}
      </div>
    );
  }
}

CartItemsComponent.propTypes = {
  result: propTypes.shape.isRequired,
};

export default CartItemsComponent;
