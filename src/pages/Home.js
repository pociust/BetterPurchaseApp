import React, { useState } from 'react';
import API from '../utils/API';
import Form from '../components/Form';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = query => {
    API.search(query)
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  };

  const handleInput = event => {
    event.preventDefault();
    console.log('input', event.target.searchQuery.value);
    setSearchQuery(event.target.searchQuery.value);
    searchMovies(event.target.searchQuery.value);
  };

  console.log(results);

  return (
    <>
      <div className="frow">hello Home</div>
      <Form submitform={handleInput}></Form>
    </>
  );
};

export default Home;
