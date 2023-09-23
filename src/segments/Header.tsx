// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Components
import { useLocation } from '@docusaurus/router';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

// Internal Components
import Alert from '@site/src/components/Alert';
import { Atag, ContentV2, ItemHV2, ItemVV2, LinkToV2, SectionV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import PushLogoTextBlack from '@site/static/assets/PushLogoTextBlack.svg';
import PushLogoTextWhite from '@site/static/assets/PushLogoTextWhite.svg';
import EnSVG from '@site/static/assets/website/locales/en.svg';
import EsSVG from '@site/static/assets/website/locales/es.svg';
import HiSVG from '@site/static/assets/website/locales/hi.svg';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';

let lastScrollY = window.pageYOffset;
const SCROLL_DELTA = 5;

function useScrollDirection(mobileMenuActive) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [bkg, setBkg] = useState('dark');

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      let direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_DELTA || scrollY - lastScrollY < -SCROLL_DELTA)
      ) {
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
    window.addEventListener('scroll', updateScrollDirection, { passive: true });

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
  3: false,
  // add next [index]: false for new main Nav menu item
};

function Header() {
  const isMobile = useMediaQuery(device.laptop);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, bkg] = useScrollDirection(isMobileMenuOpen);
  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);
  // const [isAlertVisible, setIsAlertVisible] = useState(true);

  // Internationalization
  const { t, i18n } = useTranslation();

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

    // if (isMobile) {
    setMobileMenuMap((oldMap) => {
      return {
        ...defaultMobileMenuState,
        [menuIndex]: !oldMap[menuIndex],
      };
    });
    // }
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
      {location.pathname === '/' && <Alert />}

      <SectionV2>
        <ContentV2
          padding="0"
        >
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

            {/* <FadeInAnimation wrapperElement="div" delay={0}> */}
            <MenuTop flex="initial">
              <PushLogoBlackContainer
                className="headerlogo"
                flex="initial"
              >
                <LinkToV2
                  to="/"
                  aria-label="Push"
                >
                  <PushLogoTextBlack />
                </LinkToV2>
              </PushLogoBlackContainer>
              <PushLogoWhiteContainer
                className="headerlogo"
                flex="initial"
              >
                <LinkToV2
                  to="/"
                  aria-label="Push"
                >
                  <PushLogoTextWhite />
                </LinkToV2>
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
            {/* </FadeInAnimation> */}

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
                    <SpanV2
                      fontSize="18px"
                      fontWeight="500"
                      letterSpacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      {/* <FadeInAnimation wrapperElement="div" delay={0.25}> */}
                      {t('header.docs.title')}
                      {/* </FadeInAnimation> */}
                    </SpanV2>
                    {/* <FadeInAnimation wrapperElement="div" delay={0.25}> */}
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                    {/* </FadeInAnimation> */}
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[0]}
                  >
                    <Atag
                      href="/docs"
                      title={t('header.docs.alt-developer-guides')}
                      background="transparent"
                      display="flex"
                      hoverBackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      borderRadius="0px"
                    >
                      {t('header.docs.developer-guides')}
                    </Atag>
                    <Atag
                      href="/docs"
                      title={t('header.docs.alt-governance-guides')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.docs.governance-guides')}
                    </Atag>
                    <Atag
                      href="https://whitepaper.push.org/"
                      target="_blank"
                      title={t('header.docs.alt-whitepaper')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.docs.whitepaper')}
                    </Atag>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 1)}
                    expanded={mobileMenuMap[1]}
                  >
                    <SpanV2
                      fontSize="18px"
                      fontWeight="500"
                      letterSpacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      {/* <FadeInAnimation wrapperElement="div" delay={0.5}> */}
                      {t('header.more.title')}
                      {/* </FadeInAnimation> */}
                    </SpanV2>

                    {/* <FadeInAnimation wrapperElement="div" delay={0.5}> */}
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                    {/* </FadeInAnimation> */}
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[1]}
                  >
                    <LinkToV2
                      to="/faq"
                      title={t('header.more.alt-faq')}
                      background="transparent"
                      hoverBackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                    >
                      {t('header.more.faq')}
                    </LinkToV2>
                    <Atag
                      href="https://push-protocol.medium.com/"
                      target="_blank"
                      title={t('header.more.alt-blog')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.more.blog')}
                    </Atag>
                    <LinkToV2
                      to="/frens"
                      title={t('header.more.alt-push-ecosystem')}
                      background="transparent"
                      hoverBackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                    >
                      {t('header.more.push-ecosystem')}
                    </LinkToV2>
                    <Atag
                      href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                      target="_blank"
                      title={t('header.more.alt-media-kit')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.more.media-kit')}
                    </Atag>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 2)}
                    expanded={mobileMenuMap[2]}
                  >
                    <SpanV2
                      fontSize="18px"
                      fontWeight="500"
                      letterSpacing="-0.03em"
                      lineHeight="142%"
                      padding="16px"
                    >
                      {/* <FadeInAnimation wrapperElement="div" delay={0.75}> */}
                      {t('header.push-dao.title')}
                      {/* </FadeInAnimation> */}
                    </SpanV2>

                    {/* <FadeInAnimation wrapperElement="div" delay={0.75}> */}
                    <BsChevronDown
                      size={12}
                      className="chevronIcon"
                    />
                    {/* </FadeInAnimation> */}
                  </NavigationMenuHeader>

                  <NavigationMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[2]}
                  >
                    <Atag
                      href="https://pushprotocol.notion.site/Welcome-to-Push-DAO-b1c1e1281ce64400adaaae59f98e4d4c"
                      target="_blank"
                      title={t('header.push-dao.alt-notion')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.push-dao.notion')}
                    </Atag>
                    <Atag
                      href="https://gov.push.org"
                      target="_blank"
                      title={t('header.push-dao.alt-forum')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.push-dao.forum')}
                    </Atag>
                    <Atag
                      href="https://www.notion.so/pushprotocol/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                      title={t('header.push-dao.alt-grants')}
                      target="_blank"
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.push-dao.grants')}
                    </Atag>
                    <Atag
                      href="https://pushprotocol.notion.site/Push-Missions-b38048e307d949aeaf807f40396cc731"
                      title={t('header.push-dao.alt-missions')}
                      target="_blank"
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                    >
                      {t('header.push-dao.missions')}
                    </Atag>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <MenuHeader>
                    <LinkToV2
                      to="/brb"
                      title={'BRB'}
                      flex={isMobile ? 'initial' : '1'}
                      padding="0px 0px"
                      fontSize="18px"
                      fontWeight="500"
                      letterSpacing="-0.03em"
                      lineHeight="142%"
                      hoverBackground="none"
                      // alignItems="center"
                      margin={isMobile ? '16px 16px' : 'auto 0'}
                    >
                      Billion Reasons to Build
                    </LinkToV2>
                  </MenuHeader>
                  {/* <NavigationMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 2)}
                      expanded={mobileMenuMap[2]}
                    > */}

                  {/* </NavigationMenuHeader> */}
                </NavigationMenuItem>
              </NavigationMenu>
            </HeaderNavItemV>

            <ItemVV2
              flex="initial"
              flexDirection="row !important"
              flexWrap={isMobile ? 'wrap' : 'none'}
            >
              <LanguageItem showMobileMenu={showMobileMenu}>
                <LanguageMenuItem>
                  {/* <LanguageMenuItem expanded={mobileMenuMap[3]}> */}
                  <LanguageMenuHeader
                    onClick={(e) => onMobileHeaderMenuClick(e, 3)}
                    expanded={mobileMenuMap[3]}
                  >
                    <SpanV2
                      fontSize="18px"
                      fontWeight="500"
                      letterSpacing="-0.03em"
                      lineHeight="142%"
                      padding="16px 0px !important"
                    >
                      {/* <SpanV2
                        size="18px"
                        weight="500"
                        spacing="-0.03em"
                        lineHeight="142%"
                        padding="16px 0px !important"
                      > */}
                        {i18n && i18n.language == 'es' ? <EsSVG className='flag-icon'/> : (i18n && i18n.language == 'hi' ? <HiSVG className='flag-icon'/> : <EnSVG className='flag-icon'/>)}
                        {/* {i18n && i18n.language == 'hi' ? <HiSVG className='flag-icon'/> : <EnSVG className='flag-icon'/>} */}
                    
   {/* </SpanV2> */}
                        </SpanV2>
                        <BsChevronDown
                          size={12}
                          className="chevronIcon"
                        />
                    </LanguageMenuHeader>


                  <LanguageMenuContent
                    className="menuContent"
                    expanded={mobileMenuMap[3]}
                  >
                    <Atag
                      href="/"
                      target=""
                      title={t('header.language.english')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                      justifyContent="flex-start"
                      onClick={() => i18n.changeLanguage('en')}
                    >
                      <EnSVG className="flag-icon-drop" />
                      {t('header.language.english')}
                    </Atag>
                    <Atag
                      href="/"
                      target=""
                      title={t('header.language.spanish')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="230%"
                      letterSpacing="normal"
                      display="flex"
                      borderRadius="0px"
                      justifyContent="flex-start"
                      onClick={() => i18n.changeLanguage('es')}
                    >
                      <EsSVG className="flag-icon-drop" />
                      {t('header.language.spanish')}

                    </Atag>
                     <Atag
                      href="/"
                      target=""
                      title={t('header.language.hindi')}
                      background="transparent"
                      hoverbackground="#fff"
                      padding="7px 30px"
                       fontSize="16px"
                      fontWeight="400"
                      letterSpacing="normal"
                      lineHeight="230%"
                      display="flex"
                      borderRadius="0px"
                      justifyContent="flex-start"
                      onClick={() => i18n.changeLanguage('hi')}
                    >
                      <HiSVG className='flag-icon-drop'/>
                      {t('header.language.hindi')}
                    </Atag>
                  </LanguageMenuContent>
                </LanguageMenuItem>
              </LanguageItem>

              <DappLauncher
                showMobileMenu={showMobileMenu}
                className="launchDappBtn"
                href="https://app.push.org/"
                target="_blank"
                title={t('header.app-button.alt-title')}
                background="#DD44B9"
                borderRadius="16px"
                fontSize="18px"
                fontWeight="500"
                letterSpacing="-0.03em"
                lineHeight="26px"
                width="100%"
              >
                {t('header.app-button.title')}
              </DappLauncher>
            </ItemVV2>
          </HeaderItemH>
        </ContentV2>
      </SectionV2>
    </StyledHeader>
  );
}

const LanguageItem = styled.div`
  list-style: none;
  margin: 0px 16px 0px 0px;

  @media ${device.laptop} {
    margin: 0 0 16px auto;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

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
  @media (min-width: 1213px) {
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

  column-gap: 54px;

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
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

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

const LanguageMenuItem = styled.li`
  position: relative;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    display: block;
  }

  .flag-icon-drop {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: block;
  }

  padding-left: 16px;

  & span {
    font-family: 'Strawford';

    padding: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
  }

  // &:hover {
  // & span {
  //   color: ${(props) => (props.expanded ? '#dd44b9' : '')};
  // }

  // & .chevronIcon {
  //      transform: ${(props) => (props.expanded ? 'rotate(180deg)' : '')};
  // }

  // & .menuContent {
  //   display: ${(props) => (props.expanded ? 'block' : 'none')};
  // }
  // }

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

const MenuHeader = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  margin: auto 0;
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    flex: initial;
    margin: 0 0;
  }
`;

const LanguageMenuHeader = styled.div`
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
    justify-content: flex-end;

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

const LanguageMenuContent = styled.div`
  list-style: none;

  font-family: 'Strawford', 'Manrope', sans-serif;
  display: none;
  position: absolute;

  // logic - this should touch the parent li for enough hover surface area.
  top: 54px;

  left: 50%;
  transform: translateX(-90%);
  z-index: 1;
  background: #2a2a39;
  border-radius: 16px 4px 16px 16px;
  padding: 10px 0px;

  & a {
    min-width: 162px;
  }

  @media ${device.laptop} {
    min-width: 100%;

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

const DappLauncher = styled(Atag)`
  padding: 14px 32px;

  @media ${device.laptop} {
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

export default Header;
