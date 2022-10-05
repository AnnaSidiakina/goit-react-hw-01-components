import userData from '../user.json';
import statisticsData from '../data.json';
import User from './UserProfile/UserProfile';
import { Statistics } from './Statistics/StatsSection';

export const App = () => {
  return (
    <div>
      <User
        key={userData.username}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />

      <Statistics title="Upload Stats" stats={statisticsData} />
    </div>
  );
};
