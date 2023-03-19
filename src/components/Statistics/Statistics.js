import PropTypes from 'prop-types';

import { Item, ItemBold } from './Statistics.styled.js';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <Item>Good : {good}</Item>
    <Item>Neutral : {neutral}</Item>
    <Item>Bad : {bad}</Item>
    <ItemBold>Total : {total}</ItemBold>
    <ItemBold>Positive feedback : {positivePercentage}%</ItemBold>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

//{options.map(({ key, label }) => {
//       return (
//       <p key={key}>
//       {label} : {this.state[key]}
//     </p>
//  );
// })}
//<p>Positive feedback : {this.countPositiveFeedbackPercentage()}%</p>
