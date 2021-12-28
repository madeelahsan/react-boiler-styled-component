import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph';
import { MessageHolder } from './Message.styles';

const propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  lg: PropTypes.bool,
};

function Message({ text, width, lg, ...props }) {
  return (
    <MessageHolder $width={width} $lg={lg} {...props}>
      <Paragraph css="color:var(--primary)" noMargin lg={!lg} xl={lg}>
        {text}
      </Paragraph>
    </MessageHolder>
  );
}

Message.propTypes = propTypes;

export default Message;
