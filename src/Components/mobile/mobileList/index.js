import React from 'react';
import MobileCard from './mobileCard';
import Pagination from './pagination';
import SearchAndSortForm from './searchAndSortForm';

function MobileList() {
  return (
    <div className="container">
      <SearchAndSortForm />
      <MobileCard />
      <Pagination />
    </div>
  );
}

export default MobileList;
