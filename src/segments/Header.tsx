// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import styled from 'styled-components';
import {Section, Content, ItemV, ItemH, Span, Anchor} from '../components/SharedStyling';
import { BsChevronDown } from 'react-icons/bs';
import { CgMenuHotdog, CgClose } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';

const PUSH_LOGO = {
    dark: PushLogoTextWhite,
    light: PushLogoTextBlack
};

let lastScrollY = window.pageYOffset;
const SCROLL_DELTA = 5;

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = React.useState(null);
    const [bkg, setBkg] = React.useState('dark');

    React.useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

            console.log('scrollY: --> ', scrollY);
           
            if (direction !== scrollDirection && (scrollY - lastScrollY > SCROLL_DELTA || scrollY - lastScrollY < -SCROLL_DELTA)) {
                setScrollDirection(direction);
            }

            // hacky way, optimize later when time
            if (scrollY > 970) {
                setBkg('light');
            } else {
                setBkg('dark');
            }

            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        // add event listener
        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return [scrollDirection, bkg];
}


function getThemeBasedColor(bkg) {
    return bkg === 'light' ? '#121315' : '#FFF';
}

// Create Header
function Head() {
    const [scrollDirection, bkg] = useScrollDirection();  
    const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

    const PushLogo = bkg === 'dark' ? PushLogoTextWhite : PushLogoTextBlack;

    return (
        <Header className={`header ${headerClass} ${bkg}`}>
            <Section padding="0px 160px 0px 160px">
                <Content className="contentBox">
                    <ItemH width="100%">
                        <ItemV justifyContent="flex-start" alignItems="center" flex="0 0 125px">
                            <PushLogo />
                        </ItemV>

                        <ItemV justifyContent="center" alignItems="center" flex="1">
                            <PrimaryNav bkg={bkg}>
                                <div className="menuItem">
                                    <div className="menuHeader">
                                        <Span color={getThemeBasedColor(bkg)}>Docs</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg)} className='chevronIcon'/>
                                    </div>
                                    <div className="menuItem-content">
                                        <Anchor
                                            href="https://docs.epns.io/developers"
                                            target="_blank"
                                            title="Read Integration Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Developer Guides
                                        </Anchor>
                                        <Anchor
                                            href="https://docs.epns.io/governance"
                                            target="_blank"
                                            title="Read Integration Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Governance Guides
                                        </Anchor>
                                        <Anchor
                                            href="https://whitepaper.epns.io/"
                                            target="_blank"
                                            title="Read Whitepaper"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          WhitePaper
                                        </Anchor>
                                    </div>
                                </div>

                                <div className="menuItem">
                                    <div className="menuHeader">
                                        <Span color={getThemeBasedColor(bkg)}>Learn More</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg)} className='chevronIcon'/>
                                    </div>
                                    <div className="menuItem-content">
                                        <Anchor
                                            href="https://getstarted.epns.io/"
                                            target="_blank"
                                            title="Quick Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Quick Guide
                                        </Anchor>
                                        <Anchor
                                            href="/faq"
                                            title="Frequently Asked Questions"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          FAQ
                                        </Anchor>
                                        <Anchor
                                            href="/#story"
                                            title="Read our story"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Blog
                                        </Anchor>
                                        <Anchor
                                            href="/presskit"
                                            title="EPNS Press Kit"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Press Kit
                                        </Anchor>
                                        <Anchor
                                            href="/#contact"
                                            title="Contact Us"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Contact Us
                                        </Anchor>
                                    </div>
                                </div>

                                <div className="menuItem">
                                    <div className="menuHeader">
                                        <Span color={getThemeBasedColor(bkg)}>Governance</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg)} className='chevronIcon'/>
                                    </div>
                                    <div className="menuItem-content">
                                        <Anchor
                                            href="./gov"
                                            title="Read our story"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Website
                                        </Anchor>
                                        <Anchor
                                            href="http://gov.epns.io/"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Forum
                                        </Anchor>
                                        <Anchor
                                            href="https://epns.notion.site/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                                            title="Governance"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Grants
                                        </Anchor>
                                        <Anchor
                                            href="https://snapshot.org/#/epns.eth"
                                            title="Governance"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Snapshot
                                        </Anchor>
                                        <Anchor
                                            href="http://incentives.epns.io/"
                                            title="Governance"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="7px 30px"
                                            size="16px"
                                            weight="400"
                                            lineHeight="230%"
                                        >
                                          Delegate
                                        </Anchor>
                                    </div>
                                </div>

                            </PrimaryNav>
                        </ItemV>
                  
                        <ItemV justifyContent="flex-end" alignItems="center" flex="0 0 180px">
                            <Anchor
                                href="https://app.epns.io/#/live_walkthrough"
                                target="_blank"
                                title="PUSH Dapp"
                                bg="#DD44B9"
                                radius="16px"
                                padding="14px 32px"
                                size="18px"
                                weight="500"
                                spacing="-0.03em"
                                lineHeight="26px"
                            >
                              Launch App
                            </Anchor>
                        </ItemV>
                    </ItemH>
                </Content>
             
            </Section>
        </Header>
    );
}

const HEADER_HEIGHT = 92;
const HEADER_VERTICAL_GUTTER = 7;

// CSS Styles
const Header = styled.header`
  color: #FFFFFF;
  background: #121315;
  opacity: 1;

  &.light {
    color: #121315;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(6px);
  }

  padding: ${HEADER_VERTICAL_GUTTER}px 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: ${HEADER_HEIGHT}px;
  
  z-index: 999;

  display: flex;
  justify-content: center;
  align-self: stretch;
  align-items: stretch;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  
  transition: top .3s ease-in-out;

  &.hide {
    top: -${HEADER_HEIGHT + HEADER_VERTICAL_GUTTER + 7}px;
  }

  & .contentBox {
    padding: 20px 160px;
    width: 100%;
    align-self: center;
    max-width: 1140px;
    flex: 1;
    display: flex;
  }

`;

const PrimaryNav = styled.div`
  display: flex;
  column-gap: 64px;
  align-items: center;
 
  & .menuItem {
    position: relative;
    display: inline-block;
    cursor: pointer;

    & .menuHeader {
      & span {
        font-family: 'Strawford';

        padding: 16px;
        font-weight: 500;
        font-size: 18px;
        line-height: 142%;
      }
    
      align-items: center;
      display: flex;
  
      & .chevronIcon {
        transition-duration: 0.2s;
        transition-property: transform;
      }
    }

    &:hover {
      & span {
        color: #DD44B9;
      }
      
      & .menuItem-content {
        display: block;
      }

      & .menuHeader {  
        & .chevronIcon {
          transform: rotate(180deg);
        }
      }
    }
  }
  
  & .menuItem-content {
    font-family: "Strawford", 'Manrope', sans-serif;
    display: none;
    position: absolute;
    top: 54px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    background: #2A2A39;
    border-radius: 18px;
    padding: 10px 0;
  }
  
  & .menuItem-content a {
    display: block;
    min-width: 200px;
    text-align: center;
  }

`;


// Export Default
export default Head;
