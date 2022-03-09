import React, { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import MetaTags, {ReactTitle} from 'react-meta-tags';

import styled, { css } from 'styled-components';
import {Section, SectionFS, SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';

import ScrollTrigger from 'react-scroll-trigger';

import Wave from 'react-wavify';
import Medium from 'components/Medium';
import Carousel, { consts } from 'react-elastic-carousel';

import { keyframes } from 'styled-components';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import {BsChevronLeft} from 'react-icons/bs';
import {MdPersonPin} from 'react-icons/md';

import Circle from 'components/circle-animation/circle-animation';
import './carousel.css';

import CarouselItems from 'components/CarouselItems';
import MediumCard from 'components/MediumCard';
import { Tooltip } from 'react-hover-tooltip';

import {article} from 'config/governanceMediumArticle';
import {pushDeligatees} from 'config/pushDelegateeDetails'
import {FAQS} from 'config/governanceFAQ';

// Create Governance
function Governance() {
  // react page view
  ReactGA.pageview('/gov');

  // For the hero banner
  const [animateHero, setAnimateHero] = React.useState(true);

  // For the FAQs
  const [showAnswers, setShowAnswers] = React.useState([]);

  const [noOfCarouselItems,setNoOfCarouselItems]=useState(1);
  const carouselRef = React.useRef(null);

 
  useEffect(() => {
    if(window.screen.availWidth<500)setNoOfCarouselItems(1);
    else setNoOfCarouselItems(3);
  },[]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }
  // RENDER
  return (
    <>
      {/* OPEN GRAPH DEFINITION */}
      <ReactTitle title="Governance"/>


      {/* HERO SECTION */}
      <ScrollTrigger onEnter={() => {setAnimateHero(true)}} onExit={() => {setAnimateHero(false)}} triggerOnLoad={false}>
        <SectionFS id="hero" padding="0px">
          <CarouselItems />

          <WaveOuter>
            <WaveInner>
              <Wave fill='#e20880'
                paused={!animateHero}
                options={{
                  height: 40,
                  amplitude: 30,
                  speed: 0.35,
                  points: 3
                }}
              />
            </WaveInner>
            <WaveInner>
              <Wave fill='#35c5f3'
                paused={!animateHero}
                options={{
                  height: 20,
                  amplitude: 35,
                  speed: 0.25,
                  points: 3
                }}
              />
            </WaveInner>
          </WaveOuter>
        </SectionFS>
      </ScrollTrigger>

                
      {/* WHAT IS GOVERNANCE SECTION */}
      <Section id="whatisgovernance" theme="#35c5f3" gradient="linear-gradient(180deg, #35C5F3 0%, #674C9F 100%)" padding="20px 0px 80px 0px">
        <Content className="contentBox">
         <Item align="stretch" justify="flex-start" margin="0px 20px 60px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color="#fff">What is </Span><Span bg="#fff" color="#000" weight="600" padding="0px 8px">Governance</Span>
              </H2>
              <H3 maxWidth="400px" color="#fff">Learn and Govern!</H3>
            </Item>

            <Item margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              <Item margin="10px 20px">
                <EmphasizedContent>
                  Decentralized governance is all about giving users direct control of the products they use. Rather than a central authority, the community ($PUSH token holders in our case) looks after the organization. This reduces beauracracy and opens up users to collaborate and innovate like never before.
                </EmphasizedContent>
              </Item>
            </Item>
          </Item>

          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" margin="0px 0px 20px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color="#fff">Why </Span><Span bg="#fff" color="#000" weight="600" padding="0px 8px">Governance</Span>
              </H2>
              <H3 maxWidth="400px" color="#fff">Why Governance is important for Decentralization</H3>
            </Item>

            <Item margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              <Item margin="10px 20px">
                <EmphasizedContent>
                  Our progressive governance model aims to hand over the various levers of control to the EPNS governing community. We want to establish a system for the community where ideas and proposals are considered, respected, and incentivized. With EPNS Governance, we aim to offer individuals clear paths to participate in our protocol and bolster innovation to the EPNS ecosystem.
                </EmphasizedContent>
              </Item>
            </Item>
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
      </Section>
      
      
      {/* FUTURE OF GOVERNANCE SECTION */}
      <DeskTopView>
      <Section id="govfuture" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Future</Span><Span weight="200"> Of Governance</Span>
              </H2>
              <H3>Way to progressive decentralization</H3>
            </Item>

            <Item margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="stretch">
              <video
                autoPlay
                src="/governance/pathVideo.mp4"
                muted
                disablePictureInPicture
              />
            </Item>
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
      </Section>
      </DeskTopView>
      
      {/* GOVERNANCE PROCESS SECTION */}
      <Section id="govprocess" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Governance</Span><Span weight="200" color="#000"> Process</Span>
              </H2>
              <H3>Propose. Discuss. Govern.</H3>
            </Item>

            <ItemH margin="10px -20px 10px -20px" align="stretch" flex="auto">
              <EmphasisBlock margin="10px 10px">
                <EmphasisImage margin="20px" padding="20px">
                  <Image src="./governance/proposal.png" srcSet="./governance/proposal@2x.png 2x, ./governance/proposal@3x.png 3x" alt="First phase of EPNS Governance - Submit Proposal on gov.epns.io" />
                </EmphasisImage>

                <EmphasisText>
                  Step 1: Initial proposer submits the proposal by following <A href="https://gov.epns.io/t/about-the-governance-proposals-read-me-first/16" target="_blank" title="Open Governance Proposal Forum of EPNS">rules of proposing</A>. Anyone can submit a proposal.
                </EmphasisText>

                <Anchor
                  title="Learn more about how to Propose"
                  href="https://gov.epns.io/c/governance-proposals/8"
                  target="_blank"
                  bg="#e20880"
                  radius="12px"
                  align="stretch"
                  margin="20px 10px 10px 10px"
                >
                  Start Proposal
                </Anchor>
              </EmphasisBlock>

              <EmphasisBlock margin="10px 10px">
                <EmphasisImage>
                  <Image src="./governance/discuss.png" srcSet="./governance/discuss@2x.png 2x, ./governance/discuss@3x.png 3x" atl="Second phase of EPNS Governance - Discussion on gov.epns.io" />
                </EmphasisImage>

                <EmphasisText>
                  Step 2: Proposals are promoted to discussion once <A href="https://gov.epns.io/t/about-governance-discussions-read-me-first/19" target="_blank" title="Open Governance Proposal Forum of EPNS">required quorum</A> is reached. 
                </EmphasisText>

                <Anchor
                  title="Browse all active discussions"
                  href="https://gov.epns.io/c/governance-discussions/5"
                  target="_blank"
                  bg="#35c5f3"
                  radius="12px"
                  align="stretch"
                  margin="20px 10px 10px 10px"
                >
                  Browse Discussions
                </Anchor>
              </EmphasisBlock>

              <EmphasisBlock margin="10px 10px">
                <EmphasisImage>
                  <Image src="./governance/govern.png" srcSet="./governance/govern@2x.png 2x, ./governance/govern@3x.png 3x" alt="Last phase of EPNS Governance - Voting via Snapshot" />
                </EmphasisImage>

                <EmphasisText>
                  Step 3: Discussed proposals that <A href="https://gov.epns.io/t/about-governance-discussions-read-me-first/19#promotion-criteria-2" target="_blank" title="Open Governance Proposal Forum of EPNS">gains enough traction</A> are moved to voting. Voting is done gasslessly via <A href="https://epns.io/" target="_blank" title="Open Governance Proposal Forum of EPNS">$PUSH tokens</A>.
                </EmphasisText>

                <Anchor
                  title="Participate in Voting via Snapshot"
                  href="https://snapshot.org/#/epns.eth/"
                  target="_blank"
                  bg="#674c9f"
                  radius="12px"
                  align="stretch"
                  margin="20px 10px 10px 10px"
                >
                  Vote Now
                </Anchor>
              </EmphasisBlock>
            </ItemH>
          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#35c5f3'
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
      </Section>


      {/* PUSH GRANTS SECTION */}
      <Section id="grants" theme="#35c5f3" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color="#fff">PUSH </Span><Span bg="#fff" color="#000" weight="600" padding="0px 8px">Grants</Span>
              </H2>
              <H3 color="#fff">This program aims to enable contributors with the resources they need (funding, dev support, go-to market planning, etc.) to focus their energies on the advancement of the EPNS protocol.</H3>
            </Item>
            
            <ItemH margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              <ShadowBox align="flex-start" bg="#e20880" margin="30px 30px">
                <Showoff
                  right="-20px"
                  bottom="-20px"
                  opacity="0.2"
                >
                  <FaSeedling size={140} color="#fff"/>
                </Showoff>
                <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                  <Span bg="#fff" color="#000" weight="600" padding="0px 8px">$1,000,000 USD</Span>
                </H2>
                <Span margin="20px" color="#fff" weight="200" size="large">A <b>million dollar grant</b> to begin the journey towards total DAOfication!</Span>
              </ShadowBox>

              <ShadowBox align="flex-start" bg="#674c9f" margin="30px 30px">
                <Showoff
                  right="-20px"
                  bottom="-20px"
                  opacity="0.2"
                >
                  <RiHeartsFill size={140} color="#fff"/>
                </Showoff>
                <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                  <Span bg="#fff" color="#000" weight="600" padding="0px 8px">6 Months</Span>
                </H2>
                <Span margin="20px" color="#fff" weight="200" size="large"><b>Program is active</b> from <b>Jan 26, 2022</b> and will remain active till <b>Jun 26, 2022</b></Span>
              </ShadowBox>
              
              <ShadowBox align="flex-start" bg="#000" margin="30px 30px">
                <Showoff
                  right="-20px"
                  bottom="-20px"
                  opacity="0.2"
                >
                  <GiReceiveMoney size={140} color="#fff"/>
                </Showoff>
                <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                  <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Grants Given</Span>
                </H2>
                <Span margin="20px" color="#fff" size="large">Received <b>2</b> applications out of which <b>1</b> has been accepted by the community</Span>
              </ShadowBox>
            </ItemH>

            <ItemH margin="0px 0px 40px 0px" align="flex-end" justify="flex-end">
              <Anchor
                href="https://www.notion.so/epns/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                target="_blank"
                title="Learn more about the Push Grants Program"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 10px"
                radius="4px"
              >
                Learn More
              </Anchor>

              <Anchor
                href="https://gov.epns.io/t/push-grants-program-pgp-details-start-here/41"
                target="_blank"
                title="Apply here for Push Grants Program (PGP)"
                bg="#e20880"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 10px"
                radius="4px"
              >
                Apply Here
              </Anchor>
            </ItemH>
          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#e20880'
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
      </Section>


      {/* LEARN MORE ABOUT GOVERNANCE */}
      <Section id="govlearn" theme="#e20880" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#000" color="#fff" weight="600" padding="0px 8px">Learn More</Span><Span weight="200" color="#fff"> about Governance</Span>
              </H2>
            </Item>
            
            <ItemH margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              {
                article.map(({title,thumbnail,link})=>{
                    return(
                      <MediumCard
                      title={title}
                      thumbnail={thumbnail}
                      link={link}
                    />
                    )
                })
              }
              
             
            </ItemH>

            <ItemH margin="0px 0px 40px 0px" align="flex-end" justify="flex-end">
              <Anchor
                href="https://medium.com/ethereum-push-notification-service/tagged/governance"
                target="_blank"
                title="Read more about everything EPNS governance"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 10px"
                radius="4px"
              >
                Explore More!
              </Anchor>
            </ItemH>
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
      </Section>

      
      {/* GOVERNANCE ROLES SECTION */}
      <Section id="govroles" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
              <Span weight="200">Let's define </Span><Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Gvoernance Roles</Span>
              </H2>
              <H3>Learn what role might be best for you and how it plugs into the EPNS ecosystem</H3>
            </Item>
            
            <Item margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
                <Circle/>
            </Item>
          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#f1f1f1'
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
      </Section>


      {/* PUSH DELEGATEES SECTION */}
      <Section id="govdelegatees" theme="#f1f1f1" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
              <Span weight="200">Meet our </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Push Delegatees</Span>
              </H2>
              <H3>Active community members who have at least 75,000 $PUSH delegated to them. They will be able to create proposals on Snapshot that are approved on the forum</H3>
            </Item>
            
            <Item margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
           
            <Carousel 
            ref={carouselRef}
            itemsToShow={noOfCarouselItems}
             enableAutoPlay={true}
             >
            
            {
              pushDeligatees.map(({name,image})=>(
                <SliderCard >
                  <img className='img' src={image}/>
                  <div className='text'>{name}</div>
            </SliderCard>
              ))
            }
          </Carousel>
            </Item>
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
      </Section>

      {/* FAQ SECTION */}
      <Section id="faq" theme="#fff" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">FAQs</Span>
              </H2>
              <H3>Frequently Asked Questions</H3>
            </Item>
            
            <Item margin="0px 0px 20px 0px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
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
          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#e20880'
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
      </Section>
      
    </>
  );
}

const EmphasizedContent = styled(Span)`
  color: #fff;
  font-size: 1.25rem;
  text-shadow: 0 0 20px rgb(255 255 255 / 60%);
  font-weight: normal;
  padding: 20px;
  border: 1px dotted #ffffff99;
  border-radius: 12px
`

const DeskTopView=styled.div`
height: 80vh;
  @media(max-width:600px){
    display:none;
  }
`;



const SliderCard=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 310px;
    margin: 2rem;
    min-height:400px;
    background-image: linear-gradient(360deg,#E20880,#674C9F,#35C5F3);
    border-radius: 8px;
    .img{
      border-radius: 8px;
      margin: 10px;
      flex:7;
      background-color: white;
      width: 94%;
      height: 100%;
    }
    .text{
      flex:1;
      font-size:1.2rem;
      font-family: Source sans pro;
      color: white;
      font-weight: bolder;
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
  padding: 10px 20px;
`

const ShadowBox = styled(Item)`
  border-radius: 12px;
  border: ${props => props.border || '0px solid transparent'};
  min-width: 280px;
  overflow: hidden;
`

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
      font-family: Source sans pro;
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
    background: #fff;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #000;
      font-size: 1.05em;
    }
  }
`

const AMod = styled(A)`
  color: #000;
  font-weight: 400;
  font-family: Source sans pro;
  text-decoration: underline;
`

const LIMod = styled(LI)`
  color: #000;
`

const BoldText = styled.span`
  font-weight: bold;
  font-family: Source sans pro;
`;

// Export Governance
export default Governance;
