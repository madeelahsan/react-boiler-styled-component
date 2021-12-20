import React from 'react';
import Toast from '../components/molecules/Toast';
import GlobalStyles from '../styles/GlobalStyles.styles';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledToastContainer } from '../styles/App.styles';
import Button from '../components/atoms/Button';

export default {
  title: 'Toast',
  component: Toast,
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
      <Button type="primary" onClick={() => Toast({ ...args })}>
        Open Toast
      </Button>
      <StyledToastContainer />
    </>
  );
}

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'Toast message',
};

export const warning = Template.bind({});
warning.args = {
  type: 'warning',
  message: 'Toast message',
};

export const success = Template.bind({});
success.args = {
  type: 'success',
  message: 'Toast message',
};

export const error = Template.bind({});
error.args = {
  type: 'error',
  title: 'Title',
  message: 'Toast message',
};
