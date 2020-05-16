import React from 'react';
import cart from '../../assets/icons/cart.png';
import CartItem from './cartItem';

function Cart() {
  return (
    <div
      className="container text-monospace mt-5 border border-dark bg-light"
      style={{ width: '48rem', padding: '0rem' }}
    >
      <nav className="navbar navbar-dark bg-dark mb-3">
        <span className="navbar-brand mb-0 h1">
          <img className="mr-3" src={cart} heigth="28" width="28" />
          Shipping Cart
        </span>
      </nav>
      <CartItem />
      <hr />
      <CartItem />
      <nav className="navbar navbar-dark bg-dark mt-3">
        <h5 className="navbar-brand mr-auto ml-3 mb-0 mg-10">Total</h5>
        <h5 className="my-2 my-sm-0 mr-5 text-light">2000.00$</h5>
        <button className="btn btn-warning my-2 my-sm-0">Place Order</button>
      </nav>
    </div>
  );
}

export default Cart;
