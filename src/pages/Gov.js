import React from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS, SectionFSHero, Content, Item, ItemH, ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';


const Gov=()=>{
    return(
        <GovernanceSection>
          {/* Start What is Governance */}
          <Section>
          Governance
          </Section>
          {/* End What is Governance */}
          {/* Start Future Governance */}
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
       
        </GovernanceSection>
    )
}

const GovernanceSection=styled.div`
    height: 100vh;
`;
export default Gov;