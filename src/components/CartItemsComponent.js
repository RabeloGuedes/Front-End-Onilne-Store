import React from 'react';
import propTypes from 'prop-types';
import { removeItem } from '../services/cartFunc';

class CartItemsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      PlusbuttonOff: false,
      MinusButtonOff: true,
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
    if (result.quantity === 1) {
      this.setState({
        MinusButtonOff: true,
      });
    }
    this.setState({
      quantity: result.quantity,
      PlusbuttonOff: false,
    });
    this.setState({ quantity: result.quantity });
  }

  increaseQuant() {
    const { result } = this.props;
    result.quantity += 1;
    this.setState({ quantity: result.quantity });
    const items = JSON.parse(localStorage.getItem('cartItems'));
    items.find((i) => i.id === result.id).quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(items));
    if (result.available_quantity > result.quantity) {
      this.setState({
        quantity: result.quantity,
        MinusButtonOff: false,
      });
    } else if (result.available_quantity === result.quantity) {
      this.setState({
        quantity: result.quantity,
        PlusbuttonOff: true,
      });
    }
  }

  render() {
    const { result } = this.props;
    const { quantity, PlusbuttonOff, MinusButtonOff } = this.state;
    return quantity > 0 && (
      <div key={ result.id }>
        <p data-testid="shopping-cart-product-name">{result.title}</p>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>{`R$ ${result.price}`}</p>
        <div>
          {result.shipping.free_shipping
            && <span data-testid="free-shipping">Frete Grátis</span>}
        </div>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decreaseQuant }
          disabled={ MinusButtonOff }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQuant }
          disabled={ PlusbuttonOff }
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
