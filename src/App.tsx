import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Header from './segments/Header';
import Footer from './segments/Footer';

import Home from './pages/Home';
import PressKit from './pages/PressKit';
import RedirectToPlatform from './components/RedirectToDiffUrl';


function App() {
    // Initialize GA
    ReactGA.initialize('UA-165415629-2');
    ReactGA.pageview('/entry');

    return (
        <AppWrapper>
            <Header />
            <ParentContainer>
                <Routes>
                    {/* add all the route paths here */}
                    <Route path="/" element={<Home />} />
                    <Route path="/presskit" element={<PressKit />} />
                    <Route path="/notify" element={<RedirectToPlatform />} />
                </Routes>
                <div style={{ height: 2000, border: '1px solid blue', width: 100 }}>long dummy content</div>
            </ParentContainer>
            <Footer />
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    scroll-behavior: smooth;
    background: #F5F5F5;
`;

const ParentContainer = styled.div`
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	flex: 1;

`;

export default App;
