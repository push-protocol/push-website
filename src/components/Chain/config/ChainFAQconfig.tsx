// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import styled from 'styled-components';
// Internal Components
import { A, ItemH, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

export const General = [
  {
    question: 'What is Push Chain?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push is the world’s first blockchain-agnostic decentralised
          communication protocol for Web3. It is an open network for validating
          and indexing all sorts of communication (notifications, chats, etc)
          that can then be integrated by any crypto frontend (dApps, wallets,
          etc).
        </Span>
        <Span>
          Any smart contract, dApp, or backend service can integrate Push to
          provide a communication layer through notifications or chats that are
          tied to the wallet addresses of users.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How does Push Chain work??',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push is building the communication layer for Web3, using which any
          dApp, smart contracts or backend can send any real time communications
          (such as notifications, chats, video and more) that are tied directly
          to a user's wallet address (aka web3 usernames).
        </Span>
        <Span>
          This addresses a major gap in the web3 infrastructure, and improving
          the everyday experience for blockchain users. The notifications (or
          any other communications) are off-chain, gasless for all scenarios
          except when a smart contract sends them (in which case the smart
          contract pays a slightly higher gas fees for the payload that is sent
          on blockchain).
        </Span>
        <Span>
          While communications are encrypted and secure, they utilize Push open
          network which means any dApp or crypto wallet can easily integrate
          them making the lives of all web3 users a lot easier and more akin to
          web2 UX where apps (or protocols) communicate with their users
          whenever something of importance occurs or is about to occur for them.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Why is Push Chain unique for users?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          <b>⚬ Push Notifications:</b> Enables any smart contract, dApp, backend
          to deliver critical informations as notifications to web3 users
          directly to their wallet addresses.
        </Span>
        <Span>
          <b>⚬ Push Chat(wallet-to-wallet chat):</b> Enabling 2-way
          communication for web3 users from their wallet addresses.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How do I get involved with Push Chain Grants?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Connect to the{' '}
          <AMod href='https://app.push.org/#/channels' target={'_blank'}>
            Push dApp
          </AMod>{' '}
          & opt-in to channels to get notifications for protocols that are
          relevant to you. Channels are protocols that activate themselves on
          Push protocol to send notification.
        </Span>
        <Span>
          You can receive notifications from any crypto frontends that have
          already integrated Push. Alternatively, you can use via{' '}
          <AMod href='https://app.push.org/#/channels' target={'_blank'}>
            Push dApp
          </AMod>
          ,{' '}
          <AMod
            href='https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg'
            target={'_blank'}
          >
            browser extension
          </AMod>
          , and mobile app (
          <AMod
            href='https://play.google.com/store/apps/details?id=io.epns.epns&pli=1'
            target={'_blank'}
          >
            Android
          </AMod>{' '}
          &{' '}
          <AMod
            href='https://apps.apple.com/app/ethereum-push-service-epns/id1528614910'
            target={'_blank'}
          >
            iOS
          </AMod>
          ) in case your favorite wallet or dApp doesn't have Push support yet.
        </Span>
        <Span>
          Push recently launched a wallet-to-wallet communication product called
          Push Chat which is in alpha stage. Reach out to us on{' '}
          <AMod
            href='https://discord.com/invite/pushprotocol'
            target={'_blank'}
          >
            Discord
          </AMod>{' '}
          to get exclusive Push Chat access.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'What will happen to Push Protocol?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push operates on network of nodes called Push Nodes which are
          responsible for the validation, storage, and delivery of notifications
          & chats.
        </Span>
        <Span>
          Major efforts are put into decentralising Push Nodes which is in the
          final stages now. Any content or payloads getting delivered are
          already immutable and can't be changed as they are secured using
          crypto-graphical proofs. The other part which ensures that the content
          can't be censored is in final stages now of testing and public alpha
          push nodes are expected to be rolled out soon.
        </Span>
      </Answer>
    ),
  },
];

const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  margin: 0px;
  padding: 0 0 24px 0;

  & ${Span} {
    color: #000;
    font-family: N27;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }

  & Span:not(:first-child) {
    margin-top: 24px;
  }
`;

const AMod = styled(A)`
  color: #e79cff !important;
  font-weight: 400;
  background: transparent;
  padding: 0px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
