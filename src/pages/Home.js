import React from 'react';
import Form from '../components/Form';
import Card from '../components/Card';

const MainHome = props => {
  return (
    <div>
      <div className="content pt-5">
        <Form submitform={props.submitform}></Form>
        <div className="frow row-around">
          {props.productResults.map((product, index) => (
            <Card
              key={`${index}-${product.upc}`}
              name={product.name}
              price={product.regularPrice}
              url={product.url}
              image={product.image}
              onClick={() => {
                props.onClick({
                  product
                });
              }}
              button={'Add to Cart'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainHome;
