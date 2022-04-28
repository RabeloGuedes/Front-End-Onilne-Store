import React from 'react';
import propTypes from 'prop-types';
import { showCartItems } from '../services/cartFunc';

class CartItemsComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    const { result } = this.props;
    const items = showCartItems();
    const counter = items.filter((item) => item === result.id);
    this.setState({ quantity: counter.length });
  }

  render() {
    const { result } = this.props;
    const { quantity } = this.state;
    return (
      <div key={ result.id }>
        <img src={ result.thumbnail } alt={ result.title } />
        <p data-testid="shopping-cart-product-name">{result.title}</p>
        <p>{result.price}</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

CartItemsComponent.propTypes = {
  result: propTypes.shape.isRequired,
};

export default CartItemsComponent;
