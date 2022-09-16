// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {Section, ItemV, ItemH, Span, Anchor} from '../components/SharedStyling';

import { BsChevronDown } from 'react-icons/bs';
import { CgMenuHotdog, CgClose } from 'react-icons/cg';

import { ReactComponent as PushLogoTextWhite }  from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as PushLogoTextBlack }  from '../assets/PushLogoTextBlack.svg';


const STICKY_STATES = {
    ZERO_SCROLL: 'landing',
    ON_LANDING_SCROLL: 'onLandingScroll',
    POST_LANDING_SCROLL: 'postLandingScroll'
};

// Create Header
function Head() {
    const [stickyClass, setStickyClass] = useState('');
    const [badge, setBadge] = React.useState(0);
    const [showMenu, setShowMenu] = React.useState(false);

    const [showHDocsM, setShowDocsM] = React.useState(true);
    const [showHLearnM, setShowLearnM] = React.useState(false);
    const [showHGovM, setShowGovM] = React.useState(false);

    const location = useLocation();

    const PushLogo = stickyClass === STICKY_STATES.POST_LANDING_SCROLL ? PushLogoTextBlack : PushLogoTextWhite;

    const stickyHeaderCallback = () => {
        if (window) {
            const scrollheight = window.scrollY;

            console.log('scrolling: -- > ', {
                scrollheight,
                windowHeight: window.innerHeight
            });
            
            if (scrollheight > window.innerHeight) {
                setStickyClass(STICKY_STATES.POST_LANDING_SCROLL);
            } else if (scrollheight > 0 && scrollheight < window.innerHeight) {
                setStickyClass(STICKY_STATES.ON_LANDING_SCROLL);
            } else {
                setStickyClass(STICKY_STATES.ZERO_SCROLL);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderCallback);
    
        return () => {
            window.removeEventListener('scroll', stickyHeaderCallback);
        };
    }, []);


    return (
        <Header forceDisplay={showMenu} className={stickyClass}>
            <Section className="contentBox" direction="row">
                <Nav direction="row" align="stretch" justify="flex-start" minWidth="auto" size="0.8rem">
                    <ItemV align="center" margin="0px" minWidth="auto" flex="0">
                        <PushLogo />
                    </ItemV>

                    <NavPrimary direction="row" forceDisplay={showMenu} align="stretch" justify="flex-start" minWidth="auto" margin="0px 0px 0px 20px">
                        <NavItems>
                            <NavSub align="center" margin="0px 10px" minWidth="auto" flex="none">
                                <NavItem align="center" margin="0px" minWidth="auto" flex="none">
                                    <HeadAnchor
                                        title="Documentation"
                                        bg="transparent"
                                        hoverBG="#fff"
                                        padding="4px 15px"
                                        onClick={()=>{setShowDocsM((prev)=>!prev);}}
                                    >
                                        <ItemH minWidth="auto" margin="0px">
                                            <Span className="mainLinks">Docs</Span>
                                            <BsChevronDown className="navMenuChevron" size={12} id={showHDocsM ? 'up' : 'down'}/>
                                        </ItemH>
                                    </HeadAnchor>
                                </NavItem>

                                <NavSubItems id={!showHDocsM && 'hide'}>
                  
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://docs.epns.io/developers"
                                            target="_blank"
                                            title="Read Integration Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Developer Guides
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://docs.epns.io/governance"
                                            target="_blank"
                                            title="Read Integration Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Governance Guides
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://whitepaper.epns.io/"
                                            target="_blank"
                                            title="Read Whitepaper"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            WhitePaper
                                        </HeadAnchor>
                                    </NavSubItem>
                                </NavSubItems>
                            </NavSub>

                            <NavSub align="center" margin="0px 10px" minWidth="auto" flex="none">
                                <NavItem align="center" margin="0px" minWidth="auto" flex="none">
                                    <HeadAnchor
                                        title="Documentation"
                                        bg="transparent"
                                        hoverBG="#fff"
                                        padding="4px 15px"
                                        onClick={()=>{setShowLearnM((prev)=>!prev);}}
                                    >
                                        <ItemH minWidth="auto" margin="0px">
                                            <Span className="mainLinks">Learn More</Span>
                                            <BsChevronDown className="navMenuChevron" size={12} id={showHLearnM ? 'up' : 'down'}/>
                                        </ItemH>
                                    </HeadAnchor>
                                </NavItem>

                                <NavSubItems id={!showHLearnM && 'hide'}>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://getstarted.epns.io/"
                                            title="Quick Guide"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Quick Guide
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="/faq"
                                            title="Frequently Asked Questions"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            FAQ
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="/#story"
                                            title="Read our story"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Blog
                                        </HeadAnchor>
                                    </NavSubItem>

                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="/presskit"
                                            title="EPNS Press Kit"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Press Kit
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="/#contact"
                                            title="Contact Us"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Contact Us
                                        </HeadAnchor>
                                    </NavSubItem>
                                </NavSubItems>
                            </NavSub>
                    
                            <NavSub align="center" margin="0px 10px" minWidth="auto" flex="none">
                                <NavItem align="center" margin="0px" minWidth="auto" flex="none">
                                    <HeadAnchor
                                        title="Documentation"
                                        bg="transparent"
                                        hoverBG="#fff"
                                        padding="4px 15px"
                                        onClick={()=>{setShowGovM(prev => !prev);}}
                                    >
                                        <ItemH minWidth="auto" margin="0px">
                                            <Span className="mainLinks">Governance</Span>
                                            <BsChevronDown className="navMenuChevron" size={12} id={showHGovM ? 'up' : 'down'}/>
                                        </ItemH>
                                    </HeadAnchor>
                                </NavItem>

                                <NavSubItems id={!showHGovM && 'hide'}>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="./gov"
                                            title="Read our story"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Website
                                        </HeadAnchor>
                                    </NavSubItem>

                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="http://gov.epns.io/"
                                            target="_blank"
                                            title="Frequently Asked Questions"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Forum
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://epns.notion.site/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                                            title="Governance"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                        >
                                            Grants
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            href="https://snapshot.org/#/epns.eth"
                                            title="Governance"
                                            target="_blank"
                                            bg="transparent"
                                            hoverBG="#fff"
                                            padding="4px 15px"
                                            className='subLinks'
                                        >
                                            Snapshot
                                        </HeadAnchor>
                                    </NavSubItem>
                                    <NavSubItem align="center" margin="0px" minWidth="auto" flex="0">
                                        <HeadAnchor
                                            className="Glow subLinks"
                                            href="http://incentives.epns.io/"
                                            title="Governance"
                                            target="_blank"
                                            bg="#e20880"
                                            hoverBG="#b50465"
                                            padding="4px 15px"
                                        >
                                            Delegate
                                        </HeadAnchor>
                                    </NavSubItem>
                                </NavSubItems>
                            </NavSub>

              
              
                            <NavItem align="center" justify="flex-end" margin="0px" minWidth="auto" flex="1">
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
                            </NavItem>

                        </NavItems>
                    </NavPrimary>
          
                    <NavTablet align="flex-end" margin="0px" minWidth="auto" flex="1">
                        <Anchor
                            href="#"
                            onClick={(e) => {e.preventDefault(); setShowMenu(!showMenu);}}
                            title="Toggle Menu"
                            bg="transparent"
                            hoverBG="transparent"
                            margin="10px -15px 10px 0px"
                            padding="8px 15px"
                            radius="4px"
                        >
                            {!showMenu &&
                                <CgMenuHotdog size={24} className="hotDogMenu" color="#fff"/>
                            }

                            {showMenu &&
                                <CgClose size={24} className="closeNavMenu" color="#fff"/>
                            }

                        </Anchor>
                    </NavTablet>

                </Nav>
            </Section>
        </Header>
    );
}

// CSS Styles
const Header = styled.header`
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 999;
  justify-content: center;

  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: center;

  position: fixed;

  // @media(min-width: 1140px){
  //   width: 1140px;
  // }

  & .contentBox {
    padding: 20px 160px;
    width: 100%;
    align-self: center;
    max-width: 1140px;
    flex: 1;
    display: flex;
  }

  & .mainLinks {
    font-family: 'Strawford';
    font-weight: 200;
    font-size: 15px;
    letter-spacing: 0.2em;
    margin: 0px 3px 0px 0px;
    color: #fff;
  }
  
  & .subLinks {
    font-family: 'Strawford';
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 0.2em;
    color: #fff;
  }

  & .navMenuChevron {
    color: #fff;
  }

  &.onLandingScroll {
    background: rgba(18, 19, 21, 0.75);
    backdrop-filter: blur(12px);
  }

  &.postLandingScroll {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);

    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;

    & .mainLinks {
       color: #121315;
    }

    & .navMenuChevron {
      color: #121315;
    }
  }
`;

const Nav = styled(ItemV)`
  align-items: center;
  column-gap: 48px;
`;

const NavTablet = styled(ItemV)`
  display: none;

  @media (max-width: 940px) {
    display: flex;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: stretch;
  flex: 1;
  column-gap: 20px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: initial;
`;

const NavItem = styled.li`
  display: flex;
  min-width: 140px;
  flex: ${props => props.flex || '1'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};

  position: relative;
`;

const HeadAnchor = styled(Anchor)`
  display: flex;
  align-self: stretch;
  align-items: center;
  flex: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 0;
    background: ${props => props.hoverBG || 'transparent'};
  }

  &:hover:before{
    opacity: 1;
  }

  &:after {
    display: none;
  }
`;

const NavSubItems = styled(NavItems)`
  display: none;
  min-width: 100px;
  flex-direction: column;
  position: absolute;
  top: 60px;
  background: #000000AA;
`;

const NavSub = styled(NavItems)`
  flex: initial;

  &:hover ${NavSubItems} {
    display: block;
  }
`;

const NavSubItem = styled(NavItem)`
  & ${HeadAnchor} {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    &:before {
      top: 0;
      bottom: 0;
      height: auto;
    }

    &:hover:before {
      opacity: 0.25;
    }
  }

  .Glow{
    &:hover{
      background:#e22780
    }
  }
`;

const NavPrimary = styled(Nav)`
  @media (max-width: 940px) {
    display: ${props => (props.forceDisplay ? 'flex' : 'none') || 'none'};

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(20px);
    padding: 20px;
    margin: 0px;

    ${NavItems} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ${NavItem} {
      padding: 5px 10px 5px 10px;
      margin: 5px 0px;
      justify-content: center;
      border-radius: 4px;
      text-align: center;
      align-items: center;
      justify-content: center;

      & ${HeadAnchor} {
        padding: 10px;

        &:before {
          top: 0;
          bottom: 0;
          height: auto;
        }

        &:hover:before {
          opacity: 0.25;
        }
      }

      #up{
        transform: rotate(-180deg);
        transition: transform 400ms linear;
      }

      #down{
        transform: rotate(0);
        transition: transform 400ms linear;
      }
    }

    ${NavSubItems} {
      border-radius: 4px;
      display: block;
      position: relative;
      top: auto;
      padding: 0px;
      margin: 0px;
      opacity: 0.8;
      background: transparent;
    }

    #hide{
      display: none;
    }

    ${NavSubItem} {
      display: block;
      position: relative;
      top: 0;
      margin: 5px 0px;

      & ${HeadAnchor} {
        padding: 0px 10px;

        &:before {
          top: 0;
          bottom: 0;
          height: auto;
        }

        &:hover:before {
          opacity: 0.25;
        }
      }
    }
  }
`;

// Export Default
export default Head;
