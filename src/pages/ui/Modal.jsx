import React from 'react';
import styled from 'styled-components/macro';
import { ModalContainer, Button, Heading } from '../../components';

export default function ModalPage() {
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Modal</Title>
        <ModalContainer
          title="Modal Title"
          btnComponent={({ onClick }) => (
            <Button type="primary" onClick={onClick}>
              Open Modal
            </Button>
          )}
          content={() => <span>component goes here</span>}
        />
        <br />
        <ModalContainer
          title="Modal Title"
          lg
          btnComponent={({ onClick }) => (
            <Button type="primary" onClick={onClick}>
              Large Modal
            </Button>
          )}
          content={() => <span>component goes here</span>}
        />
        <br />
        <ModalContainer
          title="Modal Title"
          sm
          btnComponent={({ onClick }) => (
            <Button type="primary" onClick={onClick}>
              Small Modal
            </Button>
          )}
          content={() => <span>component goes here</span>}
        />
        <br />
        <ModalContainer
          title="Modal Title"
          btnComponent={({ onClick }) => (
            <Button type="primary" onClick={onClick}>
              Modal Not Closable
            </Button>
          )}
          isClosable={false}
          content={() => <span> You can not close this modal</span>}
        />
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
