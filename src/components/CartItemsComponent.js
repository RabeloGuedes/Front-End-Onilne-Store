import React from 'react';
import propTypes from 'prop-types';
import { showCartItems, addToCart, removeToCart } from '../services/cartFunc';

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
    //   }
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
        <p>
          R$
          {' '}
          {result.price}
        </p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuant }
        >
          -
        </button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuant }
        >
          +
        </button>
        <button
          type="button"
        >
          X
        </button>
        {`TotalR$${result.price * quantity}`}
      </div>
    );
  }
}

CartItemsComponent.propTypes = {
  result: propTypes.shape.isRequired,
};

export default CartItemsComponent;

// export default class Cart extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quantity: 1,
//     };

//     this.decreaseQuant = this.decreaseQuant.bind(this);
//     this.increaseQuant = this.increaseQuant.bind(this);
//   }

//   decreaseQuant() {
//     const { quantity } = this.state;
//     if (quantity <= 1) {
//       this.setState({
//         quantity: 1,
//       });
//     }
//     this.setState((prevState) => ({
//       quantity: prevState.quantity - 1,
//     }));
//   }

//   increaseQuant() {
//     this.setState((prevState) => ({
//       quantity: prevState.quantity + 1,
//     }));
//   }

//   render() {
//     const { quantity } = this.state;
//     return (
//       <section>
//         <h2>Carrinho de compras</h2>
//         <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
//         <button
//           type="button"
//           data-testid="product-decrease-quantity"
//           onClick={ this.decreaseQuant }
//         >
//           -
//         </button>
//         <button
//           type="button"
//           data-testid="product-increase-quantity"
//           onClick={ this.increaseQuant }
//         >
//           +
//         </button>
//         <p>{ quantity }</p>
//         <button
//           type="button"
//         >
//           X
//         </button>
//         <h3>{ `Total: R$${quantity}` }</h3>
//         <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
//       </section>
//     );
//   }
// }
