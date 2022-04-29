import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/cartFunc';

class ProductCard extends React.Component {
  render() {
    const { results } = this.props;

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
            onClick={ () => addToCart(result) }
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
};

export default ProductCard;

// agora vai
