import Link from '@docusaurus/Link';
import ArrowUp from "@site/static/img/ArrowUpRight-pink.svg";
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

function GuideList({ title, Svg, description, PinkSvg, link }: DevGuideItems) {
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
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`developer_guides_list ${isHovered ? 'border-pink' : ''}`}>
      <Link to={link} target='_self'>
        <div className='inner-card'>
          <div className='card-details'>
            {isHovered ? (
              <div><PinkSvg className={Styles.featureSvg} /></div>
            ) : (
              <div><Svg className={Styles.featureSvg} /></div>
            )
            }
            <p className="notification_header">{title}</p>
            <p className="guide_info">{description}</p>
          </div>
        </div>
      </Link>

    </div>
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
              Developer Guides
            </div>
            <div>
              <div className="guide_list">
                {DevGuide.map((props, idx) => (
                  <GuideList key={idx} {...props} />
                ))}
              </div>
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