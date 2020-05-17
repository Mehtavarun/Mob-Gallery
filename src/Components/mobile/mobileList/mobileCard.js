import React from 'react';
import { Link } from 'react-router-dom';

function MobileCard(props) {
  const { id, image, name, price, currency } = props.mobile;
  return (
    <div
      className="card text-center mt-5 ml-4"
      style={{
        width: '16rem',
        padding: '0rem',
        margin: '0rem'
      }}
    >
      <img
        src={require(`../../../assets/images/${image}`)}
        className="card-img-top ml-5"
        alt="image not available"
        style={{ height: '18.5rem', width: '9.5rem', margin: '0rem' }}
      />
      <div className="card-body bg-light" style={{ paddingTop: '0.5rem' }}>
        <h5 className="card-title text-monospace">
          <b>{name}</b>
        </h5>
        <h5 className="card-subtitle mb-3 text-danger text-monospace">
          <b>{currency + price}</b>
        </h5>
        <Link to={`/mobile/${id}`} className="btn btn-outline-dark">
          View
        </Link>
        <button className="btn btn-outline-info ml-2">Add to Cart</button>
      </div>
    </div>
  );
}

export default MobileCard;
