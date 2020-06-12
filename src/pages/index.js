import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import WPAPI from 'wpapi';

import Config from '../config';
import Header from '../components/header';
import Hero from '../components/hero';

const wp = new WPAPI({ endpoint: Config.apiUrl, auth: true });

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

const _getHiddenStuff = () => {
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
};

export const getStaticProps = async () => {
  wp.members = wp.registerRoute('wp/v2', '/members/(?P<id>\\d+)');
  const members = await wp.members();
  return { props: { members } };
};

const bio = (htmlText) => {
  return { __html: htmlText };
};

const Index = ({ members }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; Home</title>
      </Head>

      <Header />

      <Hero />
    </>
  );
};

export default Index;
