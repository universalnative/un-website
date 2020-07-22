import React, { Component } from 'react';
import Head from 'next/head';
import WPAPI from 'wpapi';

import Config from '../config';
import { wpJsonToProps } from '../util/data-util';
import { makeTitle } from '../util/html-util';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import ContentWithPreview from '../components/contentwithpreview';

const wp = new WPAPI({ endpoint: Config.apiUrl, auth: true });

export async function getStaticPaths() {
  wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
  const unpages = await wp.unpages();

  return {
    paths: unpages.map((p) => ({ params: { slug: [p.slug] } })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = (params.slug && params.slug.join('/')) || 'home';

  let sections = [];

  wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
  const homePage = (await wp.unpages().param('slug', slug))[0];
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

  return { props: { sections, slug } };
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

const Page = ({ sections, slug }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; {makeTitle(slug)}</title>
      </Head>

      <Header />

      {renderSections(sections)}

      <Footer />
    </>
  );
};

export default Page;
