// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate,useLocation } from 'react-router-dom';

import useMediaQuery from '../hooks/useMediaQuery';

import { ContentV2, ItemHV2, ItemVV2, SectionV2 } from 'components/SharedStylingV2';
import { ReactComponent as PushLogoTextBlack } from '../assets/PushLogoTextBlack.svg';
import { ReactComponent as PushLogoTextWhite } from '../assets/PushLogoTextWhite.svg';
import { Anchor, Span, LinkTo } from '../components/SharedStyling';
import GLOBALS, { device } from '../config/globals';
import Alert from 'components/Alert';

let lastScrollY = window.pageYOffset;
const SCROLL_DELTA = 5;

function useScrollDirection(mobileMenuActive) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [bkg, setBkg] = useState('dark');

  useEffect(() => {
    const updateScrollDirection = () => {

      const scrollY = window.pageYOffset;
      let direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

      if (direction !== scrollDirection && (scrollY - lastScrollY > SCROLL_DELTA || scrollY - lastScrollY < -SCROLL_DELTA)) {
        // check if isMobileMenuOpen then override
        if (mobileMenuActive) {
          direction = 'scrollUp';
        }

        setScrollDirection(direction);
      }

      // hacky way, optimize later when time
      // if (scrollY > 970) {
      //   setBkg('light');
      // } else {
      //   setBkg('dark');
      // }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // add event listener
    window.addEventListener('scroll', updateScrollDirection, {passive: true});

    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, mobileMenuActive]);

  return [scrollDirection, bkg];
}

const defaultMobileMenuState = {
  0: false,
  1: false,
  2: false,
  // add next [index]: false for new main Nav menu item
};

function Header({isAlertVisible,setIsAlertVisible,hideAlertHandler}) {
  const isMobile = useMediaQuery(device.laptop);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, bkg] = useScrollDirection(isMobileMenuOpen);
  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);
  // const [isAlertVisible, setIsAlertVisible] = useState(true);

  
  const navigate = useNavigate();
  const location = useLocation();
  
  const showMobileMenu = isMobile && isMobileMenuOpen;
  
  // if mobile view then show only DARK header.
  // console.log(bkg);
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;
  const themeClass = `${bkg}`;
  
  // const PushLogo = bkg === 'dark' ? PushLogoTextWhite : PushLogoTextBlack;
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };
  
  const onMobileHeaderMenuClick = (e, menuIndex) => {
    e.preventDefault();

    if (isMobile) {
      setMobileMenuMap((oldMap) => {
        return {
          ...defaultMobileMenuState,
          [menuIndex]: !oldMap[menuIndex],
        };
      });
    }
  };
  
  // const hideAlertHandler = ()=>{
  //   setIsAlertVisible(false);
  // };

  return (
    <StyledHeader
      showMobileMenu={showMobileMenu}
      className={`header ${headerClass}`}
    >
      {/* ALERT SECTION */}
      {isAlertVisible && location.pathname === '/'  && <Alert hideAlert={hideAlertHandler} isAlertVisible={isAlertVisible} />}

      <SectionV2>
        <ContentV2 padding="0">
          {/* Header Content Begins */}
          <HeaderItemH
            alignSelf="stretch"
            padding={GLOBALS.ADJUSTMENTS.PADDING.SMALL}
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
          >
            <HeaderBlurV
              position="absolute"
              top="0"
              right="0"
              bottom="0"
              left="0"
              overflow="hidden"
              borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
              className={'headerblur'}
            />

            <MenuTop flex="initial">
              <PushLogoBlackContainer
                className="headerlogo"
                flex="initial"
              >
                <LinkTo to='/' aria-label='Push'><PushLogoTextBlack /></LinkTo>
              </PushLogoBlackContainer>
              <PushLogoWhiteContainer
                className="headerlogo"
                flex="initial"
              >
                <LinkTo to='/' aria-label='Push'><PushLogoTextWhite  /></LinkTo>
              </PushLogoWhiteContainer>

              <MobileMenuToggleIcon>
                {isMobileMenuOpen ? (
                  <AiOutlineClose
                    size={28}
                    onClick={toggleMobileMenu}
                  />
                ) : (
                  <GiHamburgerMenu
                    size={28}
                    onClick={toggleMobileMenu}
                  />
                )}
              </MobileMenuToggleIcon>
            </MenuTop>

            <HeaderNavItemV showMobileMenu={isMobileMenuOpen}>
              <NavigationMenu
                role="menu"
                className="navigationMenu"
                showMobileMenu={isMobileMenuOpen}
              >
                <NavigationMenuItem>
                  <NavigationMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 0)}
                    expanded={mobileMenuMap[0]}
                  >
                    <Span
                      size="18px"
                      weight="500"
                      spacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      Docs
                    </Span>
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[0]}
                  >
                    <Anchor
                      href="https://docs.push.org/developers"
                      target="_blank"
                      title="Read Developer Guide"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Developer Guides
                    </Anchor>
                    <Anchor
                      href="https://docs.push.org/governance"
                      target="_blank"
                      title="Read Governance Guide"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Governance Guides
                    </Anchor>
                    <Anchor
                      href="https://whitepaper.push.org/"
                      target="_blank"
                      title="Read Whitepaper"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      WhitePaper
                    </Anchor>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 1)}
                    expanded={mobileMenuMap[1]}
                  >
                    <Span
                      size="18px"
                      weight="500"
                      spacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      Learn More
                    </Span>
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[1]}
                  >
                    <LinkTo
                      to="/faq"
                      title="Frequently Asked Questions"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      FAQ
                    </LinkTo>
                    <Anchor
                      href="https://push-protocol.medium.com/"
                      target="_blank"
                      title="Read our story"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Blog
                    </Anchor>
                    <Anchor
                      href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                      target="_blank"
                      title="Push Media Kit"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Media  Kit
                    </Anchor>
                    {/* <LinkTo
                      to="/"
                      title="Contact Us"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Contact Us
                    </LinkTo> */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 2)}
                    expanded={mobileMenuMap[2]}
                  >
                    <Span
                      size="18px"
                      weight="500"
                      spacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      Governance
                    </Span>
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[2]}
                  >
                    <Anchor
                      href="https://gov.push.org"
                      target="_blank"
                      title="Push Governance"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Website
                    </Anchor>
                    <Anchor
                      href="https://gov.push.org"
                      target="_blank"
                      title="Push Governance Forum"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Forum
                    </Anchor>
                    <Anchor
                      href="https://www.notion.so/pushprotocol/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                      title="Push Grants"
                      target="_blank"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Grants
                    </Anchor>
                    <Anchor
                      href="https://snapshot.org/#/pushdao.eth"
                      title="Push Snapshot"
                      target="_blank"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Snapshot
                    </Anchor>
                    <Anchor
                      href="https://app.push.org/#/yield"
                      title="Delegate"
                      target="_blank"
                      bg="transparent"
                      hoverBG="#fff"
                      padding="7px 30px"
                      size="16px"
                      weight="400"
                      lineHeight="230%"
                      spacing="normal"
                    >
                      Delegate
                    </Anchor>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </HeaderNavItemV>

            <ItemVV2 flex="initial">
              <DappLauncher
                showMobileMenu={showMobileMenu}
                className="launchDappBtn"
                href="https://app.push.org/"
                target="_blank"
                title="Push Dapp"
                bg="#DD44B9"
                radius="16px"
                size="18px"
                weight="500"
                spacing="-0.03em"
                lineHeight="26px"
              >
                Launch App
              </DappLauncher>
            </ItemVV2>
          </HeaderItemH>
        </ContentV2>
      </SectionV2>
    </StyledHeader>
  );
}

// V2 Designs
const HeaderItemH = styled(ItemHV2)`
  margin: ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0 0 0;
  color: ${GLOBALS.COLORS.FONT_LIGHT};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};
    flex-direction: column;
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};
    flex-direction: column;
  }

  &.light {
    color: ${GLOBALS.COLORS.FONT_DARK};
    background: ${GLOBALS.COLORS.HEADER_BG_LIGHT};
  }
`;

const HeaderBlurV = styled(ItemVV2)`
  backdrop-filter: blur(${GLOBALS.ADJUSTMENTS.BLUR.HEADER}px);
  background: ${GLOBALS.COLORS.HEADER_BG_DARK};

  &.light {
    background: ${GLOBALS.COLORS.HEADER_BG_LIGHT};
  }
`;

const HeaderNavItemV = styled(ItemVV2)`
  margin: 0 ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0 ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};

  @media ${device.laptop} {
    margin: ${(props) => (props.showMobileMenu ? '20px 0 20px 0' : '0')};
  }
`;

const PushLogoWhiteContainer = styled(ItemVV2)`
  display: flex;
  &.light {
    display: none;
  }
`;

const PushLogoBlackContainer = styled(ItemVV2)`
  display: none;
  &.light {
    display: flex;
  }
`;

// V1 Designs
const HEADER_HEIGHT = 92;
const HEADER_VERTICAL_GUTTER = 7;
const BOX_MAX_WIDTH = 1140;

const StyledHeader = styled.header`
  font-family: 'Strawford';

  /* padding: 0px 160px; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  /* color: #ffffff;
  background: #121315; */
  opacity: 1;

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

  /* this is IMP for boxing the content at 1140px
  @media (min-width: 1140px) {
    padding-left: calc(50% - ${BOX_MAX_WIDTH / 2}px);
    padding-right: calc(50% - ${BOX_MAX_WIDTH / 2}px);
  } */

  /* height: ${HEADER_HEIGHT}px; */

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    /* height: ${(props) => (props.showMobileMenu ? '100%' : '48px')}; */
    flex-direction: column;

    &.hide {
      // top: -${HEADER_HEIGHT + HEADER_VERTICAL_GUTTER + 12}px;
      top: -100%;
    }
  }
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptop} {
    display: flex;
    cursor: pointer;
  }
`;

const MenuTop = styled(ItemVV2)`
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

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  column-gap: 64px;

  z-index: 999;

  @media ${device.laptop} {
    flex-direction: column;
    flex: 0 0 75%;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
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
      color: #dd44b9;
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

  @media ${device.laptop} {
    justify-content: space-between;

    & span {
    }

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) => (props.expanded ? 'rotate(180deg)' : 'none  !important')};
    }
  }
`;

const NavigationMenuContent = styled.ul`
  list-style: none;

  font-family: 'Strawford', 'Manrope', sans-serif;
  display: none;
  position: absolute;

  // logic - this should touch the parent li for enough hover surface area.
  top: 54px;

  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: #2a2a39;
  border-radius: 18px;
  padding: 10px 0;

  & a {
    min-width: 200px;
  }

  @media ${device.laptop} {
    width: 100%;

    position: relative;
    top: 0px;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    display: ${(props) => (props.expanded ? 'flex' : 'none !important')};

    & a {
      justify-content: flex-start;
    }
  }
`;

const DappLauncher = styled(Anchor)`
  padding: 14px 32px;

  @media ${device.laptop} {
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

export default Header;
