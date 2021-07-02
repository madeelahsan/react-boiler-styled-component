import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = propTypes;

export default Button;
