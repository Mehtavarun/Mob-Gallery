import React, { useEffect, useState } from 'react';
import MobileCard from './mobileCard';
import Pagination from './pagination';
import SearchAndSortForm from './searchAndSortForm';
import { request } from '../../../Utils/Service';

function MobileList(props) {
  const [mobiles, setMobiles] = useState([]);
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    getMobileList();
  }, [order]);

  async function getMobileList() {
    console.log(order);
    const mobileList = await request(
      'GET',
      `/mobiles?_page=1&_limit=10&_sort=price&_order=${order}`
    );
    setMobiles(mobileList.body);
  }

  function handleOrder(order) {
    setOrder(order);
  }

  return (
    <div className="container">
      <SearchAndSortForm order={order} handleOrder={handleOrder} />
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
