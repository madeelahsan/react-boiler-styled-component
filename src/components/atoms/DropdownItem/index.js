import styled, { css } from 'styled-components/macro';

const ListItem = styled.li`
  ${props =>
    props.$title &&
    css`
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1rem;
      margin-bottom: 1rem;
    `}

  &:last-child {
    button {
      margin-bottom: 0;
    }
  }
  button {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0.875rem;
    width: 100%;
    text-align: left;
    background-color: ${props => (props.selected ? 'var(--light-secondary)' : 'transparent')};
    border: none;
    border-radius: 40px;
    margin-bottom: 3px;
    color: var(--primary-text-color);
    font-size: 0.6875rem;
    line-height: 0.75rem;
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: var(--light-secondary);
    }
  }
`;

export default ListItem;
