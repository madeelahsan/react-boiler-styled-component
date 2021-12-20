import React from 'react';
import Message from '../components/molecules/Message';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Message',
  component: Message,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Message {...args} />
  </>
);

export const MessageStory = Template.bind({});
MessageStory.args = {
  text: 'default message',
};

export const largeMessage = Template.bind({});
largeMessage.args = {
  text: 'large fonts message',
  lg: true,
};

export const maxWidthMessage = Template.bind({});
maxWidthMessage.args = {
  text: 'message with max width',
  width: 430,
};
