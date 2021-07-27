import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { Button, Heading } from '../..';

export const StyledDialogOverlay = styled(DialogOverlay)`
  background: rgba(50, 59, 75, 0.3);
  backdrop-filter: blur(4px);
  z-index: var(--z-50);
`;

export const DialogCentered = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  max-width: 544px;
  min-height: calc(100% - 1rem);
  @media (min-width: 576px) {
    margin: 1.75rem auto;
    min-height: calc(100% - 3.5rem);
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  border-radius: 16px;
  padding: 1.875rem;
  margin: 1.875rem;
  width: 100%;
  margin: 0;
`;

export const ModalHeading = styled(Heading)`
  margin-bottom: 0;
  padding-right: 0.75rem;
`;

export const CloseButton = styled(Button)``;
