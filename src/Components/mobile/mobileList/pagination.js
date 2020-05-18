import React from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
  const { count, activePage = 1 } = props;
  const totalPages = Math.ceil(count / 10);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-5 mb-5">
        <li className={`page-item ${activePage - 1 === 0 && 'disabled'}`}>
          <Link
            className="page-link"
            to={`/mobile-phones?page=${activePage - 1}`}
            tabIndex="-1"
          >
            Previous
          </Link>
        </li>
        {[...Array(totalPages)].map((num, index) => {
          return (
            <li
              className={`page-item${index + 1 === activePage && ' active'}`}
              aria-current="page"
              key={index + 1}
            >
              <Link
                className="page-link"
                to={`/mobile-phones?page=${index + 1}`}
              >
                {index + 1} <span className="sr-only">(current)</span>
              </Link>
            </li>
          );
        })}
        <li className={`page-item ${activePage === totalPages && 'disabled'}`}>
          <Link
            className="page-link"
            to={`/mobile-phones?page=${activePage + 1}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
