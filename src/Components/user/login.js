import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../../Reducers/user';
import { isLoggedInUser } from '../../Utils/util';
import { request } from '../../Utils/Service';
import './login.css';

function Login(props) {
  let history = useHistory();
  const field = { value: '', valid: false, error: '' };
  let [username, setUsername] = useState(field);
  let [password, setPassword] = useState(field);
  let [formErr, setFormErr] = useState({ valid: false, error: '' });
  let [disabledBtn, setDisabledBtn] = useState(false);
  const dispatch = useDispatch();
  const [returnUrl, setReturnUrl] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('returnUrl') || 'mobile-phones';
    setReturnUrl(url);
    if (isLoggedInUser()) {
      history.push(url);
    }
  }, []);

  function validate({ name, value }) {
    switch (name) {
      case 'username':
        if (value.trim() === '') {
          setUsername({
            value,
            valid: false,
            error: '*Required Username'
          });
        }
        break;
      case 'password':
        if (value.trim() === '') {
          setPassword({
            value,
            valid: false,
            error: '*Required password'
          });
        }
        break;
    }
  }

  async function handleSubmit() {
    if (username.valid && password.valid) {
      setDisabledBtn(true);
      const response = await request(
        'GET',
        `/users?username=${username.value}&password=${password.value}`
      );
      const body = response.body[0];
      if (response.status === 200 && body) {
        dispatch({ type: SET_USER, value: body });
        localStorage.setItem('loggedInUser', username.value);
        history.push(returnUrl);
      } else {
        setFormErr('Invalid username/password');
        setDisabledBtn(true);
      }
    } else {
      setUsername({
        value: username.value,
        valid: false,
        error: '*Required Username'
      });
      setPassword({
        value: password.value,
        valid: false,
        error: '*Required password'
      });
    }
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form">
          <h3>ADMIN LOGIN</h3>
          <form id="loginForm">
            {!formErr && (
              <small
                id="loginError"
                className="form-text text-center text-warning mb-2"
              >
                {formErr.error}
              </small>
            )}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username.value}
                autoFocus
                onChange={e => {
                  const user = e.target;
                  setUsername({ ...username, valid: true, value: user.value });
                  validate(user);
                }}
                aria-describedby="usernameErr"
              />
              {!username.valid && (
                <small id="usernameErr" className="form-text text-warning">
                  {username.error}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={e => {
                  const password = e.target;
                  setPassword({
                    ...password,
                    valid: true,
                    value: password.value
                  });
                  validate(password);
                }}
                value={password.value}
                aria-describedby="passwordErr"
              />
              {!password.valid && (
                <small id="passwordErr" className="form-text text-warning">
                  {password.error}
                </small>
              )}
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btnSubmit"
                value="Login"
                disabled={disabledBtn}
                onClick={() => handleSubmit()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
