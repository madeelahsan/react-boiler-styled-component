import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { LoadingContext } from '../../../context/loadingContext';
import { Th, Td } from './TableCell.styles';

const propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.node,
};

function TableCell({ heading, children, ...rest }) {
  const { isLoading } = useContext(LoadingContext);
  const CellType = props => (heading ? <Th {...props} /> : <Td {...props} />);

  return <CellType {...rest}>{isLoading ? <Skeleton width={100} height={15} /> : children}</CellType>;
}

TableCell.propTypes = propTypes;

export default TableCell;
