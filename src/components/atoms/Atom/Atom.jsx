import React from 'react';
// import PropTypes from 'prop-types';
import { StyledAtom } from './Atom.styles';

const propTypes = {};

function Atom() {
  return (
    <>
      <StyledAtom>Content</StyledAtom>
    </>
  );
}

Atom.propTypes = propTypes;

export default Atom;
