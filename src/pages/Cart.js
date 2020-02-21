import React from 'react';
import Card from '../components/Card';

const Cart = props => {
  return (
    <div>
      <div className="frow row-around">
        {props.cartProduct.map(product => (
          <Card
            key={product.upc}
            name={product.name}
            price={product.regularPrice}
            url={product.url}
            image={product.image}
            // onClick={() => {
            //   props.onClick({
            //     product
            //   });
            // }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
