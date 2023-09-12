import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import ArrowUp from "@site/static/img/ArrowUpRight-pink.svg";
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import React, { useState } from 'react';
import styled, { css } from "styled-components";
import "../../css/custom.css";
import FAQ from './Faq';
import { FooterComponent } from './Footer';
import Styles from "./styles.module.css";

// import styles from './styles.module.css';


type DevGuideItems = {
  title: string;
  description: JSX.Element;
  codeblock?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
};

type SdkListItems = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

const SdkList: SdkListItems[] = [
  {
    title: 'SDK Starter Kit',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk',
  },
  {
    title: 'REST API',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-restapi',
  },
  {
    title: 'React Native',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-reactnative',
  },
  {
    title: 'Socket',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket',
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiweb',
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiembed',
  }
]

const DevGuide: DevGuideItems[] = [
  {
    title: 'Notifications',
    Svg: require('@site/static/img/notification.svg').default,
    PinkSvg: require('@site/static/img/notification-pink.svg').default,
    link: 'https://docs.push.org/developers/concepts/web3-notifications',
    description: (
      <>
        Explore different ways of sending and receiving notifications and more.

      </>
    ),
  },
  {
    title: 'Push Chat',
    Svg: require('@site/static/img/message.svg').default,
    PinkSvg: require('@site/static/img/message-pink.svg').default,
    link: '/devs/chat',
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
    Svg: require('@site/static/img/spaces.svg').default,
    PinkSvg: require('@site/static/img/spaces-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/restapi#for-spaces',

    description: (
      <>
        Learn about Push Spaces, the web3 native, token gated way of conducting spaces.
      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/img/video.svg').default,
    PinkSvg: require('@site/static/img/video-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/integrating-push-video',

    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/img/star.svg').default,
    PinkSvg: require('@site/static/img/star-pink.svg').default,
    link: 'https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples',
    description: (
      <>
        Examples to showcase the power of Push Protocol’s communication stack.
      </>
    ),
  },
  {
    title: 'Showrunners',
    Svg: require('@site/static/img/receive-notifs.svg').default,
    PinkSvg: require('@site/static/img/receive-notifs-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/sending-notifications/using-showrunners-scaffold-gasless',
    description: (
      <>
        Showrunners Framework and how to boost your web3 communications.

      </>
    ),
  }
]

const PushSDK = [
  {
    title: 'SDK Starter Kit',
  },
  {
    title: 'REST API',
  },
  {
    title: 'React Native',
  },
  {
    title: 'Socket',
  },
  {
    title: 'UIWeb',
  },
  {
    title: 'UI Embed',
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

function GuideList({ title, Svg, description, codeblock, PinkSvg, link }: DevGuideItems) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [content, setContent] = useState<number>(0);

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
            <Svg className={Styles.featureSvg} />
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
export default function HomepageFeatures({ PinkSvg }): JSX.Element {
  return (
    <section>
      <section className='main-section'>
        
          <div>
            <div className="hero_home header-container">
              Technical Documentation
            </div>
            <div>
              <TechDocCardList>
                {DevGuide.map((props, idx) => (
                  <GuideList key={idx} {...props} />
                ))}
              </TechDocCardList>
            </div>
        </div>
        
        <div>
            <div className='sub-container'>
              <div className="hero_home">
                Push SDK
              </div>
              <Link to='/' target='_blank'>
                  <div className='hero_home_explore'>
                    <p className='hero_home_explore_link'>
                      Explore SDK
                    </p>
                    <ArrowUp className='arrowUp-icon' />
                  </div>
              </Link>
            </div>
            <div>
              <div className="guide_list">
                {SdkList.map((props, idx) => (
                  <PushSdk key={idx} {...props} />
                ))}
              </div>
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
        </div>
      </section>
      <FooterComponent />
    </section>
  );
}

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
  color: #121315;
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
  color: #575d73;
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