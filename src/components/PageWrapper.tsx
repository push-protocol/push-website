/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect } from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
// import ReactGA from 'react-ga';

type PageWrapperProps = {
  pageName: string;
  pageTitle: string;
};

/**
 * Use this to wrap page level Component corresponding to route
 */

function PageWrapper(props: PageWrapperProps) {
  const { pageName, pageTitle } = props;

//   useEffect(() => {
//     ReactGA.pageview(`/${pageName}`);
//   }, []);

  return (
    <HelmetProvider data-helmet>
      <Helmet>
        <title>{pageTitle | 'Push | Previously EPNS'}</title>
      </Helmet>
      {props.children}
    </HelmetProvider>
  );
}

export default React.memo(PageWrapper);