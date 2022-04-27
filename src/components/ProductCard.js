import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { results } = this.props;

    return (
      results && results.map((result) => (
        <Link
          data-testid="product-detail-link"
          key={ result.id }
          to={ `/item/${result.id}` }
        >
          <div data-testid="product">
            <img src={ result.thumbnail } alt={ result.title } />
            <p>{result.title}</p>
            <p>{result.price}</p>
          </div>
        </Link>
      ))
    );
  }
}

ProductCard.propTypes = {
  results: propTypes.shape.isRequired,
};

export default ProductCard;
