import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Search } />
      </BrowserRouter>
    );
  }
=======
// import * as api from './services/api';

function App() {
  // api.getCategories().then((categories) => { console.log(categories); });
  // api.getProductsFromCategoryAndQuery('', 'RPG').then((categories) => { console.log(categories); });
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> main-group-30
}
