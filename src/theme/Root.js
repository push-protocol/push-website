// React + Web3 Essentials
import React from 'react';
import { useLocation } from '@docusaurus/router';

// External Components
import i18nInitialize from '@site/src/utils/i18n';
import styled, { createGlobalStyle } from 'styled-components';
import { PushWalletProvider, CONSTANTS } from '@pushprotocol/pushchain-ui-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Internal Components
// import Footer from '@site/src/segments/Footer';
import ServerStyle from '@site/src/theme/ServerStyle';
import CookieComponent from '../components/CookieComponent';
import { useSiteBaseUrl } from '../utils/useSiteBaseUrl';
import { Notification } from '../hooks/useRewardsNotification';
import { blocksColors, getBlocksCSSVariables } from '@site/src/blocks';
import { ThemeProviderWrapper } from '../context/themeContext';
import { AccountProvider } from '../context/accountContext';

// Initialize Internalization
i18nInitialize();

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.header.bg} !important;
    padding-right: 0 !important;
  }
  :root{

    /* deprecated */
    /* Spaces */
    --s0: 0px;
    --s1: 4px;
    --s2: 8px;
    --s3: 12px;
    --s4: 16px;
    --s5: 20px;
    --s6: 24px;
    --s7: 28px;
    --s8: 32px;
    --s9: 36px;
    --s10: 40px;
    --s11: 44px;
    --s12: 48px;
    --s13: 52px;
    --s14: 56px;
    --s15: 60px;
    --s16: 64px;
    --s17: 68px;
    --s18: 72px;
    --s19: 76px;
    --s20: 80px;
    --s21: 84px;
    --s22: 88px;
    --s23: 92px;
    --s24: 96px;
    --s25: 100px;
    // TODO: Add more as needed

    /* deprecated */
    /* Border Radius */
    --r0: 0px;
    --r1: 4px;
    --r2: 8px;
    --r3: 12px;
    --r4: 16px;
    --r5: 20px;
    --r6: 24px;
    --r7: 28px;
    --r8: 32px;
    --r9: 36px;
    --r10: 40px;
    // TODO: Add more as needed

    /* deprecated */
    /* Colors */
    ${Object.entries(blocksColors)
      .map(([colorName, code]) => `--${colorName}: ${code};`)
      .join('')}

    /* Font Family */
      --font-family: 'FK Grotesk Neue';

    /* New blocks theme css variables*/
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }

`;

const queryClient = new QueryClient({});

export default function Root({ children }) {
  // superimposed conditions
  const superimposedConditions = [
    {
      classname: 'DocsHub PushDocs DocusaurusNavbar NavBarDark',
      pathname: '/DOCS',
      condition: 'exact',
    },
    {
      classname: 'PushDocs DocusaurusNavbar',
      pathname: '/DOCS',
      condition: 'subpaths',
    },
    {
      classname: 'BlogHub PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'exact',
    },
    {
      classname: 'PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'subpaths',
    },
  ];

  const baseURL = useSiteBaseUrl();
  const excludePaths = ['/BRB', '/DOCS', '/BOOTCAMP', '/CHAIN', '/TEMPLATE'];
  const shouldRenderFooter = excludePaths.every((path) =>
    excludeDefaultConfigAt(path)
  );

  // return superimposed class names if conditions are met
  function returnAdditionalClasses(conditions) {
    let result = '';
    for (var i = 0; i < conditions.length; i++) {
      const item = conditions[i];
      const pathname = baseURL + item?.pathname;

      if (locationPathExists(pathname, item.condition)) {
        result = item.classname;
        break;
      }
    }

    // return result
    return result;
  }

  // enable disable default config
  function excludeDefaultConfigAt(pathname, condition) {
    const fullPathname = baseURL + pathname;
    return !locationPathExists(fullPathname, condition);
  }

  // check if location path exists
  function locationPathExists(pathname, condition) {
    let result = false;
    pathname = pathname?.toUpperCase();

    // Define location
    const location = useLocation();

    const str = location?.pathname.toUpperCase();
    const modstr =
      str != null && str.length >= pathname.length
        ? str.substring(0, pathname.length)
        : null;

    result = modstr === pathname ? true : false;
    if (condition === 'exact' || condition === 'subpaths') {
      // check if sub path exist in pathname and change result;
      if (
        str.length > pathname.length &&
        str.substring(0, pathname.length) === pathname
      ) {
        // path has more
        const remainingLength =
          str.substring(pathname.length, pathname.length + 1) === '/'
            ? str.length - pathname.length - 1
            : str.length - pathname.length;

        if (condition === 'exact') {
          result = remainingLength == 0 ? true : false;
        } else if (condition === 'subpaths') {
          result = remainingLength > 0 ? true : false;
        }
      }
    }

    return result;
  }

  return (
    <ThemeProviderWrapper>
      <PushWalletProvider env={CONSTANTS.ENV.DEV}>
        <AccountProvider>
          <PageContainer
            className={returnAdditionalClasses(superimposedConditions)}
          >
            <ServerStyle from={children} />

            {/* Global style */}
            <GlobalStyle />

            {/* Main react children */}
            <Content>
              <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </Content>

            <Notification />

            {shouldRenderFooter && (
              <>
                {/* <Footer /> */}
                <CookieComponent />
              </>
            )}
          </PageContainer>
        </AccountProvider>
      </PushWalletProvider>
    </ThemeProviderWrapper>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// The main content should take up all remaining space
const Content = styled.div`
  flex: 1;
`;
