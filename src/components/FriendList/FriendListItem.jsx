import PropTypes from 'prop-types';

import { Item, Status, Name, Avatar } from './FriendList.styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} style={{ width: '48px' }} />
      <Name>{name}</Name>
    </Item>
  );
};
FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
