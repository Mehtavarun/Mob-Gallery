import React, { lazy, Suspense, useEffect, useState } from 'react';
import { withRouter, Redirect, Switch, Route } from 'react-router-dom';
import Loader from './Components/shared/loader';
import TitleBar from './Components/shared/titleBar';
import Cart from './Components/cart';
import { isLoggedInUser } from './Utils/util';
import OrderSuccess from './Components/cart/orderSuccess';

const Login = lazy(() => import('./Components/user/login'));
const Logout = lazy(() => import('./Components/user/logout'));
const MobileList = lazy(() => import('./Components/mobile/mobileList'));
const MobileDetails = lazy(() => import('./Components/mobile/mobileDetails'));
const NotFound = lazy(() => import('./Components/shared/notFound'));

function Routes() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    userHasAuthenticated(isLoggedInUser());
    userHasAuthenticated(true);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <TitleBar />
      <Switch>
        <Redirect exact from="/" to="/mobile-phones" />
        <Route exact path="/login" render={props => <Login />} />
        <Route exact path="/logout" render={() => <Logout />} />
        <Route
          exact
          path="/mobile-phones"
          render={props => <MobileList location={props.location} />}
        />
        <Route
          exact
          path="/mobile/:id"
          render={props => <MobileDetails match={props.match} />}
        />
        <AuthenticatedRoute
          exact
          path="/cart"
          component={Cart}
          isAuthenticated={isAuthenticated}
        />
        <AuthenticatedRoute
          exact
          path="/order-success"
          component={OrderSuccess}
          isAuthenticated={isAuthenticated}
        />
        <Route path="**" render={() => <NotFound />} />
      </Switch>
    </Suspense>
  );
}

function AuthenticatedRoute({
  component: Component,
  isAuthenticated,
  ...props
}) {
  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

export default withRouter(Routes);
