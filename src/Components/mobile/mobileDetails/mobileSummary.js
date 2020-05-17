import React from 'react';
import img from '../../../assets/images/Apple-iPhone-11-Pro-Silver-64-GB.jpg';

function MobileSummary() {
  return (
    <div className="row justify-content-center mt-5 align-items-center">
      <div className="col-md-4 text-center sticky-top">
        <img src={img} height="400" alt="image-name" />
      </div>
      <div
        className="col-md-6 text-break text-monospace"
        style={{ height: '440px' }}
      >
        <h1>Iphone 11</h1>
        <h3 className="text-danger">
          <b>$349.33</b>
        </h3>
        <h5 className="text-primary">
          <b>Black</b>
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
          <li>64GB Internal Memory</li>
          <li>8GB RAM</li>
          <li>6.7-inch HD Retina display</li>
          <li>12MP camera with 1080p video and 4.2MP HD camera</li>
          <li>Up to 10 hours of battery life</li>
          <li>Two speaker audio</li>
          <li>Lightning connector for charging and accessories</li>
          <li>802.11ac Wi-Fi with MIMO</li>
        </ul>
      </div>
      <div className="col-md-2 text-center sticky-top">
        <a href="#" className="btn btn-warning btn-lg btn-block">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default MobileSummary;
