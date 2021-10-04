import React from 'react';
import styled from 'styled-components/macro';
import { Heading, Message } from '../../components';

export default function DropdownUI() {
  return (
    <div css="padding: 1.3rem 1.3rem 30rem 1.3rem">
      <Title level={1}>Message</Title>
      <Message text="default message" />
      <br />
      <Message lg width={430} text="message with max width and large font" />
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
