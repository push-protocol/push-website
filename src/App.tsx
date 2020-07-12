import React from "react";
import ReactGA from 'react-ga';

import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from 'pages/Home';
import Header from 'segments/Header';

import * as dotenv from "dotenv";
dotenv.config();

export default function() {
  return (
    <App />
  )
}

function App() {
  const [ badgeCount, setBadgeCount ] = React.useState(0);
  const [ bellPressed, setBellPressed ] = React.useState(0);

  // Initialize GA
  ReactGA.initialize('UA-165415629-2');
  ReactGA.pageview('/app');

  return (
      <>
        <HeaderContainer>
          <Header
            badgeCount={badgeCount}
            bellPressedCB={() => {setBellPressed(bellPressed + 1)}}
          />
        </HeaderContainer>

        <ParentContainer>
          <HomeContainer>
            <Home
              setBadgeCount={setBadgeCount}
              bellPressed={bellPressed}
            />
          </HomeContainer>
        </ParentContainer>

        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </>
  );
}


// CSS STYLES
const HeaderContainer = styled.div`
  height: 55px;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`

const ParentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 80px 0px 0px 0px;
  flex: 1;
`

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`

const ProviderUpperContainer = styled.div`
  display: flex;
  flex: 1,
  align-self: center;
  flex-direction: column;
`

const ProviderLogo = styled.img`
  width: 15vw;
  align-self: center;
  display: flex;
  margin: 20px;
  min-width: 200px;
`

const ProviderContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProviderButton = styled.button`
  flex: 1 1 0;
  min-width: 200px;
  background: #fff;
  outline: 0;
  max-width: 200px;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225,225,225);

  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  padding: 10px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
    border: 1px solid ${props => props.border}
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
    border: 1px solid ${props => props.border}
  }
`

const ProviderImage = styled.img`
  height: 60px;
  padding: 10px;
`

const ProviderLabel = styled.span`
  font-size: 12px;
  margin: 5px;
`

const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {}
  .Toastify__toast {}
  .Toastify__toast--error {}
  .Toastify__toast--warning {}
  .Toastify__toast--success {}
  .Toastify__toast-body {
    font-size: 12px;
  }
  .Toastify__progress-bar {}
`;
