import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { StyledNotification, TextHolder } from './Notification.styles';

import { AlertIcon as NotificationIcon, Paragraph, Heading } from '../..';

const propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
};
function Notification({ type, message, title, ...props }) {
  return toast(
    <>
      <StyledNotification $type={type} {...props}>
        <NotificationIcon $type={type} />
        <TextHolder>
          <Heading level={5} css="margin-bottom:4px;">
            {title}
          </Heading>
          <Paragraph $type={type} css="margin:0; color: var(--base-text-color) !important;">
            {message}
          </Paragraph>
        </TextHolder>
      </StyledNotification>
    </>,
    {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    },
  );
}

Notification.propTypes = propTypes;

export default Notification;
