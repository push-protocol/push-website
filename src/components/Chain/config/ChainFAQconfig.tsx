// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import Link from '@docusaurus/Link';
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
          We are building Push Chain, a <b>shared state L1</b> blockchain for{' '}
          <b>Universal Apps</b>. Push Chain enables txs from any chain (Eth,
          Solana, EVM, or non-EVM) enabling apps from any chain to be accessed
          by the users of any chain (polymarket from any chain, pump.fun from
          any chain, etc).
        </Span>
        <Span>
          It enables apps to be completely interoperable by allowing developers
          to deploy a single universal smart contract on Push Chain. It also
          enables new paradigm of apps where users of all chains can come
          together for shared app experiences (universal AI agents, socials,
          etc).
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How does Push Chain work?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Chain is a Proof-of-Stake (PoS) L1 blockchain that is designed to
          eliminate fragmentation across all chains.
        </Span>

        <Span>
          It leverages on several innovations such as specialized validators,
          off-chain relayers and generalized solvers working in tandem to ensure
          a user or developer is able to read and write on any chain. This
          eliminates the silos of different chains, wallet conventions,
          liquidity fragmentation and more.
        </Span>

        <Span>It introduces some groundbreaking innovations such as:</Span>

        <Span>
          <b>Fee and Wallet abstraction</b> - allowing wallets/users of any
          chain to interact natively while being on the chain of their choice.
        </Span>

        <Span>
          <b>Universal Wallet</b> - ensuring user can login via social or email
          and still have non-custodial wallets created for them for all chains
          (Ethereum, Bitcoin, Solana, etc).
        </Span>

        <Span>
          <b>Shared State</b> - enabling developers to read the state of any
          wallet or smart contract of any other blockchain via smart contract on
          Push Chain.
        </Span>

        <Span>
          <b>Programmable Solvers</b> - ensures that a developer can create a
          basic path for cross chain actions (write actions) based on the shared
          state.
        </Span>

        <Span>
          <b>Universal Smart Contracts</b> - giving developers ability to use
          shared state and generalized solvers for read and write action in
          chain agnostic fashion. And enables users to use fees and wallet
          abstraction to access any app or any chain without any hassle.
        </Span>

        <Span>
          Push Chain uses all these innovations to enable reading (shared state)
          or writing to different chains (programmable solvers), all controlled
          by the universal smart contract. The fee and wallet abstraction
          further enables a seamless, user centric approach as the learnings for
          a user is abstracted away no matter from what chain they chose to
          interact.
        </Span>

        <Span>
          This results in <b>universal applications</b> for web3. In this
          paradigm, instead of being a user of "Uniswap on Ethereum," "Uniswap
          on Polygon," or "Uniswap on Arbitrum," a person simply becomes a{' '}
          <b>user of Uniswap</b>.
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
          Push Chain addresses specific gaps in the existing blockchains, such
          as interoperability, state access across chains, programmable solvers
          and wallet abstraction resulting in a <b>full stack interop</b>. While
          existing blockchains are robust, they operate in their own eco-system
          and an aggregator to unite these chains are needed.
        </Span>
        <Span>
          Push Chain’s focus is on being a <b>shared state chain</b> for
          universal (interoperable) applications acting as a unifying layer
          where all chains can come together and use PC as universal hub or do
          settlement between them.
        </Span>
        <Span>
          PC offers a new paradigm of web3 that works from <b>Any Chain.</b> For{' '}
          <b>Any Wallet/User.</b> And is suitable for <b>Any App.</b>
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
          While we are thrilled with the early interest coming from developers
          to build universal apps, we are still in the governance phase for
          ratifying our evolution from Push Protocol to Push Chain and hence do
          not have a grants program now.
        </Span>
        <Span>
          This will change very soon once the community approves of Push Chain!
          Meanwhile, to frontrun other grantees, please drop us an email at{' '}
          <Link href='mailto:team@push.org'>team@push.org</Link> with the
          subject line as <b>Grant MEOW</b> and your app idea. Or, simply follow{' '}
          <Link href='https://x.com/PushChain' target='_blank'>
            @PushChain
          </Link>{' '}
          for more updates around the grants program and its release.
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
          Today's push notification and chat protocols will benefit
          significantly from being built on top of Push Chain. A dedicated
          section of the team will focus on maintaining and enhancing these
          protocols, ensuring they remain the de-facto standard in their
          respective domains.
        </Span>
        <Span>
          By aligning with Push Chain, notifications and chat sent through the
          protocols will be processed as transactions on the chain. This
          integration not only enables these protocols to accrue value but also
          marks the beginning of a new chapter in their evolution, further
          enhancing their utility and impact within the web3 ecosystem.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'I want to learn more?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          That's awesome! you can head to our{' '}
          <Link href='/knowledge' target='_self'>
            Knowledge Base
          </Link>{' '}
          section to learn everything in depth.
        </Span>
        <Span>
          If you are a FAQ type of a person, then simply head to our{' '}
          <Link href='/blog/faq-push-chain/' target='_self'>
            Detailed FAQ
          </Link>{' '}
          for more info.
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
