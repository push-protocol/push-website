import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import notif from '@site/static/img/svgs/push-bell.svg';
import Accordion from '../Accordion';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const DeveloperGuides = [
  {
    title: 'Notifications',
    Svg: require('@site/static/img/svgs/push-bell.svg').default,
    description: (
      <>
        Explore different ways of sending and receiving notifications and more.
      </>
    ),
  },
  {
    title: 'Push Chat',
    Svg: require('@site/static/img/svgs/push-chat.svg').default,
    description: (
      <>
        Learn about the details of Push Chat and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/img/svgs/video.svg').default,
    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'SDK Quick Start',
    Svg: require('@site/static/img/svgs/lightning.svg').default,
    description: (
      <>
        A super quick guide to get you started with Push SDK
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/img/svgs/sparkle.svg').default,
    description: (
      <>
        Examples to showcase the power of Push Protocol's communication stack.
      </>
    ),
  },
  {
    title: 'Showrunners',
    Svg: require('@site/static/img/svgs/receive-notifs.svg').default,
    description: (
      <>
        Showrunners Framework and how to boost your web3 communications
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

function Feature({title, Svg, description}) {
  return (
    <div className={styles.featureCard}>
        <Svg className={styles.featureSvg} role="img" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

function SDKCard({title}) {
  return (
    <div className={styles.featureCard}>
        <h2 className={styles.h2Custom}>{title}</h2>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.h1Custom}>Developer Guides</h1>
        <div className={styles.row}>
          {DeveloperGuides.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1 className={styles.h1Custom}>Push SDK</h1>
        <div className={styles.row}>
        {PushSDK.map((props, idx) => (
            <SDKCard key={idx} {...props} />
          ))}
        </div>
        <h1 className={styles.h1Custom}>Frequently Asked Questions</h1>
        <Accordion items={accordionItems}/>
      </div>
    </section>
  );
}
