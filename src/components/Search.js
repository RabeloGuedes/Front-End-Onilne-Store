import React from 'react';
import SearchByQuery from './SearchByQuery';

class Search extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <SearchByQuery />
      </div>
    );
  }
}

export default Search;
