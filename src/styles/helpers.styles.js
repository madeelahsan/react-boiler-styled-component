import styled, { css } from 'styled-components/macro';

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => !props.nowrap && 'wrap'};

  ${props =>
    props.direction === 'column' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.direction === 'columnReverse' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.justify === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.justify === 'end' &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.align === 'top' &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.align === 'middle' &&
    css`
      align-items: center;
    `}

    ${props =>
    props.align === 'bottom' &&
    css`
      align-items: flex-end;
    `}
`;

export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 26px;
`;

export const InputHolder = styled.div`
  position: relative;
`;
