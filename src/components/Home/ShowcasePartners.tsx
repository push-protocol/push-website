// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useLayoutEffect, useState } from 'react';

// External Components
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// Internal Components
import { H2, Image, ItemH, ItemV, LinkTo, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device, size } from '@site/src/config/globals';
import { ShowcaseList, ShowcaseListResponsive } from "@site/src/config/HomeShowcaseList";

/**
 * edit this to change the order
 */

// first array is first row in pattern
// second array is first 2 icons and last 3 icons on second row in pattern
// third array is grid icons to left of text - 3rd and 4th row(left of text and button)
// fourth array is grid icons to left of text - 3rd and 4th row(right of text and button)
// fifth array is first 2 icons and last 3 icons on 5th row in pattern
// sixth array is 6th(last) row in pattern

// last 2 arrays are designs after grids in first and second row middle icons has formed

function PartnerChannels() {
  // Internationalization
  const { t } = useTranslation();

  const isLargeScreen = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [active, setActive] = useState(false);
  // const itemRef = useRef();
  // const onScreen = useOnScreen(itemRef);
  const { ref: itemRef, inView: myElementIsVisible } = useInView();

  const [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow, eighthRow] = ShowcaseList;

  const onEnter = () => {
    var mediaQuery = window.matchMedia(`(min-width: ${size.laptopL})`);

    if (mediaQuery.matches) {
      gsap.to('#item-0', { width: '0px', height: '0px' });
      gsap.to('#item-1', { width: '0px', height: '0px' });
      gsap.to('#item-2', { width: '0px', height: '0px' });
      gsap.to('#item-3', { width: '0px', height: '0px' });
      gsap.to('#item-4', { width: '0px', height: '0px' });
      gsap.to('#item-5', { width: '0px', height: '0px' });
      gsap.to('#item-6', { width: '0px', height: '0px' });
  
      gsap.to('#secondItem-0', { width: '96px', height: '96px' });
      gsap.to('#secondItem-1', { width: '178px', height: '178px' });
      gsap.to('#secondItem-2', { width: '96px', height: '96px' });
      gsap.to('#secondItem-3', { width: '96px', height: '96px' });
  
      gsap.to('#secondRowItem-0', { width: '178px', height: '178px' });
      gsap.to('#secondRowItem-1', { width: '96px', height: '96px' });
      gsap.to('#secondRowItem-2', { width: '0px', height: '0px' });
  
      gsap.to('#thirdItem-0', { width: '178px', height: '178px' });
      gsap.to('#thirdItem-1', { width: '0px', height: '0px' });
      gsap.to('#thirdRowItem-0', { width: '96px', height: '96px' });
      gsap.to('#thirdRowItem-1', { width: '96px', height: '96px' });
      gsap.to('#thirdRowItem-2', { width: '96px', height: '96px' });
  
      gsap.to('#fourItem-0', { width: '178px', height: '178px' });
      gsap.to('#fourItem-1', { width: '0px', height: '0px' });
      gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
      gsap.to('#fourRowItem-1', { width: '178px', height: '178px' });
      gsap.to('#fourRowItem-2', { width: '178px', height: '178px' });
  
      gsap.to('#sixitem-0', { width: '0px', height: '0px' });
      gsap.to('#sixitem-1', { width: '0px', height: '0px' });
      gsap.to('#sixitem-2', { width: '0px', height: '0px' });
      gsap.to('#sixitem-3', { width: '0px', height: '0px' });
    }
    
  };

  useLayoutEffect(() => {
    onEnter();
  }, []);

  useEffect(() => {
    if (myElementIsVisible) {
      onLeave();
      setActive(true);
    }

    if (!myElementIsVisible) {
      onEnter();
      setActive(false);
    }
  }, [myElementIsVisible]);

  const onLeave = () => {
    var mediaQuery = window.matchMedia(`(min-width: ${size.laptopL})`);

    if (mediaQuery.matches) {
      gsap.to('#item-0', { width: '96px', height: '96px' });
      gsap.to('#item-1', { width: '96px', height: '96px' });
      gsap.to('#item-2', { width: '96px', height: '96px' });
      gsap.to('#item-3', { width: '96px', height: '96px' });
      gsap.to('#item-4', { width: '96px', height: '96px' });
      gsap.to('#item-5', { width: '96px', height: '96px' });

      gsap.to('#secondItem-0', { width: '96px', height: '96px' });
      gsap.to('#secondItem-1', { width: '96px', height: '96px' });
      gsap.to('#secondItem-2', { width: '96px', height: '96px' });
      gsap.to('#secondItem-3', { width: '96px', height: '96px' });

      gsap.to('#secondRowItem-0', { width: '96px', height: '96px' });
      gsap.to('#secondRowItem-1', { width: '96px', height: '96px' });
      gsap.to('#secondRowItem-2', { width: '96px', height: '96px' });

      gsap.to('#thirdItem-0', { width: '96px', height: '96px' });
      gsap.to('#thirdItem-1', { width: '96px', height: '96px' });
      gsap.to('#thirdRowItem-0', { width: '96px', height: '96px' });
      gsap.to('#thirdRowItem-1', { width: '96px', height: '96px' });
      gsap.to('#thirdRowItem-2', { width: '96px', height: '96px' });

      gsap.to('#fourItem-0', { width: '96px', height: '96px' });
      gsap.to('#fourItem-1', { width: '96px', height: '96px' });
      gsap.to('#fourRowItem-0', { width: '96px', height: '96px' });
      gsap.to('#fourRowItem-1', { width: '96px', height: '96px' });
      gsap.to('#fourRowItem-2', { width: '96px', height: '96px' });

      gsap.to('sixitem-0', { width: '96px', height: '96px' });
      gsap.to('sixitem-1', { width: '96px', height: '96px' });
      gsap.to('sixitem-2', { width: '96px', height: '96px' });
      gsap.to('sixitem-3', { width: '96px', height: '96px' });

      gsap.to('plain-logo', { width: '96px', height: '96px' });
    }
  };

  return (
    <>
      <PartnerRow>
        {
          firstRow?.map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`item-${idx}`}
            />
          ))}
      </PartnerRow>
      
      <ParnterFloatRow>
        <PartnerRow>
          {secondRow?.slice(0, 2).map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`secondItem-${idx}`}
            />
          ))}
        </PartnerRow>

        <PartnerGridRow>
          {active
            ? seventhRow.slice(2, 4).map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className="marqueeItem plain-logo"
                />
              ))
            : seventhRow.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className="marqueeItem plain-logo"
                />
              ))}
        </PartnerGridRow>

        <PartnerRow>
          {secondRow?.slice(2, 5).map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`secondRowItem-${idx}`}
            />
          ))}
        </PartnerRow>
      </ParnterFloatRow>

      <PartnerResponsiveRow>
      {
        ShowcaseListResponsive.top.map((item, idx) => (
          <ShowcaseLogoResponsive
            key={idx}
            width={item.width}
            height={item.height}
            src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
            srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
            alt={`${item.alt}`}
            className={item.class}
          />
        ))
      }
      </PartnerResponsiveRow>

      <PartnerContent active={active}>
        <PartnerContentSideRow>
          <main className={active ? 'grid' : 'main'}>
            {thirdRow?.slice(0, 2).map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`thirdItem-${idx}`}
              />
            ))}
          </main>
          <div className="grid">
            {thirdRow?.slice(2, 4).map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`thirdRowItem-${idx}`}
              />
            ))}
          </div>
        </PartnerContentSideRow>

        <GridItem
          display="flex"
          flexDirection="column"
        >
          <ResponsiveH2
            color="#121315"
            fontSize="40px"
            fontWeight="700"
            letterSpacing="-0.02em"
            margin="0px 0px"
            lineHeight="110%"
          >
            {t('home.partners-section.partner-channels-title')}
          </ResponsiveH2>

          <Span
            color="#303C5E"
            size="19px"
            weight="300"
            spacing="-0.03em"
            lineHeight="160%"
            textAlign={isMobile ? 'center' : 'initial'}
          >
            {t('home.partners-section.partner-channels-description')}
          </Span>

          <LinkTo
            to="/frens"
            title={t('home.partners-section.partner-channels-button-alt')}
            background="#DD44B9"
            hoverColor="#fff"
            borderRadius="16px"
            padding="14px 32px"
            fontSize="18px"
            fontWeight="500"
            letterSpacing="-0.03em"
            lineHeight="26px"
            margin="15px 0px 0px 0px"
            alignSelf="center"
          >
            {t('home.partners-section.partner-channels-button')}
          </LinkTo>
        </GridItem>

        <PartnerContentSideRow>
          <div className="grid">
            {fourthRow?.slice(2, 4).map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`thirdRowItem-${idx}`}
              />
            ))}
          </div>

          <div className={active ? 'grid' : 'main'}>
            {fourthRow?.slice(0, 2).map((item, idx) => (
              <ShowcaseLogo
                key={idx}
                width={item.width}
                height={item.height}
                src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item.alt}`}
                className={item.class}
                id={`fourItem-${idx}`}
              />
            ))}
          </div>
        </PartnerContentSideRow>
      </PartnerContent>

      <PartnerResponsiveRow>
      {
        ShowcaseListResponsive.bottom.map((item, idx) => (
          <ShowcaseLogoResponsive
            key={idx}
            width={item.width}
            height={item.height}
            src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
            srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
            alt={`${item.alt}`}
            className={item.class}
          />
        ))
      }
      </PartnerResponsiveRow>

      <ParnterFloatRow>
        <PartnerRowTopAligned>
          {fifthRow?.slice(0, 2).map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`secondItem-${idx}`}
            />
          ))}
        </PartnerRowTopAligned>

        <PartnerGridRow>
          {active
            ? eighthRow.slice(0, 2).map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                />
              ))
            : eighthRow.map((item, idx) => (
                <ShowcaseLogo
                  key={idx}
                  width={item.width}
                  height={item.height}
                  src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item.alt}`}
                  className={item.class}
                />
              ))}
        </PartnerGridRow>

        <PartnerRowTopAligned>
          {fifthRow?.slice(2, 5).map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`secondRowItem-${idx}`}
            />
          ))}
        </PartnerRowTopAligned>
      </ParnterFloatRow>

      <PartnerRow
        justifyContent="flex-start"
        padding="0px 0px 120px 0px"
        ref={itemRef}
      >
        {
          sixthRow?.map((item, idx) => (
            <ShowcaseLogo
              key={idx}
              width={item.width}
              height={item.height}
              src={require(`@site/static/assets/website/showcase/${item.srcref}.webp`).default}
              srcSet={`${require(`@site/static/assets/website/showcase/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/showcase/${item.srcref}@3x.webp`).default} 3x`}
              alt={`${item.alt}`}
              className={item.class}
              id={`item-${idx}`}
            />
          ))
        }
      </PartnerRow>
    </>
  );
}

const PartnerRow = styled(ItemH)`
  margin: 14px auto 0px auto;
  gap: 28px;
  align-items: flex-end !important;
`;

const PartnerRowTopAligned = styled(ItemH)`
  margin: 0px auto 0px auto;
  gap: 28px;
  align-items: flex-start !important;
`;

const ParnterFloatRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 0px auto;
  align-items: flex-end !important;
  height: 100%;
  gap: 28px;
`;

const NewSecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 0px auto;
  align-items: flex-start !important;
  height: 100%;
  gap: 28px;
`;

const PartnerGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
`;

const PartnerContentSideRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  height: 100%;
  align-items: center !important;

  .grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 28px;
    width: 96px !important;
  }

  .main {
    width: 178px !important;
  }

  @media ${device.laptopL} {
    display: none;
  }
`;

const GridItem = styled(ItemH)`
  span {
    width: 80%;
    text-align: center;

    @media ${device.tablet} {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 30px 0px;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const PartnerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 14px auto;

  @media ${device.laptopL} {

  }
`;

const ShowcaseLogo = styled(Image)`
  @media ${device.laptopL} {
    display: none;
    width: 96px;
    height: 96px;
  }
`


const PartnerResponsiveRow = styled(ItemV)`
  display: none;
  padding: 20px 0;
  
  @media ${device.laptopL} {
    display: flex;
    flex-direction: row;
    gap: 28px;
  }
`

const ShowcaseLogoResponsive = styled(ShowcaseLogo)`
  @media ${device.laptopL} {
    display: block;
  }
`

export default PartnerChannels;
