import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <Fragment>
      <h2 className="text-center ">
        <br />
        <br />
        Successfully placed order with id: {Math.ceil(Math.random() * 1000000)}
        <br />
        <br />
        <Link className="text-center" to="/mobile-phones">
          <h3>Continue Shopping</h3>
        </Link>
      </h2>
    </Fragment>
  );
}

export default OrderSuccess;
