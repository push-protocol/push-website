// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable react/prop-types
/* eslint-disable */

import React, { useLayoutEffect, useEffect, useState, Suspense } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './segments/Footer';
import Header from './segments/Header';
import Home from './pages/Home';

ReactGA.initialize('UA-165415629-2');

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
  useEffect(() => {
    ReactGA.pageview('/entry');
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
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
  );
}

const AppWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default App;
