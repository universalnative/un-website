/**
 * TeamMember component.
 *
 * Displays a team member profile.
 * Adjusts as per whether it's inside or outside a ContentGrid.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-08-01
 */

import React from 'react';
import PropTypes from 'prop-types';

import { sanitizeHtml } from '../util/html-util';

const TeamMember = (props) => {
  return (
    <div className="member text-left mx-3 mt-3 md:max-w-xs lg:max-w-sm">
      <h3 className="member-name text-2xl text-blue-700">{props.title}</h3>
      <div className="member-pic mt-3">
        <img
          className="rounded-full inline"
          alt={`Photo of ${props.title}`}
          src={props.photo.sizes.medium}
          width="150"
        />
      </div>
      <div className="member-social mt-3">
        <a href={props.linkedin_profile}>
          <img
            className="inline"
            alt="LinkedIn logo"
            src="/linkedin.png"
            width="32"
          />
        </a>
      </div>
      <div className="member-bio text-gray-600 mt-3">{props.bio}</div>
      <div className="member-career mt-3">
        <h4 className="text-xl font-bold mb-0">Career</h4>
        <span
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(props.career),
          }}
        />
      </div>
      <div className="member-education mt-3">
        <h4 className="text-xl font-bold mb-0">Education</h4>
        <span
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(props.education),
          }}
        />
      </div>
      <div className="member-country mt-3">
        <h4 className="text-xl font-bold mb-0">Country</h4>
        <span className="text-gray-600">{props.country}</span>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.object,
  bio: PropTypes.string,
  career: PropTypes.string,
  education: PropTypes.string,
  country: PropTypes.string,
  linkedin_profile: PropTypes.string,
  isInGrid: PropTypes.bool,
};

export default TeamMember;
