import React from 'react';
import styled from 'styled-components/macro';
import { Heading, Dropdown } from '../../components';

export default function DropdownUI() {
  const items = [
    {
      id: 1,
      value: 'All',
    },
    {
      id: 2,
      value: 'Unresolved',
    },
    {
      id: 3,
      value: 'Settled',
    },
  ];
  return (
    <div css="padding: 1.3rem 1.3rem 30rem 1.3rem">
      <Title level={1}>Dropdown</Title>
      <Dropdown title="Status" items={items} />
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
