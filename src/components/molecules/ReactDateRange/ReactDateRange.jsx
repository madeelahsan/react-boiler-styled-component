import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { StyledDateRange, ButtonHolder } from './ReactDateRange.styles';
import Button from '../../atoms/Button';

function ReactDateRange({ onApply = () => {}, onClear = () => {}, ...props }) {
  return (
    <>
      <StyledDateRange editableDateInputs rangeColors={['#e1ddfb']} {...props} />
      <ButtonHolder>
        <Button type="outline" xs width={100} onClick={onClear}>
          Clear
        </Button>
        <Button type="primary" xs width={100} onClick={onApply}>
          Apply
        </Button>
      </ButtonHolder>
    </>
  );
}

ReactDateRange.propTypes = {
  onApply: PropTypes.func,
  onClear: PropTypes.func,
};
export default ReactDateRange;
