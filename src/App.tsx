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
import { useSDKSocket } from './hooks/useSDKSocket'
import * as PushAPI from '@pushprotocol/restapi';
import ConnectButton from './components/Connect';
import Dropdown from 'components/Dropdown';
import { ChatUIProvider } from '@pushprotocol/uiweb';

ReactGA.initialize('UA-165415629-2');

interface Web3ReactState {
  chainId?: number;
  account?: string | null | undefined;
  active: boolean;
  error?: Error;
  library?: unknown;
}

const darkChatTheme = {
  chatBubblePrimaryBgColor: '#fff',
  bgColorPrimary: 'rgb(47, 49, 55)',
  bgColorSecondary: 'rgb(40, 42, 46)',
  textColorPrimary: '#fff',
  textColorSecondary: 'rgb(182, 188, 214)',
  chatBubbleAccentBgColor: 'rgb(202, 89, 155)',
  accentBgColor: 'rgb(202, 89, 155)',
  accentTextColor: '#fff',
  btnColorPrimary: 'rgb(202, 89, 155)',
  border: 'none',
  borderRadius: '24px',
  iconColorPrimary:
    'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',
    dropdownBorderColor: '1px solid rgb(74, 79, 103)',
  fileIconColor: '#fff',
  modalPrimaryTextColor: '#B6BCD6',
  modalSearchBarBorderColor: '#4A4F67',
  modalSearchBarBackground: '#282A2E',
  snapFocusBg: '#404650',
  groupButtonBackgroundColor: '#2F3137',
  groupButtonTextColor: '#787E99',
  modalConfirmButtonBorder: '1px solid #787E99',
  groupSearchProfilBackground: '#404650',
  modalInputBorderColor: '#4A4F67',
  snackbarBorderText: '#B6BCD6',
  snackbarBorderIcon:
  'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',
  modalContentBackground: '#2F3137',
  modalProfileTextColor: '#B6BCD6',
  toastSuccessBackground: 'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',
  toastErrorBackground: 'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',
  toastShadowColor: '#00000010',
  toastBorderColor: '#4A4F67',
  mainBg: '#000',
  modalBorderColor: '#4A4F67',
  modalDescriptionTextColor: '#787E99',
  modalIconColor: '#787E99',
  pendingCardBackground: 'rgba(173, 176, 190, 0.08)',
  modalHeadingColor: '#B6BCD6',
  defaultBorder: '#4A4F67'
};

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
  const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');
  const [isCAIP, setIsCAIP] = useState(false);

  const socketData = useSDKSocket({
    account: account,
    chainId: chainId,
    env,
    isCAIP,
  });


  const onChangeEnv = (e: any) => {
    setEnv(e.target.value);
  };

  // const onChangeCAIP = () => {
  //   setIsCAIP(!isCAIP);
  // };

  
  useEffect(() => {
    (async () => {
      if (!account || !env || !library) return;

      const user = await PushAPI.user.get({ account: account, env });
      let pgpPrivateKey;
      const librarySigner = await library.getSigner(account);
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
    <ConnectWrapper>

    <ConnectButton />


    <Dropdown
      label="ENV"
      options={[
        { label: 'prod', value: 'prod' },
        { label: 'staging', value: 'staging' },
        { label: 'dev', value: 'dev' },
      ]}
      value={env}
      onChange={onChangeEnv}
    />

    </ConnectWrapper>


   <EnvContext.Provider value={{ env, isCAIP }}>
      <Web3Context.Provider value={{ account, active, library, chainId }}>
          <SocketContext.Provider value = {{ socketData }}>
              <AccountContext.Provider value={{ pgpPrivateKey }}>
                <ChatUIProvider account={account!} pgpPrivateKey={pgpPrivateKey} env={env} theme={darkChatTheme}>
                <Suspense fallback={<h1>Loading</h1>}>
                  <Wrapper id="wrapper">
                      <AppWrapper id="content">

                        {location.pathname !== '/brb' && <Header />}
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
                          element={<BRB />}
                          />
                        </Routes>

                        {location.pathname !== '/brb' && <Footer />}
                        
                      </AppWrapper>
                    </Wrapper>
                  </Suspense>
                  </ChatUIProvider>
              </AccountContext.Provider>
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


