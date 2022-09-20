// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import styled from 'styled-components';
import {Section, Content, ItemV, ItemH, Span, Anchor} from '../components/SharedStyling';
import { BsChevronDown } from 'react-icons/bs';
import { CgMenuHotdog, CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';

import useMediaQuery from '../hooks/useMediaQuery';

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


function getThemeBasedColor(bkg, isMobileView) {
    if (isMobileView) return '#FFF';

    return bkg === 'light' ? '#121315' : '#FFF';
}

const defaultMobileMenuState = {
    0: false,
    1: false,
    2: false
    // add next [index]: false for new main Nav menu item
};

// Create Header
function Head() {
    const [scrollDirection, bkg] = useScrollDirection();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState); 

    const isMobileView = useMediaQuery('(max-width: 940px)');

    /**
     * if Mobile view and mobile menu is OPEN then don't hide it ever on scroll
     */

    const headerClass = `${scrollDirection === 'scrollDown' && !isMobileView ? 'hide' : 'show'}`;

    const PushLogo = bkg === 'dark' || isMobileView ? PushLogoTextWhite : PushLogoTextBlack;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const onHeaderMenuClick = (e, menuIndex) => {
        e.preventDefault();

        if (isMobileView) {
            setMobileMenuMap(oldMap => {
                return {
                    ...defaultMobileMenuState,
                    [menuIndex]: !oldMap[menuIndex]
                };
            });
        }
    };

    return (
        <Header className={`header ${headerClass} ${!isMobileView ? bkg : ''}`}>
            <ResponsiveSection padding="0px 160px 0px 160px">
                <Content className="contentBox">
                    <NavHolder width="100%">
                        <LogoHolder justifyContent="flex-start" alignItems="center">
                            <PushLogo />
                        </LogoHolder>

                        <ResponsiveNav justifyContent="center" alignItems="center" flex="1">
                            <PrimaryNav>
                                <div className="menuItem">
                                    <MenuHeader className="menuHeader" onClick={(e) => onHeaderMenuClick(e, 0)} expandMobile={mobileMenuMap[0]}>
                                        <Span color={getThemeBasedColor(bkg, isMobileView)}>Docs</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg, isMobileView)} className='chevronIcon'/>
                                    </MenuHeader>
                                    <MenuItemContent className="menuItem-content" expandMobile={mobileMenuMap[0]}>
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
                                    </MenuItemContent>
                                </div>

                                <div className="menuItem">
                                    <MenuHeader className="menuHeader" onClick={(e) => onHeaderMenuClick(e, 1)} expandMobile={mobileMenuMap[1]}>
                                        <Span color={getThemeBasedColor(bkg, isMobileView)}>Learn More</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg, isMobileView)} className='chevronIcon'/>
                                    </MenuHeader>
                                    <MenuItemContent className="menuItem-content" expandMobile={mobileMenuMap[1]}>
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
                                    </MenuItemContent>
                                </div>

                                <div className="menuItem">
                                    <MenuHeader className="menuHeader" onClick={(e) => onHeaderMenuClick(e, 2)} expandMobile={mobileMenuMap[2]}>
                                        <Span color={getThemeBasedColor(bkg, isMobileView)}>Governance</Span>
                                        <BsChevronDown size={12} color={getThemeBasedColor(bkg, isMobileView)} className='chevronIcon'/>
                                    </MenuHeader>
                                    <MenuItemContent className="menuItem-content" expandMobile={mobileMenuMap[2]}>
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
                                    </MenuItemContent>
                                </div>

                            </PrimaryNav>
                        </ResponsiveNav>
                  
                        <DappLauncher justifyContent="flex-end" alignItems="center" flex="0 0 180px">
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
                        </DappLauncher>

                        <MobileIcon>
                            {
                                mobileMenuOpen ? 
                                    <GrClose size={24} color="#FFFFFF" onClick={toggleMobileMenu} className="mobileIcon"/> :
                                    <GiHamburgerMenu size={24} color="#FFFFFF" onClick={toggleMobileMenu} className="mobileIcon"/>
                            }
                        </MobileIcon>
                    </NavHolder>

                </Content>
             
            </ResponsiveSection>
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

  @media (max-width: 940px) {
    border-radius: 0;
  }
  
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

    @media (max-width: 940px) {
      padding: 20px 30px;
    }
  }
`;

const ResponsiveSection = styled(Section)`
  padding: 0px 160px 0px 160px;  
  
  @media (max-width: 940px) {
    padding: 0px 30px;
  }
`;

const NavHolder = styled(ItemH)`
  @media (max-width: 940px) {
    justify-content: space-between;
    position: relative;
  }
`;

const LogoHolder = styled(ItemV)`
  flex: 0 0 125px;
`;

const DappLauncher = styled(ItemV)`
  flex: 0 0 180px;

  @media (max-width: 940px) {
    display: ${props => props.mobileMenuOpen ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    top: calc(100vh - 120px);
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  & svg {
    cursor: pointer;
  }

  & path {
    stroke: #FFFFFF;
  }

  @media (max-width: 940px) {
    display: flex;
  }
`;

const ResponsiveNav = styled(ItemV)`
  @media (max-width: 940px) {
    display: ${props => props.mobileMenuOpen ? 'block' : 'none'};
    position: fixed;
    top: 92px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #121315;
  }
`;

const PrimaryNav = styled.div`
  display: flex;
  column-gap: 64px;
  align-items: center;
 
  @media (max-width: 940px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    column-gap: 16px;
  }

  & .menuItem {
    position: relative;
    display: inline-block;
    cursor: pointer;

    @media (max-width: 940px) {
      width: 100%;
    }

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
      /* only for desktop+ views */
      @media (min-width: 941px) {
        & span {
          color: #DD44B9;
        }

        & .menuItem-content {
          display: block;
        }
      }
    }
  }
`;

const MenuHeader = styled.div`
  & span {
    font-family: 'Strawford';

    padding: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;

    @media (min-width: 941px) {
      & .chevronIcon {
        transform: rotate(180deg);
      }
    }
  }

  align-items: center;
  display: flex;

  & .chevronIcon {
    transition-duration: 0.2s;
    transition-property: transform;
  }

  @media (max-width: 940px) {
    & span {
      color: ${props => props.expandMobile ? '#DD44B9' : '#FFFFFF'};
    }
  }
`;

const MenuItemContent = styled.div`
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

  @media (max-width: 940px) {
    background: #121315;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: ${props => props.expandMobile ? 'block' : 'none'};

    & + .menuHeader {
      & span {
        color: ${props => props.expandMobile ? 'DD44B9' : '#FFFFFF'};
      }
    
      & .chevronIcon {
        transform: rotate(180deg);
      }
    }
  }

  & a {
    display: block;
    min-width: 200px;
    text-align: center;

    @media (max-width: 940px) {
      text-align: left;
    }
  }
`;


// Export Default
export default Head;
