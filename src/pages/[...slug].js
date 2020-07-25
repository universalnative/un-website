/**
 * Catch-all dynamic route page template.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-22
 */

import React from 'react';
import Head from 'next/head';
import WPAPI from 'wpapi';

import Config from '../config';
import { wpJsonToProps } from '../util/data-util';
import { makeTitle } from '../util/html-util';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import ContentWithPreview from '../components/contentwithpreview';
import Carousel from '../components/carousel';

/**
 * Configure WPAPI.
 */
// Basic configuration
const wp = new WPAPI({ endpoint: Config.apiUrl, auth: true });
// Register known custom routes ahead of time
wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
wp.navlinks = wp.registerRoute('wp/v2', '/navlinks/(?P<id>\\d+)');
wp.pagesections = wp.registerRoute('wp/v2', '/pagesections/(?P<id>\\d+)');
wp.hero = wp.registerRoute('wp/v2', '/heroes/(?P<id>\\d+)');
wp.contentwithpreview = wp.registerRoute(
  'wp/v2',
  '/contentwithpreview/(?P<id>\\d+)'
);
wp.carousel = wp.registerRoute('wp/v2', '/carousels/(?P<id>\\d+)');

/**
 * Returns a list of all page (route) objects.
 *
 * A page is essentially a term in "UN Page" taxonomy.
 */
const getAllPages = async () => {
  return await wp.unpages();
};

/**
 * Returns a list of all navlink objects.
 *
 * A Nav Link is a custom post type linked to a "UN Page".
 * This list will usually be a subset of list returned by `getAllPages`.
 */
const getAllNavlinks = async () => {
  const links = await wp.navlinks();
  return links.map((link) => wpJsonToProps(link));
};

/**
 * Returns all supported routes.
 */
export async function getStaticPaths() {
  const pages = await getAllPages();

  return {
    paths: pages.map((p) => ({ params: { slug: [p.slug] } })),
    fallback: false,
  };
}

/**
 * Returns props that will be passed to the page component.
 *
 * @param {Object} param Current route params based on data returned by `getStaticPaths`.
 */
export const getStaticProps = async ({ params }) => {
  // Get slug (route name) for the current page
  const slug = (params.slug && params.slug.join('/')) || 'home';

  // Get content sections for the current page
  let sections = [];

  const page = (await wp.unpages().param('slug', slug))[0];
  const pageId = page.id;
  const pageSections = await wp.pagesections().param('unpages', pageId);

  let promises = [];
  pageSections.forEach((section) => {
    const sectionPostType = section.acf.content['post_type'];
    const sectionPostId = section.acf.content['ID'];

    promises.push(wp[sectionPostType]().id(sectionPostId));
  });

  try {
    const pageData = await Promise.all(promises);
    pageData.forEach((sectionData) => {
      sections.push({
        id: sectionData.id,
        type: sectionData.type,
        data: wpJsonToProps(sectionData),
      });
    });
  } catch (e) {
    console.log(e);
  }

  // Get nav links for the Header
  const navlinks = await getAllNavlinks();

  // Return props for the current page
  return { props: { sections, slug, navlinks } };
};

/**
 * Builds and returns the JSX for all page sections.
 */
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
      case 'carousel':
        sectionJsx.push(
          <Carousel key={`carousel-${section.id}`} {...section.data} />
        );
        break;
    }

    if (index !== 0 && index !== sections.length - 1) {
      sectionJsx.push(<hr className="my:8 lg:my-16" />);
    }

    return sectionJsx;
  });
};

/**
 * Our main page template. It represents all content pages on the site.
 *
 * Using this pattern over a Layout component has its benefits:
 *
 * - no requirement for a Layout HOC and wiring it up in _app.js
 * - common page data, such as navlinks, can be fetched on server-side (components and App do not support this)
 * - a clean and central place for all SSR stuff
 * - SSG-friendly
 */
const Page = ({ sections, slug, navlinks }) => {
  return (
    <>
      <Head>
        <title>Universal Native &mdash; {makeTitle(slug)}</title>
      </Head>

      <Header navlinks={navlinks} />

      {renderSections(sections)}

      <Footer />
    </>
  );
};

export default Page;
