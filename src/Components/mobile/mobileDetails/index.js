import React, { useEffect, useState } from 'react';
import MobileSummary from './mobileSummary';
import { request } from '../../../Utils/Service';
import { MobileProvider } from './context';

function MobileDetails(props) {
  const [mobile, setMobile] = useState({});

  useEffect(() => {
    (async function() {
      const res = await request('GET', `/mobiles/${props.match.params.id}`);
      setMobile(res.body);
    })();
  }, []);

  return (
    <MobileProvider value={mobile}>
      <div className="container">
        <MobileSummary />
      </div>
    </MobileProvider>
  );
}

export default MobileDetails;
