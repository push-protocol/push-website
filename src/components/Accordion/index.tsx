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


interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
                    {activeIndex === index && (
                    <>
                            <H3   
                                color="#FFF"
                                fontSize="16px"
                                // fontFamily="Glancyr, sans-serif"
                                fontWeight="300"
                                lineHeight="140%"
                                padding="0 0 24px 0">
                                
                                {item.content}

                                {item.link && (<a
                                color="#FFF"
                                fontSize="16px"
                                // fontFamily="Glancyr, sans-serif"
                                fontWeight="300"
                                lineHeight="140%" 
                                letterSpacing="normal"
                                target="_blank"
                                href={item.link}> - Link</a>)}
                            </H3>
                    </>)}                                                
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
