import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl, auth: true });

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

class Index extends Component {
  state = { id: '' };

  static async getInitialProps() {
    const posts = await wp.posts().embed();
    return { posts };
  }

  _getHiddenStuff() {
    const token = localStorage.getItem(Config.AUTH_TOKEN);
    console.log(`token: ${token}`);

    if (token) {
      wp.setHeaders('Authorization', `Bearer ${token}`);
      wp.users()
        .me()
        .then((me) => {
          this.setState({ id: me.id });
        })
        .catch((e) => {
          if (e.data.status === 401) {
            tokenExpired();
          }
        });
    } else {
      tokenExpired();
    }
  }

  componentDidMount() {
    // this._getHiddenStuff();
  }

  render() {
    const { posts } = this.props;

    const fposts = posts.map((post) => {
      return (
        <ul key={post.slug}>
          <li>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });

    return <div>{fposts}</div>;
  }
}

export default Index;
