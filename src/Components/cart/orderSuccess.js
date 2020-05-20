import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <Fragment>
      <h2 className="text-center ">
        Successfully placed order with id: {Math.random() * 1000000}
      </h2>
      ;<Link to="/mobile-phones">Continue Shopping</Link>
    </Fragment>
  );
}

export default OrderSuccess;
