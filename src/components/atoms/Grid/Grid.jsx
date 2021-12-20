import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './Grid.styles';

const propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  rowGap: PropTypes.number,
  colGap: PropTypes.number,
  colWidth: PropTypes.number,
};

const Grid = ({ children, xs, sm, md, lg, xl, gap, rowGap, colGap, colWidth, ...props }) => (
  <StyledGrid
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    gap={gap}
    rowGap={rowGap}
    colGap={colGap}
    colWidth={colWidth}
    {...props}>
    {children}
  </StyledGrid>
);

Grid.propTypes = propTypes;

export default Grid;
