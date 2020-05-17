import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { resetUser } from '../../Actions/user';

function Logout() {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('loggedInUser');
    resetUser();
    history.replace('/login');
  }, []);
  return <Fragment />;
}

export default Logout;
