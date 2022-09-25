import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './segments/Footer';
import Header from './segments/Header';

import RedirectToPlatform from './components/RedirectToDiffUrl';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import PressKit from './pages/PressKit';


function App() {
  useEffect(() => {
  // Initialize GA
    ReactGA.initialize('UA-165415629-2');
    ReactGA.pageview('/entry');
  }, []);


  return (
    <AppWrapper>
      <Header />
      <Routes>
        {/* add all the route paths here */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/presskit" element={<PressKit />} /> */}
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
