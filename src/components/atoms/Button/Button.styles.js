import { lighten, darken, cssVar } from 'polished';
import styled, { css } from 'styled-components/macro';

const StyledButton = styled.button`
  border: none;
  display: block;
  width: 100%;
  text-align: center;
  padding: var(--btn-padding);
  cursor: pointer;
  color: var(--white);
  border-radius: 12px;
  font-size: var(--font-size-sm);
  line-height: 1.125rem;
  font-weight: bold;

  span {
    margin-left: ${props => props.$suffix && '12px'};
    margin-right: ${props => props.$prefix && '12px'};
  }

  ${props =>
    props.xs &&
    css`
      font-size: var(--font-size-xs);
      line-height: 1;
      padding: 0.625rem;
    `}

  ${props =>
    props.sm &&
    css`
      padding: 0.8125rem;
    `}

  ${props =>
    props.$type === 'primary' &&
    css`
      background: var(--primary-btn-background);
      &:hover {
        background: ${lighten(0.2, cssVar('--primary'))};
      }
    `}

  ${props =>
    props.$type === 'secondary' &&
    css`
      color: var(--text-color-gray);
      background: var(--secondary-btn-background);
      &:hover {
        background: ${darken(0.1, cssVar('--light'))};
      }
    `}

  ${props =>
    props.$type === 'outline' &&
    css`
      color: var(--secondary-text-color);
      background: none;
      border: 1px solid var(--text-color-gray);
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    `}

  ${props =>
    (props.$suffix || props.$prefix) &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${props =>
    props.rounded &&
    css`
      border-radius: 75px;
    `}

  ${props =>
    props.shape === 'circle' &&
    css`
      border-radius: 100%;
      width: ${props.size}px;
      height: ${props.size}px;
      padding: 0;
    `}

  ${props =>
    props.$type === 'light' &&
    css`
      color: var(--primary-text-color);
      background: var(--light-secondary);
      border: none;
    `}

  ${props =>
    props.$type === 'white' &&
    css`
      color: var(--secondary-text-color);
      background: var(--white);
      box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.14);
      border: 1px solid var(--light);
      transition: box-shadow var(--animation-speed) ease-in-out;
      &:hover {
        box-shadow: 0px 15px 10px rgba(176, 183, 195, 0.2);
      }
    `}

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
`;

export default StyledButton;
