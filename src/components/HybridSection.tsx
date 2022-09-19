import React from 'react';
import { CurvedBottomBorderSection, CurvedBorderSection,  Section } from './SharedStyling';

type HybridSectionProps = {
  curve?: 'both' | 'bottom' | undefined;
  id: string;
  children: React.ReactNode
};

/**
 * This wrapper component takes all the styling from SharedStyling "Section"
 * and adds the scroll behavior.
 */

const HybridSection = (props: HybridSectionProps) => {
    const {
        curve,
        ...restProps
    } = props || {};

    let StyledSection = Section;

    if (curve === 'bottom') {
        StyledSection = CurvedBottomBorderSection;
    } else if (curve === 'both') {
        StyledSection = CurvedBorderSection;
    }

    return (
        <StyledSection {...restProps}>
            {props.children}
        </StyledSection>
    );
};

export default HybridSection;