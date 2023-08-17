import React from 'react';

import styled from 'styled-components';
import useMediaQuery from 'hooks/useMediaQuery';

import BuildersTribeSVG from '../assets/brb/community/buidlers-tribe.svg';
import DevfolioSVG from '../assets/brb/community/devfolio.svg';
import ENSSVG from '../assets/brb/community/ens.svg';
import GitcoinSVG from '../assets/brb/community/gitcoin.svg';
import FrontierSVG from '../assets/brb/community/frontier.svg';
import MarqueeAnimation from './MarqueeAnimation';
import { ItemH } from './SharedStyling';
import { device } from 'config/globals';

export const CommunityPartners = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.mobileL);

  const partnerList = [
    {
      svgIcon: GitcoinSVG,
      id: 'gitcoin',
      alt: 'Gitcoin',
    },
    {
      svgIcon: ENSSVG,
      id: 'ens',
      alt: 'ENS',
    },
    {
      svgIcon: DevfolioSVG,
      id: 'devfolio',
      alt: 'Devfolio',
    },
    {
      svgIcon: FrontierSVG,
      id: 'frontier',
      alt: 'Frontier',
    },
    {
      svgIcon: BuildersTribeSVG,
      id: 'buidlerstribe',
      alt: 'BuidlersTribe',
    },
  ];

  const ANIMATION_SPEED = isMobile ? 40 : 80;

  return (
    <Container ref={sectionRef}>
      <Header>Community Partners</Header>
      <CommunityContainer>
        <MarqueeAnimation
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          direction="left"
        >
          {partnerList?.map((partner) => {
            return (
              <PartnerItem key={partner?.id}>
                <PartnerIcon
                  src={partner?.svgIcon}
                  alt={partner?.alt}
                />
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
`;

const CommunityContainer = styled(ItemH)`
  margin: 0px 0px 74px;
  width: 100vw;
  height: 151px;
`;

const PartnerIcon = styled.img`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 151px;
`;

const PartnerItem = styled.div`
  width: auto;
  height: 151px;
  max-height: 151px;
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
