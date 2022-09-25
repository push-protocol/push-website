import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './segments/Footer';
import Header from './segments/Header';

import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
import FAQ from 'pages/FAQ';
import PrivacyMobile from 'pages/PrivacyMobile';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';

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
`;

export default App;
