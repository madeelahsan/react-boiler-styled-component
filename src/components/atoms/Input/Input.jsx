import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, StyledInput } from './Input.styles';

const Input = ({ ...props }) => {
  const { type } = props;
  if (type === 'textarea') {
    return <StyledTextarea {...props} />;
  }
  return <StyledInput {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
