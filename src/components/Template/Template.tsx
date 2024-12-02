// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import ChainAlertBar from '../Chain/ChainAlertBar';
import { Button, Image, ItemH, ItemV, Span } from '../../css/SharedStyling';
import StarIcon from '@site/static/assets/website/illustrations/starIcon.svg';

const Template = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const featuresCard = [
    {
      text: 'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.',
    },
    {
      text: 'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.',
    },
    {
      text: 'Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk handango.',
    },
  ];

  return (
    <TemplateWrapper>
      <TemplateContent>
        <ItemH gap='150px'>
          <ItemV
            justifyContent='space-between'
            alignItems='flex-start'
            alignSelf='center'
          >
            <ChainAlertBar
              text='Push Chain Governance is live'
              backgroundColor='transparent'
              textColor='#FFF'
              borderColor='#D42D2D'
              iconColor='#FFF'
              showStarIcon={false}
              center={isTablet && true}
            />
            <TemplateImage
              src={
                require(`@site/static/assets/website/template/Poker.png`)
                  .default
              }
              srcSet={`${require(`@site/static/assets/website/template/Poker@2x.png`).default} 2x, ${require(`@site/static/assets/website/template/Poker@3x.png`).default} 3x`}
              alt={`Poker Image`}
            />

            <Span
              color='#FFF'
              fontSize={isMobile ? '16px' : '20px'}
              fontFamily='N27'
              fontWeight='400'
              lineHeight='140%'
            >
              Webtwo ipsum unigo. Elgg skype woopra fleck ifttt imvu, hipmunk
              handango empressr.
            </Span>

            <Button
              background='#D42D2D'
              width='100%'
              margin='48px 0 32px 0'
              fontFamily='N27'
            >
              Launch App
            </Button>

            {featuresCard.map((item) => (
              <Features>
                <StarIcon />
                <Span
                  color='#FFF'
                  fontSize={isMobile ? '16px' : '18px'}
                  fontFamily='N27'
                  fontWeight='400'
                  lineHeight='140%'
                >
                  {item.text}
                </Span>
              </Features>
            ))}
          </ItemV>
          <div
            style={{
              width: isMobile ? '100%' : '500px',
              height: '700px',
              background: '#202020',
              borderRadius: '32px',
            }}
          ></div>
        </ItemH>
      </TemplateContent>
    </TemplateWrapper>
  );
};

export default Template;

const TemplateWrapper = styled.div`
  height: 100vh;
  background: #000;

  @media ${device.tablet} {
    height: auto;
  }
`;

const TemplateContent = styled.div`
  margin: auto auto;
  height: 100%;
  display: flex;
  align-items: center;

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
    margin: 24px auto;
  }

  @media ${device.mobileL} {
    padding: 0 16px;
  }
`;

const TemplateImage = styled(Image)`
  width: 300px;
  margin: 24px 0;

  @media ${device.tablet} {
    margin: 24px auto;
  }
`;

const Features = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding: 24px 0;
  gap: 24px;
  align-items: center;
  width: 100%;
`;
