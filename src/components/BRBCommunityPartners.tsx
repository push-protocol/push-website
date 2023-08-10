import React from 'react';

import styled from 'styled-components';
import BuildersTribeSVG from '../assets/brb/community/buidlers-tribe.svg';
import DevfolioSVG from '../assets/brb/community/devfolio.svg';
import ENSSVG from '../assets/brb/community/ens.svg';
import GitcoinSVG from '../assets/brb/community/gitcoin.svg';
// import MarqueeAnimation from './MarqueeAnimation';
import { ItemH } from './SharedStyling';
import Marquee from 'react-fast-marquee';

export const CommunityPartners = () => {
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
      svgIcon: BuildersTribeSVG,
      id: 'builderstribe',
      alt: 'BuildersTribe',
    },
  ];

  const ANIMATION_SPEED = 80;

  return (
    <Container>
      <Header>Community Partners</Header>
      <CommunityContainer>
        <Marquee
          speed={ANIMATION_SPEED}
          gradientWidth={8}
          direction="right"
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
        </Marquee>
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
  margin: 0px 0px 114px;
`;

const PartnerIcon = styled.img`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 65px;
`;

const PartnerItem = styled.div`
  width: auto;
  height: 65px;
  max-height: 65px;
  display: flex;
  align-items: center;
  margin-right: 178px;
`;

const Header = styled.span`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  display: flex;
  margin: 0px 0px 78px;
  @media (max-width: 480px) {
    margin: 0px 0px 49px;
    flex-wrap: wrap;
    max-width:100vw;
    text-align:center;
    line-height:1.5;
  }
`;
