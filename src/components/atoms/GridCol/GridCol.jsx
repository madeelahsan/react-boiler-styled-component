import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridCol } from './GridCol.styles';

const propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

const GridCol = ({ children, xs, sm, md, lg, xl, ...props }) => (
  <StyledGridCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props}>
    {children}
  </StyledGridCol>
);

GridCol.propTypes = propTypes;

export default GridCol;
