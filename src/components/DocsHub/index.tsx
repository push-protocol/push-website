import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import GLOBALS, { device } from '@site/src/config/globals';
import ArrowUp from "@site/static/assets/docs/ArrowUpRight-pink.svg";
import headerRipple from "@site/static/assets/docs/ripple.png";
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import styled, { css } from "styled-components";
import "../../css/custom.css";
import FAQ from './Faq';
import { FooterComponent } from './Footer';
import "./styles.css";

// import styles from './styles.module.css';

interface IQuickstartItem {
  title: string;
  codeblock: string;
}

const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Push Notification Quickstart',
    codeblock: `// Import Push SDK & Ethers
import * as PushAPI from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Creating a random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a notification to users of your protocol
const apiResponse = await userAlice.channel.send(['*'], { 
  notification: {
    title: 'Hello World Notification',
    body: 'Web3 native notifications are here!',
  }
});`
  },
  {
    title: 'Push Chat Quickstart',
    codeblock: `// Import Push SDK & Ethers
import * as PushAPI from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Creating a random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a message to Bob
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);`
  },
]

type DevGuideItems = {
  title: string;
  description: JSX.Element;
  codeblock?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
};

const DevGuide: DevGuideItems[] = [
  {
    title: 'Notifications',
    Svg: require('@site/static/assets/docs/notification.svg').default,
    link: 'https://docs.push.org/developers/concepts/web3-notifications',
    description: (
      <>
        Explore different ways of sending and receiving notifications and more.

      </>
    ),
  },
  {
    title: 'Push Chat',
    Svg: require('@site/static/assets/docs/message.svg').default,
    link: './dev/chat',
    description: (
      <>
        Learn about the details of Push Chat and how to do web3 native messaging.
      </>
    ),
    codeblock: `// Initialize wallet user
const userAlice = await PushAPI.initialize(signer);

// Send message
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);`
  },
  {
    title: 'Push Spaces',
    Svg: require('@site/static/assets/docs/spaces.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/restapi#for-spaces',

    description: (
      <>
        Learn about Push Spaces, the web3 native, token gated way of conducting spaces.
      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/assets/docs/video.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/integrating-push-video',

    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/assets/docs/star.svg').default,
    link: 'https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples',
    description: (
      <>
        Examples to showcase the power of Push Protocol’s communication stack.
      </>
    ),
  },
  {
    title: 'Showrunners',
    Svg: require('@site/static/assets/docs/receive-notifs.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/sending-notifications/using-showrunners-scaffold-gasless',
    description: (
      <>
        Showrunners Framework and how to boost your web3 communications.

      </>
    ),
  }
]

type SdkListItems = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

const SdkList: SdkListItems[] = [
  {
    title: 'SDK Starter Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk',
  },
  {
    title: 'REST API',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-restapi',
  },
  {
    title: 'React Native',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-reactnative',
  },
  {
    title: 'Socket',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket',
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiweb',
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiembed',
  }
]


const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  { title: 'How do I contact customer support?', content: 'You can try telekinesis, but we recommend using our contact form instead.' },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  { title: 'How can I use Push as an end-user?', content: 'Content for Section 3' },
  { title: 'What are the web3 communication products launched by Push?', content: 'Content for Section 3' },
  { title: 'Do I have to pay to send notifications?', content: 'Content for Section 3' },
];

function QuickstartList({ title, codeblock, Svg }: IQuickstartItem) {
  
  return (
    <PopularQuickiesCard>
      <PopularQuickiesHeader>
        <PopularQuickiesTitle>{`${title}`}</PopularQuickiesTitle>
      </PopularQuickiesHeader>
      
      <PopularQuickiesContent>
        <PopularQuickiesCodeBlock
          language="jsx"
          showLineNumbers={true}
        >
          {codeblock}
        </PopularQuickiesCodeBlock>
      </PopularQuickiesContent>
    </PopularQuickiesCard>
  );
}

function GuideList({ title, Svg, description, codeblock, link }: DevGuideItems) {
  const [content, setContent] = useState<number>(0);

  return (
    <TechDocCard>
    {/* <Link to={link} target='_blank'> */}
      <TechDocContent
        onClick={(e) => {e.preventDefault(); window.location.href = link}}
        hoverBackground="transparent"
      >
        <ItemVV2
          alignSelf="stretch"
          margin="0px 8%"
        >
          <ItemVV2
            padding="0px 0px 30px 0px"
            alignItems="flex-start"
          >
            <TechDocIcon><Svg /></TechDocIcon>
            <TechDocTitle>{title}</TechDocTitle>
          </ItemVV2>
          
          {codeblock &&
            <TechDocSwitcher
              gap="10px"
            >
              <ButtonV2 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(0);
                }}
                background={content == 0 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 0 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                Overview
              </ButtonV2>
              <ButtonV2 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(1);
                }}
                background={content == 1 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 1 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                API
              </ButtonV2>
            </TechDocSwitcher>
          }

          <ItemVV2
            alignItems="stretch"
          >
            {content == 0 &&
              <TechDocOverview>{description}</TechDocOverview>
            }
          </ItemVV2>
        </ItemVV2>

        {content == 1 && codeblock && 
          <TechDocCodeBlock
            language="jsx"
          >
            {codeblock}
          </TechDocCodeBlock>
        }
      </TechDocContent>
    </TechDocCard>
  );
}

function PushSdk({ title, Svg, PinkSvg, link }: SdkListItems) {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  }
  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  }

  return (
    <Link to={link} target='_blank'>
      <div onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`sdk-container ${isHovered ? 'border-pink' : 'gray-border'}`}>

        <div className='sdk-container-inner'>
          <div className='sdk-title spacing-small'>
            {title}
          </div>
          <div className='sdk-icon'>
            {
              isHovered ? (
                <PinkSvg />
              ) : (
                <Svg />
              )
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomepageFeatures(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section>
      <HeroHeader className={clsx('hero hero--primary')}>
      <div className="section-container" style={{zIndex: '1'}}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className='spacing-small pointer'>
          <Link
            className='hero__button'
            to="./dev/chat">
            Get Started
            <FiArrowUpRight className='ml-4' />
          </Link>
          
        </div>
      </div>
      <Ripple src={headerRipple}/>
    </HeroHeader>
      <section className='main-section'>
          <HomepageSection alignItems="flex-start">
            <HomepageSubHeader>
              Popular Quickies
            </HomepageSubHeader>

              <PopularQuickiesList>
                {QuickstartItems.map((props, idx) => (
                  <QuickstartList key={idx} {...props} />
                ))}
              </PopularQuickiesList>
          </HomepageSection>

          <HomepageSection>
            <HomepageSubHeader>
              Technical Documentation
            </HomepageSubHeader>
            <TechDocCardList>
              {DevGuide.map((props, idx) => (
                <GuideList key={idx} {...props} />
              ))}
            </TechDocCardList>
        </HomepageSection>
        
        <HomepageSection>
          <ItemHV2 justifyContent="flex-start">
            <HomepageSubHeader>
              Push SDK
            </HomepageSubHeader>
            <Link to='/' target='_blank'>
              <div className='hero_home_explore'>
                <p className='hero_home_explore_link'>
                  Explore SDK
                </p>
                <ArrowUp className='arrowUp-icon' />
              </div>
            </Link>
          </ItemHV2>
            
          
          <div className="guide_list">
            {SdkList.map((props, idx) => (
              <PushSdk key={idx} {...props} />
            ))}
          </div>
          
            {/* <div className='Faqs-main-container'>
              <div className='sub-container'>
                <span className="hero_home_Faq_header">
                  Frequently Asked Questions
                </span>
                <Link to='https://push.org/faq' target='_blank'>
                  <div className='hero_home_explore'>
                    <p className='hero_home_explore_link'>
                      Explore FAQs
                    </p>
                    <ArrowUp className='arrowUp-icon' />
                  </div>
                </Link>
              </div>
              <FAQ />

            </div> */}
        </HomepageSection>
      </section>
      <FooterComponent />
    </section>
  );
}

const HeroHeader = styled.header`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Ripple = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

const TechDocIcon = styled(ItemVV2)`
  align-self: flex-start;
  & svg {
    height: 44px;
    width: 44px;
    color: pink;
    margin: 0 0 1rem 0;
  }
`;

const HomepageSection = styled(SectionV2)`
  margin-top: 70px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: stretch;
`;

const HomepageSubHeader = styled(H2V2)`
  font-family: var(--ifm-font-family-base);
  font-weight: 600;
  font-size: 36px;
  align-items: start;
  margin-bottom: 30px;
  flex: 1;

  color: var(--ifm-color-primary-text);
`;

const PopularQuickiesList = styled(ItemHV2)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const PopularQuickiesCard = styled(ItemVV2)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(50% - 21.33px);
  min-width: 280px;
  max-width: calc(50% - 21.33px);
  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const PopularQuickiesHeader = styled(ItemHV2)`
  align-items: center;
  font-size: 20px;
  background: #282a36;
  justify-content: flex-start;
  padding: 10px 20px 14px 80px;
  margin-bottom: -6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 0.6em;
    width: 0.6em;
    margin: 0.3em;
    left: 0.5em;
    border-radius: 100%;
    background: #4a4a4a;
    box-shadow: 1em 0em #4a4a4a, 2em 0em #4a4a4a;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    background: rgba(255, 0, 0, 0.8);
    box-shadow: 1em 0em rgba(255, 255, 0, 0.8), 2em 0em rgba(0, 255, 0, 0.8);
  }
`;

const PopularQuickiesIcon = styled(SpanV2)`
  color: #dd44b9;
  position: absolute;
  right: 10px;
  font-size: 14px;
`;

const PopularQuickiesTitle = styled(SpanV2)`
  color: #9aa3db;
  font-size: 16px;
  font-weight: bold;
`;

const PopularQuickiesContent = styled(ItemVV2)`
  border-top: 1px solid #3d3d3d;
  align-items: stretch;
`;

const PopularQuickiesCodeBlock = styled(CodeBlock)`
  margin: 0px;
`;

const TechDocCardList = styled(ItemHV2)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
`

const TechDocCard = styled(ItemVV2)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(33.33% - 21.33px);
  min-width: 280px;
  max-width: calc(33.33% - 21.33px);
  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const TechDocContent = styled(ButtonV2)`
  margin-top: 24px;
  position: relative;
  border-radius: 24px;
  padding: 40px 20px;
  border: 1px solid #d9d9d9;
  background: transparent;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  & svg path {
    stroke: var(--ifm-color-primary-text);
  }
  
  &:hover {
    border: 1px solid #d53a94;

    & svg path {
      stroke: #d53a94;
    }
  }
`;

const TechDocTitle = styled(SpanV2)`
  font-family: var(--ifm-font-family-base);
  font-size: 26px;
  color: var(--ifm-color-primary-text);
  margin-top: 0px;
  font-weight: bold;
  letter-spacing: -0.03em;
`;

const TechDocSwitcher = styled(ItemHV2)`
  position: absolute;
  top: 0;
  right: 0;
  padding: inherit;

  & ${ButtonV2} {
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 600;
  }
`;
const TechDocOverview = styled(SpanV2)`
  font-family: var(--ifm-font-family-base);
  font-weight: 400;
  font-size: 16px;
  color: var(--ifm-color-secondary-text);
  margin-top: -10px;
  letter-spacing: -0.02em;
  line-height: 150%;
`;

const TechDocCodeBlock = styled(CodeBlock)`
  font-size: 14px;
  margin: 0px 10px;
  align-self: stretch;
  text-align: initial;
  overflow: scroll;
  max-width: 100%;
`;