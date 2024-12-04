// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from '@docusaurus/router';

// External Components
import { useTranslation } from 'react-i18next';
import { BsTwitterX } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import {
  A,
  Content,
  ItemH,
  ItemV,
  LinkTo,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import DiscordSVG from '@site/static/assets/website/shared/discord.svg';
import GithubSVG from '@site/static/assets/website/shared/github.svg';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';

// Internal Configs
import { device } from '@site/src/config/globals';
import { HeaderList } from '@site/src/config/HeaderList';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSiteBaseUrl } from '../../utils/useSiteBaseUrl';

const tosPrivacyLinks = [
  { href: '/tos', text: 'footer.mail-section.tos' },
  { href: '/privacy', text: 'footer.mail-section.privacy' },
];

function ChainFooter() {
  // Internationalization
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseURL = useSiteBaseUrl() || '';

  // for navigation
  const history = useHistory();
  const location = useLocation();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  const handleNavigation = (e, href, id, target) => {
    e.stopPropagation();
    if (href) {
      const fullHref = href.includes('http') ? href : `${baseURL}${href}`;
      target === '_self'
        ? (window.location.href = fullHref)
        : window.open(fullHref, target || '_blank');
    } else if (id) {
      const scrollTarget = document.getElementById(id);
      if (location?.pathname !== `${baseURL}/`) {
        history.push(`${baseURL}/`);
        setTimeout(
          () => scrollTarget?.scrollIntoView({ behavior: 'smooth' }),
          300
        );
      } else {
        scrollTarget?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ChainFooterContainer>
      <DividerImg
        src={
          require(`@site/static/assets/website/chain/chainFeaturesDivider.png`)
            .default
        }
        srcSet={`${
          require('/static/assets/website/chain/chainFeaturesDivider@2x.png')
            .default
        } 2x, ${require('/static/assets/website/chain/chainFeaturesDivider@3x.png').default} 3x`}
        alt={`Chain Features Divider`}
        width='-webkit-fill-available'
        height='auto'
        loading='lazy'
      />
      <StyledFooter>
        <FooterSection id='footer'>
          <Content alignSelf='center'>
            {/* footer links */}
            <ItemH flex='1' margin='0px 0 0 0'>
              <FooterContainer>
                <FooterColumn>
                  <FooterLinkItem>
                    <LinkTo
                      className='pushLogo'
                      to={useBaseUrl('/')}
                      title='Push'
                      onClick={scrollToTop}
                      justifyContent={isMobile ? 'center' : 'flex-start'}
                      padding='0px 0px'
                    >
                      <PushLogo style={{ margin: '0px 9px 0px 4px' }} />
                    </LinkTo>

                    <Span fontWeight='500' fontSize='16px' lineHeight='142%'>
                      Build Universal Apps
                    </Span>
                  </FooterLinkItem>
                </FooterColumn>

                <FooterColumns>
                  {['developers', 'community', 'resources'].map((key) => (
                    <FooterColumn key={key}>
                      <FooterLinks>
                        <Span
                          fontWeight='700'
                          fontSize='18px'
                          lineHeight='140%'
                          letterSpacing='-0.36px'
                          textTransform='uppercase'
                          margin='0 0 8px 0'
                        >
                          {t(`header.${key}.title`)}
                        </Span>
                        {HeaderList[key]?.map((item) => (
                          <FooterAnchorSecondary
                            as='div'
                            key={item.title}
                            title={t(item.title)}
                            onClick={(e) =>
                              handleNavigation(
                                e,
                                item.href,
                                item.id,
                                item.target
                              )
                            }
                          >
                            {t(item.title)}
                          </FooterAnchorSecondary>
                        ))}
                      </FooterLinks>
                    </FooterColumn>
                  ))}
                </FooterColumns>
              </FooterContainer>
            </ItemH>

            {/* Social Icon Links */}
            <SocialLinks>
              <ItemV
                flexDirection={isTablet ? 'column' : 'row'}
                gap={isMobile ? '24px' : '16px'}
                justifyContent='flex-start'
              >
                <ItemH flex='0' gap='16px' className='pushLinks'>
                  <FooterAnchorIcon
                    href='https://twitter.com/pushprotocol'
                    title='Push Twitter'
                    target='_blank'
                  >
                    <BsTwitterX size={30} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://github.com/push-protocol/'
                    title='Push Github'
                    target='_blank'
                  >
                    <GithubSVG width={30} height={30} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://discord.gg/pushprotocol'
                    title='Push Discord'
                    target='_blank'
                  >
                    <DiscordSVG width={30} height={30} />
                  </FooterAnchorIcon>
                </ItemH>
              </ItemV>

              <ItemH justifyContent='flex-end' className='pushLinks' gap='12px'>
                {tosPrivacyLinks.map(({ href, text }) => (
                  <FooterAnchorSecondary
                    as={LinkTo}
                    key={href}
                    to={useBaseUrl(href)}
                    onClick={() => document.documentElement.scrollTo(0, 0)}
                  >
                    {t(text)}
                  </FooterAnchorSecondary>
                ))}
              </ItemH>
            </SocialLinks>
          </Content>
        </FooterSection>
      </StyledFooter>
    </ChainFooterContainer>
  );
}

const ChainFooterContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const StyledFooter = styled.footer`
  font-family: N27;
  display: flex;
  position: relative;
  background: #000;
  width: 100%;
  margin: -4px auto;
`;

const DividerImg = styled.img`
  width: -webkit-fill-available;
`;

const FooterSection = styled(Section)``;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #ffffff;

  flex-direction: column;

  align-items: center;
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 90px;

  @media ${device.tablet} {
    gap: 20px;
    margin: 48px 0 0 0;
  }

  @media ${device.mobileL} {
    gap: 20px;
    justify-content: space-between;

    /* Ensure two items per row */
    & > * {
      flex-basis: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 154px;
  gap: 16px;

  @media ${device.mobileL} {
    min-width: 100%;
    margin-top: 32px;
  }
`;

const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  //   min-width: 280px;

  svg {
    width: 106px;
    height: 100px;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;
    // min-width: 100%;
    gap: 24px;
  }
`;

const SocialLinks = styled(ItemH)`
  margin: 64px 0 0px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;

    & .pushLinks {
      justify-content: center;

      & a.pushLogo {
        flex: 0 0 100%;
      }
    }

    & .pushPlatformLinks {
      justify-content: center;
    }
  }
  @media ${device.mobileL} {
    flex-direction: column;
    gap: 24px;
  }
`;

const FooterAnchorSecondary = styled(A)`
  padding: 0px;
  color: #e8eff8 !important;
  font-family: N27;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover {
    color: #fff !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(A)`
  border-radius: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  opacity: 1;
  background: transparent;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 0.25s ease-out;
  }
`;

export default ChainFooter;
