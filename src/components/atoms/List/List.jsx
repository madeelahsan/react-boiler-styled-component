import React from 'react';
import PropTypes from 'prop-types';
import { Ol, Ul } from './List.styles';

const propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node,
  bullets: PropTypes.bool,
};

function List({ ordered, bullets, children, ...props }) {
  return (
    <>
      {ordered ? (
        <Ol {...props}>{children}</Ol>
      ) : (
        <Ul bullets={bullets} {...props}>
          {children}
        </Ul>
      )}
    </>
  );
}

List.propTypes = propTypes;

export default List;
