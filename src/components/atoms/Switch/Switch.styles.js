import styled from 'styled-components/macro';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Label } from '../..';

export const SwitchHolder = styled(StyledFormGroup)`
  display: flex;
`;

export const SwitchLabel = styled(Label)`
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  span {
    transition: background var(--animation-speed) linear;
    cursor: pointer;
    width: 46px;
    height: 26px;
    background: #e5e5e5;
    display: block;
    border-radius: 76px;
    position: relative;
    text-indent: -9999px;
    margin-right: 14px;
    flex-shrink: 0;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      text-align: right;
      font-size: 10px;
      font-weight: bold;
    }
    &:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 18px;
      height: 18px;
      background: var(--white);
      border-radius: 100%;
      transition: 0.3s;
    }
    &:active:after {
      width: 25px;
    }
  }
`;

export const StyledSwitch = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    span {
      background: var(--primary);
      &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
      &:before {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

export const LabelHolder = styled.strong`
  padding-top: 6px;
`;
