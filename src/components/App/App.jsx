import userData from '../../user.json';
import statisticsData from '../../data.json';
import friendsData from '../../friends.json';
import User from '../UserProfile/UserProfile';
import { Statistics } from '../Statistics/StatsSection';
import { Friends } from '../FriendList/FriendList';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <User
        key={userData.username}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />

      <Statistics title="Upload Stats" stats={statisticsData} />
      <Friends friends={friendsData} />
    </Container>
  );
};