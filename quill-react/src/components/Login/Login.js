import React from 'react';

import logo from '../../assets/images/logo-color.svg';
import './login.scss';

const Login = () => {
  return (
    <div id="login">
      <div class="container">
        <div class="content">
          <div class="ui segment">

            <div class="logo">
              <img src={logo} />
            </div>

            <div class="ui divider" />

            {/* <div class="ui small error message" ng-show="error">
              {error}
            </div> */}

            <div ng-show="loginState === 'login'">
              <div class="ui login-password form">
                <form ng-submit="login()">
                  <div class="field">
                    <label> Email</label>
                    <input type="email"
                          id='email'
                          placeholder="foo@bar.edu"
                          ng-model="email" />
                  </div>
                  <div class="field">
                    <label> Password</label>
                    <input type="password"
                          id='password'
                          placeholder="Password (at least 6 characters)"
                          ng-model="password" required />
                  </div>
                  <div class="field">
                    <button id="login-password"
                            type="submit"
                            class="fluid ui login button">
                            Login
                    </button>
                  </div>
                </form>
              </div>

              <div class="ui form" ng-show="regIsOpen">
                <div class="ui divider"></div>
                <div class="field">
                  <button id="register"
                          type="submit"
                          class="fluid ui register button"
                          ng-click="register()">
                          Register
                  </button>
                </div>
              </div>
            </div>

            <div ng-show="loginState === 'forgot'">
              <div class="ui forgot-password form">
                <form ng-submit="sendResetEmail()">
                  <div class="field">
                    <label> Email</label>
                    <input type="email"
                          id='email'
                          placeholder="foo@bar.edu"
                          ng-model="email" />
                  </div>
                  <div class="field">
                    <button id="forgot-password"
                            type="submit"
                            class="fluid ui login button">
                            Send Reset Email
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="ui divider"></div>

            <div ng-show="loginState === 'login'" class="forgot">
              <a href="#" ng-click="setLoginState('forgot')">
                Forgot Password?
              </a>
            </div>

            <div ng-show="loginState === 'forgot'" class="forgot">
              <a href="#" ng-click="setLoginState('login')">
                {/* {{regIsOpen ? 'Login or Register' : 'Login'}} */}
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;