// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';

import Device from '../helpers/Device';
import useMediaQuery from '../hooks/useMediaQuery';

import {Section, Content, ItemV, ItemH, Span, Anchor} from '../components/SharedStyling';

import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';


let lastScrollY = window.pageYOffset;
const SCROLL_DELTA = 5;

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [bkg, setBkg] = useState('dark');

    useEffect(() => {
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


const defaultMobileMenuState = {
    0: false,
    1: false,
    2: false
    // add next [index]: false for new main Nav menu item
};

function Header() {
    const isMobile = useMediaQuery(Device.tablet);
    const [scrollDirection, bkg] = useScrollDirection();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);

    const showMobileMenu = isMobile && isMobileMenuOpen;

    // if mobile view then show only DARK header.
    const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'} ${!isMobile ? bkg : ''}`;

    const PushLogo = bkg === 'dark' || isMobile ? PushLogoTextWhite : PushLogoTextBlack;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(lastOpen => !lastOpen);
    };

    const onMobileHeaderMenuClick = (e, menuIndex) => {
        e.preventDefault();

        if (isMobile) {
            setMobileMenuMap(oldMap => {
                return {
                    ...defaultMobileMenuState,
                    [menuIndex]: !oldMap[menuIndex]
                };
            });
        }
    };

    return (
        <StyledHeader showMobileMenu={showMobileMenu} className={headerClass}>
    
            <MenuTop>
                <PushLogo />
                <MobileMenuToggleIcon>
                    {isMobileMenuOpen ?
                        <GrClose size={28} color="#FFFFFF" onClick={toggleMobileMenu} />
                        : 
                        <GiHamburgerMenu size={28} color="#FFFFFF" onClick={toggleMobileMenu}/>
                    }
                </MobileMenuToggleIcon>
            </MenuTop>

            <NavigationMenu role="menu" className="navigationMenu" showMobileMenu={showMobileMenu}>
                <NavigationMenuItem>
                    <NavigationMenuHeader onClick={(e) => onMobileHeaderMenuClick(e, 0)} expanded={mobileMenuMap[0]}>
                        <Span color="#FFFFFF" size="18px" weight="500" spacing="-0.03em" lineHeight="142%" padding="16px" >Docs</Span>
                        <BsChevronDown size={12} color="#FFFFFF" className='chevronIcon'/>
                    </NavigationMenuHeader>

                    <NavigationMenuContent className="menuContent" expanded={mobileMenuMap[0]}>
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

                    </NavigationMenuContent>

                </NavigationMenuItem>      

                <NavigationMenuItem>
                    <NavigationMenuHeader onClick={(e) => onMobileHeaderMenuClick(e, 1)} expanded={mobileMenuMap[1]}>
                        <Span color="#FFFFFF" size="18px" weight="500" spacing="-0.03em" lineHeight="142%" padding="16px" >Learn More</Span>
                        <BsChevronDown size={12} color="#FFFFFF" className='chevronIcon'/>
                    </NavigationMenuHeader>

                    <NavigationMenuContent className="menuContent" expanded={mobileMenuMap[1]}>
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

                    </NavigationMenuContent>

                </NavigationMenuItem>              
                    
                <NavigationMenuItem>
                    <NavigationMenuHeader onClick={(e) => onMobileHeaderMenuClick(e, 2)} expanded={mobileMenuMap[2]}>
                        <Span color="#FFFFFF" size="18px" weight="500" spacing="-0.03em" lineHeight="142%" padding="16px" >Governance</Span>
                        <BsChevronDown size={12} color="#FFFFFF" className='chevronIcon'/>
                    </NavigationMenuHeader>

                    <NavigationMenuContent className="menuContent" expanded={mobileMenuMap[2]}>
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

                    </NavigationMenuContent>

                </NavigationMenuItem>      
            </NavigationMenu>

            
            <DappLauncher
                showMobileMenu={showMobileMenu}
                className='launchDappBtn'
                href="https://app.epns.io/#/live_walkthrough"
                target="_blank"
                title="PUSH Dapp"
                bg="#DD44B9"
                radius="16px"
                size="18px"
                weight="500"
                spacing="-0.03em"
                lineHeight="26px"
            >
                  Launch App
            </DappLauncher>
            
        </StyledHeader>
    );
}

const HEADER_HEIGHT = 92;
const HEADER_VERTICAL_GUTTER = 7;

const StyledHeader = styled.header`
  font-family: 'Strawford';

  padding: 0px 160px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  color: #FFFFFF;
  background: #121315;
  opacity: 1;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: top .3s ease-in-out;

  &.hide {
    top: -${HEADER_HEIGHT + HEADER_VERTICAL_GUTTER + 7}px;
  }

  &.light {
    color: #121315;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(6px);

    & span {
      color: #121315;
    }

    & svg.chevronIcon {
      fill: #121315;

      & path {
        stroke: #121315;
      }
   }
  }

  /* this is IMP for boxing the content at 1140px */
  @media (min-width: 1140px) {
    padding: 0px 160px;
    max-width: 1140px;
    margin: auto
  }

  height: ${HEADER_HEIGHT}px;

  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;




  @media ${Device.tablet} {
    height: ${props => props.showMobileMenu ? '100%' : '54px'};
    flex-direction: column;
    padding: 30px;

    &.hide {
      top: -${HEADER_HEIGHT + HEADER_VERTICAL_GUTTER + 16}px;
    }
  }
`;

const MobileMenuToggleIcon = styled.span`
   display: none;

   & svg {
      fill: #FFF;

      & path {
        stroke: #FFF;
      }
   }

   @media ${Device.tablet} {
    display: flex;
    cursor: pointer;
  }
`;

const MenuTop = styled.div`
  display: flex;
  
  @media ${Device.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  column-gap: 64px;

  z-index: 999;

  @media ${Device.tablet} {
    flex-direction: column;
    flex: 0 0 75%;
    align-self: stretch;
    display: ${props => props.showMobileMenu ? 'flex' : 'none'};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;

  & span {
    font-family: 'Strawford';

    padding: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
  }

  &:hover {
    & span {
      color: #DD44B9;
    }

    & .chevronIcon {
      transform: rotate(180deg);
    }

    & .menuContent {
      display: block;
    }
  }
`;

const NavigationMenuHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & .chevronIcon {
    transition-duration: 0.2s;
    transition-property: transform;
  }

  @media ${Device.tablet} {
    justify-content: space-between;

    & span {
      color: ${props => props.expanded ? '#DD44B9' : '#FFFFFF !important'};
    }

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${props => props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;

const NavigationMenuContent = styled.ul`
  list-style: none;

  font-family: "Strawford", 'Manrope', sans-serif;
  display: none;
  position: absolute;
  
  // logic - this should touch the parent li for enough hover surface area.
  top: 54px; 
  
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: #2A2A39;
  border-radius: 18px;
  padding: 10px 0;

  & a {
    min-width: 200px;
  }

  @media ${Device.tablet} {
    background: #121315;
    width: 100%;

    position: relative;
    top: 0px;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    display: ${props => props.expanded ? 'flex' : 'none !important'};

    & a {
      justify-content: flex-start;
    }
  }
`;



const DappLauncher = styled(Anchor)`
  padding: 14px 32px;

  @media ${Device.tablet} {
    width: 85%;
    align-self: center;
    margin-bottom: 64px;
    display: ${props => props.showMobileMenu ? 'flex' : 'none'};
  }
`;

export default Header;