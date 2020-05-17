import React from 'react';

function Pagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-5 mb-5">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="#"
            // tabindex={'-1'}
            aria-disabled="true"
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
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
