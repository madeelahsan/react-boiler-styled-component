import React from 'react';
import DataTabs from '../components/molecules/DataTabs';

import GlobalStyles from '../styles/GlobalStyles.styles';

export default {
  title: 'Tabs',
  component: DataTabs,
};

const Template = ({ ...args }) => (
  <>
    <GlobalStyles />
    <DataTabs {...args} />
  </>
);

export const tabs = Template.bind({});
tabs.args = {
  data: [
    {
      label: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eligendi! Esse earum fuga tempore, nihil laudantium officiis voluptates, illum vitae recusandae repellat nam cum consequuntur ad ex quas suscipit laboriosam!',
    },
    {
      label: 'Tab 2',
      content:
        ' cum consequuntur ad ex quas suscipit laboriosam!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eligendi! Esse earum fuga tempore, nihil laudantium officiis voluptates, illum vitae recusandae repellat nam cum consequuntur ad ex quas suscipit laboriosam!',
    },
    {
      label: 'Tab 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eligendi! Esse earum fuga tempore, nihil laudantium officiis voluptates, Esse earum fuga tempore, nihil laudantium officiis voluptates, illum vitae recusandae repellat nam cum consequuntur ad ex quas suscipit laboriosam!',
    },
  ],
};
