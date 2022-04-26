import React from 'react';
import propTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { results } = this.props;

    return (
      results && results.map((result) => (
        <div data-testid="product" key={ result.id }>
          <img src={ result.thumbnail } alt={ result.title } />
          <p>{result.title}</p>
          <p>{result.price}</p>
        </div>
      ))
    );
  }
}

ProductCard.propTypes = {
  results: propTypes.func.isRequired,
};

export default ProductCard;
