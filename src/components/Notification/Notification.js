import PropTypes from 'prop-types';
import { ItemBold } from './Notification.styled';
export const Notification = ({ message }) => {
  return <ItemBold>{message}</ItemBold>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
