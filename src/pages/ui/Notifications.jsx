import React from 'react';
import styled from 'styled-components/macro';
import { toast } from 'react-toastify';
import { Notification, Heading, Button } from '../../components';

export default function Notifications() {
  const infoNotification = () =>
    toast(<Notification type="info" title="Title" message="This is an info Notification" />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });

  const warningNotification = () =>
    toast(<Notification type="warning" title="Title" message="This is a warning Notification" />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });

  const successNotification = () =>
    toast(<Notification type="success" title="Title" message="This is a success Notification" />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });

  const errorNotification = () =>
    toast(<Notification type="error" title="Title" message="This is an error Notification" />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  return (
    <div css="padding: 1.3rem;">
      <Title level={1}>Notifications</Title>
      <GridRow>
        <Button type="primary" htmlType="button" onClick={errorNotification}>
          Open Error Notification !
        </Button>
        <Button type="primary" htmlType="button" onClick={warningNotification}>
          Open Warning Notification !
        </Button>
        <Button type="primary" htmlType="button" onClick={successNotification}>
          Open Success Notification !
        </Button>
        <Button type="primary" htmlType="button" onClick={infoNotification}>
          Open Info Notification !
        </Button>
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
