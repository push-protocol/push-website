import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Header from './segments/Header';
import Footer from './segments/Footer';

import Home from './pages/Home';
import About from './pages/About';


function App() {
    // Initialize GA
    ReactGA.initialize('UA-165415629-2');
    ReactGA.pageview('/entry');

    return (
        <>
            <Header />
            <ParentContainer>
                <Routes>
                    {/* add all the route paths here */}
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </ParentContainer>
            <Footer />
        </>
    );
}

const ParentContainer = styled.div`
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export default App;
