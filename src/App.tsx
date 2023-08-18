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
import { ChatUIProvider, darkChatTheme } from '@pushprotocol/uiweb';

ReactGA.initialize('UA-165415629-2');

interface Web3ReactState {
  chainId?: number;
  account?: string | null | undefined;
  active: boolean;
  error?: Error;
  library?: unknown;
}

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

  // const Wrapper = ({ children }) => {

  //   useLayoutEffect(() => {
  //     document.documentElement.scrollTo(0, 0);
  //   }, [location.pathname]);
  //   return children;
  // };

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
    <div style={{position: 'fixed', background: 'gray', width:'600px', top: '0', right: '0', zIndex:'999999'}}>

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

    </div>


   <EnvContext.Provider value={{ env, isCAIP }}>
      <Web3Context.Provider value={{ account, active, library, chainId }}>
          <SocketContext.Provider value = {{ socketData }}>
              <AccountContext.Provider value={{ pgpPrivateKey }}>
                <ChatUIProvider account={account!} pgpPrivateKey={pgpPrivateKey} env={env} theme={darkChatTheme}>
                <Suspense fallback={<h1>Loading</h1>}>
                  {/* <Wrapper id="wrapper"> */}
                      {/* <AppWrapper id="content"> */}

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
                        
                      {/* </AppWrapper> */}
                    {/* </Wrapper> */}
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

export default App;


