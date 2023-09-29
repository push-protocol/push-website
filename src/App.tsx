// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable react/prop-types
/* eslint-disable */

// React + Web3 Essentials
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

// External Components
import { Route, Routes, useLocation } from 'react-router-dom';
import * as PushAPI from '@pushprotocol/restapi';
import { ChatUIProvider } from '@pushprotocol/uiweb';
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { WagmiConfig, configureChains, createConfig, useAccount } from 'wagmi';
import {
  arbitrum,
  arbitrumGoerli,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  zora,
  zoraTestnet,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Internal Components
import { darkChatTheme } from 'utils/theme';
import { AccountContext, EnvContext, SocketContext, Web3Context } from './context';
import { ENV } from './helpers/web3helper';
import { useSDKSocket } from './hooks/useSDKSocket';
import Home from './pages/Home';
import Footer from './segments/Footer';
import Header from './segments/Header';

ReactGA.initialize('UA-165415629-2');

interface Web3ReactState {
  chainId?: number;
  account?: string | null | undefined;
  active: boolean;
  error?: Error;
  library?: unknown;
}

const API_KEY = 'rtkd-a4JWpnViQBZdNCiFBGTJdp5e0R2';

function App() {
  const FAQ = React.lazy(() => import('pages/FAQ')); // import('pages/FAQ'); //React.lazy(() => import('pages/FAQ'));
  const PrivacyMobile = React.lazy(() => import('pages/PrivacyMobile')); // import('pages/PrivacyMobile'); // React.lazy(() => import('pages/PrivacyMobile'));
  const Privacy = React.lazy(() => import('pages/Privacy')); // import('pages/Privacy'); // React.lazy(() => import('pages/Privacy'));
  const TermsOfService = React.lazy(() => import('pages/TermsOfService')); // import('pages/TermsOfService'); //React.lazy(() => import('pages/TermsOfService'));
  const RedirectToPlatform = React.lazy(() => import('./components/RedirectToDiffUrl')); // import('./components/RedirectToDiffUrl'); //React.lazy(() => import('./components/RedirectToDiffUrl'));
  const FrensOfPush = React.lazy(() => import('pages/FrensOfPush')); // import('pages/FrensOfPush'); // React.lazy(() => import('pages/FrensOfPush'));
  const Spaces = React.lazy(() => import('pages/Spaces')); // import('pages/Spaces'); // React.lazy(() => import('pages/Spaces'));
  const Cheat = React.lazy(() => import('pages/CheatSheet')); // import('pages/CheatSheet'); // React.lazy(() => import('pages/CheatSheet'));
  const BRB = React.lazy(() => import('pages/BRB')); // import('pages/BRB'); // React.lazy(() => import('pages/BRB'));

  // useEffect(() => {
  //   ReactGA.pageview('/entry');
  // }, []);

  const Wrapper = ({ children }) => {
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const { account, library, active, chainId } = useWeb3React();
  const location = useLocation();
  const [env, setEnv] = useState<ENV>(ENV.PROD);
  const [isCAIP, setIsCAIP] = useState(false);
  const [signer, setSigner] = useState();

  const socketData = useSDKSocket({
    account: account,
    chainId: chainId,
    env,
    isCAIP,
  });

  const [loadWagmi, setLoadWagmi] = useState(false);
  const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');

  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora, goerli, polygonMumbai, optimismGoerli, arbitrumGoerli, zoraTestnet],
    [alchemyProvider({ apiKey: API_KEY }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Push-website',
    projectId: 'd19bd9c98cc6455e637836fdc2202d42',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  useEffect(() => {
    setLoadWagmi(true);
  }, []);

  useEffect(() => {
    (async () => {
      if (!account || !env || !library) return;

      const user = await PushAPI.user.get({ account: account, env });
      let pgpPrivateKey;
      const librarySigner = await library.getSigner(account);
      setSigner(librarySigner);
      if (user?.encryptedPrivateKey) {
        pgpPrivateKey = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: account,
          signer: librarySigner,
          env,
        });
      }

      setPgpPrivateKey(pgpPrivateKey);
    })();
  }, [account, env, library]);

  return (
    <section>
      <EnvContext.Provider value={{ env, isCAIP }}>
        <Web3Context.Provider value={{ account, active, library, chainId }}>
          <SocketContext.Provider value={{ socketData }}>
            {loadWagmi ? (
              <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider
                  theme={darkTheme()}
                  chains={chains}
                >
                  <AccountContext.Provider value={{ pgpPrivateKey }}>
                    <ChatUIProvider
                      env={env}
                      theme={darkChatTheme}
                    >
                      <Suspense fallback={<h1>Loading</h1>}>
                        <Wrapper id="wrapper">
                          <AppWrapper id="content">
                            {location.pathname.toUpperCase() !== '/BRB' && <Header />}
                            <Routes>
                              {/* add all the route paths here */}
                              <Route
                                path="/"
                                element={<Home />}
                              />
                              {/* <Route path="/about" element={<AboutUs />} /> */}
                              <Route
                                path="/faq"
                                element={<FAQ />}
                              />
                              <Route
                                path="/tos"
                                element={<TermsOfService />}
                              />
                              <Route
                                path="/privacy"
                                element={<Privacy />}
                              />
                              <Route
                                path="/privacymobile"
                                element={<PrivacyMobile />}
                              />
                              <Route
                                path="/notify"
                                element={<RedirectToPlatform />}
                              />
                              <Route
                                path="/frens"
                                element={<FrensOfPush />}
                              />
                              <Route
                                path="/spaces"
                                element={<Spaces />}
                              />
                              <Route
                                path="/cheatsheet"
                                element={<Cheat />}
                              />
                              <Route
                                path="/brb"
                                element={<BRB />}
                              />
                            </Routes>

                            {location.pathname.toUpperCase() !== '/BRB' && <Footer />}
                          </AppWrapper>
                        </Wrapper>
                      </Suspense>
                    </ChatUIProvider>
                  </AccountContext.Provider>
                </RainbowKitProvider>
              </WagmiConfig>
            ) : null}
          </SocketContext.Provider>
        </Web3Context.Provider>
      </EnvContext.Provider>
    </section>
  );
}

const AppWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ConnectWrapper = styled.div`
  position: fixed;
  background: black;
  min-width: 600px;
  bottom: 20px;
  left: 20px;
  z-index: 999999;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 2px 2px #000;
  padding: 4px 7px;
`;

export default App;
