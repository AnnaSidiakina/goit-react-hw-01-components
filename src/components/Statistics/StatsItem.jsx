import { Item, Label, Percentage } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatsItem = ({ label, percentage }) => {
  return (
    <Item style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
