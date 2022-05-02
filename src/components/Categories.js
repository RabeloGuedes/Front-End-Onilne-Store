import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    const { func } = this.props;
    return categories && (
      (
        <section>
          {categories.map((categorie) => (
            <button
              key={ categorie.id }
              name={ categorie.id }
              data-testid="category"
              type="button"
              className="category"
              onClick={ func }
            >
              { categorie.name }
            </button>))}
        </section>)
    );
  }
}

Categories.propTypes = {
  func: PropTypes.func.isRequired,
};

//
