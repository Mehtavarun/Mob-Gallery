import React from 'react';

function CartItem() {
  return (
    <div className="row">
      <div className="col ml-4 mt-4 mb-4 mr-4">
        <img
          src={require('../../assets/images/apple-iphone-xr.jpeg')}
          height="128"
          width="64"
        />
      </div>
      <div className="col"></div>
    </div>
  );
}

export default CartItem;
