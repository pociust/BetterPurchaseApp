import React, { useState, useReducer } from 'react';
import API from './utils/API';
// import Form from '../components/Form';
// import Card from '../components/Card';
import MainHome from './pages/MainHome';
import Cart from './pages/Cart'
import './App.css';
// import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [cart, dispatch] = useReducer((state, action) => {
    console.log(action);
    if (action.type === 'addToCart') {
      return [
        ...state,
        {
          name: action.cartName,
          price: action.cartPrice,
          url: action.cartURL,
          image: action.cartImage
        }
      ];
    } else {
      return state;
    }
  }, []);

  const searchProducts = query => {
    API.search(query)
      .then(res => setResults(res.data.products))
      .catch(err => console.log(err));
  };

  const handleInput = event => {
    event.preventDefault();
    setSearchQuery(event.target.searchQuery.value);
    searchProducts(event.target.searchQuery.value);
  };

  const addToCart = event => {
    dispatch({
      type: 'addToCart',
      cartName: event.product.name,
      cartPrice: event.product.price,
      cartURL: event.product.url,
      cartImage: event.product.image
    });
  };

  console.log('cart', cart);
  return (
    <>
    <div className="frow header pt-10">
      Better Purcha<span>$</span>e APP
    </div>
      <Router>
        <div className="frow row-around p-15 nav-bar">
          <Link to="/">Home</Link>
          <Link to="/cart">My Cart</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <MainHome submitform={handleInput}
        productResults={results}
        onClick={addToCart}></MainHome>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
