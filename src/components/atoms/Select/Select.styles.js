import Select from 'react-select';
import styled from 'styled-components/macro';
import { styles } from '../Input/Input.styles';

export const StyledSelect = styled(Select)`
  .react-select__control {
    ${styles}
    box-shadow:none;
    border-color: ${({ error }) => error && 'var(--danger)'} !important;
    &:hover {
      border-color: var(--light);
    }
  }
  .react-select__placeholder {
    color: var(--gray);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .react-select__menu {
    box-shadow: 3px 18px 44px rgba(176, 183, 195, 0.28);
    border-radius: 8px;
    border: 1px solid var(--light);
    z-index: var(--z-30);
  }
  .react-select__option {
    &:active {
      background: var(--light-primary);
    }
  }
  .react-select__option--is-focused {
    background: var(--light-primary);
  }
  .react-select__option--is-selected {
    background: var(--primary);
  }
`;
