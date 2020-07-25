import React from 'react';

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="footer-content flex flex-wrap justify-around bg-gray-800 text-xs text-gray-500 py-8 sm:text-left">
        <div className="mx-5 w-full lg:w-auto">
          <p className="brand-logo flex justify-center lg:justify-start items-center">
            <img alt="Logo" src="/un-logo.png" />
            <a
              href="https://universalnative.org"
              className="text-xl text-white"
            >
              Universal Native
            </a>
          </p>
          <p className="mt-5 text-center lg:text-left">
            On a mission to make <b>all</b> information accessible to <b>all</b>
            .
          </p>
        </div>
        <div className="mx-5">
          <h3 className="text-xl text-white my-3">Community</h3>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Getting Involved</a>
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <h3 className="text-xl text-white my-3">About</h3>
          <ul>
            <li>
              <a href="#">Organization</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Manifesto</a>
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <h3 className="text-xl text-white my-3">Contact Us</h3>
          <p className="my-3">101, Dr. Kalam Road, New Delhi 110 001</p>
          <p className="my-3">
            <a
              className="text-yellow-200"
              href="mailto:team@universalnative.org"
            >
              team@universalnative.org
            </a>
          </p>
        </div>
      </div>
      <div className="footer-copyright bg-black text-gray-600 text-xs py-3">
        &copy; 2020 Universal Native
      </div>
    </div>
  );
};

export default Footer;
