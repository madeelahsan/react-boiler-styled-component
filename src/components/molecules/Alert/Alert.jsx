import React from 'react';
import PropTypes from 'prop-types';

import { StyledAlert, Message } from './Alert.styles';
import AlertIcon from '../../atoms/AlertIcon';

const propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

function Alert({ type, message, ...props }) {
  return (
    <>
      <StyledAlert $type={type} {...props}>
        <AlertIcon $type={type} />
        <Message $type={type}>{message}</Message>
      </StyledAlert>
    </>
  );
}

Alert.propTypes = propTypes;

export default Alert;
