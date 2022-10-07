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
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
