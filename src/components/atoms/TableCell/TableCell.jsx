import React from 'react';
import PropTypes from 'prop-types';
import { Th, Td } from './TableCell.styles';

const propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.node,
};

function TableCell({ heading, children, ...rest }) {
  const CellType = props => (heading ? <Th {...props} /> : <Td {...props} />);

  return (
    <>
      <CellType {...rest}>{children}</CellType>
    </>
  );
}

TableCell.propTypes = propTypes;

export default TableCell;
