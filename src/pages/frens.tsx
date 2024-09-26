// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';

// External Components
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import ChannelItem, { Tilt } from '@site/src/components/ChannelItem';
import FadeInAnimation from '@site/src/components/FadeInAnimation';
import { MailingSignup } from '@site/src/components/MailingSignup/MailingSignup';
import { objChannelList } from '@site/src/config/ChannelList';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import Spinner, {
  SPINNER_TYPE,
} from '@site/src/components/reusables/spinners/SpinnerUnit';
import { BiSearch } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

// Internal Configs
import { FrensHeaderList } from '@site/src/config/FrensHeaderList';
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';
import {
  Content,
  H2,
  HeroHeader,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';

const FrensText = () => {
  // Internationalization
  const { t } = useTranslation();

  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const [channels, setChannels] = useState([]);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState('All');
  const [count, setCount] = useState(objChannelList?.length);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const options = {
    scale: 1,
    speed: 1000,
    max: 20,
    // glare: true,
    // 'max-glare': 1,
    // "glare-prerender": false,
  };

  const typeList = [
    {
      name: 'All',
    },
    {
      name: 'DeFi',
    },
    {
      name: 'DAO',
    },
    {
      name: 'NFT',
    },
    {
      name: 'Metaverse',
    },
    {
      name: 'Tooling',
    },
    {
      name: 'Infrastructure',
    },
    {
      name: 'Social',
    },
    {
      name: 'Service',
    },
    {
      name: 'Gaming',
    },
    {
      name: 'Media',
    },
    {
      name: 'Wallet',
    },
    {
      name: 'Hackathons',
    },
  ];

  useEffect(() => {
    fetchChannels();
  }, [objChannelList]);

  const fetchChannels = () => {
    let freshPage = 0;
    setPage(freshPage);
    if (objChannelList.length) {
      let list = objChannelList?.slice(freshPage, freshPage + 9);
      setTimeout(() => {
        setLoading(false);
        setChannels(list);
      }, 1000);
    }
  };

  useEffect(() => {
    if (search.length > 0 || active !== 'All') return;
    fetchChannels();
  }, [search]);

  const ShowMore = async () => {
    //page
    let newPage = page + 9;
    setPage(newPage);

    try {
      setLoading(true);
      let data = objChannelList?.slice(newPage, newPage + 9);
      setTimeout(() => {
        setChannels((current) => [...current, ...data]);
      }, 200);
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  // pagination function for Hackathons Tab
  const showMoreHackathons = async () => {
    let newPage = page + 18;
    setPage(newPage);

    let sortList = objChannelList.filter((x) => x.type === 'Hackathons');

    try {
      setLoading(true);
      let data = sortList?.slice(newPage, newPage + 18);
      setTimeout(() => {
        setChannels((current) => [...current, ...data]);
      }, 200);
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  const channelSearch = async (e) => {
    let query = e.target.value.toLowerCase();
    setSearch(e.target.value);
    if (e.target.value?.length == 0) return;

    try {
      setLoading(true);
      const data = objChannelList.filter((x) =>
        x.name.toLowerCase().includes(query)
      );
      setChannels(data);
    } catch (error) {
      console.error('Channels API data fetch error: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (name) => {
    setActive(name);
    setSearch('');
    setPage(0); // resets the pagination count
    if (name == 'All') {
      // filter for All category
      fetchChannels();
      setCount(objChannelList.length);
    } else if (name === 'Hackathons') {
      // filter for Hackathons category
      setLoading(true);
      let sortList = objChannelList.filter((x) => x.type === name);
      setCount(sortList.length);
      sortList = sortList?.slice(page, page + 9);

      setChannels(sortList);
      setLoading(false);
    } else {
      // filter for rest of the categories
      setLoading(true);
      let sortList = objChannelList.filter((x) => x.type === name);
      setChannels(sortList);
      setLoading(false);
      setCount(sortList.length);
    }
  };

  useEffect(() => {
    floatAnimation('.aave');
    floatAnimationSecond('.lens');
    floatAnimationThird('.safe');
    floatAnimation('.stop');
    floatAnimationSecond('.snapshot');
    floatAnimationThird('.qidao');
    floatAnimation('.bancor');
    floatAnimationSecond('.coindesk');
    floatAnimationThird('.lifi');
    floatAnimation('.aragon');
    floatAnimationSecond('.meanfinance');
    floatAnimationThird('.uniswap');
  }, []);

  const floatAnimation = (element) => {
    var tl = gsap.timeline({ repeat: -1 });
    /*Can Animation*/
    tl.to(element, {
      duration: '3',
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '2',
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '-=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '+=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, { duration: '3', y: '-=50', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=50', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=30', ease: 'Power1.easeInOut' });
    gsap.to(tl, { duration: '27', ease: 'Power1.easeInOut' });
  };

  const floatAnimationSecond = (element) => {
    var tl = gsap.timeline({ repeat: -1 });
    /*Can Animation*/
    tl.to(element, { duration: '3', y: '+=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=50', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=50', ease: 'Power1.easeInOut' });
    tl.to(element, {
      duration: '3',
      y: '+=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '-=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '2',
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    gsap.to(tl, { duration: '27', ease: 'Power1.easeInOut' });
  };

  const floatAnimationThird = (element) => {
    var tl = gsap.timeline({ repeat: -1 });
    /*Can Animation*/
    tl.to(element, { duration: '2', y: '+=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '2', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '2', y: '+=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=30', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '+=50', ease: 'Power1.easeInOut' });
    tl.to(element, { duration: '3', y: '-=50', ease: 'Power1.easeInOut' });
    tl.to(element, {
      duration: '3',
      y: '+=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '-=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '2',
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    tl.to(element, {
      duration: '3',
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    });
    gsap.to(tl, { duration: '27', ease: 'Power1.easeInOut' });
  };

  return (
    <Layout
      title={PageMeta.FRENS.pageTitle}
      description={PageMeta.FRENS.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/frens' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push | Frens Of Push' />
        <meta
          property='og:description'
          content='Explore hundreds of applications building with Push worldwide across DeFi, NFTs, Gaming, Dev tools, and more.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/frenspagepreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pushprotocol' />
        <meta name='twitter:title' content='Push | Frens Of Push' />
        <meta
          name='twitter:description'
          content='Explore hundreds of applications building with Push worldwide across DeFi, NFTs, Gaming, Dev tools, and more.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/frenspagepreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://twitter.com/pushprotocol',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <Section flexDirection='column' background='white !important'>
        <AnimationSection
          minHeight='70vh'
          padding='50px 0px 70px 0px'
          margin='0 auto'
        >
          {FrensHeaderList.map((item) => {
            return (
              <Image
                width='auto'
                src={
                  require(
                    `@site/static/assets/website/frens/${item.srcref}.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/frens/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/frens/${item.srcref}@3x.webp`).default} 3x`}
                alt={`${item?.alt}`}
                className={item.classname}
                loading='lazy'
              />
            );
          })}

          <Content alignSelf='center'>
            <ItemH flexDirection='column' flex='0' justifyContent='center'>
              <HeroHeader color='#fff'>{t('frens.hero.title')}</HeroHeader>
              <HeroDesc
                textAlign='center'
                margin='20px 0 0 0'
                letterSpacing='-0.03em'
                color='#fff'
                fontWeight='400'
                fontSize='23px'
              >
                {t('frens.hero.description.part1')} {!isTablet && <br />}{' '}
                {t('frens.hero.description.part2')}
              </HeroDesc>
            </ItemH>
          </Content>
        </AnimationSection>

        <Section id='story' background='white !important'>
          <Content alignSelf='center' justifyContent='flex-start'>
            <PushRow>
              <ItemH justifyContent='flex-start'>
                <ResponsiveH2
                  fontSize='40px'
                  fontWeight='500'
                  letterSpacing='-0.02em'
                  lineHeight='110%'
                >
                  {t('frens.powered-section.title')}
                </ResponsiveH2>
              </ItemH>
              <SearchContainer maxWidth='350px' justifyContent='flex-end'>
                <Wrapper>
                  <BiSearch size='23' color='#121315' />
                  <input
                    type='text'
                    value={search}
                    placeholder={t('frens.powered-section.search-placeholder')}
                    onChange={channelSearch}
                    className='input-text'
                  />
                </Wrapper>
              </SearchContainer>
            </PushRow>

            <ToggleSection>
              {typeList.map((item, i) => (
                <ToggleButton
                  key={item?.name}
                  active={active === item?.name ? true : false}
                  onClick={() => handleSort(item?.name)}
                >
                  <Span>{item?.name}</Span>

                  {active === item?.name && <b>{count}</b>}
                </ToggleButton>
              ))}
            </ToggleSection>

            <ChannelsSection>
              {channels?.map((item, i) => (
                <Channels key={item.ipfshash}>
                  {isMobile && <ChannelItem channelProp={item} />}

                  {!isMobile && (
                    <Tilt options={options} className='box'>
                      <ChannelItem channelProp={item} delay={0.25} />
                    </Tilt>
                  )}
                </Channels>
              ))}
            </ChannelsSection>

            {search && !loading && channels.length === 0 && (
              <CenteredContainerInfo>
                <DisplayNotice>
                  {t('frens.powered-section.no-channels-query')}
                </DisplayNotice>
              </CenteredContainerInfo>
            )}

            {active !== 'All' && !loading && count === 0 && (
              <CenteredContainerInfo>
                <DisplayNotice>
                  {t('frens.powered-section.no-channels-category')}
                </DisplayNotice>
              </CenteredContainerInfo>
            )}

            {loading && (
              <ItemH>
                <Spinner
                  size={70}
                  color={GLOBALS.COLORS.PRIMARY_COLOR}
                  type={SPINNER_TYPE.PROCESSING}
                />
              </ItemH>
            )}

            {!loading && active === 'All' && search.length === 0 && (
              <ShowMoreSection onClick={ShowMore}>
                <FiChevronDown size={23} />
                <b>{t('frens.powered-section.show-more-button')}</b>
              </ShowMoreSection>
            )}

            {!loading && active === 'Hackathons' && search.length === 0 && (
              <ShowMoreSection onClick={showMoreHackathons}>
                <FiChevronDown size={23} />
                <b>{t('frens.powered-section.show-more-button')}</b>
              </ShowMoreSection>
            )}
          </Content>
        </Section>

        {/* Mailing List Section */}
        <Section background='white !important'>
          <Content>
            <SignupBox margin='0 0 0px 0'>
              <ItemV
                justifyContent='flex-start'
                alignItems='flex-start'
                gap='12px'
              >
                <ResponsiveH2
                  color='#09090B'
                  size='40px'
                  weight='700'
                  spacing='-0.02em'
                  lineHeight='110%'
                  margin='0'
                >
                  {t('frens.email-section.title')}
                </ResponsiveH2>
                <Span
                  color='#303C5E'
                  fontSize='20px'
                  fontWeight='400'
                  letterSpacing='-0.03em'
                  lineHeight='138.5%'
                >
                  {t('frens.email-section.text')}
                </Span>
              </ItemV>

              <ItemV>
                <MailingSignup
                  showArrow={true}
                  background='transparent'
                  borderColor='rgba(255, 255, 255, 0.80)'
                  textColor='#fff'
                  inputWidth='100%'
                />
              </ItemV>
            </SignupBox>
          </Content>
        </Section>
      </Section>
    </Layout>
  );
};

const HeroDesc = styled(Span)`
  @media ${device.mobileL} {
    font-weight: 300;
    font-size: 18px;
  }
`;

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisplayNotice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background: rgb(244, 245, 250);
`;

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ChannelsSection = styled.div`
  margin: 50px 0px 0px 0px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ToggleButton = styled.div`
  border: ${(props) =>
    props.active ? '1px solid transparent' : '1px solid #BAC4D6'};
  border-radius: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  left: 0;
  margin: 5px 5px;
  background: ${(props) => (props.active ? '#D53893' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  &:hover {
    background: ${(props) => (props.active ? '#D53893' : '#FFDBF0')};
    border: 1px solid transparent;
    cursor: pointer;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    border: none;
    color: ${(props) => (props.active ? '#fff' : '#000')};
  }

  b {
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.03em;
    margin-left: 30px;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const SignupBox = styled(ItemH)`
  background: rgba(214, 177, 242, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 32px;
  padding: 72px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const SearchContainer = styled(ItemH)`
  @media ${device.mobileL} {
    margin-top: 20px;
  }
`;

const AnimationSection = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #121315;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  overflow-x: clip;

  @media ${device.mobileL} {
    overflow: hidden;
  }

  padding-bottom: 50px;
  .aave {
    position: absolute;
    top: 20%;
    left: 65%;
    right: 0;
    bottom: 0;

    @media ${device.tablet} {
      display: none;
    }
  }

  .lens {
    position: absolute;
    top: 50%;
    left: 80%;
    right: 0;
    bottom: 0;

    @media ${device.laptop} {
      display: none;
    }

    @media ${device.tablet} {
      left: 50%;
      opacity: 0.6;
    }
  }

  .safe {
    position: absolute;
    top: 30%;
    left: 85%;
    right: 0;
    bottom: 0;

    @media ${device.tablet} {
      display: none;
    }
  }

  .stop {
    position: absolute;
    top: 70%;
    left: 70%;
    right: 0;
    bottom: 0;

    @media ${device.tablet} {
      display: none;
    }
  }

  .snapshot {
    position: absolute;
    top: 20%;
    left: 55%;
    right: 0;
    bottom: 0;
  }

  .qidao {
    position: absolute;
    top: 75%;
    left: 45%;
    right: 0;
    bottom: 0;
    z-index: 5;

    @media ${device.tablet} {
      display: none;
    }
  }

  .bancor {
    position: absolute;
    top: 65%;
    left: 35%;
    right: 0;
    bottom: 0;
  }

  .coindesk {
    position: absolute;
    top: 75%;
    left: 25%;
    right: 0;
    bottom: 0;
    z-index: 5;

    @media ${device.tablet} {
      left: 45%;
    }
  }

  .lifi {
    position: absolute;
    top: 60%;
    left: 20%;
    right: 0;
    bottom: 0;

    @media ${device.tablet} {
      display: none;
    }
  }

  .aragon {
    position: absolute;
    top: 70%;
    left: 10%;
    right: 0;
    bottom: 0;

    @media ${device.mobileL} {
      left: 5%;
    }
  }
  .meanfinance {
    position: absolute;
    top: 30%;
    left: 10%;
    right: 0;
    bottom: 0;

    @media ${device.laptop} {
      display: none;
    }

    @media ${device.tablet} {
      display: flex;
      opacity: 0.6;
      left: 5%;
    }
  }

  .uniswap {
    position: absolute;
    top: 20%;
    left: 20%;
    right: 0;
    bottom: 0;

    @media ${device.tablet} {
      left: 65%;
      top: 10%;
    }
  }
  @media ${device.tablet} {
    background: #121315;
    border-bottom-left-radius: 48px;
    border-bottom-right-radius: 48px;
    padding-bottom: 0px;
  }
`;

const PushRow = styled(ItemH)`
  margin: 80px 0 50px 0;

  @media ${device.tablet} {
    margin-top: 80px;
  }

  @media ${device.mobileL} {
    margin-top: 80px;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  column-gap: 6px;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  padding: 16px;
  justify-content: space-between;

  @media ${device.tablet} {
    column-gap: 3px;
  }

  input {
    all: unset;
    box-sizing: border-box;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: normal;
    letter-spacing: -0.03em;
    color: #121315;
    width: 100%;
    padding: 0px;

    &::placeholder {
      color: #121315;
      opacity: 1;
      font-size: 20px;
    }

    @media ${device.tablet} {
      min-width: fit-content;
    }
  }
`;

const Channels = styled.div`
  flex: 1;
  height: 100% !important;
  .box {
    flex: 1;
    height: 100% !important;
  }
`;

const ShowMoreSection = styled.div`
  border: 1px solid #bac4d6;
  border-radius: 24px;
  margin: 70px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
  cursor: pointer;
  b {
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #1e1e1e;
  }
`;

export default FrensText;
