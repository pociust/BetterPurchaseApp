import React from 'react';

const Card = props => {
  return (
    <>
      <div className="shadow-dark p-15">
        <div>{props.name}</div>
        <img src={props.image} alt="" />
        <div>{props.price}</div>

        <div>{props.url}</div>
      </div>
    </>
  );
};

export default Card;
