import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Item from './pages/Item';
import Checkout from './pages/Checkout';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/cart" component={ Cart } />
          <Route path="/item/:id" render={ (props) => <Item { ...props } /> } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}
