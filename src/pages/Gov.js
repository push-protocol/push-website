import React from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';
import Wave from 'react-wavify';

const Gov=()=>{
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
         <Section theme="#fff" padding="0px 0px 50px 0px">
                <Content className="contentBox">
                    Governance Process
                </Content>
          </Section>
          {/* End process Governance */}
         {/* Start Learnmore Governance */}
         <Section theme="#fff" padding="0px 0px 50px 0px">
                <Content className="contentBox">
                   Learn more about Governance 
                </Content>
          </Section>
          {/* End Learnmore Governance */}
         {/* Start role Governance */}
          {/* End role Governance */}
         {/* Start pushDeligatees Governance */}
          {/* End pushDeligatees Governance */}
             {/* Start faq Governance */}
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

export default Gov;