// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useState } from 'react';

import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import GLOBALS, { device, structure } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';
import { useScrollDirection } from '../../hooks/useScrollDirection';

import {
  Button,
  Content,
  ItemH,
  ItemV,
  Section,
  Span,
} from '../../../src/css/SharedStyling';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import ChainLogo from '@site/static/assets/website/chain/ChainLogo.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ChainHeader: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('technology');
  const [scrollDirection] = useScrollDirection(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const showMobileMenu = isMobile && isMobileMenuOpen;
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const handleSectionNavigation = (id) => {
    setActiveItem(id);
    if (showMobileMenu) toggleMobileMenu();

    gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: `#${id}` },
    });
  };

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  const openHomePage = () => {
    window.open('/', '_self');
  };

  // Dummy data for navigation items
  const navItems = [
    { id: 'technology', label: 'Technology' },
    { id: 'knowledge', label: 'Knowledge Base' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'faq', label: 'F.A.Q' },
  ];

  return (
    <StyledHeader
      showMobileMenu={showMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      className={`header ${headerClass}`}
    >
      <Section>
        <HeaderContent
          className='contentBox'
          isMobileMenuOpen={isMobileMenuOpen}
        >
          <NavList isMobileMenuOpen={isMobileMenuOpen}>
            <MenuTop padding={isMobileMenuOpen && '16px'} flex='initial'>
              <PushLogoBlackContainer className='headerlogo' flex='initial'>
                <PushLogo
                  style={{ margin: '0px 9px 0px 4px' }}
                  onClick={openHomePage}
                />

                {isMobileMenuOpen ? <ChainLogoDark /> : <ChainLogo />}
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
                    color='#000'
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
                {navItems.map((item) => (
                  <NavigationMenuItem
                    key={item.id}
                    isActive={activeItem === item.id}
                    onClick={() => handleSectionNavigation(item.id)}
                    showMobileMenu={isMobileMenuOpen}
                  >
                    <NavigationMenuHeader isActive={activeItem === item.id}>
                      <Span fontSize='18px'>{item.label}</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>
                ))}
              </NavigationMenu>
            </HeaderNavItemV>

            <HeaderFocusItems flex='initial' alignSelf='stretch'>
              <IconMenu
                role='menu'
                className='navigationMenu'
                showMobileMenu={isMobileMenuOpen}
              >
                <Button
                  background='#D548EC'
                  fontFamily='N27'
                  fontWeight='500'
                  fontSize='18px'
                  flex={isMobileMenuOpen && '1'}
                  onClick={() => {
                    if (isMobileMenuOpen) toggleMobileMenu();
                    openLink('https://twitter.com/pushprotocol');
                  }}
                >
                  Start Building
                </Button>
              </IconMenu>
            </HeaderFocusItems>
          </NavList>
        </HeaderContent>
      </Section>
    </StyledHeader>
  );
};

export default ChainHeader;

const HeaderContent = styled(Content)`
  height: ${(props) => (!props.isMobileMenuOpen ? '64px' : 'auto')};
  align-self: ${(props) => (props.isMobileMenuOpen ? 'flex-start' : 'stretch')};
`;

const NavList = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (!props.isMobileMenuOpen ? '64px' : '100%')};
  max-height: ${(props) => (!props.isMobileMenuOpen ? '64px' : '100%')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0px 23px;
  margin: 0px auto 0 auto;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    padding: 14px 0px 14px 0px;
    margin: 0px auto;
    box-sizing: border-box;
    align-items: center;
    border-radius: ${(props) => (props.isMobileMenuOpen ? '32px' : '55px')};
    min-height: ${(props) => (props.isMobileMenuOpen ? '100vh' : '100%')};
    justify-content: ${(props) =>
      props.isMobileMenuOpen ? 'flex-start' : 'space-between'};
  }
`;

const StyledHeader = styled.header`
  font-family: N27, sans-serif;
  position: fixed;
  top: ${(props) => (props.showMobileMenu ? '0px' : '23px')};
  left: 0;
  right: 0;
  height: ${(props) => (props.isMobileMenuOpen ? '100vh' : '64px')};

  /* color: #ffffff;
  background: #121315; */
  opacity: 1;
  z-index: 99999 !important;
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
    top: 0px;
    background-color: ${(props) =>
      props.isMobileMenuOpen ? '#000' : 'transparent'};

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
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptop} {
    display: flex;
    cursor: pointer;
  }
`;

const HeaderNavItemV = styled(ItemV)`
  border-radius: 24px;
  background: #000;
  width: fit-content;
  flex: 0;
  padding: 8px;

  @media ${device.laptop} {
    margin: ${(props) => (props.showMobileMenu ? '24px 0px 0px 0px' : '0')};
    width: ${(props) => (props.showMobileMenu ? '100%' : 'fit-content')};
    padding: ${(props) => (props.showMobileMenu ? '0px' : '8px')};
    flex: 0;
  }
`;

const HeaderFocusItems = styled(ItemH)`
  align-self: stretch;
  flex-wrap: nowrap;

  @media ${device.laptop} {
    flex-direction: column;
    align-self: flex-start;
    flex-wrap: wrap;
    margin: auto 0 0 0;
    width: 100%;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  gap: 8px;

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
    margin: 0 0 auto 0;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;
  font-family: N27, sans-serif;
  border-radius: 16px;
  background: #fff;
  padding: ${(props) => (props.showMobileMenu ? '16px' : '0px 24px')};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.showMobileMenu ? 'flex-start' : 'center')};
  background: ${(props) => (props.isActive ? '#FFF' : 'transparent')};
  transition: background 0.3s;

  & span {
    color: ${(props) => (props.isActive ? '#000' : '#FFF')};
    font-family: N27;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-transform: uppercase;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  &:hover {
    & span {
      transition-duration: 0.7s;
    }

    & .chevronIcon {
      transform: rotate(180deg);
    }

    & .menuContent {
      display: block;
    }
  }

  @media ${device.laptop} {
    & span {
      font-size: 16px;
    }
  }
`;

const NavigationMenuHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: auto 0;

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
  }

  & span {
    color: ${(props) => (props.isActive ? '#000' : '#FFF')};
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
