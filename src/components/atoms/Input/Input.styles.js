import styled, { css } from 'styled-components/macro';
import { darken, cssVar } from 'polished';
import FakeInput from '../FakeInput';
import FakeLabel from '../FakeLabel';

const StyledFakeLabel = styled(FakeLabel)``;

export const styles = css`
  border: 2px solid ${({ $invalid }) => ($invalid ? 'var(--danger)' : 'var(--light)')};
  background: ${({ type }) => (type === 'search' ? 'var(--light-secondary)' : 'var(--white)')};
  outline: none;
  height: ${({ sm }) => (sm ? '45px' : '60px')};
  padding: ${({ sm }) => (sm ? '0.3125rem 1.4375rem' : 'var(--form-element-padding)')};
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  color: var(--secondary-text-color);
  font-size: var(--font-size-sm);
  border-radius: ${({ $rounded }) => ($rounded ? '85px' : '12px')};
  padding-left: ${({ $prefix }) => $prefix && '3.25rem'};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return '3.25rem';
    if ($button) return '3.6rem';
    return '';
  }};

  ${({ type }) =>
    type === 'search' &&
    css`
      border: none;
      transition: all var(--animation-speed) ease-in-out;

      ${({ responsive }) =>
        responsive &&
        css`
          @media (max-width: 767px) {
            position: absolute;
            top: -22px;
            right: 7px;
            z-index: 9;
            box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.3);
            background: var(--white);
            border: 1px solid var(--light);
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            width: 0;
          }
          @media (max-width: 575px) {
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
          }
        `}

      ${({ openSearch }) =>
        openSearch &&
        css`
          @media (max-width: 767px) {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            width: 350px;
          }
          @media (max-width: 575px) {
            transform: translateY(0);
            width: 100%;
          }
        `}
    `}

  &:focus {
    border-color: ${({ $invalid }) => !$invalid && `${darken(0.1, cssVar('--light'))}`};
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }

  &[type='radio'] {
    + ${FakeInput} {
      border-radius: 100%;
      &:before {
        content: '';
        background: var(--white);
        border-radius: 100%;
        width: 10px;
        height: 10px;
      }
    }
  }

  &[type='checkbox'] {
    + ${FakeInput} {
      .icon-check {
        color: var(--white);
        font-size: var(--font-size-xs);
      }
    }
  }

  &[type='checkbox'],
  &[type='radio'] {
    display: none;
    &:checked {
      + ${FakeInput} {
        background: var(--primary);
        .icon-check,
        &:before {
          opacity: 1;
        }
      }
    }
    &:disabled {
      + ${FakeInput}, ~ ${StyledFakeLabel} {
        opacity: 0.5;
      }
    }
    + ${FakeInput} {
      transition: background var(--animation-speed) ease-in-out;
      &:before,
      .icon-check {
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity var(--animation-speed) ease-in-out;
      }
    }
  }
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  min-height: 9.375rem;
`;

export const StyledInput = styled.input`
  ${styles}
`;
