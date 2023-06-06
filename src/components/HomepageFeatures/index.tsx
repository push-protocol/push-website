import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import notif from '@site/static/img/svgs/push-bell.svg';

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

function Feature({title, Svg, description}) {
  return (
    <div className={styles.featureCard}>
        <Svg className={styles.featureSvg} role="img" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {DeveloperGuides.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
