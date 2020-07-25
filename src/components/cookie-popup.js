/**
 * The famous cookie consent popup.
 *
 * Our version is a simple, sticky, full-width, black container shown at the bottom
 * with a message and a button to accept our cookie usage.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-25
 */

import React, { useEffect, useState } from 'react';

import { getCookie } from '../util/html-util';

const COOKIE_NAME = 'cookieConsent';

const CookiePopup = () => {
  const [isConsented, setIsConsented] = useState(true);

  useEffect(() => {
    const cookieConsent = getCookie(COOKIE_NAME);
    setIsConsented(cookieConsent === '1');
  }, []);

  const onAcceptClick = () => {
    document.cookie = `${COOKIE_NAME}=1`;
    setIsConsented(true);
  };

  return !isConsented ? (
    <div className="cookie-popup flex flex-wrap justify-center items-center fixed bottom-0 text-center w-full bg-black p-5 z-30">
      <div className="cookie-popup-msg inline-block text-xs lg:text-sm text-white">
        By continuing to browse this site, you are agreeing to the use of
        cookies, whose purpose is to provide web analytics and measurements of
        visitor traffic and browsing behavior.
      </div>
      <div className="cookie-popup-btn inline-block mt-3 lg:mt-0 lg:ml-3">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1"
          onClick={onAcceptClick}
        >
          Accept
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CookiePopup;
