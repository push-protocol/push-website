import React, { useState } from 'react';
import clsx from 'clsx';
import "../../css/custom.css"
import ArrowUp from "@site/static/img/ArrowUpRight-pink.svg"
import Styles from "./styles.module.css"
import FAQ from './Faq';
import { FooterComponent } from './Footer';
import Link from '@docusaurus/Link';
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
    link: '/docs/developer-tooling/push-sdk/epns-sdk-starter-kit',
  },
  {
    title: 'REST API',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-restapi',
  },
  {
    title: 'React Native',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-react-native',
  },
  {
    title: 'Socket',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket',
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-uiweb',
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/sdk-packages-details/epnsproject-sdk-uiembed',
  }
]

const DevGuide: DevGuideItems[] = [
  {
    title: 'Notifications',
    Svg: require('@site/static/img/notification.svg').default,
    PinkSvg: require('@site/static/img/notification-pink.svg').default,
    link: '/docs/CONCEPTS/push-notifications-for-web3/',
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
    link: '/docs/CONCEPTS/push-chat-for-web3',
    description: (
      <>
        Learn about the details of Push Chat and how to easily integrate it.

      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/img/video.svg').default,
    PinkSvg: require('@site/static/img/video-pink.svg').default,
    link: '/docs/CONCEPTS/push-chat-for-web3',

    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'SDK Quick Start',
    Svg: require('@site/static/img/lightning.svg').default,
    PinkSvg: require('@site/static/img/lightning-pink.svg').default,
    link: '/docs/developer-tooling/push-sdk/quick-start',
    description: (
      <>
        A super quick guide to get you started with Push SDK.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/img/star.svg').default,
    PinkSvg: require('@site/static/img/star-pink.svg').default,
    link: '/docs/developer-guides/examples',
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
    link: '/docs/developer-tooling/showrunners-framework',
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
      <Link to={link} target='_blank'>
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
          <div className="hero_home">
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
          <div className="hero_home">
            Push SDK
          </div>
          <div>
            <div className="guide_list">
              {SdkList.map((props, idx) => (
                <PushSdk key={idx} {...props} />
              ))}
            </div>
        </div>
        
        <div className='Faqs-main-container'>
          <div className='Faqs-sub-container'>
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

        </div>
        {/* <h1 className={styles.h1Custom}>Push SDK</h1> */}
        {/* <div className={styles.row}> */}
        {/* {PushSDK.map((props, idx) => (
            <SDKCard key={idx} {...props} />
          ))} */}
        {/* </div> */}
        {/* <h1 className={styles.h1Custom}>Frequently Asked Questions</h1>
        <Accordion items={accordionItems}/> */}
      </div>
    </section>
    <FooterComponent />
    </section>
  );
}