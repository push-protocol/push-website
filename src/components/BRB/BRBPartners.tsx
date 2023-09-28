// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, Image, ItemH, ItemV } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import { brbPartnersList } from '@site/src/config/BRBPartnersList';

// Internal Configs
import { device } from '@site/src/config/globals';

export const Partners = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.tablet);

  return (
    <PartnersContainer ref={sectionRef}>
      <Header>Partners</Header>
      <ItemV>
        {brbPartnersList.map((partnerRow, i) => {
          return (
            <ItemH
              key={i}
              gap="0px 164px"
              flexDirection={isMobile ? 'column' : 'row'}
            >
              {partnerRow.map((item, index) => {
                return (
                  <PartnerItem key={index}>
                    <ItemV
                      maxHeight="65px"
                      width={isMobile ? '100%' : '300px'}
                      maxWidth={isMobile ? '100%' : '300px'}
                      height="65px"
                      margin="27px"
                    >
                      <PartnersButton
                        padding="0px"
                        borderRadius="0px"
                        background="transparent"
                        title={`${item?.title}`}
                        disabled={item?.link ? false : true}
                        onClick={() => {
                          if (item?.link) {
                            window.open(item?.link);
                          } else {
                            return;
                          }
                        }}
                      >
                        <PartnersLogo
                          src={require(`@site/static/assets/website/brb/partners/${item.srcref}.webp`).default}
                          srcSet={`${require(`@site/static/assets/website/brb/partners/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/partners/${item.srcref}@3x.webp`).default} 3x`}
                          alt={`${item?.alt}`}
                          style={{
                            scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}`,
                          }}
                        />
                      </PartnersButton>
                    </ItemV>
                  </PartnerItem>
                );
              })}
            </ItemH>
          );
        })}
      </ItemV>
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
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const PartnersLogo = styled(Image)`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 65px;
`;

const PartnerItem = styled(ItemH)`
  max-width: 300px;
  display: flex;
  align-items: center;
  // flex: 0 0 33.333333%;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    // flex: 0 0 100%;
  }
`;

const PartnersButton = styled(Button)`
  cursor: ${(props) => (props.disabled ? 'default !important' : 'pointer')};
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
`;
