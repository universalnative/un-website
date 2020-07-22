import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WPAPI from 'wpapi';

import Config from '../config';
import NavLink from './nav-link';
import { makeTitle } from '../util/html-util';

const HAMBURGER_ICON = 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z';
const CLOSE_ICON =
  'M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z';

const wp = new WPAPI({ endpoint: Config.apiUrl, auth: true });

const Nav = () => {
  const [menuDisplay, setMenuDisplay] = useState('hidden');
  const [pageSlugs, setPageSlugs] = useState([]);

  useEffect(() => {
    (async () => {
      wp.unpages = wp.registerRoute('wp/v2', '/unpages/(?P<id>\\d+)');
      const unpages = await wp.unpages();
      setPageSlugs(unpages.map((p) => p.slug));
    })();
  }, []);

  const onMenuBtnClick = (e) => {
    if (menuDisplay === 'hidden') {
      setMenuDisplay('block');
    } else {
      setMenuDisplay('hidden');
    }
  };

  return (
    <nav className="nav flex flex-wrap justify-between items-center">
      <div className="nav-brand flex items-center flex-shrink-0">
        <Link href="/[...slug]" as="/home">
          <a>
            <img
              alt="Logo"
              src="https://avatars3.githubusercontent.com/u/63502522?s=40&v=4"
            />
          </a>
        </Link>
        <Link href="/[...slug]" as="/home">
          <a className="text-xl md:text-2xl lg:text-3xl text-blue-700">
            Universal Native
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={onMenuBtnClick}
          className="flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d={menuDisplay === 'hidden' ? HAMBURGER_ICON : CLOSE_ICON} />
          </svg>
        </button>
      </div>
      <div
        className={`nav-links absolute lg:relative bg-white lg:bg-transparent top-0 left-0 mt-12 md:mt-16 lg:mt-0 w-full ${menuDisplay} lg:flex lg:items-center lg:w-auto`}
      >
        {pageSlugs
          .filter((slug) => slug !== 'home')
          .map((slug) => (
            <NavLink
              key={slug}
              slug={slug}
              text={makeTitle(slug)}
              isButton={false}
            />
          ))}
        <NavLink slug="join-us" text="Join Us" isButton={true} />
      </div>
    </nav>
  );
};

export default Nav;
