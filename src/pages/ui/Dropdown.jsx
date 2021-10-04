import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Heading, Dropdown, ReactDateRange } from '../../components';
import { Flex } from '../../styles/helpers.styles';

export default function DropdownUI() {
  const options = { one: 'One option', two: 'Another option' };
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(options.one);

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <div css="padding: 1.3rem 1.3rem 30rem 1.3rem">
      <Title level={1}>Dropdown</Title>
      <Flex justify="center" css="gap: 50px">
        <Dropdown title="Filter" filter>
          <ReactDateRange
            onChange={item => setDateState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateState}
          />
        </Dropdown>
        <Dropdown title="Status" options={options} setValue={setValue} />
      </Flex>
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
