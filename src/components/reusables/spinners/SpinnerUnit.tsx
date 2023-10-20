// React + Web3 Essentials
import React from "react";

// External Packages
import styled, { css, keyframes } from 'styled-components';

// Internal Compoonents
import { ItemV } from '@site/src/css/SharedStyling';

// Import Assets
import CheckmarkSVG from '@site/static/assets/src/components/reusables/spinners/checkmark.svg';
import ErrorSVG from '@site/static/assets/src/components/reusables/spinners/error.svg';
import SpinnerSVG from '@site/static/assets/src/components/reusables/spinners/spinner.svg';
import WarningSVG from '@site/static/assets/src/components/reusables/spinners/warning.svg';
import WhitelistSVG from '@site/static/assets/src/components/reusables/spinners/whitelist.svg';

// Internal Configs
import GLOBALS from '@site/src/config/globals';

// Interfaces
interface SpinnerPropsI {
  size?: number;
  color?: string;
  type: number;
}

// Constants
export const SPINNER_TYPE = {
  PROCESSING: 1,
  WARNING: 2,
  ERROR: 3,
  COMPLETED: 4,
  WHITELIST: 5,
}

// Create Spinner
export default function Spinner({ size = 42, color =  GLOBALS.COLORS.PRIMARY_COLOR, type = SPINNER_TYPE.PROCESSING }: SpinnerPropsI) {
  return (
    <SpinLoader flex="initial" alignSelf="center" color={color} width={`${size}px`} completed={type == SPINNER_TYPE.PROCESSING ? false : true}>
      {type == SPINNER_TYPE.PROCESSING && 
        <SpinnerSVG />
      }
      {type == SPINNER_TYPE.ERROR && 
        <ErrorSVG />
      }
      {type == SPINNER_TYPE.WARNING && 
        <WarningSVG />
      }
      {type == SPINNER_TYPE.COMPLETED && 
        <CheckmarkSVG />
      }
      {type == SPINNER_TYPE.WHITELIST && 
        <WhitelistSVG />
      }
    </SpinLoader>
  );
}

const spinAnimation = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

const SpinLoader = styled(ItemV)<{completed: boolean}>`
  color: ${props => props.color};
  ${props => !props.completed && css`
    animation-name: ${spinAnimation};
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `}
`;
