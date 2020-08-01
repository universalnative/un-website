/**
 * ContentGrid component.
 *
 * Displays a list of content posts as a grid.
 * Posts may be team members, articles, etc. dependending on the type of ContentGrid.
 *
 * @author Anurag Bhandari <ab@anuragbhandari.com>
 * @since  2020-07-31
 */

import React from 'react';
import PropTypes from 'prop-types';

import TeamMember from './teammember';

const ContentGrid = ({ title, type, team_members, articles }) => {
  return (
    <div className="content-grid flex flex-wrap justify-center mx-3 md:mx-0">
      {team_members &&
        team_members.map((member) => (
          <TeamMember {...member} isInGrid={true} />
        ))}
    </div>
  );
};

ContentGrid.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['team', 'articles']),
  team_members: PropTypes.array,
  articles: PropTypes.array,
};

export default ContentGrid;
