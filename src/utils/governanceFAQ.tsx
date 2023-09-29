// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { SpanV2, ItemVV2 } from '../components/SharedStylingV2';

export const FAQS = [
  {
    question: 'who can participate in governance?',
    renderAnswer: () => (
      <Answer>
        <SpanV2>Anyone and everyone with a web3 wallet with at least 1 $PUSH in it..</SpanV2>
      </Answer>
    )
  },
   
  {
    question: 'Is any sort of KYC required?',
    renderAnswer: () => (
      <Answer>
        <SpanV2>No, your wallet is your gateway to web3 and we have no KYC requirement</SpanV2>
      </Answer>
    )
  },
  
  {
    question: 'Is there a wallet requirement to participate in PUSH Governance?',
    renderAnswer: () => (
      <Answer>
        <SpanV2>Any wallet that supports a connection i.e Metamask, Wallet Connect, or Portis works just fine.</SpanV2>
      </Answer>
    )
  },
  
  {
    question: 'My $PUSH is currently in an exchange can I participate?        ',
    renderAnswer: () => (
      <Answer>
        <SpanV2>The tokens in an exchange belong to the exchange and as of now there isn&rsquo;t a way to participate in
  governance.
  .</SpanV2>
      </Answer>
    )
  },
  
  {
    question: 'Can I use Ethereum to vote?',
    renderAnswer: () => (
      <Answer>
        <SpanV2>No this is protocol-specific governance and as such you need $PUSH which is an ERC-20 token to participate.</SpanV2>
      </Answer>
    )
  }
     
  
];
  

const Answer = styled(ItemVV2)`
   align-items: stretch;
   align-self: stretch;
   padding:20px ;
   border: 1px solid #e6e6e6;
   border-top: 1px solid #e6e6e6;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   background: #fff;

    & ${SpanV2} {
      line-height: 1.5em;
      margin: 10px;
      font-size: 1.05em;
    }
 `;