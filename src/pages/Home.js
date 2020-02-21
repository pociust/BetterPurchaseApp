import React, { useState, useReducer } from 'react';
import API from '../utils/API';
// import Form from '../components/Form';
// import Card from '../components/Card';
import MainHome from './MainHome';

const Home = () => {
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
    console.log('eventcody', event);
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
    <div>
      <MainHome
        submitform={handleInput}
        productResults={results}
        onClick={addToCart}
      ></MainHome>
    </div>
  );
};

export default Home;
