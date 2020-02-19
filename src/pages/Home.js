import React, { useState } from 'react';
import API from '../utils/API';
import Form from '../components/Form';
import Card from '../components/Card';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = query => {
    API.search(query)
      .then(res => setResults(res.data.products))
      .catch(err => console.log(err));
  };

  const handleInput = event => {
    event.preventDefault();
    setSearchQuery(event.target.searchQuery.value);
    searchMovies(event.target.searchQuery.value);
  };

  console.log(results);
  return (
    <>
      <div className="frow">hello Home</div>
      <Form submitform={handleInput}></Form>
      <div className="frow row-around">
        {results.map(product => (
          <Card
            key={product.upc}
            name={product.name}
            price={product.regularPrice}
            url={product.url}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
