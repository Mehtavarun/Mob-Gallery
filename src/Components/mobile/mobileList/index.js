import React from 'react';
import MobileCard from './mobileCard';

function MobileList() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-lg-2"
              style={{ width: '400px' }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <MobileCard />
    </div>
  );
}

export default MobileList;
