import React from 'react';
import cart from '../../assets/icons/cart.png';
import CartItem from './cartItem';

function Cart() {
  return (
    <div
      className="container text-monospace mt-5 border border-dark bg-light"
      style={{ width: '50rem', padding: '0rem' }}
    >
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          <img className="mr-3" src={cart} heigth="28" width="28" />
          Shipping Cart
        </span>
      </nav>
      <CartItem />
      <hr />
      <CartItem />
    </div>
  );
}

export default Cart;
