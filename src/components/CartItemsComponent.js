import React from 'react';
import propTypes from 'prop-types';

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
  }

  increaseQuant() {
    const { result } = this.props;
    result.quantity += 1;
    this.setState({ quantity: result.quantity });
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

// agora vai
