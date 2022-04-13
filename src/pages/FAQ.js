import React from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled from 'styled-components';
import {Section, SectionHero, Content, Item, ItemH, WaveOuter, WaveInner, H1, H2, H3, Image, P, Para, UL,OL , LI, A, B, Span, Anchor, Button} from 'components/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';
import Wave from 'react-wavify';

// Create Header
function FAQ() {
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
          <Span>Ethereum Push Notification Service (EPNS) is a decentralized and blockchain-agnostic communication protocol for the entire web3 world that aims to provide the users to receive notifications for on-chain or off-chain activity.</Span>
          <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off-chain or on-chain logic that can be triggered via smart contract, backend or dApps. These come from an open communication network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend, or infra service to display it to Web3 users.</Span>
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
          <Span>⚬ Go to <AMod href="https://app.epns.io/#/channels">EPNS dApp</AMod> <br />
                ⚬ Opt-in to a channel. <br />
                ⚬ Download the <AMod href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910">Mobile Apps</AMod> or <AMod href="https://chrome.google.com/webstore/detail/epns-protocol-beta/lbdcbpaldalgiieffakjhiccoeebchmg">Browser Extension</AMod> to receive a notification. <br />
                ⚬ Check out our <AMod href="https://getstarted.epns.io/">Quick Guides</AMod>, in case you need any help in the process.</Span>
        </Answer>
      )
    },
    {
      question: "How do I learn more about EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>⚬ EPNS Documentation HUB - <AMod href="https://docs.epns.io/">https://docs.epns.io/</AMod> <br/>
                ⚬ Our Whitepaper: <AMod href="https://whitepaper.epns.io/">https://whitepaper.epns.io/</AMod> <br />
                ⚬ Token economics: <AMod href="https://docs.epns.io/epns-governance/push-tokenomics">https://docs.epns.io/epns-governance/push-tokenomics</AMod> <br />
                ⚬ Medium Articles: <AMod href="https://medium.com/ethereum-push-notification-service">https://medium.com/ethereum-push-notification-service</AMod> <br />
                ⚬ Our Litepaper: <AMod href="https://epns.io/LitepaperEthereumPushNotificationService.pdf">https://epns.io/LitepaperEthereumPushNotificationService.pdf</AMod> <br />
                ⚬ Our Youtube channel: <AMod href="https://www.youtube.com/channel/UC-1_cBepyH01oVUazWwAdpA">https://www.youtube.com/channel/UC-1_cBepyH01oVUazWwAdpA</AMod>
          </Span>
        </Answer>
      )
    },
    {
      question: "Where can I find the Developer Docs and Integration guides for EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>All the imperative developer documentation can be found in the <AMod href="https://docs.epns.io/developer-zone/developer-guides">EPNS Documentation HUB</AMod></Span>
        </Answer>
      )
    },
    {
      question: "What are the Future Plans for EPNS?",
      renderAnswer: () => (
        <Answer>
          <Span>We have very interesting and imperative plans for the future. Some of the significant ones are becoming a multichain communication layer, decentralization of our push nodes, wallet-to-wallet chat feature, etc.</Span>
          <Span>Check out our Roadmap to learn more about the future plans of EPNS - <AMod href="https://medium.com/ethereum-push-notification-service/epns-roadmap-2022-2698ab153c1a">EPNS Roadmap 2022</AMod></Span>
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
    },
    {
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
  ]

  // RENDER
  return (
    <>
      {/* OPEN GRAPH DEFINITION */}
      {/*
      <ReactTitle title="Privacy"/>
      <MetaTags>
        <title>Ethereum Push Notification Service (EPNS) | Privacy Policy</title>
        <meta name="description" content="Read Privacy Policy of Ethereum Push Notification Service (EPNS) - #BUIDLing World's first notification protocol" />
        <meta property="og:title" content="Ethereum Push Notification Service | Privacy Policy" />
        <meta property="og:image" content="https://epns.io/previews/policy.jpg" />
      </MetaTags>
      */}

      {/* HERO SECTION */}
      <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Frequently Asked Questions</H1>
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

      {/* PRIVACY POLICY SECTION */}
      <Section theme="#fff" padding="0px 0px 50px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px 40px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Frequently</Span><Span weight="200"> Asked Questions</Span>
              </H2>
              <H3>Get answers for some of the popular questions asked by EPNS community!</H3>
            </Item>

            {/* Questions and answers */}
            <Item align="stretch" margin="0px 0px 20px 0px">
              {
                FAQS.map(({question, renderAnswer}, index) => (
                  <QnAItem key={index}>
                    <Question
                      onClick={() => {toggleShowAnswer(index)}}
                      hover="#e20880"
                    >
                      <Span>
                        {question}
                      </Span>
                      <BsChevronExpand size={20} color={"#ddd"}/>
                    </Question>

                    {showAnswers[index] &&
                      renderAnswer()
                    }
                  </QnAItem>
                ))
              }
            </Item>
            {/* Questions and answers */}
          </Item>
        </Content>
      </Section>
    </>
  );
}

// css style
const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: transparent;
    justify-content: flex-start;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: rgb(31,23,47);
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #fff;
      font-size: 1.05em;
    }
  }
`

const AMod = styled(A)`
  color: #fff;
  font-weight: 400;
  text-decoration: underline;
`

const LIMod = styled(LI)`
  color: white;
`

const BoldText = styled.span`
  font-weight: bold;
`;

// Export Default
export default FAQ;
