// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageMeta from '../config/pageMeta';

import PageWrapper from '../components/PageWrapper';
import { ReactComponent as PushLogo } from '../assets/pushIcon.svg';
import { ReactComponent as Discord } from '../assets/Discord-BRB.svg';
import { ReactComponent as ArrowIcon } from '../assets/ArrowIcon.svg';
import { ReactComponent as X } from '../assets/X-BRB.svg';
import ImageBRB from '../assets/Image-BRB.png';
import MobileBRB from '../assets/Mobile-BRB.png';
import Schedules from 'components/Schedules';

import { Anchor, LinkTo, Span } from 'components/SharedStyling';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonV2, ItemVV2, SectionV2, SpanV2 } from 'components/SharedStylingV2';
import GLOBALS, { device } from 'config/globals';
import { BsChevronDown } from 'react-icons/bs';
import useMediaQuery from 'hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';
import ImageHolder from 'components/ImageHolder';
import { Partners } from 'components/BRBPartners';
import { CommunityPartners } from 'components/BRBCommunityPartners';
import BRBParallax from 'components/BRBParallax';

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

function BRB() {
  const isMobile = useMediaQuery(device.mobileL);
  const isLaptop = useMediaQuery(device.laptop);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, bkg] = useScrollDirection(isMobileMenuOpen);
  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);

  const { t, i18n } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const showMobileMenu = isMobile && isMobileMenuOpen;
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

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
  return (
    <PageWrapper
      pageName={PageMeta.BRB.pageName}
      pageTitle={PageMeta.BRB.pageTitle}
    >
      <BrbWrapper>
        {/* header style */}
        <StyledHeader
          showMobileMenu={showMobileMenu}
          className={`header ${headerClass}`}
        >
          <SectionV2 padding="0 0 0 0">
            <NavList isMobileMenuOpen={isMobileMenuOpen}>
              <MenuTop flex="initial">
                <PushLogoBlackContainer
                  className="headerlogo"
                  flex="initial"
                >
                  {/* <LinkTo to='/' aria-label='Push'> */}
                  <PushLogo />
                  {/* </LinkTo> */}
                  #BRB
                </PushLogoBlackContainer>

                <MobileMenuToggleIcon>
                  {isMobileMenuOpen ? (
                    <AiOutlineClose
                      size={28}
                      color="#fff"
                      onClick={toggleMobileMenu}
                    />
                  ) : (
                    <GiHamburgerMenu
                      size={28}
                      color="#fff"
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
                    <NavigationMenuHeader>
                      <Span
                        size="18px"
                        weight="500"
                        spacing="-0.03em"
                        lineHeight="142%"
                        family="Glancyr !important"
                      >
                        Partners
                      </Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader>
                      <Span
                        size="18px"
                        weight="500"
                        spacing="-0.03em"
                        lineHeight="142%"
                        family="Glancyr !important"
                      >
                        Schedule
                      </Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader>
                      <Span
                        size="18px"
                        weight="500"
                        spacing="-0.03em"
                        lineHeight="142%"
                        family="Glancyr !important"
                      >
                        Playground
                      </Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader>
                      <Span
                        size="18px"
                        weight="500"
                        spacing="-0.03em"
                        lineHeight="142%"
                        family="Glancyr !important"
                      >
                        Support
                      </Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>
                </NavigationMenu>
              </HeaderNavItemV>

              <ItemVV2
                flex="initial"
                flexDirection="row !important"
                flexWrap={isLaptop ? 'wrap' : 'none'}
              >
                <IconMenu
                  role="menu"
                  className="navigationMenu"
                  showMobileMenu={isMobileMenuOpen}
                >
                  <NavigationMenuItem>
                    <NavigationMenuHeader>
                      <Discord />
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader>
                      <X />
                    </NavigationMenuHeader>
                  </NavigationMenuItem>
                </IconMenu>
              </ItemVV2>
            </NavList>
          </SectionV2>
        </StyledHeader>

        <ItemTop>
          <ItemVV2>
            <MemberImage
              className="pushMissingSvg"
              src={isMobile ? MobileBRB : ImageBRB}
              srcSet={isMobile ? MobileBRB : ImageBRB}
            />
          </ItemVV2>

          <NavText>
            Get ready for an epic tech showdown across 18 cities in India, where amazing minds come together to solve
            one big problem, with a chance to win $100,000 USD in prizes!
          </NavText>

          <NavButtons>
            <ButtonItem
              borderRadius="24px"
              background="#E64DE9"
              border="1px solid #FC6DFF"
              fontFamily="Glancyr !important"
              padding="16px 32px"
            >
              Register Now
            </ButtonItem>
            <ButtonBar
              borderRadius="24px"
              background="transparent"
              border="1px solid #E64DE9"
              fontFamily="Glancyr !important"
              padding="16px 32px"
            >
              Join the conversation
            </ButtonBar>
          </NavButtons>
        </ItemTop>

        <BRBParallax />

        <Partners />

        <CommunityPartners />

        <Schedules />
        <ItemFooter>
          <FooterItem>
            <SpanContent
              family="Glancyr"
              size={isLaptop ? '89px' : '112px'}
              weight="500"
              color="#E64DE9"
            >
              Drop Us a GM!
            </SpanContent>
          </FooterItem>

          <FooterCol>
            <FooterBar>
              <i>
                <Discord />
              </i>

              <Span
                family="Glancyr"
                size={isLaptop ? '24px' : '36px'}
                weight="200"
                color="#6F8BEE"
              >
                24x7 Support on Discord
              </Span>

              <ArrowIcon />
            </FooterBar>

            <FooterBar>
              <i>
                <X className="discord" />
              </i>

              <Span
                family="Glancyr"
                size={isLaptop ? '24px' : '36px'}
                weight="200"
                color="#6F8BEE"
              >
                Updates & Announcements
              </Span>

              <ArrowIcon />
            </FooterBar>
          </FooterCol>
        </ItemFooter>

        <BottomGrad>
          <Span
            family="Glancyr"
            size={isMobile ? '17px' : '17px'}
            weight="200"
            color="#FFF"
          >
            © 2023 Push. All rights reserved.
          </Span>
        </BottomGrad>
      </BrbWrapper>
    </PageWrapper>
  );
}

const MemberImage = styled(ImageHolder)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ItemTop = styled.main`
  width: 100%;
  margin: 261px 0 261px 0;

  @media ${device.tablet} {
    width: 100%;
    margin: 125px 0 261px 0;
  }
`;

const ButtonItem = styled(ButtonV2)`
  vertical-align: middle;
  font-size: 18px;
  font-style: normal;
  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(230, 77, 233, 0.5);
  }
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const ButtonBar = styled(ButtonV2)`
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const BrbWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  & .pushMissingSvg {
    width: 900px;
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.mobileL} {
      width: 248px;
    }
  }
`;

const NavList = styled.div`
  position: relative;
  width: 1243px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 55px;
  border: 1px solid #2a2a39;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  padding: 7px 13px;
  margin-top: 51px;

  @media ${device.laptop} {
    flex-direction: column;
    width: calc(100%);
    padding: 4px 7px;
    margin: 10px 10px;
    box-sizing: border-box;
    border-radius: ${(props) => (props.isMobileMenuOpen ? '32px' : '55px')};
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

const NavText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Glancyr;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 844px;
  text-align: center;
  margin: 20px auto 0 auto;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 248px;
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }
`;

const NavButtons = styled.div`
  margin: 39px 0 0 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    margin: 50px auto 0 auto;
    flex-direction: column;
    width: 252px;
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

const PushLogoBlackContainer = styled(ItemVV2)`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #fff;
  font-family: Glancyr;
  font-size: 24.207px;
  font-style: normal;
  font-weight: 700;
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptop} {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const HeaderNavItemV = styled(ItemVV2)`
  margin: 0 ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0 ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};

  @media ${device.laptop} {
    margin: ${(props) => (props.showMobileMenu ? '20px 0 20px 20px' : '0')};
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
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  & span {
    font-family: 'Strawford';

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

const ItemFooter = styled.div`
  position: relative;
  top: 150px;
  width: 1280px;
  height: 418px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    height: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const FooterItem = styled.div`
  border-radius: 48px;
  background: #2a2a39;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  padding: 0px 50px;
  box-sizing: border-box;

  @media ${device.mobileL} {
    border-radius: 32px;
    padding: 40px 20px;
  }
`;

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 48px;
  box-sizing: border-box;
  width: 100%;

  border-radius: 48px;
  background: #2a2a39;
  flex: 1;
  span {
    width: 313px;
  }
  & i {
    & svg {
      transform: scale(1.8) !important;
      margin-right: 24px;

      @media ${device.mobileL} {
        transform: scale(1.2) !important;
      }
    }
  }
  &. svg {
    margin-left: auto;
  }

  @media ${device.mobileL} {
    border-radius: 32px;
    padding: 35px 20px;
    box-sizing: border-box;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
  width: 100%;
`;

const SpanContent = styled(Span)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media ${device.laptop} {
    -webkit-line-clamp: 3;
  }
`;

const BottomGrad = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(70, 37, 244, 0.8) 75.63%,
    rgba(251, 142, 255, 0.8) 100%
  );
  height: 340px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 57px;
  box-sizing: border-box;
`;

export default BRB;
