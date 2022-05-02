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

  componentDidMount() {
    this.setState((() => {
      this.countQuantity();
    }), async () => {
      const { match } = this.props;
      const { id } = match.params;
      const data = await getProductsFromID(id)
        .then((product) => product);
      this.setState({ item: data });
    });
  }

  countQuantity() {
    const items = showCartItems();
    if (items && items.length > 0) {
      const quantity = items.map((i) => i.quantity);
      const total = quantity.reduce((acc, curr) => acc + curr);
      localStorage.setItem('quantity', total);
    }
    this.setState({ quantity: JSON.parse(localStorage.getItem('quantity')) });
  }

  render() {
    const { item, quantity } = this.state;
    return (
      <div>
        <CartButton quantity={ quantity } />
        {item && (
          <div>
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
          </div>)}
      </div>
    );
  }
}

Item.propTypes = {
  match: propTypes.string.isRequired,
};
