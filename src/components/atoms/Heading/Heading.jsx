import React from 'react';
import PropTypes from 'prop-types';
import { H1, H2, H3, H4, H5 } from './Heading.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
};

function Heading({ level, children, ...rest }) {
  switch (level) {
    case 1:
      return <H1 {...rest}>{children}</H1>;
    case 2:
      return <H2 {...rest}>{children}</H2>;
    case 3:
      return <H3 {...rest}>{children}</H3>;
    case 4:
      return <H4 {...rest}>{children}</H4>;
    default:
      return <H5 {...rest}>{children}</H5>;
  }
}

Heading.propTypes = propTypes;

export default Heading;
