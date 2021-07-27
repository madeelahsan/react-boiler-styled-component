import React from 'react';
import styled from 'styled-components/macro';

import { Heading, Button } from '../../components';
import { Flex } from '../../styles/helpers.styles';

export default function Buttons() {
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Buttons</Title>
        <Grid css="margin: 0 0 30px;">
          <Button type="primary" htmlType="button">
            Primary
          </Button>
          <Button type="primary" htmlType="button" disabled>
            Disabled Button
          </Button>
          <Button type="secondary" htmlType="button">
            Secondary
          </Button>
          <Button type="outline" htmlType="button">
            Outlined
          </Button>
          <Button type="white" htmlType="button" suffix={<i className="icon-camera" />}>
            White button with right icon
          </Button>
          <Button type="white" htmlType="button" prefix={<i className="icon-check" />}>
            White button with left icon
          </Button>
          <Button type="outline" htmlType="button" rounded>
            Rounded button
          </Button>
          <Button type="outline" htmlType="button" loading>
            loading...
          </Button>
          <Button type="primary" htmlType="button" xs>
            Extra Small button
          </Button>
          <Button type="white" htmlType="button" prefix={<i className="icon-shield-check" />} iconLeft rounded sm>
            small button
          </Button>
          <Flex>
            <Button type="primary" htmlType="button" shape="circle" size={46}>
              <i className="icon-bell" />
            </Button>
            <Button type="white" htmlType="button" shape="circle" size={46}>
              <i className="icon-bell" />
            </Button>
          </Flex>
        </Grid>
        <Button type="primary" htmlType="button">
          Full Width button
        </Button>
        <br />
        <Button type="primary" htmlType="button" css="max-width: 600px;">
          Max width button (specify the max-width in css props)
        </Button>
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
`;
