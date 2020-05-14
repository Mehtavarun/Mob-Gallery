import { Switch, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Loader from './Components/shared/loader';
import TitleBar from './Components/shared/titleBar';

const Login = lazy(() => import('./Components/user/login'));
const Logout = lazy(() => import('./Components/user/logout'));
const NotFound = lazy(() => import('./Components/shared/notFound'));

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <TitleBar />
      <Switch>
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/logout" render={() => <Logout />} />
        <Route path="**" render={() => <NotFound />} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
