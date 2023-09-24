// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import Arrow from '@site/static/assets/website/brb/schedules/arrow.svg';

// Internal Configs
import { brbPartnersBountyList } from '@site/src/config/BRBPartnersBountyList';
import { device } from '@site/src/config/globals';

export const PartnerBounties = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.tablet);

  const openLink = (link: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      return;
    }
  };

  return (
    <PartnerBountiesContainer ref={sectionRef}>
      <ItemHV2 gap="24px" margin="0px 0px 60px">
        <Header>Partners {isMobile && <br />} Bounties</Header>
        <ItemHV2
          background="#e64de9"
          maxWidth="187px"
          gap="10px"
          alignItems="center"
          borderRadius="8px"
          padding="8px 16px 6px 16px"
          height="33px"
          margin='auto 0 0 0'
          style={{ cursor: 'pointer' }}
          onClick={() =>
            openLink(
              'https://pushprotocol.notion.site/Dev-Doc-Billion-Reasons-to-Buidl-One-place-to-start-b900d90937f440fcb737ffcd32078699?pvs=4'
            )
          }
        >
          <SpanV2
            fontSize="14px"
            fontWeight="400"
            letterSpacing="0.3"
            style={{ fontFamily: 'Glancyr' }}
          >
            Register to participate
          </SpanV2>
          <ArrowSmall />
        </ItemHV2>
      </ItemHV2>
      {brbPartnersBountyList?.map((item, i) => (
        <PartnerLine
          key={i}
          onClick={() => openLink(item?.link)}
          disabled={item?.link ? false : true}
        >
          <PartnersLogo
            src={require(`@site/static/assets/website/brb/partners/${item?.srcref}.png`)}
            srcSet={`${require(`@site/static/assets/website/brb/partners/${item?.srcref}@2x.png`)} 2x, ${require(`@site/static/assets/website/brb/partners/${item?.srcref}@3x.png`)} 3x`}
            alt={'Content'}
            style={{ scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}` }}
          />

          <TextSpan
            fontSize="15px"
            fontWeight="100"
          >
            {item.text}
          </TextSpan>

          <BountyItem>
            <PriceSpan
              fontSize="32px"
              fontWeight="400"
            >
              ${item.price.toLocaleString()}
            </PriceSpan>

            <Button className="buttonId">
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
  margin:0px;
`;

const PartnerLine = styled.div`
  background: #1b1b25;
  width: 1280px;
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
  position: relative;

  @media (max-width: 1281px) {
    width: 90%;
  }

  &:hover {
    border: ${(props) => (props.disabled ? '1px solid transparent' : '1px solid #E64DE9')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    & .buttonId {
      background: ${(props) => (!props.disabled ? '#E64DE9 !important' : 'transparent')};
    }
  }

  @media ${device.tablet} {
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
  max-width: ${(props) => props.maxWidth || '114px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0px 0px;
  border: 1px solid ${(props) => props.borderColor || '#e64de9'};
  background: ${(props) => props.background || 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`;

const ArrowSmall = styled(Arrow)`
  width: 8px;
  position: relative;
  top: 0.1em;
`;

const TextSpan = styled(SpanV2)`
  font-family: Glancyr !important;
  // margin: 0 0 0 59px;
  position: absolute;
  left: 200px;
  right: 0;
  width: 100%;
  letter-spacing: 0.03em;

  @media (max-width: 1291px) {
    max-width: 400px;
  }

  @media (max-width: 1000px) {
    max-width: 250px;
  }
  @media ${device.tablet} {
    margin: 16px 0px;
    position: relative;
    width: 100%;
    left: 0px;
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
  @media ${device.tablet} {
    margin-left: 0px;
    width: 100%;
    justify-content: space-between;
  }
`;
