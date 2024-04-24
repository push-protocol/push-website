import React, { useState } from 'react';
import styles from './styles.module.css';
import styled from "styled-components";
import {
  Button,
  Content,
  H2,
  H3,
  LinkTo,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from "@site/src/css/SharedStyling";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


// External Components
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Internal Components
import {
  Button,
  Content,
  H2,
  H3,
  LinkTo,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Internal Configs
import { device } from "@site/src/config/globals";


interface AccordionItem {
    title?: string;
    question?: string;
    content?: string;
    link?: string;
    renderAnswer?: string;
}

interface AccordionProps {
    items: AccordionItem[];
    fontFamily?: string;
    firstOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, fontFamily, firstOpen }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(firstOpen === false ? null : 0);
    const isMobile = useMediaQuery(device.mobileL);
    const isTablet = useMediaQuery(device.tablet);


    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionSection key={index}>
                    <AccordionParent onClick={() => toggleAccordion(index)}>
                        <H2
                            color="#FFF"
                            fontSize={isMobile ? "20px" : "22px"}
                            fontFamily={fontFamily}
                            fontWeight="400"
                            lineHeight="140%"
                            >
                            {item.title || item.question} 
                            fontSize="24px"
                            fontFamily="Glancyr, sans-serif"
                            fontWeight="400"
                            lineHeight="140%"
                            >
                            {item.title} 
                        </H2>
                        <div>
                            {activeIndex === index ? 
                                <AiOutlineMinus color="#FFF" size={22} /> : <AiOutlinePlus color="#FFF" size={22} />}
                        </div>
                    </AccordionParent>
                    {activeIndex === index && item.content !== undefined && (
                    <>
                            <H3   
                                color="#FFF"
                                fontSize={isMobile ? "16px" : "19px"}
                                fontFamily={fontFamily}
                                fontWeight="400"

                                lineHeight="140%"
                                padding="0 0 24px 0">
                                
                                {item.content}

                                {item.link && (<a
                                color="#FFF"
                                fontFamily={fontFamily}
                                fontSize="16px"
                                fontWeight="300"
                                lineHeight="140%" 
                                letterSpacing="normal"
                                target="_blank"
                                href={item.link}> - Link</a>)}
                            </H3>
                    </>)}   

                    {activeIndex === index && item.renderAnswer !== undefined && item.renderAnswer()}                                             

                </AccordionSection>
            ))}
        </div>
    );
};

const AccordionSection = styled.div`
    border-bottom: 1px solid #2A2A39;

    h3 {
        white-space: pre-wrap;
    }
`;

const AccordionParent = styled.div`
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export default Accordion;
