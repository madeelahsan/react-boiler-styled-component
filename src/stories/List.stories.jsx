import React from 'react';
import List from '../components/atoms/List';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Typography/Lists',
  component: List,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <List {...args} />
  </>
);

export const ul = Template.bind({});
ul.args = {
  children: (
    <>
      <li>item 1 </li>
      <li>item 2 </li>
      <li>item 3 </li>
    </>
  ),
};

export const ol = Template.bind({});
ol.args = {
  ordered: true,
  children: (
    <>
      <li>item 1 </li>
      <li>item 2 </li>
      <li>item 3 </li>
    </>
  ),
};
