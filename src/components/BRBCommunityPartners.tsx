import React from 'react';

import styled from 'styled-components';
import useMediaQuery from 'hooks/useMediaQuery';

import BuildersTribeSVG from '../assets/brb/community/buidlerstribe.svg';
import DevfolioSVG from '../assets/brb/community/devfolio.svg';
import ENSDaoSVG from '../assets/brb/community/ensdao.svg';
import GitcoinSVG from '../assets/brb/community/gitcoin.svg';
import FrontierSVG from '../assets/brb/community/frontier.svg';
import LearnWeb3SVG from '../assets/brb/community/learnweb3.svg';
import HydDaoSVG from '../assets/brb/community/hyd dao.svg';
import IndiverseSVG from '../assets/brb/community/indiverse.svg';
import GdscSVG from '../assets/brb/community/gdsc.svg';
import TphSVG from '../assets/brb/community/tph.svg';
import GpcSVG from '../assets/brb/community/gpc.svg';
import WxSVG from '../assets/brb/community/wx.svg';
import PhoenixSVG from '../assets/brb/community/phoenixguild.svg';
import H4BengalSVG from '../assets/brb/community/h4bengal.svg';
import TribeAcademySVG from '../assets/brb/community/tribeacademy.svg';
import DiversionSVG from '../assets/brb/community/diversion.svg';
import irlamigoSVG from '../assets/brb/community/irlamigo.svg';
import w3cgSVG from '../assets/brb/community/w3cg.svg';
import blockchainedSVG from '../assets/brb/community/blockchained.svg';
import foundershipSVG from '../assets/brb/community/foundership.svg';
import ogclubSVG from '../assets/brb/community/ogclub.svg';
import PuneDaoSVG from '../assets/brb/community/punedao.svg';
import KbaSVG from '../assets/brb/community/kba.svg';
import updaoSVG from '../assets/brb/community/UPDao 1.svg';
import w3jSVG from '../assets/brb/community/w3j 1.svg';
import MarqueeAnimation from './MarqueeAnimation';
import { ItemH } from './SharedStyling';
import { device } from 'config/globals';

export const CommunityPartners = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const partnerList = [
    {
      svgIcon: GitcoinSVG,
      id: 'gitcoin',
      alt: 'Gitcoin',
    },
    {
      svgIcon: ENSDaoSVG,
      id: 'ensdao',
      alt: 'EnsDao',
    },
    {
      svgIcon: LearnWeb3SVG,
      id: 'learnweb3',
      alt: 'LearnWeb3',
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
    {
      svgIcon: DevfolioSVG,
      id: 'devfolio',
      alt: 'Devfolio',
    },
    {
      svgIcon: HydDaoSVG,
      id: 'hyddao',
      alt: 'hyddao',
    },
    {
      svgIcon: IndiverseSVG,
      id: 'indiverse',
      alt: 'indiverse',
    },
    {
      svgIcon: GdscSVG,
      id: 'gdsc',
      alt: 'gdsc',
    },
    {
      svgIcon: TphSVG,
      id: 'tph',
      alt: 'tph',
    },
    {
      svgIcon: TribeAcademySVG,
      id: 'tribeacademy',
      alt: 'tribeacademy',
    },
    {
      svgIcon: GpcSVG,
      id: 'gpc',
      alt: 'gpc',
    },
    {
      svgIcon: H4BengalSVG,
      id: 'h4bengal',
      alt: 'h4bengal',
    },
    {
      svgIcon: WxSVG,
      id: 'wx',
      alt: 'wx',
    },
    {
      svgIcon: PhoenixSVG,
      id: 'phoenix',
      alt: 'phoenix',
    },
    {
      svgIcon: DiversionSVG,
      id: 'diversion',
      alt: 'diversion',
    },
    {
      svgIcon: irlamigoSVG,
      id: 'irlamigo',
      alt: 'irlamigo',
    },
    {
      svgIcon: w3cgSVG,
      id: 'w3cg',
      alt: 'w3cg',
    },
    {
      svgIcon: blockchainedSVG,
      id: 'blockchained',
      alt: 'blockchained',
    },
    {
      svgIcon: foundershipSVG,
      id: 'foundership',
      alt: 'foundership',
    },
    {
      svgIcon: ogclubSVG,
      id: 'ogclub',
      alt: 'ogclub',
    },
    {
      svgIcon: PuneDaoSVG,
      id: 'puneDao',
      alt: 'puneDao',
    },
    {
      svgIcon: KbaSVG,
      id: 'kba',
      alt: 'kba',
    },
    {
      svgIcon: updaoSVG,
      id: 'updao',
      alt: 'updao',
    },
    {
      svgIcon: w3jSVG,
      id: 'w3j',
      alt: 'w3j',
    },
  ];

  const ANIMATION_SPEED = isMobile ? 40 : 50;

  return (
    <Container>
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
  margin: 120px 0px 74px;
  @media (max-width: 480px){
    margin: 0px 0px 107px;
  }
`;

const CommunityContainer = styled(ItemH)`
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
