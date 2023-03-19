import PropTypes from 'prop-types';

import { Container } from './Section.styled.js';

export const Section = ({ title, children }) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
