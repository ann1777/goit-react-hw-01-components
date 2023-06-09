import React from 'react';
import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import { FriendsList } from './FriendsList.styled';

export const FriendList = ({friends}) => {
    return (
      <FriendsList>
        {
          friends.map((friend) => (
            <FriendsListItem
              key={friend.id}
              id={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}/>
          ))
        }
     </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired
    
}


/* 
<ul>
    <li class="item">
        <span class="status"></span>
        <img class="avatar" src="" alt="User avatar" width="48" />
        <p class="name"></p>
    </li>
</ul>
 */