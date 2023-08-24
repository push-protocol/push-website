// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';

import { device } from 'config/globals';
import useMediaQuery from 'hooks/useMediaQuery';
import styled from 'styled-components';

import { brbCommPartnersList } from 'config/BRBCommPartnersList';
import MarqueeAnimation from './MarqueeAnimation';
import { ButtonV2, ImageV2, ItemHV2 } from './SharedStylingV2';

export const CommunityPartners = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const ANIMATION_SPEED = isMobile ? 42 : 70;

  return (
    <Container>
      <Header>Community Partners</Header>
      <CommunityContainer>
        <MarqueeAnimation
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          direction="left"
        >
          {brbCommPartnersList?.map((item) => {
            return (
              <PartnerItem key={item?.srcref}>
                <PartnersButton
                  padding="0px"
                  borderRadius="0px"
                  background="transparent"
                  title={`${item?.title}`}
                  onClick={() => {
                    window.open(item?.link);
                  }}
                >
                  <PartnerIcon
                    src={require(`../assets/brb/community/${item?.srcref}.png`)}
                    srcSet={`${require(`../assets/brb/community/${item?.srcref}@2x.png`)} 2x, ${require(`../assets/brb/community/${item?.srcref}@3x.png`)} 3x`}
                    alt={`${item?.alt}`}
                    height={item?.height}
                  />
                </PartnersButton>
              </PartnerItem>
            );
          })}
        </MarqueeAnimation>
      </CommunityContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0px 74px;
  @media (max-width: 480px) {
    margin: 0px 0px 107px;
  }
`;

const CommunityContainer = styled(ItemHV2)`
  width: 100vw;
  height: 177px;
  overflow-y:hidden;
`;

const PartnerIcon = styled(ImageV2)`
  width: auto;
  height: ${(props) => props.height || 'auto'};
  max-width: 241px;
  max-height:177px;
`;

const PartnerItem = styled.div`
  width: auto;
  height: 141px;
  max-height: 141px;
  display: flex;
  align-items: center;
  margin-right: 178px;
  @media (max-width: 480px) {
    margin-right: 52px;
  }
`;

const Header = styled.span`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  display: flex;
  margin: 0px 0px 36px;
  @media (max-width: 480px) {
    margin: 0px 0px 49px;
    flex-wrap: wrap;
    max-width: 100vw;
    text-align: center;
    line-height: 1.5;
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
