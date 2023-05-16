import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem, Status, Image, Name } from './FriendsListItem.styled';

export const FriendsListItem = ( { avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


/* 
<li class="item">
    <span class="status"></span>
    <img class="avatar" src="" alt="User avatar" width="48" />
    <p class="name"></p>
</li> 
*/