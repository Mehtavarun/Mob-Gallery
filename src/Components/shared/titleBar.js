import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInUser } from '../../Utils/util';
import cart from '../../assets/icons/black-cart.png';

function TitleBar() {
  let user = useSelector(state => state.user);
  let [isUserLoggedIn, setIsLoggedInUser] = useState(false);

  useEffect(() => {
    if (isLoggedInUser()) {
      setIsLoggedInUser(true);
    } else {
      setIsLoggedInUser(false);
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand mg-10 ml-4">
        MOB GALLERY
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-3"></ul>
        {isUserLoggedIn ? (
          <div className="dropdown">
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
              <Link className="dropdown-item" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link className="btn btn-outline-info my-2 my-sm-0 mr-4" to="/login">
            Login
          </Link>
        )}
        <Link to="/cart">
          <img className="mr-3 addPointer" src={cart} heigth="28" width="28" />
        </Link>
      </div>
    </nav>
  );
}

export default TitleBar;
