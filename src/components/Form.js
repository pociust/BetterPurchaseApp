import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submitform}>
      <input className="input-form p-5 m-15" type="text" placeholder="search products" name="searchQuery"></input>
    </form>
  );
};

export default Form;
