import React from 'react';
import PropTypes from 'prop-types';
import { StyledFakeLabel, RequiredAsterisk } from './FakeLabel.styles';

const propTypes = {
  children: PropTypes.node,
  required: PropTypes.bool,
  labelIcon: PropTypes.node,
};

function FakeLabel({ children, required, labelIcon, ...props }) {
  return (
    <>
      <StyledFakeLabel {...props}>
        {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
        {children}
        {labelIcon && labelIcon}
      </StyledFakeLabel>
    </>
  );
}

FakeLabel.propTypes = propTypes;

export default FakeLabel;
