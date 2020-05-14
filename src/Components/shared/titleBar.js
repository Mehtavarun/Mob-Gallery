import React from 'react';
import { useHistory } from 'react-router-dom';

function TitleBar() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mg-10" onClick={() => history.push('')}>
        COVID TODAY
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-3">
          <li className="nav-item">
            <a className="nav-link">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Latest News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Precautions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Add News</a>
          </li>
        </ul>
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
