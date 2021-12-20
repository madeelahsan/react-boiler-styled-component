import React from 'react';
import Notification from '../components/molecules/Notification';
import GlobalStyles from '../styles/GlobalStyles.styles';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledToastContainer } from '../styles/App.styles';
import Button from '../components/atoms/Button';

export default {
  title: 'Notification',
  component: Notification,
  argTypes: {
    type: {
      options: ['info', 'warning', 'success', 'error'],
      control: { type: 'select' },
    },
  },
};

function Template({ ...args }) {
  return (
    <>
      <GlobalStyles />
      <Button type="primary" onClick={() => Notification({ ...args })}>
        Open Notification
      </Button>
      <StyledToastContainer />
    </>
  );
}

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Title',
  message: 'Notification message',
};

export const warning = Template.bind({});
warning.args = {
  type: 'warning',
  title: 'Title',
  message: 'Notification message',
};

export const success = Template.bind({});
success.args = {
  type: 'success',
  title: 'Title',
  message: 'Notification message',
};

export const error = Template.bind({});
error.args = {
  type: 'error',
  title: 'Title',
  message: 'Notification message',
};
