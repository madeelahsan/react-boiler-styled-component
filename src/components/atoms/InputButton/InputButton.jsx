import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './InputButton.styles';

const propTypes = {
  children: PropTypes.node,
};

function InputButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

InputButton.propTypes = propTypes;

export default InputButton;
