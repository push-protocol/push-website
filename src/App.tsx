import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Header from './segments/Header';
import Footer from './segments/Footer';

import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
import TermsOfService from './pages/TermsOfService';
import Privacy from './pages/Privacy';
import PrivacyMobile from 'pages/PrivacyMobile';
import FAQ from 'pages/FAQ';

import RedirectToPlatform from './components/RedirectToDiffUrl';



ReactGA.initialize('UA-165415629-2');

function App() {
  useEffect(() => {
    ReactGA.pageview('/entry');
  }, []);


  return (
    <AppWrapper>
      <Header />
      <Routes>
        {/* add all the route paths here */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacymobile" element={<PrivacyMobile />} />
        <Route path="/notify" element={<RedirectToPlatform />} />
      </Routes>
      <Footer />
    </AppWrapper>  
  );
}

const AppWrapper = styled.div`
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	flex: 1;
  background: #121315;
`;

export default App;
