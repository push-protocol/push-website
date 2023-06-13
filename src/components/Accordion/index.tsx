import React, { useState } from 'react';

import styles from './styles.module.css';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div className={styles.accordionParent} key={index}>
                    <h2 className={styles.accordionTitle} onClick={() => toggleAccordion(index)}>
                        {item.title} 
                        <div>
                            {activeIndex === index ? '-' : '+'}
                        </div>
                    </h2>
                    {activeIndex === index && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
