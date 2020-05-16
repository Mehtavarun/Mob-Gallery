import { Switch, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Loader from './Components/shared/loader';
import TitleBar from './Components/shared/titleBar';
import Cart from './Components/cart';

const Login = lazy(() => import('./Components/user/login'));
const Logout = lazy(() => import('./Components/user/logout'));
const MobileList = lazy(() => import('./Components/mobile/mobileList'));
const MobileDetails = lazy(() => import('./Components/mobile/mobileDetails'));
const NotFound = lazy(() => import('./Components/shared/notFound'));

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <TitleBar />
      <Switch>
        <Redirect exact from="/" to="/mobile-phones" />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/logout" render={() => <Logout />} />
        <Route exact path="/mobile-phones" render={() => <MobileList />} />
        <Route exact path="/mobile/:id" render={() => <MobileDetails />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route path="**" render={() => <NotFound />} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
