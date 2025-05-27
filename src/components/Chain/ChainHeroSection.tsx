// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TbArrowUpRight } from 'react-icons/tb';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import { device, size } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';
import useModal from './hooks/useModal';

import ImageHolder from '../../../src/components/ImageHolder';
import { A, Button, H2, H3, ItemH, ItemV } from '../../css/SharedStyling';
import ChainAlertBar from './ChainAlertBar';
import ChainElevateModal from './ChainElevateModal';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ChainHeroSection: FC = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const { isOpen, open, close } = useModal();

  const HeroGrid = [
    {
      count: '4MB',
      label: 'Block Size',
    },
    {
      count: '<1s',
      label: 'Finality',
    },
    {
      imageUrl: 'supported-chains',
      label: 'Supported Chains',
    },
  ];

  const scrollTo = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}` },
    });
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: playerRef.current?.wrapper, // The video wrapper element
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => setIsPlaying(true), // Start playback when video enters
      onLeave: () => {
        setIsPlaying(false);
      },
      onEnterBack: () => setIsPlaying(true),
      onLeaveBack: () => {
        setIsPlaying(false);
      },
    });
  }, []);

  return (
    <ChainHeroSectionWrapper>
      <ChainAlertBar
        text='Push Chain Devnet Drop S2 is Live!'
        url='https://portal.push.org/rewards'
        center={true}
      />
      <HeroText>
        <span>Build</span>
        <TypewriterWrapper>
          <Typewriter
            options={{
              strings: [
                'Universal',
                'Interoperable',
                'Any Chain',
                'Omnichain',
                'Shared State',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 75,
              pauseFor: 1500,
              cursor: '',
            }}
          />
        </TypewriterWrapper>
        <span>Apps</span>
      </HeroText>
      <HeroSubText>
        Push Chain is a shared state L1 blockchain that allows all chains to
        unify, enabling apps of any chain to be accessed by users of any chain.{' '}
        <br />
        <br /> <b>Push is the L1 made for every project... on every chain...</b>
      </HeroSubText>
      <HeroButtons>
        <Button
          background='#D548EC'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          onClick={open}
        >
          Get Notified about Testnet
        </Button>
        <Button
          background='#FFF'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          color='#000'
          onClick={() => scrollTo('technology')}
        >
          Explore Push Chain
        </Button>
      </HeroButtons>

      <ChainElevateModal isOpen={isOpen} onClose={close} />

      <ItemV padding='48px 0' ref={playerRef}>
        <ReactPlayer
          url={
            require(`@site/static/assets/website/chain/chain_hero.webm`).default
          }
          playing={
            isPlaying &&
            typeof window !== 'undefined' &&
            window.innerWidth > size.tablet
          }
          loop={true}
          muted={true}
          width='100%'
          height='100%'
          config={{
            file: {
              attributes: {
                controlsList: 'nofullscreen',
              },
            },
          }}
        />
      </ItemV>
      <SectionText>
        Applications that work from any chain.
        <br />
        Push Chain is the Full Stack Interop for everyone.
      </SectionText>

      <CountSection>
        <GridSection>
          {HeroGrid.map((item) => (
            <GridDiv>
              {item.count && (
                <H2
                  fontSize={isMobile ? '40px' : '72px'}
                  fontWeight='500'
                  fontFamily='N27'
                  lineHeight={isMobile ? '80px' : '100px'}
                >
                  {item.count}
                </H2>
              )}

              {item.imageUrl && (
                <ImageHolder
                  src={
                    require(
                      `@site/static/assets/website/chain/${item?.imageUrl}.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/chain/${item?.imageUrl}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/${item?.imageUrl}@3x.webp`).default} 3x`}
                  alt={'Supported Chains'}
                  title={'Supported Chains'}
                />
              )}
              <H3
                fontSize={isMobile ? '20px' : '24px'}
                fontWeight='500'
                fontFamily='N27'
                lineHeight={isMobile ? '20px' : '24px'}
              >
                {item.label}
              </H3>
            </GridDiv>
          ))}
        </GridSection>

        <GridText>
          Wallet abstraction, fee abstraction, shared state and programmable
          solvers work together to bring you <b>Universal Smart Contract</b>.
          <br />
          <br />
          Allowing read and write on any chain from a single smart contract on
          Push Chain. Let's build <b>universal app experiences!</b>
          <TextDiv
            alignItems='flex-start'
            gap='40px'
            margin={isMobile ? '24px auto 12px auto' : '29px 0 12px 0'}
          >
            <TextLink
              href='https://simulate.push.org'
              target='_blank'
              title='Discord Push Network'
              fontSize={isMobile ? '16px' : '20px'}
              background='transparent'
              padding='0'
              color='#D548EC'
              fontFamily='N27'
              hoverBackground='transparent'
            >
              <p>Simulate Tx</p>
              <TbArrowUpRight className='anchorSVGlink' />
            </TextLink>
            <TextLink
              href='https://scan.push.org'
              target='_blank'
              title='Discord Push Network'
              fontSize={isMobile ? '16px' : '20px'}
              background='transparent'
              padding='0'
              color='#D548EC'
              fontFamily='N27'
              hoverBackground='transparent'
            >
              <p>Push Scan Devnet</p>
              <TbArrowUpRight className='anchorSVGlink' />
            </TextLink>
          </TextDiv>
          <H3
            fontSize={isMobile ? '14px' : '16px'}
            fontWeight='400'
            fontFamily='N27'
            lineHeight='140%'
            color='#777686'
          >
            Universal applications will launch with Testnet. <br />
            Devnet is live. Try now!
          </H3>
        </GridText>
      </CountSection>

      <ItemV margin='300px auto 0 auto' maxWidth='870px'>
        <H3
          fontSize={isMobile ? '36px' : '48px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight='120%'
          letterSpacing='-0.72px'
          textAlign='center'
        >
          A layer 1 built on the foundations from pioneering web3
          communications.
        </H3>
      </ItemV>

      <ItemV margin='48px 0 0 0'>
        <ImageHolder
          src={
            require(`@site/static/assets/website/chain/second-hero-image.webp`)
              .default
          }
          srcSet={`${require(`@site/static/assets/website/chain/second-hero-image@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/second-hero-image@3x.webp`).default} 3x`}
          alt={'alt'}
          title={'title'}
        />
      </ItemV>

      <ItemV margin='0px auto 0 auto' maxWidth='806px'>
        <H3
          fontSize={isMobile ? '20px' : '28px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight='140%'
          textAlign='center'
        >
          After four years of building the leading notifications protocol and a
          thriving ecosystem, Push Protocol is evolving to launch and scale Push
          Chain.
        </H3>
      </ItemV>

      <ItemV width='100%'>
        <A
          background='#D548EC'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          href={'https://comms.push.org'}
          target='_blank'
          rel='noopener noreferrer'
          margin='20px auto 0 auto'
        >
          Explore Communications Protocol
        </A>
      </ItemV>
    </ChainHeroSectionWrapper>
  );
};

export default ChainHeroSection;

const ChainHeroSectionWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 103px auto 0 auto;
  }
`;

const HeroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
  text-align: center;
  font-family: N27;
  font-size: 72px;
  font-weight: 500;
  line-height: 140%;
  color: #000;
  letter-spacing: -1.44px;
  margin-top: 20px;

  @media ${device.tablet} {
    font-size: 54px;
  }

  @media (max-width: 500px) {
    font-size: 48px;
    display: grid;
    line-height: 100%;
    gap: 0px;
    padding-top: 10px;
    white-space: nowrap;
  }
`;

const TypewriterWrapper = styled.span`
  display: inline-block;
`;

const HeroSubText = styled.div`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  width: 800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media ${device.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 24px auto 0 auto;
  }
`;

const HeroButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 48px auto 0 auto;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
    margin: 64px auto 0 auto;

    button {
      width: 100%;
    }
  }
`;

const SectionText = styled.div`
  color: #000;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;
  margin-top: 72px;

  @media ${device.mobileL} {
    text-align: center;
    font-size: 36px;
    letter-spacing: -0.72px;
  }
`;

const CountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;

  @media ${device.laptop} {
    flex-direction: column;
    margin-top: 120px;
  }
`;
const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 500px;
  row-gap: 40px;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const GridDiv = styled(ItemV)`
  align-items: flex-start;

  @media ${device.laptop} {
    align-items: center;
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 40px;
    }
  }
`;

const GridText = styled.div`
  width: 500px;
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    margin-top: 48px;
    text-align: center;
  }
`;

const TextDiv = styled(ItemH)`
  justify-content: flex-start;

  @media ${device.laptop} {
    justify-content: center;
  }
`;

const TextLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;

  @media ${device.laptop} {
    justify-content: center;
  }

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #d548ec;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #d548ec;
    }
  }
`;
