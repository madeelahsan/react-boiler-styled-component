import React from 'react';
import Tooltip from '../components/atoms/Tooltip';
import Button from '../components/atoms/Button';
import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Tooltips',
  component: Tooltip,
  argTypes: {
    type: {
      options: ['success', 'warning', 'info', 'error', 'dark', 'light'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Tooltip {...args}>
      <Button type="white">Tooltip</Button>
    </Tooltip>
  </>
);

export const Tooltips = Template.bind({});
Tooltips.args = {
  type: 'success',
  title: 'Success Tooltip',
};
