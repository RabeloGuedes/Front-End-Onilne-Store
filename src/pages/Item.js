import React from 'react';
import propTypes from 'prop-types';
import { getProductsFromID } from '../services/api';

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
    const data = await getProductsFromID(id, '')
      .then((product) => product);
    this.setState({ item: data });
  }

  render() {
    const { item } = this.state;
    console.log(item.pictures);
    return item && (
      <div>
        <section>
          <p data-testid="product-detail-name">{item.title}</p>
          <img src={ item.pictures[0].url } alt={ item.title } />
          <p>{item.id}</p>
        </section>
      </div>
    );
  }
}

Item.propTypes = {
  match: propTypes.string.isRequired,
};