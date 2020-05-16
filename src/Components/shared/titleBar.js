import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/black-cart.png';

function TitleBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand mg-10 ml-4">
        MOB GALLERY
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-3"></ul>
        <button className="btn btn-outline-info my-2 my-sm-0 mr-4">
          Login
        </button>
        <div class="dropdown">
          <h4
            className="text-monospace dropdown-toggle font-weight-normal my-2 my-sm-0 mr-4 addPointer"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Username
          </h4>
          <div
            className="dropdown-menu d-block"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" href="#">
              Logout
            </a>
          </div>
        </div>
        <img className="mr-3 addPointer" src={cart} heigth="28" width="28" />
      </div>
    </nav>
  );
}

export default TitleBar;
