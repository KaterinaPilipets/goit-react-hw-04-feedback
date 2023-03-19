// import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(el => {
      return (
        <Button key={el} type="button" onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      );
    })}
  </Container>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
