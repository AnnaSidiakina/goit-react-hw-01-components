// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FriendsList, Container } from './FriendList.styled';
import { FriendsItem } from './FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </Container>
  );
};

Friends.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
