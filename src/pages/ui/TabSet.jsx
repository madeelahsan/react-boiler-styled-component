import React from 'react';
import styled from 'styled-components/macro';
import { Heading, DataTabs } from '../../components';

export default function TabSet() {
  const tabData = [
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
  ];
  return (
    <div css="padding: 1.3rem 1.3rem 30rem 1.3rem">
      <Title level={1}>Tabs</Title>
      <DataTabs data={tabData} />
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
