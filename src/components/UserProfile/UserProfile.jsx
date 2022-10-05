import PropTypes from 'prop-types';
import defaultImage from '../../user.json';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './UserProfile.styled';

export default function User({
  avatar = defaultImage,
  username,
  tag,
  location,
  stats,
}) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
}
User.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
