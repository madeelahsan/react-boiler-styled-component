import styled, { css } from 'styled-components/macro';

const Styles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.$prefix && '23px'};
  right: ${props => props.$suffix && '23px'};
  font-size: var(--font-size-lg);
  color: ${props => (props.$invalid ? 'var(--danger)' : 'var(--secondary-text-color)')};
  background: none;
  border: none;
  padding: 0;
  i {
    display: block;
  }
`;

const InputIcon = styled.span`
  ${Styles}
`;

export default InputIcon;
