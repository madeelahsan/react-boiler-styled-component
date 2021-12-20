import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Label.styles';

const propTypes = {
  children: PropTypes.node,
  onlyRead: PropTypes.bool,
};

function Label({ children, onlyRead, ...props }) {
  return (
    <>
      <StyledLabel $onlyRead={onlyRead} {...props}>
        {children}
      </StyledLabel>
    </>
  );
}

Label.propTypes = propTypes;

export default Label;
