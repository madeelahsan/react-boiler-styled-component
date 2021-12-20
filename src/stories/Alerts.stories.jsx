import React from 'react';
import Alert from '../components/molecules/Alert';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Alerts',
  component: Alert,
  argTypes: {
    type: {
      options: ['error', 'warning', 'success', 'info'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Alert {...args} />
  </>
);

export const Alerts = Template.bind({});
Alerts.args = {
  type: 'error',
  message: 'This is an error alert',
};
