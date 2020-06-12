import React, { Component } from 'react';
import Head from 'next/head';
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
      <header className='mb-4'>
        <h1 className='text-5xl'>Universal Native</h1>
        <h4 className='text-xl text-gray-600'>
          Welcome to the democratization platform!
        </h4>
      </header>
      <hr />
      <main className='mt-4'>
        <h2 className='text-3xl font-thin'>Meet The Team</h2>
        <ul className='list-disc list-inside m-5'>
          {members.map((member) => (
            <li key={member.slug} className='py-2'>
              <Link
                as={`/members/${member.slug}`}
                href={`/members?slug=${member.slug}&apiRoute=member`}
              >
                <a className='text-red-600'>{member.title.rendered}</a>
              </Link>
              <span dangerouslySetInnerHTML={bio(member.acf.bio)} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Index;
