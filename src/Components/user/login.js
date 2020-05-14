import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './login.css';
import { SET_USER } from '../../Reducers/user';

function Login() {
  let history = useHistory();
  let user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form">
          <h3>ADMIN LOGIN</h3>
          <form id="loginForm">
            <small
              id="loginError"
              className="form-text text-center text-warning mb-2"
            >
              login error
            </small>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={user.username}
                autoFocus
                aria-describedby="usernameErr"
              />
              <small id="usernameErr" className="form-text text-warning">
                *Required Username
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value=""
                aria-describedby="passwordErr"
              />
              <small id="passwordErr" className="form-text text-warning">
                *Required Password
              </small>
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
                onClick={() => dispatch({ type: SET_USER })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
