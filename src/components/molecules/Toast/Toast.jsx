/* eslint-disable no-unused-vars */
import React, { lazy } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { StyledAlert, Message } from './Toast.styles';
import { AlertIcon } from '../..';

const propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

function Toast({ type, message, ...props }) {
  return toast(
    <>
      <StyledAlert $type={type} {...props}>
        <AlertIcon $type={type} />
        <Message $type={type}>{message}</Message>
      </StyledAlert>
    </>,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    },
  );
}

Toast.propTypes = propTypes;

export default Toast;
