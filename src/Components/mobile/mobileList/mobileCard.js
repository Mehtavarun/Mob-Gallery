import React from 'react';
import img from '../../../assets/images/galaxy-m31.jpg';

function MobileCard() {
  return (
    <div className="row">
      <div
        className="card text-center mt-4 ml-4"
        style={{
          width: '16rem',
          padding: '0rem',
          margin: '0rem'
        }}
      >
        <img
          src={img}
          className="card-img-top ml-5"
          alt="mobile-name"
          style={{ height: '18.5rem', width: '9.5rem', margin: '0rem' }}
        />
        <div className="card-body bg-light" style={{ paddingTop: '0.5rem' }}>
          <h4 className="card-title text-monospace">
            <b>Iphone</b>
          </h4>
          <h5 className="card-subtitle mb-3 text-danger text-monospace">
            <b> $811</b>
          </h5>
          <a href="#" className="btn btn-outline-dark">
            View
          </a>
          <a href="#" className="btn btn-outline-info ml-2">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;
