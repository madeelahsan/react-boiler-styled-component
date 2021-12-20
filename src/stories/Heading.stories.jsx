import React from 'react';
import Heading from '../components/atoms/Heading';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Typography/Headings',
  component: Heading,
  argTypes: {
    level: {
      options: [1, 2, 3, 4],
      control: { type: 'select' },
    },
  },
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <Heading {...args} />
  </>
);

export const Headings = Template.bind({});
Headings.args = {
  level: 1,
  children: 'heading text',
};
