import Select from 'react-select';
import styled from 'styled-components/macro';
import { styles } from '../Input/Input.styles';

export const StyledSelect = styled(Select)`
  .react-select__control {
    ${styles}
    box-shadow:none;
    &:hover {
      border-color: var(--light);
    }
  }
  .react-select__value-container {
    padding: 0;
  }
  .react-select__menu {
    box-shadow: 3px 18px 44px rgba(176, 183, 195, 0.28);
    border-radius: 8px;
    border: 1px solid var(--light);
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
