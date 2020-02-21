import React, { useState, useReducer } from 'react';
import API from '../utils/API';
import Form from '../components/Form';
import Card from '../components/Card';

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
    dispatch({
      type: 'addToCart',
      cartName: event.name,
      cartPrice: event.price,
      cartURL: event.url,
      cartImage: event.image
    });
  };

  console.log('result', results);

  return (
    <div className="content pt-5">
      <Form submitform={handleInput}></Form>
      <div className="frow row-around">
        {results.map(product => (
          <Card
            key={product.upc}
            name={product.name}
            price={product.regularPrice}
            url={product.url}
            image={product.image}
            onClick={() => {
              addToCart({
                key: product.upc,
                name: product.name,
                price: product.regularPrice,
                url: product.url,
                image: product.image
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
