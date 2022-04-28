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


  decreaseQuant() {
    const { result } = this.props;
    // this.setState(((prevState) => ({
    //   quantity: prevState.quantity - 1,
    // })), () => {

    removeToCart(result.id);
    const items = showCartItems();
    const counter = items.filter((item) => item === result.id);
    this.setState({ quantity: counter.length });
    //   const { quantity } = this.state;
    //   if (quantity <= 0) {
    //     this.setState({
    //       quantity: 0,
    //     });
    //   }d
    // });
  }

  increaseQuant() {
    const { result } = this.props;
    this.setState(((prevState) => ({
      quantity: prevState.quantity + 1,
    })), () => {
      addToCart(result.id);
    });
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
