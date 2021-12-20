import React from 'react';
import Switch from '../components/atoms/Switch';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Forms/switch',
  component: Switch,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Switch {...args} />
  </>
);

export const switchBtn = Template.bind({});
switchBtn.args = {
  label: 'Switch with label',
  name: 'switch2',
};

export const switchWithoutLabel = Template.bind({});
switchWithoutLabel.args = {
  name: 'switch',
};
