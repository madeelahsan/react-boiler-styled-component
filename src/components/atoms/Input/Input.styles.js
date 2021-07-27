import styled, { css } from 'styled-components/macro';
import { darken, cssVar } from 'polished';
import { FakeInput, FakeLabel } from '../..';

export const styles = css`
  border: 2px solid ${props => (props.$invalid ? 'var(--danger)' : 'var(--light)')};
  background: ${props => (props.type === 'search' ? 'var(--light-secondary)' : 'var(--white)')};
  outline: none;
  height: 60px;
  padding: var(--form-element-padding);
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  color: var(--secondary-text-color);
  border-radius: ${props => (props.$rounded ? '85px' : '12px')};
  padding-left: ${props => props.$prefix && '3.25rem'};
  padding-right: ${props => props.$suffix && '3.25rem'};

  ${props =>
    props.type === 'search' &&
    css`
      border: none;
    `}

  &:focus {
    border-color: ${props => !props.$invalid && `${darken(0.1, cssVar('--light'))}`};
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

  &[type='checkbox'],
  &[type='radio'] {
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: -1;
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
      + ${FakeInput}, ~ ${FakeLabel} {
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
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  min-height: 9.375rem;
`;

export const StyledInput = styled.input`
  ${styles}
`;
