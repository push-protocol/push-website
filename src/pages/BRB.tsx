// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageMeta from '../config/pageMeta';

import PageWrapper from '../components/PageWrapper';
import { ReactComponent as PushLogo } from '../assets/pushIcon.svg';
import { ReactComponent as Discord } from '../assets/Discord-BRB.svg';
import { ReactComponent as X } from '../assets/X-BRB.svg';
import ImageBRB from '../assets/Image-BRB.png';
import MobileBRB from '../assets/Mobile-BRB.png';

import { Anchor, LinkTo, Span } from 'components/SharedStyling';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonV2, ContentV2, ItemVV2, SpanV2 } from 'components/SharedStylingV2';
import GLOBALS, { device } from 'config/globals';
import { BsChevronDown } from 'react-icons/bs';
import useMediaQuery from 'hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';
import ImageHolder from 'components/ImageHolder';
import { Partners } from 'components/BRBPartners';
import { CommunityPartners } from 'components/BRBCommunityPartners';

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
        <NavList>
          <MenuTop flex="initial">
            <PushLogoBlackContainer
              className="headerlogo"
              flex="initial"
            >
              <LinkTo
                to="/"
                aria-label="Push"
              >
                <PushLogo />
              </LinkTo>
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

        <ItemTop>
          <ItemVV2 margin="131px 0 0 0">
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
            <ButtonV2
              borderRadius="24px"
              background="#E64DE9"
              border="1px solid #FC6DFF"
              fontFamily="Glancyr !important"
            >
              Register Now
            </ButtonV2>
            <ButtonV2
              borderRadius="24px"
              background="transparent"
              border="1px solid #E64DE9"
              fontFamily="Glancyr !important"
            >
              Join the conversation
            </ButtonV2>
          </NavButtons>
        </ItemTop>
        <Partners />
        <CommunityPartners />
      </BrbWrapper>
    </PageWrapper>
  );
}

const MemberImage = styled(ImageHolder)``;

const ItemTop = styled.main`
  width: 100%;
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
      width: 100%;
    }
  }
`;

const NavList = styled.div`
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  flex: initial;
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

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
    padding: 4px 7px;
    margin: 10px 10px 10px 10px;
    box-sizing: border-box;
    // border-radius: 55px;
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
  margin: 22px auto 0 auto;
`;

const NavButtons = styled.div`
  margin: 39px 0 0 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
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
    margin: 0 20px 10px 20px;
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

export default BRB;
