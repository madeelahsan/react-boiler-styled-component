import { darken, cssVar } from 'polished';
import styled, { css, keyframes } from 'styled-components/macro';
import { ListboxButton } from '@reach/listbox';

export const IconHolder = styled.span``;

const loadingCircle = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const BtnLoader = styled.span`
  margin-right: ${({ $width }) => ($width > 115 || !$width) && '10px'};
  svg {
    animation: ${loadingCircle} 1s linear infinite;
  }
`;

const Styles = css`
  position: relative;
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

  ${IconHolder} {
    margin-left: ${({ $suffix }) => $suffix && '12px'};
    margin-right: ${({ $prefix }) => $prefix && '12px'};
    font-size: 1rem;
    display: flex;
  }

  ${({ xs }) =>
    xs &&
    css`
      font-size: var(--font-size-xs);
      line-height: 1;
      padding: 0.625rem;
    `}

  ${({ $sm }) =>
    $sm &&
    css`
      padding: 0.8125rem 0.75rem;
      @media (min-width: 992px) {
        padding: 0.8125rem 1.25rem;
      }
    `}

  ${({ $color }) =>
    $color &&
    css`
      background: ${!/[^a-z-]/i.test($color) ? `var(--${$color})` : $color};
      &:hover {
        opacity: 0.6;
      }
    `}

  ${({ $type, $loading }) =>
    $type === 'primary' &&
    css`
      background: var(--primary-btn-background);
      &:hover {
        background: ${darken(0.2, cssVar('--primary'))};
      }
      ${$loading &&
      css`
        ${BtnLoader} {
          svg {
            fill: var(--white);
          }
        }
      `}
    `}
    
  ${({ $type }) =>
    $type === 'warning' &&
    css`
      background: var(--yellow);
      &:hover {
        background: ${darken(0.2, cssVar('--yellow'))};
      }
    `}

  ${({ $type }) =>
    $type === 'danger' &&
    css`
      background: var(--danger);
      &:hover {
        background: ${darken(0.2, cssVar('--danger'))};
      }
    `}

  ${({ $type }) =>
    $type === 'danger2' &&
    css`
      background: var(--danger2);
      &:hover {
        background: ${darken(0.2, cssVar('--danger2'))};
      }
    `}

  ${({ $type }) =>
    $type === 'success' &&
    css`
      background: var(--green);
      &:hover {
        background: ${darken(0.2, cssVar('--green'))};
      }
    `}

  ${({ $type }) =>
    $type === 'secondary' &&
    css`
      color: var(--text-color-gray);
      background: var(--secondary-btn-background);
      &:hover {
        background: ${darken(0.1, cssVar('--light'))};
      }
    `}

  ${({ $type }) =>
    $type === 'outline' &&
    css`
      color: var(--secondary-text-color);
      background: none;
      border: 1px solid var(--text-color-gray);
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    `}

  ${({ $type }) =>
    $type === 'light' &&
    css`
      color: var(--primary-text-color);
      background: var(--light-secondary);
      border: none;
      transition: all var(--animation-speed) ease-in-out;
      &:hover {
        background: var(--primary);
        box-shadow: 0px 4px 14px rgba(104, 92, 182, 0.26);
        color: var(--white);
      }
    `}

  ${({ $type }) =>
    $type === 'white' &&
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

  ${({ $type }) =>
    $type === 'whitePrimary' &&
    css`
      color: var(--primary);
      background: var(--white);
      box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.14);
      transition: box-shadow var(--animation-speed) ease-in-out, background var(--animation-speed) ease-in-out,
        color var(--animation-speed) ease-in-out;
      &:hover {
        box-shadow: 0px 15px 10px rgba(176, 183, 195, 0.2);
        color: var(--white);
        background: var(--primary);
      }
    `}

  ${({ $suffix, $prefix }) =>
    ($suffix || $prefix) &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 75px;
    `}

  ${({ $shape, $size }) =>
    $shape === 'circle' &&
    css`
      border-radius: 100%;
      width: ${$size}px;
      height: ${$size}px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}

  ${({ mobileCircle }) =>
    mobileCircle &&
    css`
      @media (max-width: 767px) {
        border-radius: 100%;
        overflow: hidden;
        width: 46px;
        height: 46px;
        span {
          margin: 0 !important;
        }
        .text {
          display: none;
        }
      }
    `}

  ${({ $iconMobile }) =>
    $iconMobile &&
    css`
      @media (max-width: 1199px) {
        border-radius: 100%;
        width: 46px;
        height: 46px;
        padding: 0;
        margin: 0;
        ${IconHolder} {
          margin: 0;
        }
        .text {
          display: none;
        }
      }
      @media (max-width: 991px) {
        background: none;
        width: 16px;
        height: 16px;
        border: none;
        box-shadow: none;
        border-radius: 0;
      }
    `}

  ${({ notification }) =>
    notification &&
    css`
      i {
        font-size: 1.125rem;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          background: #f77164;
          width: 6px;
          height: 6px;
          border: 1px solid var(--white);
        }
      }
    `}

  ${({ $width }) =>
    $width &&
    css`
      max-width: ${$width}px;
    `}
  
  ${({ $loading }) =>
    $loading &&
    css`
      padding-left: 10px !important;
      padding-right: 10px !important;
    `}

  

  @media (max-width: 575px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

export const StyledButton = styled.button`
  ${({ $unStyled }) => ($unStyled ? '' : Styles)}
`;

export const StyledListBoxButton = styled(ListboxButton)`
  ${Styles}
  &:hover,&:focus-visible {
    outline: none;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeHolder = styled.span`
  text-transform: uppercase;
  background: linear-gradient(75.96deg, rgba(104, 218, 133, 0.9) 0%, rgba(156, 236, 82, 0.9) 100%);
  backdrop-filter: blur(4px);
  border-radius: 25px;
  color: var(--white);
  font-weight: 800;
  font-size: 8px;
  line-height: 1;
  height: 14px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -17px;
  left: 50%;
  transform: translateX(-50%);

  ${({ $contestBadge }) =>
    $contestBadge &&
    css`
      background: linear-gradient(to right, #e02121 0%, #db5757 100%);
    `}

  @media (min-width: 992px) {
    top: -10px;
    font-size: 10px;
    padding: 0 6px;
    height: 20px;
  }
  @media (min-width: 1200px) {
    left: auto;
    right: 0;
    transform: none;
  }
`;
