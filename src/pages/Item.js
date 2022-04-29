import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromID } from '../services/api';
import Review from '../components/Review';
import { addToCart } from '../services/cartFunc';

export default class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      item: '',
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getProductsFromID(id)
      .then((product) => product);
    this.setState({ item: data });
  }

  render() {
    const { item } = this.state;
    return item && (
      <div>
        <Link
          to="/cart"
        >
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de compras
          </button>
        </Link>
        <section>
          <p data-testid="product-detail-name">{item.title}</p>
          <img src={ item.pictures[0].url } alt={ item.title } />
        </section>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(item.id) }
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
