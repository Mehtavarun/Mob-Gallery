import React, { useState, useEffect } from 'react';

function CartItem(props) {
  const { id: mobileId, userQuantity } = props.item;
  const [quantity, setQuantity] = useState(userQuantity);
  const [mobile, setMobile] = useState(props.item);

  useEffect(() => {
    setMobile(props.item);
    setQuantity(userQuantity);
  }, [props.item]);

  function updateQuantity(doIncr) {
    let newQuantity = quantity;
    if (doIncr) {
      ++newQuantity;
    } else {
      --newQuantity;
    }
    setQuantity(newQuantity);
    console.log(newQuantity);
    props.updateItem({
      id: mobile.id,
      name: mobile.name,
      price: mobile.price,
      quantity: mobile.quantity,
      userQuantity: newQuantity,
      currency: mobile.currency,
      image: mobile.image,
      specifications: mobile.specifications
    });
  }

  return (
    <div className="d-flex align-items-center pl-1">
      <div className="col-2 justify-content-center">
        <img
          src={require(`../../assets/images/${mobile.image}`)}
          height="128"
          width="64"
        />
      </div>
      <div className="col-4">
        <h5>{mobile.name}</h5>
      </div>
      <div className="col-1 mr-3">
        <h5>{mobile.currency + mobile.price}</h5>
      </div>
      <div className="col-2">
        <div className="btn-group" role="group" aria-label="quantity">
          <button
            type="button"
            className={`btn btn-secondary ${quantity === 1 && 'disabled'}`}
            onClick={() => updateQuantity(false)}
            disabled={quantity === 1}
          >
            -
          </button>
          <button type="button" className="btn btn-light disabled">
            {quantity}
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${quantity === mobile.quantity &&
              'disabled'}`}
            onClick={() => updateQuantity(true)}
            disabled={quantity === mobile.quantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        <h5>{quantity * mobile.price}</h5>
      </div>
      <div className="col-1">
        <img
          className="addPointer"
          src={require('../../assets/icons/bin.png')}
          height="20"
          width="20"
          onClick={() => {
            props.removeItem(mobileId);
          }}
        />
      </div>
    </div>
  );
}

export default CartItem;
