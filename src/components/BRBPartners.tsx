// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2 } from './SharedStylingV2';

// Internal Configs
import { brbPartnersList } from 'utils/BRBPartnersList';

export const Partners = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  return (
    <PartnersContainer ref={sectionRef}>
      <Header>Partners</Header>
      <ItemHV2>
        {brbPartnersList.map((item, i) => {
          return (
            <PartnerItem key={i}>
              <ItemVV2
                maxHeight="65px"
                height="65px"
                margin="27px"
              >
                <PartnersButton
                  padding="0px"
                  borderRadius="0px"
                  background="transparent"
                  title={`${item?.title}`}
                  onClick={() => {
                    window.open(item?.link);
                  }}
                >
                  <PartnersLogo
                    src={require(`../assets/brb/partners/${item?.srcref}.png`)}
                    srcSet={`${require(`../assets/brb/partners/${item?.srcref}@2x.png`)} 2x, ${require(`../assets/brb/partners/${item?.srcref}@3x.png`)} 3x`}
                    alt={`${item?.alt}`}
                    style={{ scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}` }}
                  />
                </PartnersButton>
              </ItemVV2>
            </PartnerItem>
          );
        })}
      </ItemHV2>
    </PartnersContainer>
  );
};

const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 108px;
  @media (max-width: 768px) {
    margin: 0px 0px 114px;
  }
  @media (min-width: 1400px) {
    margin-top: 110px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const PartnersLogo = styled(ImageV2)`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 65px;
`;

const PartnerItem = styled(ItemHV2)`
  width: auto;
  display: flex;
  align-items: center;
  flex: 0 0 33.333333%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const PartnersButton = styled(ButtonV2)`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
`;
