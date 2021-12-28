import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, StyledInput } from './Input.styles';

const Input = forwardRef(({ ...props }, ref) => {
  const { type } = props;
  if (type === 'textarea') {
    return <StyledTextarea {...props} ref={ref} />;
  }
  return <StyledInput {...props} ref={ref} />;
});

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
