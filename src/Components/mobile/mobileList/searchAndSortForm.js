import React, { useState, useEffect, useRef } from 'react';

function SearchAndSortForm(props) {
  const [showSortDropdown, toggleSortDropdown] = useState(false);
  const [searchText, setSearchText] = useState('');
  const ref = useRef(false);
  const orderDropdown = {
    asc: 'Low to High',
    desc: 'High to Low'
  };
  const [order, setOrder] = useState(props.order);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      toggleSortDropdown(false);
    }
  }

  function handleOrder(order) {
    setOrder(order);
    toggleSortDropdown(false);
    props.handleOrder(order);
  }

  function searchList({ value }) {
    setSearchText(value);
    props.handleSearchText(value);
  }

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
            value={searchText}
            aria-label="Search"
            onChange={e => searchList(e.target)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            data-testid="searchButton"
          >
            Search
          </button>
        </form>
      </div>
      <div className="col-3">
        <div className="dropdown" ref={ref}>
          <button
            className="btn btn-light border dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-testid="menuBtn"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => toggleSortDropdown(!showSortDropdown)}
          >
            {orderDropdown[order]}
          </button>
          <div
            className={`dropdown-menu ${showSortDropdown && 'd-block'}`}
            aria-labelledby="dropdownMenuButton"
          >
            <button
              className="dropdown-item"
              tpye="button"
              data-testid="ascBtn"
              onClick={() => handleOrder('asc')}
            >
              {orderDropdown.asc}
            </button>
            <button
              className="dropdown-item"
              tpye="button"
              data-testid="descBtn"
              onClick={() => handleOrder('desc')}
            >
              {orderDropdown.desc}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAndSortForm;
