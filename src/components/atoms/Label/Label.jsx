import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { StyledLabel, RequiredAsterisk } from './Label.styles';

const propTypes = {
  children: PropTypes.node,
  labelIcon: PropTypes.node,
  onlyRead: PropTypes.bool,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

function Label({ children, onlyRead, required, labelIcon, ...props }) {
  return (
    <>
      <StyledLabel $onlyRead={onlyRead} labelIcon={labelIcon} {...props}>
        {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
        {children}
        {labelIcon && <span css="margin-left: 5px;">{labelIcon}</span>}
      </StyledLabel>
    </>
  );
}

Label.propTypes = propTypes;

export default Label;
