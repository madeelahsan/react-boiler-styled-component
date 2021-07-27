import React from 'react';
import styled from 'styled-components/macro';
import { Heading, Tooltip, Button } from '../../components';

export default function Tooltips() {
  return (
    <div css="padding: 1.3rem">
      <Title level={1}>ToolTips</Title>
      <GridRow>
        <Tooltip title="Success Tooltip" type="success">
          <Button type="white" htmlType="button">
            Success Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Warning Tooltip" type="warning">
          <Button type="white" htmlType="button">
            Warning Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Info Tooltip" type="info">
          <Button type="white" htmlType="button">
            Info Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Error Tooltip" type="error">
          <Button type="white" htmlType="button">
            Error Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Dark Tooltip" type="dark">
          <Button type="white" htmlType="button">
            Dark Tooltip
          </Button>
        </Tooltip>
        <Tooltip title="Light Tooltip" type="light">
          <Button type="white" htmlType="button">
            Light Tooltip
          </Button>
        </Tooltip>
      </GridRow>
    </div>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;
