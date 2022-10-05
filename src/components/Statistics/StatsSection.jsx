import { StatsItem } from './StatsItem';
import { StatisticSection, StatList, Title } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {{ title } && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
