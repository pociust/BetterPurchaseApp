import React from 'react';

const Card = props => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.url}</div>
    </>
  );
};

export default Card;
