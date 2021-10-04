import React from 'react';
import styled from 'styled-components/macro';

import { Grid } from 'sc-css-grid-system';

import { Heading, Button } from '../../components';
import { Flex } from '../../styles/helpers.styles';

export default function Buttons() {
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Buttons</Title>
        <Grid sm={2} lg={3} xl={5} gap={20} css="margin: 0 0 30px; align-items: start;">
          <Button type="primary">Primary</Button>

          <Button type="danger">Danger</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="primary" disabled>
            Disabled Button
          </Button>
          <Button type="secondary">Secondary</Button>
          <Button type="light">light/gray</Button>
          <Button type="outline">Outlined</Button>
          <Button type="white" suffix={<i className="icon-camera" />}>
            White button with right icon
          </Button>
          <Button type="white" prefix={<i className="icon-check" />}>
            White button with left icon
          </Button>
          <Button type="outline" rounded>
            Rounded button
          </Button>
          <Button type="outline" loading>
            loading...
          </Button>
          <Button type="primary" xs>
            Extra Small button
          </Button>
          <Button type="white" prefix={<i className="icon-shield-check" />} iconLeft rounded sm>
            small button
          </Button>
          <Button type="white" xs rounded css="color: #47c07a;">
            custom styled button
          </Button>

          <Button color="light-blue">Custom Color Button using css Var</Button>
          <Button color="#aae15d">Pass any color in color prop</Button>
          <Flex>
            <Button type="primary" shape="circle" size={46}>
              <i className="icon-bell" />
            </Button>
            <Button type="white" shape="circle" size={46}>
              <i className="icon-bell" />
            </Button>
          </Flex>
        </Grid>
        <Button type="primary">Full Width button</Button>
        <br />
        <Button type="primary" width={600}>
          Max width button
        </Button>
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
