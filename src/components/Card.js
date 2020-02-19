import React from 'react';

const Card = props => {
  return (
    <div className="shadow-dark col-md-1-3 p-15">
      <div>{props.name}</div>
      <img src={props.image} className="card-image" alt="" />
      <div>${props.price}</div>

      <div>{props.url}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
