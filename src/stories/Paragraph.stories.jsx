import React from 'react';
import Paragraph from '../components/atoms/Paragraph';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Paragraph {...args} />
  </>
);

export const defaultParagraph = Template.bind({});
defaultParagraph.args = {
  children: '16px or 1 rem paragraph',
};

export const xs = Template.bind({});
xs.args = {
  xs: true,
  children: '12px Paragraph',
};

export const sm = Template.bind({});
sm.args = {
  sm: true,
  children: '14px Paragraph',
};

export const lg = Template.bind({});
lg.args = {
  lg: true,
  children: '18px Paragraph',
};

export const xl = Template.bind({});
xl.args = {
  xl: true,
  children: '20px Paragraph',
};
