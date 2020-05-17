import React, { useEffect, useState } from 'react';
import MobileCard from './mobileCard';
import Pagination from './pagination';
import SearchAndSortForm from './searchAndSortForm';
import { request } from '../../../Utils/Service';
import useDebounce from '../../../Utils/debounce';

function MobileList(props) {
  const [mobiles, setMobiles] = useState([]);
  const [order, setOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);
  const debouncedSearchText = useDebounce(searchText, 500);
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  let page = pageParam ? Number(pageParam) : 1;

  useEffect(() => {
    page = pageParam ? Number(pageParam) : 1;
    if (debouncedSearchText) {
      setMobileList(debouncedSearchText);
    } else {
      setMobileList();
    }
  }, [order, debouncedSearchText, window.location.search]);

  async function setMobileList(searchText = '') {
    const mobileList = await request(
      'GET',
      `/mobiles?_page=${page}&_limit=10&_sort=price&_order=${order}&q=${searchText}`
    );
    setCount(mobileList.count);
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
      <Pagination count={count} activePage={page} />
    </div>
  );
}

export default MobileList;
