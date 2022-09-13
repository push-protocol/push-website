import React from 'react';
import styled from 'styled-components';
import { Span,Item } from '../components/SharedStyling';


export const FAQS = [
    {
        question: 'who can participate in governance?',
        renderAnswer: () => (
            <Answer>
                <Span>Anyone and everyone with a web3 wallet with at least 1 $PUSH in it..</Span>
            </Answer>
        )
    },
   
    {
        question: 'Is any sort of KYC required?',
        renderAnswer: () => (
            <Answer>
                <Span>No, your wallet is your gateway to web3 and we have no KYC requirement</Span>
            </Answer>
        )
    },
  
    {
        question: 'Is there a wallet requirement to participate in PUSH Governance?',
        renderAnswer: () => (
            <Answer>
                <Span>Any wallet that supports a connection i.e Metamask, Wallet Connect, or Portis works just fine.</Span>
            </Answer>
        )
    },
  
    {
        question: 'My $PUSH is currently in an exchange can I participate?        ',
        renderAnswer: () => (
            <Answer>
                <Span>The tokens in an exchange belong to the exchange and as of now there isn&rsquo;t a way to participate in
  governance.
  .</Span>
            </Answer>
        )
    },
  
    {
        question: 'Can I use Ethereum to vote?',
        renderAnswer: () => (
            <Answer>
                <Span>No this is protocol-specific governance and as such you need $PUSH which is an ERC-20 token to participate.</Span>
            </Answer>
        )
    }
     
  
];
  

const Answer = styled(Item)`
   align-items: stretch;
   align-self: stretch;
   padding:20px ;
   border: 1px solid #e6e6e6;
   border-top: 1px solid #e6e6e6;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   background: #fff;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      font-size: 1.05em;
    }
 `;