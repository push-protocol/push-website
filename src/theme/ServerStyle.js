// React + Web3 Essentials
import { Context as DocusaurusContext } from '@docusaurus/core/lib/client/docusaurusContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, useLocation } from 'react-router-dom';

// External Components
import { HelmetProvider } from 'react-helmet-async';
import { ServerStyleSheet } from 'styled-components';

// Internal Components
import Footer from '@site/src/segments/Footer';
import Header from '@site/src/segments/Header';
import { CookiesProvider } from 'react-cookie';

function ServerStyle({ from: children }) {
  let style = null;

  const location = useLocation();
  const context = useDocusaurusContext();
  const sheet = new ServerStyleSheet();

  try {
    renderToString(
      sheet.collectStyles(
        <HelmetProvider>
          <StaticRouter location={location}>
            <CookiesProvider>
              <DocusaurusContext.Provider value={context}>
                <Header />
                {children}
                <Footer />
              </DocusaurusContext.Provider>
            </CookiesProvider>
          </StaticRouter>
        </HelmetProvider>
      )
    );
    style = sheet.getStyleElement();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return style;
}

function ClientStyle() {
  return null;
}

export default typeof window === 'undefined' ? ServerStyle : ClientStyle;
