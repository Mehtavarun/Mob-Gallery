import React from 'react';
import { Link } from 'react-router-dom';

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
        <h3 className="text-monospace font-weight-normal my-2 my-sm-0 mr-4">
          Admin
        </h3>
        <button className="btn btn-outline-info my-2 my-sm-0 mr-4">
          logout
        </button>
      </div>
    </nav>
  );
}

export default TitleBar;
