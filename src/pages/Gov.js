import React,{useState,useEffect} from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';
import Wave from 'react-wavify';
import Medium from 'components/Medium';
import Carousel from 'react-elastic-carousel';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

import {MdPersonPin} from 'react-icons/md';


const Gov=()=>{



  const [showAnswers, setShowAnswers] = React.useState([]);
  const [width, setWidth] = useState(window.screen.availWidth);
  console.log(width);
  useEffect(() => {
    setWidth(window.screen.availWidth);
    console.log(width);
  });
  React.useEffect(() => {
  });

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }
  const pushDeligatees=[
    {
      name:"Name Here"
    },
    {
      name:"Name Here"
    },
    {
      name:"Name Here"
    }
  ]
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
        <GovernanceImg  src='/governance/REf.PNG'/>
       
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


                 
                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <ProposalImage src='/governance/proposal.png' alt=""/>
                    </Content>

                  <EmphasisText>
                   PROPOSAL
                  </EmphasisText>
                  <Span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Span>
                </EmphasisBlock>




                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <DisImage src='/governance/discuss1.svg' alt=""/>
                    </Content>

                  <EmphasisText>
                   DISCUSSION
                  </EmphasisText>
                  <Span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Span>
                </EmphasisBlock>




                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <GovImage src='/governance/governance1.svg' alt=""/>
                    </Content>

                  <EmphasisText>
                   GOVERNANCE
                  </EmphasisText>
                  <Span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Span>
                </EmphasisBlock>




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
         <Section theme="#fff" padding="0px 0px 50px 0px">
                <Content className="contentBox">
                   Learn more about Governance 
                </Content>
          </Section>
          <Section theme="#fff" padding="0px 0px 50px 0px">
          <GovernanceSection id="governance"  >
        
         
        <GovernanceHeading >
        <item><h4> GOVERNANCE <GovernanceSpan  style={{background:"#35C5F3"}}>Roles  </GovernanceSpan> </h4></item>
        <item>
            <p>WAY TO PROGRESSIVE DECENTRALIZED </p>
        </item>            
        </GovernanceHeading>
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <GovernanceRolesSection>
               <GovernancePushNomineeCard>
                 {/* <MdPersonPin fontSize='6rem'/> */}
                 <img src='/governance/champions.png'/>
                 <h4 style={{color:'white'}}>PUSH NOMINEE</h4>
               </GovernancePushNomineeCard>
               <Item>
                  <h2>PUSH NOMINEE</h2>
                  <p>Self nominate</p>
                  <p>Push holder can delegate votes to them</p>
                  <p>Can vote and submit proposals on snapshot</p>
                </Item>
             </GovernanceRolesSection>
        </Content>
      </GovernanceSection>
          </Section>
          {/* End Learnmore Governance */}

        
         {/* Start pushDeligatees Governance */}
         <Section theme="#fff" padding="0px 0px 50px 0px">
          <GovernanceSection id="governance"  >
        
         
        <GovernanceHeading >
        <item><h4> MEET OUR  <GovernanceSpan  style={{background:"#674C9F"}}>PUSH DELEGATEES  </GovernanceSpan> </h4></item>
        <item>
            <p>Active community members who have at least 75,000 $PUSH delegated to them. They will be able to create proposals on Snapshot that are approved on the forum </p>
        </item>            
        </GovernanceHeading>
        <Content className="contentBox" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Carousel itemsToShow={width < 500 ? 1 : 4}>
            {
              pushDeligatees.map(({name})=>(
                <SliderCard>
              <div className='img'/>
              <div className='text'>{name}</div>
            </SliderCard>
              ))
            }
          </Carousel>
          <NomineeButton>Submit Your Nominee ---- {'>'} </NomineeButton>
        </Content>
      </GovernanceSection>
          </Section>
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


              



             <Section theme="#fff" padding="0px 0px 50px 0px">
                <Content className="contentBox">
                    Governance FAQ
                </Content>
          </Section>
          {/* End faq Governance */}
       
        </>

    )
}



const SliderCard=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-width: 300px;
    min-height:350px;
    background-image: linear-gradient(360deg,#E20880,#674C9F,#35C5F3);
    border-radius: 20px;
    .img{
      border-radius: 20px;
      margin: 10px;
      flex:7;
      background-color: white;
      width: 90%;
      height: 100%;
    }
    .text{
      flex:1;
      font-size:1.2rem;
      color: white;
      font-weight: bolder;
    }
`;
const GovernancePushNomineeCard=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to bottom,#35C5F3,#E20880);
    min-width: 250px;
    min-height: 300px;

    h4{
      letter-spacing: 0.3rem;
    }
`;

const GovernanceRolesSection=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  & ${Item}{
    align-items:flex-start;
    justify-content:center;
    padding: 0 0 0 5rem;
    
    flex:2;
    background-image: linear-gradient(to bottom,#35C5F3 6.48%,#E20880 106.48%);
    align-self:content;
    min-height: 300px;
    display: flex;

    :after {
    content: '';
    position: absolute;
    bottom: -3rem; left: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  }
    :before {
    content: '';
    position: absolute;
    top: -2rem; left: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  
  }
  }
  & ${GovernancePushNomineeCard}{
    flex:1.3;
    background: black;
    position: relative;
    /* -webkit-clip-path: polygon(83% 0, 100% 13%, 100% 83%, 87% 100%, 0 100%, 0% 60%, 0 0); */
    :after {
    content: '';
    position: absolute;
    bottom: -3rem; right: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  }
    :before {
    content: '';
    position: absolute;
    top: -2rem; right: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  
  }
  
  h2{
    color:'#E20880';
    font-size: 1.5rem;

  }

  p{
    font-size:1.2rem;
  }

  @media(max-width:600px){
    flex-direction: column;
  }
`;
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



const NomineeButton=styled(Button)`
  align-items:stretch;
  background: black;
  color: white;
  font-size:1.3rem;
  margin-top:2rem;
  `;
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



// emphasis block


const ProposalImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;



const DisImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;


const GovImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;






const EmphasisBlock = styled(Item)`
  min-width: 280px;

`

const EmphasisImage = styled(Item)`
  padding: 20px;
  margin: 20px 0px 20px;
`

const EmphasisText = styled(Span)`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`



// 





// 

export default Gov;