import React from "react";
import ReactGA from 'react-ga';

import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'

import YouTube from 'react-youtube';
import ParticlesBg from "particles-bg";

import { GiTwitter } from 'react-icons/gi';
import { FaBolt, FaTwitter, FaTelegramPlane, FaMedium, FaGithub, FaGooglePlay } from 'react-icons/fa';
import { IoMdHeart, IoMdNotifications } from 'react-icons/io';

// Create Header
function Home({ setBadgeCount, bellPressed }) {
  ReactGA.pageview('/home');

  const [particleConfig, setParticleConfig] = React.useState({});

  React.useEffect(() => {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["#e20880", "#35c5f3", "#674c9f"],
      cross: "dead",
      // emitter: "follow",
      random: 15
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    setParticleConfig(config);
  });

  // Render
  return (
    <Container>
      <ParticlesBg type="custom" config={particleConfig} bg={true} />

      <Preview>
        <YouTube
          videoId="kwwnlmUpRsk"
          opts={{
            playerVars: {
             // https://developers.google.com/youtube/player_parameters
             autoplay: 0,
            }
          }}
        />
      </Preview>
      <QnAItems>
        <QnAItem>
          <Question>What is Ethereum Push Notification Service (EPNS)</Question>
          <Answer>EPNS is the missing piece of Web3 <FaBolt size={14} color="#FFD302"/>! EPNS is a decentralized DeFi protocol for sending notifications. It allows any users to send notifications on Ethereum which is platform agnostic (ie: you get it on Mobile, Chrome or even favorite Wallets). Did we mention you also earn from them!? Cause why not ;)</Answer>
        </QnAItem>
      </QnAItems>

      <Footer>
        <FooterTitle>Preparing Website for Liftoff, Meanwhile...</FooterTitle>
        <FooterInner>
          <FooterSub>
            <FooterSubTitle>Follow our story!  <IoMdHeart size={18} color="#C51104"/></FooterSubTitle>
            <FooterSubLinks>
              <FooterLink bg="#e20880" href="https://twitter.com/epnsproject" target="_blank"><FaTwitter size={20} color="#fff"/></FooterLink>
              <FooterLink bg="#674c9f" href="https://t.me/epnsproject" target="_blank"><FaTelegramPlane size={20} color="#fff"/></FooterLink>
              <FooterLink bg="#35c5f3" href="https://medium.com/@epnsproject" target="_blank"><FaMedium size={20} color="#fff"/></FooterLink>
            </FooterSubLinks>
          </FooterSub>
          <FooterSub>
            <FooterSubTitle>Check out Repo / Early (Alpha) Access</FooterSubTitle>
            <FooterSubLinks>
              <FooterLink bg="#e20880" href="https://github.com/ethereum-push-notification-system" target="_blank"><FaGithub size={20} color="#fff"/></FooterLink>
              <FooterLink bg="#674c9f" href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank"><FaGooglePlay size={20} color="#fff"/></FooterLink>
              <FooterLink bg="#35c5f3" href="https://app.epns.io" target="_blank"><IoMdNotifications size={20} color="#fff"/></FooterLink>
            </FooterSubLinks>
          </FooterSub>
        </FooterInner>
      </Footer>

    </Container>
  );
}

// css style
const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  padding: 20px;
`

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const QnAItems = styled.div`
  display: block;
  margin: 50px 20px 30px 20px;
`

const QnAItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-left: 10px solid #e20880;
  border-radius: 10px;
  background: #fafafa;
`

const Question = styled.div`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`

const Answer = styled.div`
  display: block;
  font-weight: 200;
  font-size: 14px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 20px;
`

const FooterTitle = styled.h1`
  font-size: 12px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 80px;
  background: #674c9f;
  color: #fff;
  padding: 10px 25px;
  margin: 0px 0px 20px 0px;
`

const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0px;
  align-self: stretch;
`

const FooterSub = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #ddd;
  margin: 0px 20px;
  border-radius: 10px;
  overflow: hidden;
`

const FooterSubTitle = styled.div`
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
`

const FooterSubLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
`

const FooterLink = styled.a`
  margin: 10px;
  padding: 8px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.bg ? props.bg : "rgb(180,180,180)"};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
`

// Export Default
export default Home;
