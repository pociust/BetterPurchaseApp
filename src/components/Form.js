import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submitform}>
      <input type="text" placeholder="search" name="searchQuery"></input>
    </form>
  );
};

export default Form;
