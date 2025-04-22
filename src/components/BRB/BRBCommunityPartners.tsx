// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import MarqueeAnimation from '@site/src/components/MarqueeAnimation';
import { Button, Image, ItemH, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { brbCommPartnersList } from '@site/src/config/BRBCommPartnersList';
import { device } from '@site/src/config/globals';

export const CommunityPartners = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const ANIMATION_SPEED = isMobile ? 55 : 70;

  return (
    <Container>
      <Header>Community Partners</Header>
      <CommunityContainer>
        <MarqueeAnimation
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          direction='left'
        >
          {brbCommPartnersList?.map((item) => {
            return (
              <PartnerItem key={item?.srcref}>
                <PartnersButton
                  padding='0px'
                  borderRadius='0px'
                  background='transparent'
                  title={`${item?.title}`}
                  onClick={() => {
                    window.open(item?.link);
                  }}
                >
                  <PartnerIcon
                    src={
                      require(
                        `@site/static/assets/website/brb/community/${item?.srcref}.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/brb/community/${item?.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/community/${item?.srcref}@3x.webp`).default} 3x`}
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

const CommunityContainer = styled(ItemH)`
  width: 100vw;
  height: 177px;
`;

const PartnerIcon = styled(Image)`
  width: auto;
  height: ${(props) => props.height || 'auto'};
  max-width: 310px;
  max-height: 177px;
`;

const PartnerItem = styled.div`
  width: auto;
  height: 177px;
  max-height: 177px;
  display: flex;
  align-items: center;
  margin-right: 178px;
  @media (max-width: 480px) {
    margin-right: 52px;
  }
`;

const Header = styled(Span)`
  font-size: 46px;
  font-weight: 400;
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

const PartnersButton = styled(Button)`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
`;
