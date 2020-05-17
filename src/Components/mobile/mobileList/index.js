import React, { useEffect, useState } from 'react';
import MobileCard from './mobileCard';
import Pagination from './pagination';
import SearchAndSortForm from './searchAndSortForm';
import { request } from '../../../Utils/Service';
import useDebounce from '../../../Utils/debounce';

function MobileList() {
  const [mobiles, setMobiles] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchText) {
      setMobileList(debouncedSearchText);
    } else {
      setMobileList();
    }
  }, [order, debouncedSearchText]);

  async function setMobileList(searchText = '') {
    const mobileList = await request(
      'GET',
      `/mobiles?_page=1&_limit=10&_sort=price&_order=${order}&q=${searchText}`
    );
    setMobiles(mobileList.body);
  }

  function handleOrder(order) {
    setOrder(order);
  }

  function handleSearchText(value) {
    setSearchText(value);
  }

  return (
    <div className="container">
      <SearchAndSortForm
        order={order}
        handleOrder={handleOrder}
        handleSearchText={handleSearchText}
      />
      <div className="row mt-4">
        {mobiles.map((mobile, i) => {
          return <MobileCard key={mobile.id} mobile={mobile} />;
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default MobileList;
