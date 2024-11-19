// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import GLOBALS, { device, structure } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import {
  Button,
  Content,
  ItemH,
  ItemV,
  Section,
  Span,
} from '../../../src/css/SharedStyling';
// import ImageHolder from '@site/src/components/ImageHolder';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
// import Discord from '@site/static/assets/website/brb/Discord-BRB.svg';
// import X from '@site/static/assets/website/brb/X-BRB.svg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

let lastScrollY = 0;
const SCROLL_DELTA = 5;

if (typeof window !== 'undefined') {
  lastScrollY = window.scrollY;
}

function useScrollDirection(mobileMenuActive) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const updateScrollDirection = () => {
      let scrollY = 0;

      if (typeof window !== 'undefined') {
        scrollY = window.scrollY;
      }
      let direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_DELTA ||
          scrollY - lastScrollY < -SCROLL_DELTA)
      ) {
        // check if isMobileMenuOpen then override
        if (mobileMenuActive) {
          direction = 'scrollUp';
        }

        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // add event listener
    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, mobileMenuActive]);

  return [scrollDirection];
}

const ChainHeader = () => {
  //   const d = new Date();
  //   const year = d.getFullYear();
  const isMobile = useMediaQuery(device.mobileL);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection] = useScrollDirection(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const showMobileMenu = isMobile && isMobileMenuOpen;
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const handleSectionNavigation = (id) => {
    if (showMobileMenu) toggleMobileMenu();

    gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: `#${id}` },
    });
  };

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  //   const elem0 = useRef(null);

  const openHomePage = () => {
    window.open('/', '_self');
  };

  return (
    <StyledHeader
      showMobileMenu={showMobileMenu}
      className={`header ${headerClass}`}
    >
      <Section>
        <Content alignSelf='center' className='contentBox'>
          <NavList isMobileMenuOpen={isMobileMenuOpen}>
            <MenuTop flex='initial'>
              <PushLogoBlackContainer className='headerlogo' flex='initial'>
                <PushLogo
                  style={{ margin: '0px 9px 0px 4px' }}
                  onClick={openHomePage}
                />

                <Span
                  fontSize='24px'
                  fontWeight='400'
                  style={{ fontFamily: 'Glancyr' }}
                >
                  CHAIN
                </Span>
              </PushLogoBlackContainer>

              <MobileMenuToggleIcon>
                {isMobileMenuOpen ? (
                  <AiOutlineClose
                    size={28}
                    color='#fff'
                    onClick={toggleMobileMenu}
                  />
                ) : (
                  <GiHamburgerMenu
                    size={28}
                    color='#fff'
                    onClick={toggleMobileMenu}
                  />
                )}
              </MobileMenuToggleIcon>
            </MenuTop>

            <HeaderNavItemV showMobileMenu={isMobileMenuOpen} margin>
              <NavigationMenu
                role='menu'
                className='navigationMenu'
                showMobileMenu={isMobileMenuOpen}
              >
                <NavigationMenuItem
                  onClick={() => handleSectionNavigation('bounties')}
                >
                  <NavigationMenuHeader>
                    <Span fontSize='18px'>Bounties</Span>
                  </NavigationMenuHeader>
                </NavigationMenuItem>

                <NavigationMenuItem
                  onClick={() => handleSectionNavigation('schedule')}
                >
                  <NavigationMenuHeader>
                    <Span fontSize='18px'>Schedule</Span>
                  </NavigationMenuHeader>
                </NavigationMenuItem>

                <NavigationMenuItem
                  onClick={() => handleSectionNavigation('online')}
                >
                  <NavigationMenuHeader>
                    <Span fontSize='18px'>BRB Online</Span>
                  </NavigationMenuHeader>
                </NavigationMenuItem>

                <NavigationMenuItem
                  onClick={() => handleSectionNavigation('playground')}
                >
                  <NavigationMenuHeader>
                    <Span fontSize='18px'>BRB Chat</Span>
                  </NavigationMenuHeader>
                </NavigationMenuItem>

                <NavigationMenuItem
                  onClick={() => handleSectionNavigation('support')}
                >
                  <NavigationMenuHeader>
                    <Span fontSize='18px'>Support</Span>
                  </NavigationMenuHeader>
                </NavigationMenuItem>
              </NavigationMenu>
            </HeaderNavItemV>

            <HeaderFocusItems flex='initial' alignSelf='stretch'>
              <IconMenu
                role='menu'
                className='navigationMenu'
                showMobileMenu={isMobileMenuOpen}
              >
                <NavigationMenuItem
                  onClick={() => {
                    if (isMobileMenuOpen) toggleMobileMenu();
                    openLink('https://twitter.com/pushprotocol');
                  }}
                >
                  <NavigationMenuHeader>
                    <Button background='#D548EC'>Start Building</Button>
                  </NavigationMenuHeader>
                </NavigationMenuItem>
              </IconMenu>
            </HeaderFocusItems>
          </NavList>
        </Content>
      </Section>
    </StyledHeader>
  );
};

export default ChainHeader;

const NavList = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (!props.isMobileMenuOpen ? '78px' : 'auto')};
  max-height: ${(props) => (!props.isMobileMenuOpen ? '78px' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 55px;
  border: 1px solid #2a2a39;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  padding: 0px 23px;
  margin: 23px auto 0 auto;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    padding: 14px 10px 14px 20px;
    margin: 10px auto;
    box-sizing: border-box;
    align-items: center;
    border-radius: ${(props) => (props.isMobileMenuOpen ? '32px' : '55px')};
  }
`;

const StyledHeader = styled.header`
  font-family: 'Strawford', sans-serif;

  /* padding: 0px 160px; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 78px;

  /* color: #ffffff;
  background: #121315; */
  opacity: 1;
  z-index: 99999 !important;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: top 0.3s ease-in-out;

  &.hide {
    top: -100%;
  }

  &.light {
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

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .contentBox {
    padding: 0px ${structure.PADDING.DESKTOP.RIGHT}px !important;
    max-width: ${GLOBALS.STRUCTURE.MAX_WIDTH}px !important;

    @media ${device.tablet} {
      padding: 0px ${structure.PADDING.TABLET.RIGHT}px !important;
    }

    @media ${device.mobile} {
      padding: 0px ${structure.PADDING.MOBILE.RIGHT}px !important;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;

    &.hide {
      top: -100%;
    }
  }
`;

const MenuTop = styled(ItemV)`
  display: flex;

  & svg {
    cursor: pointer;
  }

  @media ${device.laptop} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 24.207px;
  font-style: normal;
  font-weight: 400;
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptop} {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const HeaderNavItemV = styled(ItemV)`
  border: 1px solid red;
  margin: 0px ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0
    ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};

  @media ${device.laptop} {
    margin: ${(props) => (props.showMobileMenu ? '30px 20px 20px 20px' : '0')};
  }
`;

const HeaderFocusItems = styled(ItemH)`
  align-self: stretch;
  flex-wrap: nowrap;

  @media ${device.laptop} {
    flex-direction: collumn;
    align-self: flex-start;
    flex-wrap: wrap;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  gap: 36px;

  z-index: 999;

  @media ${device.laptop} {
    flex-direction: column;
    flex: 0 0 75%;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

const IconMenu = styled.ul`
  list-style: none;
  margin: 0 20px 0 0;
  justify-content: flex-start;
  padding: 0;
  display: flex;
  gap: 20px;
  z-index: 999;

  @media ${device.laptop} {
    flex-direction: row;
    flex: 1;
    margin: 10px 20px 20px 20px;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;
  font-family: Glancyr, sans-serif;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  & span {
    font-weight: 400;
    font-size: 18px;
    line-height: 142%;
    color: var(--ifm-color-primary-inverse);
  }

  &:hover {
    & span {
      color: #dd44b9;
      transition-duration: 0.7s;
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

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
  }

  & span {
    color: #fff;
  }

  @media ${device.laptop} {
    justify-content: space-between;

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;
