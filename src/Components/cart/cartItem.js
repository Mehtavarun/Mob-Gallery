import React from 'react';
import binImg from '../../assets/icons/bin.png';

function CartItem() {
  return (
    <div className="d-flex align-items-center pl-1">
      <div className="col-2 justify-content-center">
        <img
          src={require('../../assets/images/apple-iphone-xr.jpeg')}
          height="128"
          width="64"
        />
      </div>
      <div className="col-4">
        <h5>Iphone 11 Black Pro 256GB</h5>
      </div>
      <div className="col-1 mr-3">
        <h5>$1000</h5>
      </div>
      <div className="col-2">
        <div class="btn-group" role="group" aria-label="quantity">
          <button type="button" className="btn btn-secondary">
            -
          </button>
          <button type="button" className="btn btn-light disabled">
            1
          </button>
          <button type="button" className="btn btn-secondary">
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        <h5>$1000.44</h5>
      </div>
      <div className="col-1">
        <img className="binImg" src={binImg} height="20" width="20" />
      </div>
    </div>
  );
}

export default CartItem;
