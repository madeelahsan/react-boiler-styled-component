import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { StyledNotification, TextHolder } from './Notification.styles';
import { AlertIcon as NotificationIcon, Paragraph, Heading } from '../..';

const propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};

function Notification({ type, message, title }) {
  return (
    <>
      <StyledNotification $type={type}>
        <NotificationIcon $type={type} />
        <TextHolder>
          <Heading level={5} css="margin-bottom:.5rem;">
            {title}
          </Heading>
          <Paragraph $type={type} css="margin:0; color: var(--base-text-color) !important;">
            {message}
          </Paragraph>
        </TextHolder>
      </StyledNotification>
    </>
  );
}

Notification.propTypes = propTypes;

export default Notification;
