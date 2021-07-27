import React from 'react';
import styled from 'styled-components/macro';
import { toast } from 'react-toastify';
import { Alert, Heading, Button } from '../../components';

export default function Toast() {
  const infoToast = () =>
    toast(<Alert type="info" message="This is an info toast" />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    });

  const warningToast = () =>
    toast(<Alert type="warning" message="This is an warning toast" />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    });

  const successToast = () =>
    toast(<Alert type="success" message="This is an success toast" />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    });

  const errorToast = () =>
    toast(<Alert type="error" message="This is an error toast" />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    });

  return (
    <>
      <div css="padding: 1.3rem;">
        <Title level={1}>Toasts/Snackbar</Title>
        <GridRow>
          <Button type="primary" htmlType="button" onClick={errorToast}>
            Open Error Toast !
          </Button>
          <Button type="primary" htmlType="button" onClick={warningToast}>
            Open Warning Toast !
          </Button>
          <Button type="primary" htmlType="button" onClick={successToast}>
            Open Success Toast !
          </Button>
          <Button type="primary" htmlType="button" onClick={infoToast}>
            Open Info Toast !
          </Button>
        </GridRow>
      </div>
    </>
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
