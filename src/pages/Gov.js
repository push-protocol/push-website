import React from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';
import Wave from 'react-wavify';
import Medium from 'components/Medium';


import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';



const Gov=()=>{



  const [showAnswers, setShowAnswers] = React.useState([]);

  React.useEffect(() => {
  });

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  const FAQS = [
    {
      question: "WHAT ARE PUSH DELEGATES?",
      renderAnswer: () => (
        <Answer>
          <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
          <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
        </Answer>
      )
    },
   
      {
        question: "WHAT ARE PUSH NOMINEES?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "HOW CAN I BECOME A PUSH NOMINEE?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "WHAT IF DON'T WISH TO BE A PUSH NOMINEE?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "WHERE SHOULD I START?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      }
     

   ]

    return(
        <>
          <SectionHero padding="50px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Governance</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Defines Governance</Span>
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
          {/* Start What is Governance */}
          <Section theme="#fff" padding="0px 0px 50px 0px">
      <GovernanceSection id="governance"  >
        
         
        <GovernanceHeading >
        <item><h4><GovernanceSpan>WHAT IS </GovernanceSpan>GOVERNANCE?</h4></item>
        <item>
            <p>WHAT IS GOVERNANCE</p>
        </item>            
        </GovernanceHeading>
        <GovernanceHeading flex="flex-end">
        <item><h4><GovernanceSpan style={{background:"#35C5F3"}}>WHY </GovernanceSpan>GOVERNANCE?</h4></item>
        <item>
            <p>WHY GOVERNANCE</p>
        </item>            
        </GovernanceHeading>
       
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <DottedSection>
        Give the community a sense of ownership and responsibility which comes with governance. It’s not just a mere tool, it's an ideology which we support and want to implement.

        </DottedSection>
        <GovernanceSomethingBox>
          Something
        </GovernanceSomethingBox>
        </Content>
      </GovernanceSection>

          </Section>
          {/* End What is Governance */}
          {/* Start Future Governance */}
          <Section theme="#fff" padding="0px 0px 50px 0px">
          <GovernanceSection id="governance"  >
        
         
        <GovernanceHeading >
        <item><h4><GovernanceSpan style={{background:"#674C9F"}}>FUTURE  </GovernanceSpan> OF GOVERNANCE?</h4></item>
        <item>
            <p>WAY TO PROGRESSIVE DECENTRALIZED </p>
        </item>            
        </GovernanceHeading>
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <GovernanceImg src='/governance/Vectorcurve.png' alt=""/>
        </Content>
      </GovernanceSection>
          </Section>
          {/* End Future Governance */}
         {/* Start process Governance */}
           



      <Section id="solution" theme="#fff" padding="20px 0px 0px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            {/* THE PROBLEM */}
            <Item align="flex-start" padding="0px 0px 40px 0px">
              <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="200">GOVERNANCE </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">PROCESS</Span>
                </H2>
                <H3 maxWidth="400px">PROPOSAL.DISCUSSION.GOVERNANCE</H3>
              </Item>
              </Item>

            
          
           
              <Solution margin="20px 0px">
               

                <ItemH margin="-20px" align="stretch" columnGap="40px" rowGap="40px">
                  <ShadowBox align="flex-start" bg="#e20880" margin="30px 30px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <FaSeedling size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Content Independent</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200">Protocol does not dictate what content can or can't be delivered to service users. Only <b>services can decide what to communicate</b> to their users!</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#674c9f" margin="30px 35px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <RiHeartsFill size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">User Centric</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200"><b>User always opts in</b> for alerts from a service before they can notify you. Indirect consent, while an option will require the service to reward you first!</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#35c5f3" margin="30px 30px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <GiReceiveMoney size={140} color="#fff"/>
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Incentivized Alerts!</Span>
                    </H2>
                    <Span margin="20px" color="#fff">We are a DeFi protocol but a different one! We use <b>Staking</b> by Service, that is <b>Lend</b> out to AAVE to generate <b>Interest</b> which is distributed among the service's subscribers.</Span>
                  </ShadowBox>
                </ItemH>

              </Solution>
            </Item>
        </Content>
      </Section>

          {/* End process Governance */}
         {/* Start Learnmore Governance */}
         <Section id="story" theme="#e20880" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 60px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#000" color="#fff" weight="600" padding="0px 8px">LEARN MORE</Span><Span weight="200" color="#fff">ABOUT GOVERNANCE</Span>
              </H2>
              <H3 color="#fff">MEDIUM ARTICLES</H3>
            </Item>

            <Medium numberOfPosts={3} />

          </Item>
        </Content>

        {/* <WaveOuter>
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
        </WaveOuter> */}
      </Section>
          {/* End Learnmore Governance */}

         {/* Start role Governance */}
          {/* End role Governance */}
         {/* Start pushDeligatees Governance */}
          {/* End pushDeligatees Governance */}



             {/* Start faq Governance */}


             




             <Section theme="#fff" padding="0px 0px 50px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px 40px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">FAQs</Span>
              </H2>
              <H3>LOREM IPSUM</H3>
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


              



          {/* End faq Governance */}
       
        </>

    )
}

const GovernanceImg=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;
const GovernanceHeading=styled.div`
  display: flex;
  padding: 2rem;
  justify-content:  ${props => props.flex || 'flex-start'};
  align-items:  ${props => props.flex || 'flex-start'};
  flex-direction: column;
  
  h4{
    font-size: 40px;
    font-weight:400px;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
  p{
    color: #858585;
    font-size:1.5rem;
    margin:0;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
`;

const GovernanceSection=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const GovernanceItem=styled.div`
  display: flex;
  align-self:stretch;
  justify-content: center;
  align-items: center;
  padding:2rem;
  width: 100%;
`;

const GovernanceSomethingBox=styled.div`
  display: flex;
  background:#C4C4C4;
  justify-content: center;
  align-items:center;
  height: 25rem;
  width: 80%;
`;

const GovernanceSpan=styled.span`
    background:${props => props.backgroundColor || '#E20880'} ;
    padding: 10px;
    color:white;
    margin:0rem 1rem 2rem 0rem;
    font-weight:450px ;

    @media(max-width:600px){
     font-size:1.2rem;
   }
`;





const Solution = styled(ItemH)`
  @media (max-width: 940px) {
    flex-direction: column;

    ${Item} {
      padding:0px 20px;
    }
  }

  @media (max-width: 768px) {
    ${Item} {
      padding: 0px;
    }
  }
`

const ShadowBox = styled(Item)`
  border-radius: 12px;
  border: ${props => props.border || '0px solid transparent'};
  min-width: 280px;
  overflow: hidden;
`



// FAQs Styling




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





// 

export default Gov;