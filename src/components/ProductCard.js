import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart, showCartItems } from '../services/cartFunc';

class ProductCard extends React.Component {
  countQuantity() {
    const items = showCartItems();
    if (items.length > 0) {
      const quantity = items.map((i) => i.quantity);
      const total = quantity.reduce((acc, curr) => acc + curr);
      localStorage.setItem('quantity', total);
    }
  }

  render() {
    const { results, func } = this.props;

    return (
      results && results.map((result) => (
        <div key={ result.id }>
          <Link
            data-testid="product-detail-link"
            to={ `/item/${result.id}` }
          >
            <div data-testid="product">
              <img src={ result.thumbnail } alt={ result.title } />
              <p>{result.title}</p>
              <p>{result.price}</p>
            </div>
          </Link>
          <div>
            {result.shipping.free_shipping
                && <span data-testid="free-shipping">Frete Grátis</span>}
          </div>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ () => { addToCart(result); this.countQuantity(); func(); } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))
    );
  }
}

ProductCard.propTypes = {
  results: propTypes.shape.isRequired,
  func: propTypes.func.isRequired,
};

export default ProductCard;
