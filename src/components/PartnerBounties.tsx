// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2,  } from './SharedStylingV2';
import useMediaQuery from 'hooks/useMediaQuery';
import { ReactComponent as Arrow } from '../assets/brb/schedules/arrow.svg';

// Internal Configs
import { device } from '../config/globals';
import { brbPartnersBountyList } from 'utils/BRBPartnersBountyList';

export const PartnerBounties = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.tablet);

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <PartnerBountiesContainer ref={sectionRef}>
      <Header>Partners {isMobile && (<br />)} Bounties</Header>
      {brbPartnersBountyList?.map((item,i) => (
        <PartnerLine key={i}>
          <PartnersLogo
            src={require(`../assets/brb/partners/${item?.srcref}.png`)}
            srcSet={`${require(`../assets/brb/partners/${item?.srcref}@2x.png`)} 2x, ${require(`../assets/brb/partners/${item?.srcref}@3x.png`)} 3x`}
            alt={'Content'}
            style={{ scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}` }}
          />
  
          <TextSpan
            fontSize='15px'
            fontWeight='200'
          >
            {item.text}
          </TextSpan>
  
          <BountyItem>
            <PriceSpan 
              fontSize='32px'
              fontWeight="400"
            >
              ${item.price.toLocaleString()}
            </PriceSpan>
  
            <Button
              onClick={() => (openLink(item.link))}
              //   title='Participate Virtually'
            >
              <ViewBountyText>View Bounty</ViewBountyText>
              <ArrowSmall />
            </Button>
          </BountyItem>
        </PartnerLine>
      ))}
   
      
    </PartnerBountiesContainer>
  );
};

const PartnerBountiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px 50px 0px;
  @media (max-width: 768px) {
    margin: 20px 0px 70px 0px;
  }
  @media (min-width: 1400px) {
    margin: 110px 0px 160px 0px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 300;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const PartnerLine = styled.div`
    background: #1B1B25;
    width: 90%;
    height: 120px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 32px;
    padding: 24px;
    box-sizing: border-box;
    border: 1px solid transparent;
    margin: 8px 0px;

    &:hover {
        border: 1px solid #E64DE9;
    }

    @media ${device.mobileL} {
        height: auto;
        flex-direction: column;
        align-items: flex-start;
      }
`;

const PartnersLogo = styled(ImageV2)`
  width: auto;
  height: auto;
  max-width: 140px;
  max-height: 50px;
`;

const ViewBountyText = styled(SpanV2)`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  font-family: Glancyr !important;


  @media ${device.mobileS} {
    flex: 1;
  }
`;

const Button = styled.div`
  min-width: 114px;
  max-width: 114px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0px 0px;
  border: 1px solid #E64DE9;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
//   margin-left: auto;

  &: hover {
    background: #E64DE9;
    animation-duration: 2s;
  }
`;

const ArrowSmall = styled(Arrow)`
  width: 8px;
  position: relative;
  top: 0.10em;
`;

const TextSpan = styled(SpanV2)`
    font-family: Glancyr !important;
    margin: 0 0 0 59px;
    @media ${device.mobileL} {
        margin: 16px 0px;
    }
`;


const PriceSpan = styled(SpanV2)`
    font-family: Glancyr !important;
`;

const BountyItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    gap: 38px;
    @media ${device.mobileL} {
       margin-left: 0px;
       width: 100%;
       justify-content: space-between;
    }
`;
