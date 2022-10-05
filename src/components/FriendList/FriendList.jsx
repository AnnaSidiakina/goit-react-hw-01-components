// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FriendsContainer, Container } from './FriendList.styled';
import { FriendsItem } from './FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <Container>
      <FriendsContainer>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsContainer>
    </Container>
  );
};

Friends.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
