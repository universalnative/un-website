import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import WPAPI from 'wpapi';

import Config from '../config';
import { wpJsonToProps } from '../util/data-util';
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
  let props = {};

  const unpage = await wp.taxonomies().taxonomy('unpage');
  const postTypes = unpage.types;

  wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
  const homePage = (await wp.unpages().param('slug', 'home'))[0];
  const homePageId = homePage.id;

  let promises = [];
  postTypes.forEach((type) => {
    wp[type] = wp.registerRoute('wp/v2', `/${type}/(?P<id>\\d+)`);
    promises.push(wp[type]().param('unpages', homePageId));
  });

  const results = await Promise.all(promises);
  postTypes.forEach((type, index) => {
    props[type] = results[index].map((item) => wpJsonToProps(item));
  });

  return { props };
};

const Index = ({ hero }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; Home</title>
      </Head>

      <Header />

      {hero.map((h) => (
        <Hero {...h} />
      ))}
    </>
  );
};

export default Index;
