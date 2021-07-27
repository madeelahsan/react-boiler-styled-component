import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Modal, Button, Paragraph, Heading } from '../../components';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <>
      <div css="padding: 1.3rem">
        <Title level={1}>Modal</Title>
        <Button type="primary" htmlType="button" onClick={() => setIsOpen(!isOpen)}>
          Open Modal
        </Button>
        <Modal title="Modal Title" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero inventore dolor quisquam laborum rem
            nemo est, illo neque consequuntur fuga ullam sapiente possimus cumque amet facilis! Illo, dignissimos
            consequuntur.
          </Paragraph>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quos in. Sunt hic doloremque assumenda,
            expedita necessitatibus pariatur? Voluptate, numquam porro rerum iste a ea inventore incidunt odit molestias
            perferendis!
          </Paragraph>
          <Button type="primary" htmlType="button" onClick={() => setIsOpen2(!isOpen2)}>
            Open Modal 2
          </Button>
        </Modal>
        <Modal title="Modal Title 2" isOpen={isOpen2} setIsOpen={setIsOpen2}>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quos in. Sunt hic doloremque assumenda,
            expedita necessitatibus pariatur? Voluptate, numquam porro rerum iste a ea inventore incidunt odit molestias
            perferendis!
          </Paragraph>
          <Button type="primary" htmlType="button" onClick={() => setIsOpen3(!isOpen3)}>
            Open Modal 3
          </Button>
        </Modal>
        <Modal title="Modal Title 3" isOpen={isOpen3} setIsOpen={setIsOpen3}>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quos in. Sunt hic doloremque assumenda,
            expedita necessitatibus pariatur? Voluptate, numquam porro rerum iste a ea inventore incidunt odit molestias
            perferendis!
          </Paragraph>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quos in. Sunt hic doloremque assumenda,
            expedita necessitatibus pariatur? Voluptate, numquam porro rerum iste a ea inventore incidunt odit molestias
            perferendis!
          </Paragraph>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quos in. Sunt hic doloremque assumenda,
            expedita necessitatibus pariatur? Voluptate, numquam porro rerum iste a ea inventore incidunt odit molestias
            perferendis!
          </Paragraph>
        </Modal>
      </div>
    </>
  );
}

const Title = styled(Heading)`
  text-align: center;
`;
