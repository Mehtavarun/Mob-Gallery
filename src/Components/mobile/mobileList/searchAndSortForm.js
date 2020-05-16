import React from 'react';

function SearchAndSortForm() {
  return (
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
      <div className="col-3">
        <div class="dropdown">
          <button
            className="btn btn-light border dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div
            className="dropdown-menu d-block"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAndSortForm;
