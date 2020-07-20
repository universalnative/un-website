import React from 'react';

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="footer-content flex flex-row justify-around bg-gray-800 text-xs text-gray-500 py-8">
        <div className="mx-5 text-left">
          <p className="brand-logo flex items-center">
            <img
              alt="Logo"
              src="https://avatars3.githubusercontent.com/u/63502522?s=40&v=4"
            />
            <a
              href="https://universalnative.org"
              className="text-xl text-white"
            >
              Universal Native
            </a>
          </p>
          <p className="mt-5">
            On a mission to make <span className="border-b">all</span>{' '}
            information accessible to <span className="border-b">all</span>.
          </p>
        </div>
        <div className="mx-5 text-left">
          <h3 className="text-xl text-white my-3">Community</h3>
          <ul>
            <li>Projects</li>
            <li>Blog</li>
            <li>Getting Involved</li>
          </ul>
        </div>
        <div className="mx-5 text-left">
          <h3 className="text-xl text-white my-3">About</h3>
          <ul>
            <li>Organization</li>
            <li>Team</li>
            <li>Partners</li>
            <li>Manifesto</li>
          </ul>
        </div>
        <div className="mx-5 text-left">
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
