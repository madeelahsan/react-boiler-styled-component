import React from 'react';
import styled from 'styled-components/macro';
import { Grid } from 'sc-css-grid-system';
import { Alert, Heading } from '../../components';

export default function Alerts() {
  return (
    <>
      <Grid xs={1} gap={20} css="padding: 1.3rem; align-items: start;">
        <Title level={1}>Alerts</Title>
        <Alert type="error" message="This is an error alert" />
        <Alert type="warning" message="This is a warning alert" />
        <Alert type="success" message="This is a success alert" />
        <Alert type="info" message="This is an info alert" />
      </Grid>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
