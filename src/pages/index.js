import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import WPAPI from 'wpapi';

import Config from '../config';
import { wpJsonToProps } from '../util/data-util';
import Header from '../components/header';
import Hero from '../components/hero';
import ContentWithPreview from '../components/contentwithpreview';

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
  let sections = [];

  wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
  const homePage = (await wp.unpages().param('slug', 'home'))[0];
  const homePageId = homePage.id;

  wp.pagesections = wp.registerRoute('wp/v2', '/pagesections/(?P<id>\\d+)');
  const homePageSections = await wp.pagesections().param('unpages', homePageId);

  let promises = [];
  homePageSections.forEach((section) => {
    const sectionPostType = section.acf.content['post_type'];
    const sectionPostId = section.acf.content['ID'];

    if (!wp[sectionPostType]) {
      wp[sectionPostType] = wp.registerRoute(
        'wp/v2',
        `/${sectionPostType}/(?P<id>\\d+)`
      );
    }

    promises.push(wp[sectionPostType]().id(sectionPostId));
  });

  const pageData = await Promise.all(promises);
  pageData.forEach((sectionData) => {
    sections.push({
      id: sectionData.id,
      type: sectionData.type,
      data: wpJsonToProps(sectionData),
    });
  });

  return { props: { sections } };
};

const renderSections = (sections) => {
  return sections.map((section, index) => {
    let sectionJsx = [];

    switch (section.type) {
      case 'hero':
        sectionJsx.push(<Hero key={`hero-${section.id}`} {...section.data} />);
        break;
      case 'contentwithpreview':
        sectionJsx.push(
          <ContentWithPreview key={`cwp-${section.id}`} {...section.data} />
        );
        break;
    }

    if (index !== 0 && index !== sections.length - 1) {
      sectionJsx.push(<hr className="my-16" />);
    }

    return sectionJsx;
  });
};

const Index = ({ sections }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; Home</title>
      </Head>

      <Header />

      {renderSections(sections)}
    </>
  );
};

export default Index;
