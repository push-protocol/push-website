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
                <Content className="contentBox">
                    Governance Start
                </Content>
          </Section>
          {/* End What is Governance */}
          {/* Start Future Governance */}
          <Section theme="#fff" padding="0px 0px 50px 0px">
                <Content className="contentBox">
                  Future  Governance Start
                </Content>
          </Section>
          {/* End Future Governance */}
         {/* Start process Governance */}
          {/* End process Governance */}
         {/* Start Learnmore Governance */}
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


export default Gov;