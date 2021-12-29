/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../components/atoms/Button';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'light', 'white', 'outline'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Button {...args} />
  </>
);

export const primary = Template.bind({});
primary.args = {
  type: 'primary',
  children: 'primary button',
};

export const suffix = Template.bind({});
suffix.args = {
  type: 'primary',
  suffix: <i className="material-icons-outlined">photo_camera</i>,
  children: 'suffix button',
};

export const prefix = Template.bind({});
prefix.args = {
  type: 'primary',
  prefix: <i className="material-icons-outlined">check_circle</i>,
  children: 'prefix button',
};

export const rounded = Template.bind({});
rounded.args = {
  type: 'primary',
  children: 'rounded button',
  rounded: true,
};

export const loading = Template.bind({});
loading.args = {
  type: 'primary',
  children: 'loading button',
  loading: true,
};

export const small = Template.bind({});
small.args = {
  type: 'primary',
  children: 'Small button',
  sm: true,
};

export const extraSmall = Template.bind({});
extraSmall.args = {
  type: 'primary',
  children: 'Extra Small button',
  xs: true,
};

export const circleBtn = Template.bind({});
circleBtn.args = {
  type: 'primary',
  children: <i className="material-icons-outlined">notifications</i>,
  shape: 'circle',
  size: 46,
};

export const customStyle = Template.bind({});
customStyle.args = {
  children: 'Custom Color Button using css Variables',
  color: 'light-blue',
};

export const anyColor = Template.bind({});
anyColor.args = {
  children: 'Custom Color Button using css Variables',
  color: '#aae15d',
};

export const danger = Template.bind({});
danger.args = {
  type: 'danger',
  children: 'danger button',
};

export const success = Template.bind({});
success.args = {
  type: 'success',
  children: 'success button',
};

export const warning = Template.bind({});
warning.args = {
  type: 'warning',
  children: 'warning button',
};

export const disabled = Template.bind({});
disabled.args = {
  type: 'primary',
  disabled: true,
  children: 'disabled button',
};

export const secondary = Template.bind({});
secondary.args = {
  type: 'secondary',
  children: 'secondary button',
};

export const light = Template.bind({});
light.args = {
  type: 'light',
  children: 'light button',
};

export const white = Template.bind({});
white.args = {
  type: 'white',
  children: 'white button',
};

export const outline = Template.bind({});
outline.args = {
  type: 'outline',
  children: 'outline button',
};

export const maxWidthBtn = Template.bind({});
maxWidthBtn.args = {
  type: 'outline',
  children: 'Max width button',
  width: 200,
};
