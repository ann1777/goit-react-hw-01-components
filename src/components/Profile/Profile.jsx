import React from 'react';
import PropTypes from 'prop-types';

import {
    UserProfileCard,
    UserCard,
    UserPhoto,
    UserName,
    Tag,
    Location,
    UserMediaStatsList,
    Label,
    Quantity,
    MediaStastsListItem,
    MediaStastsListInfo,
} from './Profile.styled';

export const UserProfile = ({ username, avatar, tag, location, stats }) => {
    return (
        <UserProfileCard>
          <UserCard>
            <UserPhoto src={avatar} alt="User avatar" />
            <UserName>{username}</UserName>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
          </UserCard>
    
          <UserMediaStatsList>
            <MediaStastsListItem>
              <MediaStastsListInfo>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
              </MediaStastsListInfo>
            </MediaStastsListItem>
            <MediaStastsListItem>
              <MediaStastsListInfo>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
              </MediaStastsListInfo>
            </MediaStastsListItem>
            <MediaStastsListItem>
              <MediaStastsListInfo>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
              </MediaStastsListInfo>
            </MediaStastsListItem>
          </UserMediaStatsList>
        </UserProfileCard>
    );
};

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
};