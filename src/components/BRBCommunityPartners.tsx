import React from 'react';

import styled from 'styled-components';
import BuildersTribeSVG from '../assets/brb/community/builders-tribe.svg';
import DevfolioSVG from '../assets/brb/community/devfolio.svg';
import ENSSVG from '../assets/brb/community/ens.svg';
import GitcoinSVG from '../assets/brb/community/gitcoin.svg';
import MarqueeAnimation from './MarqueeAnimation';

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

  const ANIMATION_SPEED = 60;

  return (
    <CommunityContainer>
      <MarqueeAnimation
        speed={ANIMATION_SPEED}
        gradientWidth={8}
        gap={18}
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
  );
};

const CommunityContainer = styled.div`
  display: flex;
  column-gap: 18px;
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
`;
