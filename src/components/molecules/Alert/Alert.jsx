import React from 'react';
import PropTypes from 'prop-types';
import { AlertIcon, Paragraph } from '../..';
import { StyledAlert } from './Alert.styles';

const propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

function Alert({ type, message }) {
  return (
    <>
      <StyledAlert $type={type}>
        <AlertIcon $type={type} />
        <Paragraph $type={type}>{message}</Paragraph>
      </StyledAlert>
    </>
  );
}

Alert.propTypes = propTypes;

export default Alert;
