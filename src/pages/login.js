import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Router from 'next/router';
import Config from '../config';

class Login extends Component {
  state = {
    username: '',
    password: '',
    message: '',
  };

  static async getInitialProps() {
    return {};
  }

  async login() {
    let message = '';
    this.setState({ message });
    const { username, password } = this.state;

    const res = await fetch(`${Config.apiUrl}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.data && data.data.status === 403) {
      this.setState({ message: data.message });
      return;
    }

    localStorage.setItem(Config.AUTH_TOKEN, data.token);
    localStorage.setItem(Config.USERNAME, data.user_nicename);
    Router.push('/');
  }

  render() {
    const { username, password, message } = this.state;

    return (
      <div className='content login mh4 mv4 w-two-thirds-l center-l'>
        <div>
          <h1>Log in</h1>
          <p>
            Starter Kit allows you to log in via the JavaScript frontend,
            meaning you can interact with the backend without gaining admin
            access.
          </p>
          <p>
            <strong>
              Log in to view hidden posts only available to authenticated users.
            </strong>
          </p>
          <p className='message mb3'>
            <strong>{message}</strong>
          </p>
          <form
            onSubmit={(e) => {
              this.login();
              e.preventDefault();
            }}
          >
            <input
              className='db w-100 pa3 mv3 br6 ba b--black'
              value={username}
              onChange={(e) => this.setState({ username: e.target.value })}
              type='text'
              placeholder='Username'
            />
            <input
              className='db w-100 pa3 mv3 br6 ba b--black'
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type='password'
              placeholder='Password'
            />
            <input
              className='round-btn invert ba bw1 pv2 ph3'
              type='submit'
              value='Log in'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
