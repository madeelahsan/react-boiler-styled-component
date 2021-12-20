import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputIcon } from './InputIcon.styles';

const propTypes = {
  children: PropTypes.node,
  prefix: PropTypes.bool,
  invalid: PropTypes.bool,
  suffix: PropTypes.bool,
};

function InputIcon({ prefix, invalid, suffix, children, ...props }) {
  return (
    <>
      <StyledInputIcon $prefix={prefix} $invalid={invalid} $suffix={suffix} {...props}>
        {children}
      </StyledInputIcon>
    </>
  );
}

InputIcon.propTypes = propTypes;

export default InputIcon;
