import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputIcon } from './InputIcon.styles';

const propTypes = {
  children: PropTypes.node,
  prefix: PropTypes.oneOfType([PropTypes.bool, PropTypes.node, PropTypes.object]),
  invalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  suffix: PropTypes.oneOfType([PropTypes.bool, PropTypes.node, PropTypes.object]),
  disabled: PropTypes.bool,
};

function InputIcon({ prefix, invalid, suffix, children, disabled, ...props }) {
  return (
    <>
      <StyledInputIcon $prefix={prefix} $invalid={invalid} $suffix={suffix} disabled={disabled} {...props}>
        {children}
      </StyledInputIcon>
    </>
  );
}

InputIcon.propTypes = propTypes;

export default InputIcon;
