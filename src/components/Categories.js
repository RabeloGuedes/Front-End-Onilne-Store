import React from 'react';
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
    console.log(response);
  }

  render() {
    const { categories } = this.state;
    return categories && (
      (
        <section>
          {categories.map((categorie) => (
            <button
              key={ categorie.id }
              data-testid="category"
              type="button"
            >
              { categorie.name }
            </button>))}
        </section>)
    );
  }
}
