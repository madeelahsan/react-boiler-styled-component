import styled, { css } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
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

  ${({ $lg }) =>
    $lg &&
    css`
      max-width: 702px;
    `}

  ${({ $sm }) =>
    $sm &&
    css`
      max-width: 320px;
    `}

  @media (min-width: 576px) {
    margin: ${({ $lg }) => ($lg ? '1.75rem 0.625rem' : '1.75rem auto;')};
    min-height: calc(100% - 3.5rem);
  }
  @media (min-width: 730px) {
    margin: 1.75rem auto;
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  border-radius: 16px;
  padding: 1.875rem;
  width: 100%;
  margin: 0;
`;

export const ModalHeading = styled(Heading)`
  margin-bottom: 0;
  padding-right: 0.75rem;
  @media (max-width: 575px) {
    font-size: var(--font-size-base);
    line-height: 1.25rem;
  }
`;

export const CloseButton = styled(Button)`
  @media (max-width: 575px) {
    width: 32px;
    height: 32px;
    i {
      font-size: 10px;
    }
  }
`;
