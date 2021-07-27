import React from 'react';
import styled from 'styled-components/macro';

import { Alert, Heading } from '../../components';

export default function Alerts() {
  return (
    <>
      <Grid css="padding: 1.3rem;">
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
`;
