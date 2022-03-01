import React,{useState,useEffect} from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';
import Wave from 'react-wavify';
import Medium from 'components/Medium';
import { keyframes } from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';
import Carousel, { consts } from 'react-elastic-carousel';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

import Circle from '../components/circle-animation/circle-animation';
import {BsChevronLeft} from 'react-icons/bs';

import {MdPersonPin} from 'react-icons/md';
import './carousel.css';
import MediumCard from '../components/MediumCard';
import { Tooltip } from 'react-hover-tooltip';
const Gov=()=>{
// for checking2

  const valuee=document.getElementsByClassName('Roles');
  const [showAnswers, setShowAnswers] = React.useState([]);
  const [width, setWidth] = useState(window.screen.availWidth);
  const carouselRef = React.useRef(null);
  useEffect(() => {
    setWidth(window.screen.availWidth);
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
      name:"aiswarya",
      image:"/governance/aiswarya.jpg",
    },
    {
      name:"alex",
      image:"/governance/alex.jpg",
    },
    {
      name:"ashis",
      image:"/governance/ashis.jpg",
    },
    {
      name:"auryn",
      image:"/governance/auryn.jpg",
    },
    {
      name:"beler",
      image:"/governance/beler.jpg",
    },
    {
      name:"blake",
      image:"/governance/blake.jpg",
    },
    {
      name:"defi_dad",
      image:"/governance/defi_dad.jpg",
    },
    {
      name:"imvijaygir",
      image:"/governance/imvijaygir.jpg",
    },
    {
      name:"jaf",
      image:"/governance/jaf.jpg",
    },
    {
      name:"jude",
      image:"/governance/jude.jpg",
    },
    {
      name:"krishna",
      image:"/governance/krishna.jpg",
    },
    {
      name:"pranshu",
      image:"/governance/pranshu.jpg",
    },
    {
      name:"ray",
      image:"/governance/ray.jpg",
    },
    {
      name:"robin_rrtx",
      image:"/governance/robin_rrtx.jpg",
    },
    
   
    {
      name:"jude",
      image:"/governance/jude.jpg",
    },
  ]
  const FAQS = [
    {
      question: "who can participate in governance?",
      renderAnswer: () => (
        <Answer>
          <Span>Anyone and everyone with a web3 wallet with at least 1 $PUSH in it..</Span>
        </Answer>
      )
    },
   
      {
        question: "Is any sort of KYC required?",
        renderAnswer: () => (
          <Answer>
            <Span>No, your wallet is your gateway to web3 and we have no KYC requirement</Span>
          </Answer>
        )
      },

      {
        question: "Is there a wallet requirement to participate in PUSH Governance?",
        renderAnswer: () => (
          <Answer>
            <Span>Any wallet that supports a connection i.e Metamask, Wallet Connect, or Portis works just fine.</Span>
          </Answer>
        )
      },

      {
        question: "My $PUSH is currently in an exchange can I participate?        ",
        renderAnswer: () => (
          <Answer>
            <Span>The tokens in an exchange belong to the exchange and as of now there isn't a way to participate in
governance.
.</Span>
          </Answer>
        )
      },

      {
        question: "Can I use Ethereum to vote?",
        renderAnswer: () => (
          <Answer>
            <Span>No this is protocol-specific governance and as such you need $PUSH which is an ERC-20 token to participate.</Span>
          </Answer>
        )
      }
     

   ]

   const [classShow, setClassShow] = React.useState("Show");

   const handleScroll = React.useCallback((event) => {
     let scrollTop = window.scrollY;
       //console.log(scrollTop );  //1,2,...100,...200...etc (in px)
 
       if (scrollTop >=5100 ) {
         setClassShow("");
       }
       else setClassShow("Show");
 });
 
 
 const [animateHero, setAnimateHero] = React.useState(true);


   React.useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    
     return () => {
       window.removeEventListener("scroll", handleScroll, false);
     };
   }, [classShow]);

  //  const communityText = "Notification Channel Subscribers App & Dapp Users Social Followers & Friends"

  let resetTimeout;          
    return(
        <>
           <HeroSection>
        <ScrollTrigger onEnter={() => {setAnimateHero(true)}} onExit={() => {setAnimateHero(false)}}>
           {/* <SectionHero  padding="0px 0px 0px 0px" > */}
           <Carousel ref={carouselRef} 
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout)
              if (index + 1 === 3) {
                  if (carouselRef?.current?.goTo) {
                      resetTimeout = setTimeout(() => {
                          if (carouselRef?.current?.goTo) {
                              carouselRef.current.goTo(0)
                          }
                      }, 3000)
                  }
              }
          }}
           itemsToShow={width < 500 ? 1 : 1} autoPlaySpeed={3000} loop={true} enableAutoPlay={true} style={{background:"green",padding:"0px 0px !important"}} 
           renderArrow={({ type, onClick, isEdge })=>{
           const pointer = type === consts.PREV ? "left" : "right"
            if(pointer=="left")
           return (
             <Button style={{position:"absolute",bottom:"100px",right:"110px",background:"none",display:"none"}} onClick={onClick} disabled={isEdge}>
               <BsChevronLeft fontSize="1.3rem" style={{background:"rgba(0, 0, 0, 0.4)",borderRadius:"50%",padding:"5px"}}/>
             </Button>
           )
           else return (
            <Button style={{position:"absolute",bottom:"100px",right:"60px",background:"none",display:"none"}} onClick={onClick} disabled={isEdge}>
              <BsChevronRight fontSize="1.3rem" style={{background:"rgba(0, 0, 0, 0.4)",borderRadius:"50%",padding:"5px"}}/>
            </Button>
          ) 
          }}
          >
        <SectionFSHero id="hero" padding="0px 0px 0px 0px">
        <HeroImg src="/governance/governancebanner.png" />
        
        </SectionFSHero>    
        <SectionFSHero id="hero" padding="0px 0px 0px 0px">
        <Anchor
                href="https://gov.epns.io/t/epns-push-delegatee-nominations-start-here/401"
                target="_blank"
                title="Read Medium Blog of Ethereum Push Notification Service"
                bg="#674C9F"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
                // style={{}}
              >
                Learn More!
              </Anchor>
            
        <HeroImg src="/governance/grantsbanner.png" />
        </SectionFSHero>    
        <SectionFSHero id="hero" padding="0px 0px 0px 0px">
       
              <Anchor
                href="https://gov.epns.io/t/epns-push-delegatee-nominations-start-here/401"
                target="_blank"
                title="Read Medium Blog of Ethereum Push Notification Service"
                bg="#674C9F"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
                // style={{}}
              >
                Learn More!
              </Anchor>
            
        <HeroImg src="/governance/nominationsfinal.png"  />
        </SectionFSHero>    
          </Carousel>
          <WaveOuter>
         <WaveInner>
              <Wave fill='#e20880'
                paused={!animateHero}
                options={{
                  height: 20,
                  amplitude: 30,
                  speed: 0.25,
                  points: 3
                }}
              />
            </WaveInner>
            <WaveInner>
              <Wave fill='#35c5f3'
                paused={!animateHero}
                options={{
                  height: 40,
                  amplitude: 30,
                  speed: 0.35,
                  points: 3
                }}
              />
            </WaveInner>
           
          </WaveOuter>
      {/* </SectionHero> */}
      </ScrollTrigger>
      </HeroSection>
    
          {/* Start What is Governance */}
          <Section id="featured" theme="#e20880" gradient="linear-gradient(180deg, #35C5F3 0%, #674C9F 100%)" padding="0px 0px 0px 0px" >
          

       
      
          
      {/* <GovernanceSection id="governance"  style={{background:"linear-gradient(180deg, #35C5F3 0%, #674C9F 100%)"}}> */}
      <Content className="contentBox">
        <GovernanceHeading >
        <item style={{margin:"0"}}><h4 style={{color:"#fff"}}><GovernanceSpan style={{background:"black"}}><b>WHAT IS</b></GovernanceSpan>GOVERNANCE?</h4></item>
        
        </GovernanceHeading>
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <DottedSection>
        Decentralized governance is all about giving users direct control of the products they use. Rather than a central authority, the community ($PUSH token holders in our case) looks after the organization. This reduces beauracracy and opens up users to collaborate and innovate like never before.
        </DottedSection>
       
        </Content>
        <GovernanceHeading flex="flex-end">
        <item><h4 style={{color:"#fff"}}><GovernanceSpan style={{background:"black"}}><b>WHY</b></GovernanceSpan>GOVERNANCE?</h4></item>
       
        </GovernanceHeading>
       
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem 0 10rem 0"}}>
        <DottedSection>
        Our progressive governance model aims to hand over the various levers of control to the EPNS governing community. We want to establish a system for the community where ideas and proposals are considered, respected, and incentivized.
With EPNS Governance we aim to offer individuals clear paths to participate in our protocol and bolster innovation to the EPNS ecosystem.
        </DottedSection>
       
        </Content>
      {/* </GovernanceSection> */}
         
      </Content>
      <WaveOuter>
          <WaveInner>
            <Wave fill='#FFFFFF'
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

          {/* End What is Governance */}





          <CircleSection theme="#fff" padding="0px 0px 30px 0px" >
              
        
              {/* <GovernanceSection id="governance"  > */}
              <Content className="contentBox" style={{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                {/* <TextImg1 title="Notification Channel Subscribers
              App & Dapp Users
              Social Followers & Friends">COMMUNITY</TextImg1> */}
              <Cont mbtm="15rem">
              <Tooltip bottom content="Notification Channel Subscribers
              App & Dapp Users
              Social Followers & Friends">
                <TextImg1>
                  COMMUNITY
                </TextImg1>
                </Tooltip>
              </Cont>



              <GovernanceImgFixed src='/governance/Group 6 (1).png' alt=""/>
              <ArrowSection>
              <LineImage src='/governance/line.svg' alt=""/>
              <TextImgCenter>
                  #PUSHgov Team
              </TextImgCenter>

              </ArrowSection>
              
              
              {/* <TextImg title="These are the Voters!
Supporters who purchase and hold the token
Stakers who provide liquidity (Uniswap currently, more coming soon)
Yield Farmers earning $PUSH rewards on our Incentives Dapp">PUSH HOLDERS</TextImg> */}
<Cont mbtm="15rem">

<Tooltip bottom content="These are the Voters!
Supporters who purchase and hold the token
Stakers who provide liquidity (Uniswap currently, more coming soon)
Yield Farmers earning $PUSH rewards on our Incentives Dapp">
  <TextImg>PUSH HOLDERS</TextImg>
  </Tooltip>

</Cont>

            {/* <Cont>
                        <Tooltip bottom content="Contract Development & Management
            Core Administration: Marketing, Engineering, Content, Social Media, etc.">
              <TextImgBtm>PROTOCOL</TextImgBtm>
            </Tooltip>
            </Cont> */}

                  </Content>
                  
                  {/* <TextImgBtm title="Contract Development & Management
            Core Administration: Marketing, Engineering, Content, Social Media, etc.">PROTOCOL</TextImgBtm> */}
           
            


              {/* </GovernanceSection> */}
            </CircleSection>



{/* <DottedLine> checking dotted line</DottedLine>
              <TextImgCenter>
                Sample Text
              </TextImgCenter> */}



          {/* Start Future Governance */}


        <DeskTopView>
          
          <Section theme="#fff" padding="0px 0px 0px 0px" >
              
        
          {/* <GovernanceSection id="governance"  > */}
       
         
          <Content className="contentBox">
              <GovernanceHeading >
        <item style={{margin:"0"}}><h4 style={{color:"black"}}><GovernanceSpan style={{background:"#674C9F"}}><b>FUTURE</b></GovernanceSpan> OF GOVERNANCE?</h4></item>
        <item>
            <p style={{color:"gray"}}>WAY TO PROGRESSIVE DECENTRALIZATION
</p>
        </item>            
        </GovernanceHeading>

                <video
									autoPlay
									src="/governance/pathVideo.mp4"
									muted
									disablePictureInPicture
								/>
              
      {/* </GovernanceSection> */}
      </Content>
           </Section> 

           </DeskTopView>



          {/* start process governance */}




<SectionProcess>
<Content className="contentBox">
<GovernanceHeadingE >
        <item><h4>GOVERNANCE<GovernanceSpan  style={{background:"#e20880"}}><b>PROCESS</b></GovernanceSpan>  </h4></item>
        <item>
          <Line>
          <H2EU color="#858585">PROPOSAL.DISCUSSION.GOVERNANCE</H2EU> 
          </Line>
        </item>              
        </GovernanceHeadingE>

<SectionProcessGovernance>

                <ItemHG margin="-20px"  columnGap="40px" rowGap="0px">
              <EmphasisBlock2 margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <ProposalImage src='/governance/proposal.png' alt=""/>
                    </Content>

                  <EmphasisText>
                   PROPOSAL
                  </EmphasisText>
                  <EmphasisTextSmall>This is the very start of the entire governance journey. For any proposal to be accepted and executed for EPNS Governance, the initial proposer needs to submit their proposal on the <A style={{textDecoration: "none"}}  href="https://gov.epns.io/c/governance-proposals/8">Governance Proposal</A>  Forum.</EmphasisTextSmall>
                </EmphasisBlock2>
                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <DisImage src='/governance/discuss1.svg' alt=""/>
                    </Content>

                  <EmphasisText>
                   DISCUSSION
                  </EmphasisText>
                  <EmphasisTextSmall>The next step in the governance journey is discussion. Draft proposals from the Proposal phase that meet the promotion criteria are promoted to the <A style={{textDecoration: "none"}} href="https://gov.epns.io/c/governance-discussions/5">Governance Discussions Forum</A> . At this phase, users express their support for proposals by liking, commenting, and move on to a formal vote before moving on to the next stage: Snapshot voting (final phase).</EmphasisTextSmall>
                </EmphasisBlock>
            <EmphasisBlock3 margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <GovImage src='/governance/governance1.svg' alt=""/>

                    </Content>

                  <EmphasisText>
                  SNAPSHOT
                  </EmphasisText>
                  <EmphasisTextSmall>Once the proposal on the Governance Discussion section meets the promotion criteria, It’s considered a formal proposal and requires formal voting which takes place on Snapshot. This is initiated by any of our PUSH Delegatees and voting will be open to all PUSH holders & stakers. Votes are open for at least 7 days and require 4% of PUSH circulating supply voting in support to pass.</EmphasisTextSmall>
                </EmphasisBlock3>
                </ItemHG>

        
        </SectionProcessGovernance>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#C7E9F6'
              paused={true}
              options={{
                height: 10,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>

       



      </SectionProcess>




          {/* End process Governance */}



{/* start push grants secton */}


{/* style={{background:"url('/governance/gradient.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}} */}
  <GrantsContainer  style={{background:"url('/governance/gradient.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
  <Content className="contentBox">
  <GovernanceHeadingE >
        <item><h4>PUSH<GovernanceSpan  style={{background:"#e20880"}}><b>GRANTS PROGRAM</b></GovernanceSpan>  </h4></item>
                   
        </GovernanceHeadingE>

        {/* <GrantsInner> */}
        <GrantsText>
        This program aims to enable contributors with the resources they need (funding, dev support, go-to market planning, etc.) to focus their energies on the advancement of the EPNS protocol.
        </GrantsText>
              {/* </GrantsInner> */}


        <ItemGrants>

  <GrantsCard className="first">
  <img class="money" src="/governance/save-money.svg"/>
  <GrantsContent>
  <Keytext bgcolor="#EC008C" mright="4rem" width='14rem' ><span style={{ color:"#FFFFFF",marginLeft:"1rem"}}><b>TOTAL GRANTS BUDGET</b></span></Keytext>
  <Keyheading ftcolor="#EC008C" mleft='1.8rem'>$1,000,000 USD</Keyheading>
  </GrantsContent>

  
  </GrantsCard>
  <GrantsCard className="second">
<img class="key" src="/governance/KEY.svg"/>
<GrantsContent>
<Keytext bgcolor="#674C9F" mright="10rem" width='8rem'><span style={{ color:"#FFFFFF",marginLeft:"1rem"}}><b>TIME FRAME</b></span></Keytext>
<Keyheading ftcolor="#674C9F" mleft='1.8rem'>Jan 26 - Jul 26, 2022</Keyheading>
<KeyContent width='15rem' mleft='1.8rem'>Across Two Consecutive 3-Month Push Periods</KeyContent>
</GrantsContent>




  </GrantsCard>
  <GrantsCard className="third">
  <img class="wave" src="/governance/application.svg"/>
  <GrantsContent>
  <Keytext bgcolor="#5CC2EE" mright="3rem" width='15rem'><span style={{color:"#FFFFFF",marginLeft:"1rem"}}><b>APPLICATIONS RECEIVED</b></span></Keytext>
  <Keyheading ftcolor="#5CC2EE" mleft='6rem'>2</Keyheading>
  <KeyContent width='15rem' mleft='1.8rem'>As of Feb 24, 2022</KeyContent>
  </GrantsContent>
  </GrantsCard>

  </ItemGrants>
 

  <Links>
  <a href="https://www.notion.so/epns/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a" target="_blank" class="link" style={{textDecoration:"none"}}>{'GRANTS SITE>>'}</a>
  <a href="https://gov.epns.io/c/grants/10" target="_blank" class="link"  style={{textDecoration:"none"}}>{'LIVE DISCUSSION>>'}</a>
  <a href="https://snapshot.org/#/epns.eth" target="_blank" class="link"  style={{textDecoration:"none"}}>{'VOTE FOR PROPOSAL>>'}</a>
  <a href="https://gov.epns.io/t/push-grants-program-pgp-details-start-here/41" target="_blank" class="link"  style={{textDecoration:"none"}}>{'APPLY HERE>>'}</a>
  </Links>

  

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


      
              
        

  </GrantsContainer>

  

{/* end push grants section */}



         {/* Start Learnmore Governance */}
         <SectionLearn>

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
      

<GovernanceHeadingE>
        <item><h4><GovernanceSpan  margint='50px' style={{background:"#000"}}><b>LEARN MORE</b></GovernanceSpan> ABOUT GOVERNANCE</h4></item>
        {/* <item>
        <H2E color="#fff">MEDIUM ARTICLES</H2E>
        </item>               */}
        </GovernanceHeadingE>
  
  <SectionLearnGovernance>

  <ContentMore>


          <Item align="stretch" justify="flex-start" margin="0px 0px">
          

            <ItemHE margin="-20px" align="stretch" columnGap="40px" rowGap="40px">
    
                    <MediumCard
                      title="Governance Goes Live"
                      thumbnail="https://miro.medium.com/max/1400/1*TozW0q7pvnNLDHo2ZfsPDA.gif"
                      link="https://mirror.xyz/0xd0a99De1eD63d9F1Dd7F1a69787764E39e0F5baC/U_qh8oJJP7ft5LS90nnCNtcuZkKWnm01QDhkQhpmKX4"
                      // link="https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4"
                    />
                    <MediumCard
                      title="Grant Goes Live"
                      thumbnail="https://miro.medium.com/max/1400/1*FbPPmp_sWRXOf5kBtwd-1Q.png"
                      link="https://mirror.xyz/0xd0a99De1eD63d9F1Dd7F1a69787764E39e0F5baC/mCQfIGr08xr6PmqrqvZMnXoLoKDJmYHPvMumJzm2UPk"
                      // link="https://medium.com/ethereum-push-notification-service/push-grants-program-going-live-6841515f95d8"
                    />
                    <MediumCard
                      title="Snapshot Step By Step Guide"
                      thumbnail="https://miro.medium.com/max/1400/1*sT8bP2tX88fn82mJkuyLzQ.png"
                      link="https://mirror.xyz/0xd0a99De1eD63d9F1Dd7F1a69787764E39e0F5baC/UYFbOFI5bxnsd3Ho9DfHQixqYBll_LfScnphKmlQWC4"
                      // link="https://medium.com/ethereum-push-notification-service/epns-snapshot-voting-a-step-by-step-guide-832e44243e2a"
                    />
                  
    </ItemHE>


            
            

          </Item>
        </ContentMore>

  


        </SectionLearnGovernance>

      </SectionLearn>


      {/* end learn more about governance */}
 
          <SectionCircle>



  <GovernanceHeadingE>
    <item><h4>GOVERNANCE<GovernanceSpan style={{ background: "#35C5F3" }}><b>ROLES</b></GovernanceSpan></h4></item>

  </GovernanceHeadingE>

  <SectionC>
    <Circle />
  </SectionC>

  <Section theme="#F4F4F4" padding="0px 0px 50px 0px">
    <WaveOuter bottom="auto" top="70px">
      <WaveInner transform="rotate(180deg)">
        <Wave fill='#fff'
          paused={true}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.35,
            points: 3
          }} />
      </WaveInner>
    </WaveOuter>
  </Section>

</SectionCircle>




          {/* End Learnmore Governance */}

        
         {/* Start pushDeligatees Governance */}
         <Section theme="#F4F4F4" padding="0px 0px 50px 0px">
          
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
          <GovernanceSection id="governance" style={{display:"flex",margin:"0",padding:"5rem 2rem",alignItems:"center"}}   >
        
         
        <GovernanceHeading >
        <item><h4> MEET OUR  <GovernanceSpan  style={{background:"#674C9F"}}><b>PUSH DELEGATEES</b></GovernanceSpan> </h4></item>
        <item>
            <p>Active community members who have at least 75,000 $PUSH delegated to them. They will be able to create proposals on Snapshot that are approved on the forum </p>
        </item>            
        </GovernanceHeading>
        <Carousel itemsToShow={width < 500 ? 1 : 3} enableAutoPlay={true}>
            {
              pushDeligatees.map(({name,image})=>(
                <SliderCard >
                  
              <img className='img' src={image}/>
              <div className='text'>{name}</div>
            </SliderCard>
              ))
            }
          </Carousel>
          <NomineeButton>Submit Your Nomination <img src="/governance/arrow_right.png" style={{height:"10px"}}/> </NomineeButton>
      </GovernanceSection>
      
       
          </Section>

          


          
          {/* End pushDeligatees Governance */}



             {/* Start faq Governance */}


             




             <Section theme="#fff">


             <Section id="solution"   padding="20px 0px 20px 0px" overflow="hidden" margin="40px">

<GovernanceHeading >
  <item><h4><GovernanceSpan><b>FAQs</b></GovernanceSpan>  </h4></item>

  <H3 color="#858585" margin="0px 0px 0px 0px">Frequently Asked Questions</H3>             
  </GovernanceHeading>



             <Section margin="0px 0px 0px 30px">
        <Content>
        
        
            <Item align="stretch" margin="0px 0px 0px 0px">
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
           
        </Content>
        </Section>
        </Section>
        
      </Section>

       
        </>

    )
}


export const SectionG = styled.section`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: ${props => props.align || 'initial'};
  flex-direction: ${props => props.direction || 'column'};
  background: ${props => props.theme || 'transparent'};
  background: ${props => props.gradient || 'undefined'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  overflow: ${props => props.overflow || 'initial'};
  flex: 1;
  position: relative;

  // @media(max-width: 500px)
  // {
  //   margin-top: -3rem;
  // }

 
`



const SectionCircle = styled.section`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: ${props => props.align || 'initial'};
  flex-direction: ${props => props.direction || 'column'};
  background: ${props => props.theme || 'transparent'};
  background: ${props => props.gradient || 'undefined'};
  padding: ${props => props.padding || '0px'};
  overflow: ${props => props.overflow || 'initial'};
  flex: 1;
  position: relative;
  // margin-bottom:10rem;

 
`

const DeskTopView=styled.div`
height: 60vh;
  @media(max-width:600px){
    display:none;
  }
`;

const ItemHE = styled(Item)`
  flex-direction: row;
  flex: ${props => props.flex || '1'};
  
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 20rem;
  }
`


const Keytext = styled.div`
display: flex;
font-size: 20px;
font-weight: 400;
margin-top: 15px;
font-family: Source Sans Pro;
background-color: ${props => props.bgcolor || '#FFFFFF'};
margin-right:${props => props.mright || '0px'};
width:${props => props.width || '10rem'};
@media(max-width: 600px)
{
  margin-right:${props => (props.mright-2) || '0px'};
  width:${props => (props.width) || '10rem'};
  font-size: 16px;
}
`;


const Keyheading = styled.div`
display: flex;
justify-content: center;
font-size: 35px;
font-weight: 600;
font-family: Source Sans Pro;
margin-top: 1rem;
padding:0 1rem;
align: center;
color: ${props => props.ftcolor || '#FFFFFF'};
// margin-left: ${props => props.mleft || '0'};
@media(max-width: 500px)
{
  font-size: 30px;
  // margin-left: ${props => (props.mleft-0.5) || '0'};
}

`;

const KeyContent = styled.div`
display:flex;
justify-content: center;
font-size: 12px;
font-weight: 400;
font-family: Source Sans Pro;
height: 30px;
margin-top: 0.7rem;
width: ${props => props.width || '0'};
margin-left:${props => props.mleft || '0'};
@media(max-width: 600px)
{
  margin-left: 0;
}
`;

const GrantsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const GrantImg=styled.img`
  height:100vh;
  width:100vw;
  position: absolute;
  z-index: 0;
  @media(max-width:500px){
    width: 100vw;
    height: 100vh;
  }
`;



const SectionGrants = styled.div`
display: flex;
flex-direction: column;
`;

const ItemGrants = styled(Item)`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 3rem;

@media(min-width: 500px)
{
  padding-left: 3rem;
  padding-right: 3rem;
}

@media (max-width: 600px) {
  flex-direction: column;
  justify-content: center;
}
  `

const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 4rem;
margin-right: 3rem;
margin-bottom: 180px;
align-items: center;
@media(min-width: 1000px)
{
  padding-left: 3rem;
  padding-right: 3rem;
}


@media(max-width: 500px)
{
  margin-left: 2.5rem;
  margin-bottom: 120px;
}
`;

const GrantsText = styled(Span)`
display: flex;
font-size: 24px;
font-family: source sans pro;
font-weight: 400;
justify-content: center;
 text-align: center;
 margin-top: 4rem;
 padding-left: 5rem;
 padding-right: 5rem;
 @media(max-width:600px)
 {
  font-size: 18px;
  padding-left: 3rem;
  padding-right: 3rem;
 }
`;

const GrantsInner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const GrantsCard = styled.div`
display: flex;
flex-direction: column;
background-color:#FFFFFF ;
flex-wrap: wrap;
height: 160px;
border-radius: 10px;
margin-bottom: 5rem;
align:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// max-width:40rem;
`;

const animate =keyframes`
    
0%{
  transform: translateY(10vh);
  opacity: 0;
}
14%{
  opacity: 1;
  transform: translateY(0vh);
}
30%{
  opacity:1;
  transform: translateY(0vh);
}
50%{
  opacity: 1;
  transform: translateY(0vh);
}
60%{
  opacity: 1;
  transform:translateY(0vh);
}
80%{
  opacity: 1;
  transform:translateY(0vh);
}
95%{
  opacity: 0;
  transform: translateY(10vh);
}
100%{
  opacity: 0;
  transform: translateY(10vh);
}
/* 0%{
    transform:translateY(10vh) ;
    opacity:0;
    
}
14%{
  opacity: 1;
    transform:translateY(0vh) ;
  
}
50%{
    opacity: 1;
    transform:translateY(0vh) ;
    
}
60%{
  opacity: 0;
  transform:translateY(0vh) ;
  
}
80%{
  opacity: 0;
  transform:translateY(0vh) ;
  
}
90%{
  opacity: 0;
  transform:translateY(0vh) ;
  
}
100%{
  opacity: 0;
  transform: translateY(00vh);
} */
`;


// padding="20px 0px 0px 0px" overflow="hidden" margin="40px"
// theme="#e20880" padding="0px 0px 80px 0px"
const HeroImg=styled.img`
  height:100vh;
  width:100%;
  @media(max-width:500px){
    height: 30vh;
  }
`;
const HeroSection=styled.div`
  
  & ${Anchor}{
    position:absolute;
    left:150px;
    width:180px;
    top:505px;
    height:30px;
    font-size:1.2rem;
    
    @media(max-width:700px){
      top:500px;
    }
  }

  /* & ${HeroImg}{
    @media(max-width:700px){
      object-fit: scale-down;
    } */
  

  // @media(max-width:500px){
  //   margin-bottom: -3rem;
  // }
  
  
`;
const SectionLearn = styled.section`
  display: flex;
  flex-direction:column;
  background:#e20880;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  position: relative;

 @media(max-width:5000px){
  margin-top: 0px;
  margin-bottom: 0px;
   overflow-y: hidden;
   overflow-x: hidden;
 }
`;

const SectionC = styled.section`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 overflow: hidden;
 margin-bottom: 5rem;
//  flex-basis: 0;
//  flex-shrink: 1;
 @media(max-width:450px)
 {
   margin-left:1rem;
  //  min-width: 350px;
 }
`;


const Line = styled.section`
  display: flex;
  flex-direction:row;

  @media(max-width:400px)
  {
    flex-direction: column;
  }
 
`;

const SectionLearnGovernance = styled.section`
 display: flex;
 flex-direction: row;
 margin-bottom: 10rem;
 justify-content: center;
 /* column: 0px; */
 @media(min-width:500px)
 {
  margin-left: 3rem;
 margin-right: 3rem;
 }



 @media(max-width: 380px)
 {
   margin-bottom: 100px;
 }
 @media(max-width:900px ){
  @media(min-width: 500px)
  {
    justify-content: center;
  }
}
`;



const SectionProcess = styled.section`
  display: flex;
  flex-direction:column;
  background:#fff;
  margin-top: 20rem;
  padding: 0px;
  overflow: hidden;
  position: relative;
  margin-bottom: 4rem;

 @media(max-width:500px){
   overflow-y: hidden;
   overflow-x: hidden;
   margin-top: 0rem;
 }
`;


const GrantsImage = styled.div`
  background-image: linear-gradient(red,blue);
`;


const GrantsContainer = styled.section`
  display: flex;
  flex-direction:column;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  position: relative;
  margin-top:-4rem;

 @media(max-width:500px){
   overflow-y: hidden;
   overflow-x: hidden;
   margin-top: -4rem;
 }
`;








const SectionProcessGovernance = styled.section`
 display: flex;

 flex-direction: column;
 margin-bottom: 120px;
 @media(min-width:400px)
 {
  margin-left: 3rem;
 margin-right: 3rem;
 }

 @media(max-width:450px )
  {
   margin-left: 2rem;
   margin-right: 1rem;
  }
 


 @media(max-width: 380px)
 {
   margin-bottom: 100px;
 }
 @media(max-width:900px ){
  @media(min-width: 500px)
  {
    justify-content: center;
  }
}
`;


const animate2 =keyframes`
    
0%{
    opacity:0;
    
}
14%{
  opacity: 1;
  
}
50%{
    opacity: 1;
    
}
60%{
  opacity: 0;
  
}
80%{
  opacity: 0;
  
}
100%{
  opacity: 0;
}
`;

const AnimateSection=styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  padding: 2rem 0 ;

  & ${Span}{
    video{
      box-sizing: border-box;							
      top: 0;
      left: 0;
      width: 100%;
      height: 150%;
      @media(max-width:700px){
        height: 250%;
        width: 100%;
      }
    }
    img{
      position: absolute;
        width: 70rem;
        height: 60rem;
      
      @media(max-width:900px){
        width: 25rem;
        height: 50rem;
      }

      }
    /* img:nth-child(1){
        top:5.5rem;
        left:7rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:0s;
      }
      img:nth-child(2){
        top:8.5rem;
        left:24rem;
        
        animation:${animate2} 7s linear infinite ;
        animation-delay:0.5s;
      }
      img:nth-child(3){
        top:12.5rem;
        left:4.5rem;
        
        animation:${animate2} 7s linear infinite ;
        animation-delay:1s;
      }
      img:nth-child(4){
        top:17rem;
        left:41rem;
        
        animation:${animate2} 7s linear infinite ;
        animation-delay:1.5s;
      }
       img:nth-child(5){
        top:24rem;
        left:22rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:1.5s;
      }
      img:nth-child(6){
        top:32.5rem;
        left:66rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:1.5s;
      } */
  }

  ul{
  }
  ul img{
      position: absolute;
        list-style:none;
        width:150px;
        color: #E20880;
        height:50px;
        margin:0 1rem;
        display:flex;
        font-weight:800;
        align-items:center;
        justify-content:center;
        
 
    }
    ul img:nth-child(1){
        top:8rem;
        left:5rem;
        width: 20rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:0s;
      }
      ul img:nth-child(2){
        top:11rem;
        left:-5rem;
        height: 4rem;
        width: 100rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:0.5s;
      }
      ul img:nth-child(3){
        top:14.5rem;
        left:1rem;
        height: 7rem;
        width: 50rem;
     
        animation:${animate2} 7s linear infinite ;
        animation-delay:1s;
      }
      ul img:nth-child(4){
        top:21rem;
        left:17rem;
        height: 15rem;
        width: 50rem;
        animation:${animate2} 7s linear infinite ;
        animation-delay:1.5s;
      }
      
  ul li{
      position: absolute;
        list-style:none;
        width:150px;
        color: #E20880;
        height:50px;
        margin:0 1rem;
        display:flex;
        font-weight:800;
        align-items:center;
        justify-content:center;
       
    }

    ul li:nth-child(1){
      top:10rem;
        left: 0rem;
        animation:${animate} 6s linear  infinite;
        animation-delay:0.3s;
      }
    ul li:nth-child(2){
      top:11rem;
      left: 15rem;
      animation:${animate} 6s linear  infinite;
        animation-delay:0.2s;
    }
    ul li:nth-child(3){
        top:15.5rem;
        left: 7rem;
        animation:${animate} 6s linear  infinite;
        animation-delay:0.4s;
      }
    ul li:nth-child(4){
      top:18rem;
      right:22rem;
      animation:${animate} 6s linear  infinite;
        animation-delay:0.5s;
    }
    ul li:nth-child(5){
        bottom:24rem;
        left: 21rem;
        animation:${animate} 6s linear  infinite;
        animation-delay:0.6s;
    }
    ul li:nth-child(6){
      bottom:12rem;
      right:2rem;
      animation:${animate} 6s linear  infinite;
        animation-delay:0.7s;
    }
`;

export const H1E = styled.h1`
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`



export const H2E = styled.h2`
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "1.5rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
  @media(max-width: 500px)
  {
    margin-top: 0px;
    font-size: 1rem;
  }
  @media(min-width: 500px)
  {
    margin-top: 0px;
  }
`


export const H2EU = styled.h2`
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "1.5rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
  @media(max-width: 500px)
  {
    margin-top: 0px;
    font-size: 1rem;
  }
  @media(min-width: 500px)
  {
    margin-top: 0px;
  }
`





//  const ItemHG = styled(Item)`
const ItemHG = styled(Item)`
  flex-direction: row;
  margin-bottom: 60px ;
  
  
  flex: ${props => props.flex || '1'};
  
  ${ItemBreak} {
    width: auto;
    height: 0;
  }

  @media (max-width: 380px ){
    flex-direction: column;
  }
`


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
      font-family: Source sans pro;
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
    font-family: Source sans pro;

  }

  p{
    font-size:1.2rem;
    font-family: Source sans pro;
  }

  @media(max-width:600px){
    flex-direction: column;
  }
}
`;
const GovernanceImg=styled.img`
   height: auto;
   width: auto;
   padding: 2rem;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
     padding:3rem 0;
   }
`;
const GovernanceImgFixed=styled(GovernanceImg)`

   height: 20rem;
   width: 22rem;
   padding: 5rem;
   object-fit: cover;
   position: relative;
   margin-left: 3rem;
  //  @media(min-width:700px)
  //  {
  //    @media(max-width:100px)
  //    {
  //      margin-left: 6rem;
  //    }
  //  }

   @media(max-width:600px){
    //  padding: 3rem 0;
    height: 15rem;
    width: 16.4rem;
    margin-right: -20px;
   }
`;
const GovernanceHeading=styled.div`
  display: flex;
  padding: 2rem;
  justify-content:  ${props => props.flex || 'flex-start'};
  align-items:  ${props => props.flex || 'flex-start'};
  flex-direction: column;
  
  h4{
    color:black;
    font-size: 40px;
    font-family: Source sans pro;
    font-weight:400px;
    margin: 15px 0px 15px 0;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
  p{
    color: gray;
    font-size:1.5rem;
    margin:0;
    font-family: Source sans pro;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
`;




const GovernanceHeadingEU=styled.div`
  display: flex;
  padding: 2rem;
  justify-content:  ${props => props.flex || 'flex-start'};
  align-items:  ${props => props.flex || 'flex-start'};
  flex-direction: column;
  @media(min-width:500px)
  {
    margin-left:3rem;
  }
  
  h4{
    color:black;
    font-size: 40px;
    font-family: Source sans pro;
    font-weight:400px;
    margin: 15px 0px 15px 0;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
  p{
    color: gray;
    font-size:1.5rem;
    margin:0;
    font-family: Source sans pro;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
`;


const GovernanceHeadingE=styled.div`
  display: flex;
  padding: 1rem;
  justify-content:  ${props => props.flex || 'flex-start'};
  align-items:  ${props => props.flex || 'flex-start'};
  margin-top: ${props => props.margint};
  flex-direction: column;
  @media(min-width:500px)
  {
    margin-left:0rem;
  }

  @media(max-width:500px)
  {
    margin-left: 2.5rem;
  }
  
  
  h4{
    color:black;
    font-size: 40px;
    font-family: Source sans pro;
    font-weight:400px;
    margin: 15px 0px 15px 0;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
  p{
    color: gray;
    font-size:1.5rem;
    margin:0;
    font-family: Source sans pro;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
`;








const GovernanceSection=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 2rem;
  
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
    font-family:Source sans pro;;
    color:white;
    margin: 0 1rem 0 0.21rem;
    font-weight:450px ;
    @media(min-width: 450px)
    {
      margin-left:${props => props.margin || '0px'};
      
    }
      

   
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
  width: 350px;
  font-size:1.3rem;
  margin-top:2rem;
  display: flex;
  border-radius:10px;
  align-items:center;
  justify-content:space-around;
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
  font-family: Source sans pro;
  text-decoration: underline;
`

const LIMod = styled(LI)`
  color: white;
`

const BoldText = styled.span`
  font-weight: bold;
  font-family: Source sans pro;
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
  
  align: center;
  min-width: 280px;
`
const EmphasisBlock2 = styled(Item)`
  
  align: center;
  min-width: 280px;
  margin-bottom: 4rem;
`
const EmphasisBlock3 = styled(Item)`
  
  align: center;
  min-width: 280px;
  @media(max-width: 500px)
  {
    margin-top: 3rem;
  }
  
`



const EmphasisImage = styled(Item)`
  padding: 20px;
  margin: 20px 0px 20px;
`

const EmphasisText = styled(Span)`
  font-size: 1.6rem;
  font-family: Source sans pro;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`

const EmphasisTextSmall = styled(Span)`
  width: 250px;
  margin-top: 20px;
  font-size: 1.0rem;
  font-family: Source sans pro;
  color: black;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`



const ContentMore = styled(Span)`
  margin: 0px  ;
  font-family: Source sans pro;
  @media(min-width:600px){
    margin: 35px;
    
  }

`
const Cont = styled.div`
margin-bottom: ${props => props.mbtm || ''};
`;

const TextImg = styled.div`
display:flex;
font-family: Source sans pro;
font-weight: 500;
font-size: 25px;
// margin-bottom: 15rem;

@media(max-width: 500px)
{
  font-size: 17px;
}

&:hover{
  
}
`
const TextImg1 = styled.div`
display:flex;
font-family: Source sans pro;
font-weight: 500;
font-size: 25px;
// margin-bottom: 15rem;
position: relative;
@media(min-width: 500px)
{
  margin-right: -80px;
}
@media(max-width:900px){
  left:10rem;
}
@media(max-width: 500px)
{
  font-size: 17px;
  /* margin-right: -7rem; */
  margin-top: -20px;
}

&:hover{
  
}
`

const TextImgCenter = styled.div`

display:flex;
font-family: Source sans pro;
font-weight: 500;
font-size: 25px;
position: absolute;
z-index: 1;
@media(min-width:1000px)
{
  margin-left: 13rem;
  margin-top: 7rem;
}

@media(min-width: 500px)
{
  @media(max-width: 1000px)
  {
    margin-left: 9rem;
margin-top: 8rem;

  }
  
}
@media(max-width: 500px)
{
  margin-left: 7rem;
margin-top: 5rem;
font-size: 17px;
}

`



const TextImgBtm = styled.div`
display:flex;
position: relative;
justify-content:center;
font-family: Source sans pro;
font-weight: 500;
font-size: 25px;
left:-30rem;
bottom:-15rem;
 /* margin-right: 2rem; */

@media(max-width:700px){
  left: -10rem;
  
}
&:hover{
  
}

`



const LineImage=styled.img`
position: absolute;
z-index:2;
@media(max-width:500px)
{
  width: 150px;
  margin-bottom: 20px;
  margin-left: 6px;
}
@media(min-width: 1000px)
{
  width: 250px
}
@media(min-width: 500px)
{
  width: 200px
}

 
`;


const CircleSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  align-items: ${props => props.align || 'initial'};
  flex: 1;
  position: relative;
  @media(max-width: 500px)
  {
    max-width: 400px;
    margin-left: -30px;
  }

 
`
const ArrowSection = styled.div`
position: absolute;
z-index:2;
display: flex;
flex-direction: row;
`

// 


// 

export default Gov;