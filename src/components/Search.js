import React from 'react';
import Categories from './Categories';

class Search extends React.Component {
  render() {
    return (
      <section>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Categories />
      </section>
    );
  }
}

export default Search;
