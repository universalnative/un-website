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
  wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
  wp.heroes = wp.registerRoute('wp/v2', '/heroes/(?P<id>\\d+)');
  const homePage = (await wp.unpages().param('slug', 'home'))[0];
  const homeHero = (await wp.heroes().param('unpages', homePage.id))[0];
  return {
    props: { hero: wpJsonToProps(homeHero) },
  };
};

const Index = ({ hero }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; Home</title>
      </Head>

      <Header />

      <Hero {...hero} />
    </>
  );
};

export default Index;
