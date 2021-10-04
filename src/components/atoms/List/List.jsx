import React from 'react';
import PropTypes from 'prop-types';
import { Ol, Ul } from './List.styles';

const propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node,
};

function List({ ordered, children, ...props }) {
  return <>{ordered ? <Ol {...props}>{children}</Ol> : <Ul {...props}>{children}</Ul>}</>;
}

List.propTypes = propTypes;

export default List;
