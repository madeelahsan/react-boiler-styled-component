import React from 'react';
// import PropTypes from 'prop-types';
import { StyledDateRange } from './ReactDateRange.styles';

const propTypes = {};

function ReactDateRange({ ...props }) {
  return (
    <>
      <StyledDateRange editableDateInputs rangeColors={['#e1ddfb']} {...props} />
    </>
  );
}

ReactDateRange.propTypes = propTypes;

export default ReactDateRange;
