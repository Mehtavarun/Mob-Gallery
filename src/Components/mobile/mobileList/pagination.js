import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
  const { count, activePage } = props;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-5 mb-5">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="#"
            tabIndex={'-1'}
            aria-disabled="true"
          >
            Previous
          </a>
        </li>
        {[...Array(Math.ceil(count / 10))].map((i, page) => {
          return (
            <li
              className={`page-item${page + 1 === activePage && ' active'}`}
              aria-current="page"
              key={page + 1}
            >
              <Link
                className="page-link"
                to={`/mobile-phones?page=${page + 1}`}
              >
                {page + 1} <span className="sr-only">(current)</span>
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
