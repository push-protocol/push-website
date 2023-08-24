// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable react/prop-types
/* eslint-disable */

import React, { useLayoutEffect, useEffect, useState, Suspense } from 'react';
import { useWeb3React } from '@web3-react/core';
import {
  Web3Context,
  EnvContext,
  SocketContext,
  AccountContext,
} from './context';
import ReactGA from 'react-ga';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './segments/Footer';
import Header from './segments/Header';
import Home from './pages/Home';
import { ENV } from './helpers/web3helper'
// import { useSDKSocket } from './hooks/useSDKSocket'
// import * as PushAPI from '@pushprotocol/restapi';
import { ChatUIProvider } from '@pushprotocol/uiweb';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, useAccount, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
  zoraTestnet,
} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { darkChatTheme } from 'helpers/theme';

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
  const FAQ = React.lazy(() => import('pages/FAQ'));
  const PrivacyMobile = React.lazy(() => import('pages/PrivacyMobile'));
  const Privacy = React.lazy(() => import('pages/Privacy'));
  const TermsOfService = React.lazy(() => import('pages/TermsOfService'));
  const RedirectToPlatform = React.lazy(() => import('./components/RedirectToDiffUrl'));
  const FrensOfPush = React.lazy(() => import('pages/FrensOfPush'));
  const Spaces = React.lazy(() => import('pages/Spaces'));
  const Cheat = React.lazy(() => import('pages/CheatSheet'));
  const BRB = React.lazy(() => import('pages/BRB'));
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
  const [env, setEnv] = useState<ENV>(ENV.STAGING);
  const [isCAIP, setIsCAIP] = useState(false);
  const [signer, setSigner] = useState();


  const [loadWagmi, setLoadWagmi] = useState(false);
  const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');

  const { chains, publicClient } = configureChains(
    [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      zora,
      goerli,
      polygonMumbai,
      optimismGoerli,
      arbitrumGoerli,
      zoraTestnet,
    ],
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
          {/* <SocketContext.Provider value = {{ socketData }}> */}
          {loadWagmi ? (<WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
              <AccountContext.Provider value={{ pgpPrivateKey }}>
                <ChatUIProvider env={env} theme={darkChatTheme}>
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
                          path='/spaces'
                          element={<Spaces />}
                          />
                          <Route 
                          path='/cheatsheet'
                          element={<Cheat />}
                          />
                          <Route 
                          path='/brb'
                          element={<BRB/>}
                          />
                        </Routes>

                        {location.pathname.toUpperCase() !== '/BRB' && <Footer />}
                        
                      </AppWrapper>
                    </Wrapper>
                  </Suspense>
                  </ChatUIProvider>
              </AccountContext.Provider>
             </RainbowKitProvider>
             </WagmiConfig>) : null}
          {/* </SocketContext.Provider> */}
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


