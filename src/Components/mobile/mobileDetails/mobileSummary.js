import React, { useContext, Fragment, useEffect, useState } from 'react';
import MobileContext from './context';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../Actions/cart';
import { isLoggedInUser } from '../../../Utils/util';

function MobileSummary() {
  const mobile = useContext(MobileContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (cart.items.findIndex(item => item.id === mobile.id) > -1) {
      setAddedToCart(true);
    }
  }, []);

  function addItemToCart() {
    dispatch(
      addItem(cart.items, {
        id: mobile.id,
        image: mobile.image,
        name: mobile.name,
        currency: mobile.currency,
        quantity: 1
      })
    );
    setAddedToCart(true);
  }

  return (
    <div className="row justify-content-center mt-4 align-items-center">
      {mobile.hasOwnProperty('image') && (
        <Fragment>
          <div className="col-md-4 text-center sticky-top">
            <img
              src={require(`../../../assets/images/${mobile.image}`)}
              height="400"
              alt="image-name"
            />
          </div>
          <div
            className="col-md-6 text-break text-monospace"
            style={{ height: '440px' }}
          >
            <h1>{mobile.name}</h1>
            <h3 className="text-danger">
              <b>{mobile.currency + mobile.price}</b>
            </h3>
            <h5 className="text-primary">
              <b>Quantity Available: {mobile.quantity} </b>
            </h5>
            <br />
            <h6 className="text-muted">Free Delivery</h6>
            <div className="d-inline">Delivered by:</div>
            <div className="d-inline">
              <b> 23-05-2020</b>
            </div>
            <br />
            <br />
            <h6>
              <b>Specifications</b>
            </h6>
            <ul>
              {mobile.specifications.map((specification, i) => (
                <li key={i}>{specification}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-2 text-center sticky-top">
            {addedToCart ? (
              <button className="btn btn-warning btn-md disabled" disabled>
                Added To Cart
              </button>
            ) : (
              <button
                className="btn btn-warning btn-lg btn-block"
                onClick={addItemToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default MobileSummary;
