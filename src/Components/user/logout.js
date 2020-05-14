import React, { useEffect, Fragment } from 'react';
// import { API_URL, resetCookies } from '../../Utils/util';
// import { getApi } from '../../Utils/Api';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    // (async () => {
    //   const res = await getApi(`${API_URL}/logout`);
    //   if (res.status === 200) {
    //     resetCookies();
    //     history.replace('/login');
    //   }
    // })();
  }, []);
  return <Fragment />;
};
