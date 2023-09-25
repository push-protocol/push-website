// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled, { css } from 'styled-components';

// Internal Components
import { SectionV2 } from '@site/src/components/SharedStylingV2';

type HybridSectionProps = {
  curve?: 'both' | 'bottom' | undefined;
  id: string;
  children: React.ReactNode;
};

/**
 * This wrapper component takes all the styling from SharedStyling "Section"
 * and adds other desired common effects
 */

const HybridSection = (props: HybridSectionProps) => {
  return <StyledSection {...props}>{props.children}</StyledSection>;
};

const StyledSection = styled(SectionV2)`

  &[data-bkg='dark'] {
    background: #121315;

    &:after {
      background: #121315;
    }

    &:before {
      background: #121315;
    }
  }

  &[data-bkg='light'] {
    background: #ffffff;

    &:after {
      background: #ffffff;
    }

    &:before {
      background: #ffffff;
    }
  }

  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};

  ${(props) => {
    if (props.curve === 'bottom') {
      return css`
        &:after {
          position: absolute;
          z-index: 1;
          content: '';
          top: 100%;
          left: 0;
          right: 0;
          height: 60px;
          width: 100%;
          background: ${(props) => props.background || '#121315'};
          border-bottom-left-radius: 48px;
          border-bottom-right-radius: 48px;
        }
      `;
    }

    if (props.curve === 'both') {
      return css`
        &:before {
          position: absolute;
          z-index: 1;
          content: '';
          top: -48px;
          left: 0;
          right: 0;
          height: 60px;
          width: 100%;
          background: ${(props) => props.background || '#121315'};
          border-top-left-radius: 48px;
          border-top-right-radius: 48px;
        }

        &:after {
          position: absolute;
          z-index: 1;
          content: '';
          top: 100%;
          left: 0;
          right: 0;
          height: 60px;
          width: 100%;
          background: ${(props) => props.background || '#121315'};
          border-bottom-left-radius: 48px;
          border-bottom-right-radius: 48px;
        }
      `;
    }

    return '';
  }}
`;

export default React.memo(HybridSection);
