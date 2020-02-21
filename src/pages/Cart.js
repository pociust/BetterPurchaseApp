import React from 'react';
import Card from '../components/Card';

const Cart = props => {
  return (
    <div>
      <div className="frow row-around">
        {props.cartProducts.map(product => (
          <Card
            key={product.upc}
            name={product.name}
            price={product.price}
            url={product.url}
            image={product.image}
            button={'Remove from Cart'}
            onClick={() => {
              props.onClick({
                product
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
