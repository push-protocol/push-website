import React from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled from 'styled-components';
import {Section, SectionHero, Content, Item, ItemH, WaveOuter, WaveInner, H1, H2, H3, Image, P, Para, UL,OL , LI, A, B, Span, Anchor, Button} from 'components/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';
import Wave from 'react-wavify';

// Create Header
function Ethdenver() {
  ReactGA.pageview('/faq');

  const [showAnswers, setShowAnswers] = React.useState([]);

  React.useEffect(() => {
  });

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  // define the question and answers seperately in order to seperate data and render logic
  const FAQS = [
    {
      question: "What is EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
          <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
        </Answer>
      )
    },
    {
      question: "Why are push notifications important for Web3?",
      renderAnswer: () => (
        <Answer>
          <Span>Push notifications have transformed the Web2 ecosystem. They have enabled applications to have more direct relationships with users and have yielded fundamental strategies about marketing, product fit, user behavior, and more. The problem with Web2 notifications, however, is that they are entirely created and prescribed by the applications themselves, and are not always net-useful to the end user. Users rarely have a choice about what kinds of notifications they wish to receive, and more often than not, notifications are purely marketing vehicles to drive revenue for the applications.</Span>
          <Span><i>Decentralized</i> notifications, on the other hand, provide the emerging Web3 ecosystem with the benefits of a robust notification ecosystem without the exploitative or centralized drawbacks of Web2 notifications. Applications need ways to communicate with users in more immediate and event-initiated ways than through Twitter, Discord, or email. Users deserve to control what notifications they receive, and should benefit from the open source nature of Web3 by requesting notifications about protocol behavior.</Span>
        </Answer>
      )
    },
    {
      question: "How can decentralized push notifications be used?",
      renderAnswer: () => (
        <Answer>
          <Span>We believe almost any application in the Web3 ecosystem can benefit from notifications. Some of the highest-impact immediate opportunities are:</Span>
          <Span><b>DEXes:</b> DEX users can be notified when the price of a token falls or rises a certain percentage. Users can also set up notifications for when their trades are executed and completed, rather than having to check back to see if trades were completed (especially during times of high network traffic). Users can also set up notifications for when gas prices go down or up to help them decide when to trade.</Span>
          <Span><b>DeFi:</b> Lending protocol users can set up notifications to be informed when they are about to be liquidated, rather than needing to check in regularly to ensure. LP providers can also set up notifications about impermanent loss in case they wish to cut their losses short during a volatile market. If DeFi users are interacting with a particularly young or untested protocol, they could set up notifications to inform them if large amounts of funds are being moved around in ways that could signal instability within that dapp.</Span>
          <Span><b>NFTs and Gaming:</b> Trading of NFTs or goods on markets or within games can be connected to EPNS to inform users 1) when certain goods go on sale or auction; 2) when auctions go live from crypto-artists; 3) when a bid is accepted or topped; 4) when one’s own NFT (or anyone else’s) sells.</Span>
          <Span><b>ENS/Consumer Apps:</b> Apps like the Ethereum Name Service (ENS) can notify users when their subscriptions are about to expire, rather than expecting users to remember or check in regularly to remind themselves of upcoming dates.</Span>
      </Answer>
      )
    },
    {
      question: "What is EPNS's solution?",
      renderAnswer: () => (
        <Answer>
          <Span>The EPNS solution is comprised of 4 components: <b>Service</b>, <b>Channel</b>, <b>Subscriber</b>, <b>User</b>.</Span>
          <Span><b>⚬ Service:</b> A service is any user, wallet owner, dapp, or Web3 services that would like to send notifications. Essentially, a service is any addressable user of EPNS.</Span>
          <Span><b>⚬ Channel:</b> A channel is any service that has activated itself on the EPNS protocol and can therefore begin creating notifications.</Span>
          <Span><b>⚬ User:</b> Any participant in Web3 that wishes to receive notifications about a dapp, wallet, or smart contract.</Span>
          <Span><b>⚬ Subscriber:</b> A user that has elected to receive notifications from any particular channel (i.e. someone who Opts-In to a channel that sends out a specific notification).</Span>
        </Answer>
      )
    },
    {
      question: "How do I use EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>EPNS is an app on your phone and/or desktop. On the app, you can connect your wallet(s) and Opt-In to different channels based on which notifications you’d like to receive.</Span>
        </Answer>
      )
    },
    {
      question: "How can I use EPNS right now?",
      renderAnswer: () => (
        <Answer>
          <Span>EPNS right now is live on the Ropsten network. There are a few “run of show” notifications the EPNs team has set up to help demonstrate to the market the utility and UX of EPNS. Those include: Compound liquidity alert, fund tracker from specific crypto wallets, ENS domain expiry alert, and Ethereum gas alert.</Span>
        </Answer>
      )
    },
    {
      question: "What's next for EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>We’re working hard to get EPNS to the Ethereum mainnet and begin powering the Web3 notification ecosystem! Our plan is to launch in late 2020 or early 2021. In the meantime, we’re inviting collaborators, developers, and enthusiasts to test out the product, give feedback, and spread the word.</Span>
        </Answer>
      )
    },
    {
      question: "How can I stay up-to-date with official EPNS news?",
      renderAnswer: () => (
        <Answer>
          <Span>The list below contains all EPNS official channels.</Span>
          <UL>
            <LIMod>Twitter: <AMod href="https://twitter.com/epnsproject">https://twitter.com/epnsproject</AMod></LIMod>
            <LIMod>Official Telegram: <AMod href="https://t.me/epnsproject">https://t.me/epnsproject</AMod></LIMod>
            <LIMod>Telegram announcements: <AMod href="https://t.me/epnsprojectnews">https://t.me/epnsprojectnews</AMod></LIMod>
            <LIMod>Governance forum: <AMod href="https://gov.epns.io/">https://gov.epns.io/</AMod></LIMod>
            <LIMod>Github: <AMod href="https://github.com/ethereum-push-notification-service/">https://github.com/ethereum-push-notification-service/</AMod> </LIMod>
            <LIMod>Medium: <AMod href="https://medium.com/ethereum-push-notification-service/">https://medium.com/ethereum-push-notification-service/</AMod></LIMod>
            <LIMod>Youtube: <AMod href="https://www.youtube.com/c/EthereumPushNotificationService/">https://www.youtube.com/c/EthereumPushNotificationService/</AMod></LIMod>
          </UL>
        </Answer>
      )
    },
    {
      question: "How can I get support for EPNS related queries?",
      renderAnswer: () => (
        <Answer>
          <Span>We have multiple channels where support is provided.</Span>
          <Span>The <AMod href="https://epns.io/#contact">Contact Us</AMod> form on our website is to be considered the one-stop-shop for all support queries.</Span>
          <UL>
            <LIMod>General Support about EPNS products & offering</LIMod>
            <LIMod>Collaborations and business proposals</LIMod>
            <LIMod>Career opportunities</LIMod>
            <LIMod>and more!</LIMod>
          </UL>
          <Span>
            Additionally, our development team is always available on our <AMod href="https://discord.gg/nYrqZ734nu">Discord Community Server</AMod> to help with more technical matters related to integrations.
          </Span>
          <Span>
            Finally, our team of community managers will always be ready to hep and get answers to your questions through our telegram.
          </Span>
      </Answer>
      )
    },
    {
      question: "Where can I find educational material about EPNS?",
      renderAnswer: () => (
        <Answer>
          <UL>
            <LIMod>Our Website: <AMod href="https://epns.io/">https://epns.io/</AMod></LIMod>
            <LIMod>Our Whitepaper: <AMod href="https://whitepaper.epns.io/">https://whitepaper.epns.io/</AMod></LIMod>
            <LIMod>Our Litepaper: <AMod href="https://epns.io/LitepaperEthereumPushNotificationService.pdf">https://epns.io/LitepaperEthereumPushNotificationService.pdf</AMod></LIMod>
            <LIMod>Our Youtube channel: <AMod href="https://www.youtube.com/channel/UC-1_cBepyH01oVUazWwAdpA">https://www.youtube.com/channel/UC-1_cBepyH01oVUazWwAdpA</AMod></LIMod>
            <LIMod>Token economics: <AMod href="https://medium.com/ethereum-push-notification-service/announcing-the-epns-push-token-generation-event-4d1699e716f5">https://medium.com/ethereum-push-notification-service/</AMod></LIMod>
            <LIMod>Documentation: <AMod href="https://app.gitbook.com/@ethereum-push-notification/spaces">https://app.gitbook.com/@ethereum-push-notification/spaces</AMod></LIMod>
            <LIMod>Our <AMod href="https://medium.com/ethereum-push-notification-service">Medium Blog</AMod> is an excellent source of information. Our team is consistently publishing articles to keep the community up-to-speed with our development efforts, partnerships, and more.</LIMod>
          </UL>
        </Answer>
      )
    },
    {
      question: "How can I participate in the EPNS Protocol ecosystem?",
      renderAnswer: () => (
        <Answer>
          <Span> First of all, familiarize yourself with EPNS through our Whitepaper, Litepaper, and Medium articles, and then join our official channels. </Span>
          <Span> Then, please make sure you keep an eye on the multiple events we run through Twitter and telegram. You will have the opportunity to learn about our partners and collaborations and participate in the contest around them. </Span>
          <Span> Also, become an active member in the EPNS Governance and participate in the direction of the protocol. Visit <AMod href="https://gov.epns.io/">https://gov.epns.io/</AMod>, get involved in the conversations, express your opinions, support your favorite PUSH Delegatee, and make your vote count! </Span>
        </Answer>
      )
    },{
      question: "Where do i get $PUSH?",
      renderAnswer: () => (
        <Answer>
          <OL>
            <LIMod>
              Participate in our community designed activities:
              <OL type="a">
                <LIMod> <AMod href="https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf"> Rockstars of EPNS </AMod></LIMod>
                <LIMod> Participate in one of our Pools available at <AMod href="https://incentives.epns.io/">https://incentives.epns.io/</AMod></LIMod>
                <LIMod> Participate in our Collaboration announcements activities (AMAs, Meme contests)  </LIMod>
                <LIMod> Participate to become an EPNS champion in our Governance process </LIMod>
              </OL>
            </LIMod>
            <LIMod>
              <BoldText>Huobi</BoldText><br/>
              <Span>PUSH/USDT: <AMod href="https://m.huobi.com/en-us/market/chart/?s=push_usdt">https://m.huobi.com/en-us/market/chart/?s=push_usdt</AMod></Span><br/>
              <Span>PUSH/BTC: <AMod href="https://m.huobi.com/en-us/market/chart/?s=push_btc">https://m.huobi.com/en-us/market/chart/?s=push_btc</AMod></Span>
            </LIMod>
            <LIMod>
              <BoldText>Uniswap</BoldText><br/>
              <Span><AMod href="https://app.uniswap.org/#/swap?inputCurrency=0xf418588522d5dd018b425e472991e52ebbeeeeee">https://app.uniswap.org/#/swap?inputCurrency=0xf418588522d5dd018b425e472991e52ebbeeeeee</AMod></Span><br/>
            </LIMod>
            <LIMod>
              <BoldText>Paraswap</BoldText><br/>
              <Span><AMod href="https://paraswap.io/#/ETH-PUSH ">Paraswap</AMod></Span><br/>
            </LIMod>
            <LIMod>
              <BoldText>WazirX</BoldText><br/>
              <Span>PUSH/USDT: <AMod href="https://wazirx.com/exchange/PUSH-USDT">https://wazirx.com/exchange/PUSH-USDT</AMod></Span><br/>
              <Span>PUSH/INR: <AMod href="https://wazirx.com/exchange/PUSH-INR">https://wazirx.com/exchange/PUSH-INR</AMod></Span>
            </LIMod>
            <LIMod>
              <BoldText>Mexc</BoldText><br/>
              <Span>PUSH/USDT: <AMod href="https://www.mexc.com/exchange/PUSH_USDT">https://www.mexc.com/exchange/PUSH_USDT</AMod></Span><br/>
            </LIMod>
            <LIMod>
              <BoldText>Zebpay</BoldText><br/>
              <Span><AMod href="https://zebpay.com/in/buy-push">https://zebpay.com/in/buy-push</AMod></Span><br/>
            </LIMod>
            <LIMod>
              <BoldText>Gate</BoldText><br/>
              <Span>PUSH/USDT: <AMod href="https://www.gate.io/trade/PUSH_USDT">https://www.gate.io/trade/PUSH_USDT</AMod></Span><br/>
              <Span>PUSH/ETH: <AMod href="https://www.gate.io/trade/PUSH_ETH">https://www.gate.io/trade/PUSH_ETH</AMod></Span>
            </LIMod>
            <LIMod>
              <BoldText>Bitbns</BoldText><br/>
              <Span>PUSH/INR: <AMod href="https://bitbns.com/trade/#/push/">https://bitbns.com/trade/#/push/</AMod></Span><br/>
            </LIMod>
          </OL>
          <Span>Learn more about the EPNS $PUSH Liquidity Rewards Program <AMod href="https://medium.com/ethereum-push-notification-service/epns-push-liquidity-rewards-program-d16ff2c0fef4">here.</AMod></Span>
        </Answer>
      )
    }
  ]

  // RENDER
  return (
    <>
     
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Ethdenver</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Frequently asked Questions and their answers!</Span>
          </Item>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </SectionHero>

      <Section theme="#fff" padding="0px 0px 50px 0px">
        <Content className="contentBox">
              <H2>Follow This Steps : </H2>
              <Item padding="30px 0" margin="50px 0 0 0">
              <StepsBox>Visit app.epns.io and subscribe to Push@EthDenver Channel, we will only communicate winners over here</StepsBox>
              <StepsBox>Keep the card handy, we will be selecting and communicating the winners code via Push@EthDenver Channel</StepsBox>
              <StepsBox>Keep the QR code of treasure chest protected, that contains the secret phrase which they have to give to us to verify their claim if they won</StepsBox>
              </Item>
        </Content>
      </Section>
    </>
  );
}

// css style

// Export Default

const StepsBox=styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* width: 100%; */
    /* max-width: 1200px; */
    min-height: 150px;
    color:#fff;
    font-size:1.5rem;
    font-weight:bold;
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin:10px;
    font-family: ${(props) =>
		props.family || "'Source Sans Pro', Helvetica, sans-serif"};
    padding: 0px 20px;
    @media (max-width: 1008px) {
        padding: 0px 5px;
        margin: 30px 10px;
        line-height: 1.5em;
        font-size: 1.2rem;
    }
`;

export default Ethdenver;
