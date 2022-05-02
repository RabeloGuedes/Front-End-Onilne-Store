import React from 'react';
import propTypes from 'prop-types';
import { getProductsFromID } from '../services/api';
import Review from '../components/Review';
import { addToCart, showCartItems } from '../services/cartFunc';
import CartButton from '../components/CartButton';

export default class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      item: '',
      quantity: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getProductsFromID(id)
      .then((product) => product);
    this.setState({ item: data });
    this.countQuantity();
  }

  countQuantity() {
    const items = showCartItems();
    if (items.length > 0) {
      const quantity = items.map((i) => i.quantity);
      const total = quantity.reduce((acc, curr) => acc + curr);
      this.setState({ quantity: total });
    }
  }

  render() {
    const { item, quantity } = this.state;
    return item && (
      <div>
        <CartButton quantity={ quantity } />
        <section>
          <p data-testid="product-detail-name">{item.title}</p>
          <img src={ item.pictures[0].url } alt={ item.title } />
        </section>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => { addToCart(item); this.countQuantity(); } }
        >
          Adicionar ao Carrinho
        </button>
        <Review />
      </div>
    );
  }
}

Item.propTypes = {
  match: propTypes.string.isRequired,
};

//
