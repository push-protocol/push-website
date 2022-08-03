import React from "react";
import ReactGA from 'react-ga';
import MetaTags, { ReactTitle } from 'react-meta-tags';

import styled, { css } from 'styled-components';
import { Section, SectionFS, SectionFSHero, Content, Item, ItemH, ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, Image1, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField, DottedSection } from 'components/SharedStyling';

import ScrollTrigger from 'react-scroll-trigger';

import YouTube from 'react-youtube';
import { Tweet } from 'react-twitter-widgets'

import Loader from 'react-loader-spinner';

import Wave from 'react-wavify';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

import EPNSChannelItems from 'components/EPNSChannelItems';
import Medium from 'components/Medium';
import TeamMember from 'components/TeamMember';
import Advisor from 'components/Advisor';

// Import lists
import featuredList from 'config/featuredList';
import partnersList from 'config/partnersList';
// import teamList from 'config/teamList';
// import advisorsList from 'config/advisorsList';
import investorsList from 'config/investorsList';

import Snowfall from 'react-snowfall';

const randomTeamQuotes = [
  "ONE AMONG US DOESN'T LIKE FARMING 🙀😱",
  "ONE AMONG US HAS A CAT 🐈",
  "ONE AMONG US HAS A NAME KNOWN TO SOME 🦸🏻",
  "ONE AMONG US HAS MORE BTC THAN ETH 😬",
]

const contactFormTopics = [
  'Support', 'Integrate', 'Career', 'Others'
];

// Create Header
function Home() {
  ReactGA.pageview('/home');

  // For the hero banner
  const [animateHero, setAnimateHero] = React.useState(true);

  // For Featured
  const [featuredShowAll, setFeaturedShowAll] = React.useState(false);
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);

  // For the mailing list
  const [mailListProcessing, setMailListProcessing] = React.useState(0);
  const [mailListName, setMailListName] = React.useState('');
  const [mailListEmail, setMailListEmail] = React.useState('');
  const [mailListError, setMailListError] = React.useState('');

  // For Integrations
  const [integrationShowAll, setIntegrationShowAll] = React.useState(false);

  // For Partners
  const [partnersShowAll, setPartnersShowAll] = React.useState(false);

  // For the contact form
  const [contactFormProcessing, setContactFormProcessing] = React.useState(0);
  const [contactFormName, setContactFormName] = React.useState('');
  const [contactFormEmail, setContactFormEmail] = React.useState('');
  const [contactFormTopic, setContactFormTopic] = React.useState(contactFormTopics[0]);
  const [contactFormSub, setContactFormSub] = React.useState('');
  const [contactFormMsg, setContactFormMsg] = React.useState('');
  const [contactFormError, setContactFormError] = React.useState('');

  React.useEffect(() => {
  });

  // Handle ANIMATIONS
  // ---------

  // HANDLE EMAIL
  // ---------
  const handleMailingListSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(mailListEmail)) {
      setMailListProcessing(1);

      const details = {
        'name': mailListName,
        'email': mailListEmail,
        'list': 'YPwxHS892tH8Nhs13wzKqWbQ',
        'api_key': 'TdzMcZVNTn1mjtAJHBpB',
        'boolean': true
      }

      let formBody = [];
      for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      // POST request using fetch inside useEffect React hook
      const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      };

      fetch('https://tools.epns.io/sendy/subscribe', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      })
        .then(response => response.json())
        .then(jsondata => {
          // console.log(jsondata);
          setMailListProcessing(2);
        })
        .catch(err => {
          // console.log(err);
          setMailListError("Mayday! Mayday! something went wrong. Please retry...");
          setMailListProcessing(0);
        });
    }
    else {
      setMailListError("Incorrect e-mail, please check and retry!");
      setMailListProcessing(0);
    }
  }
  // ---------

  // HANDLE CONTACT FORM
  // ---------
  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(contactFormEmail)) {

      if (isEmpty(contactFormName)) {
        setContactFormError("Name can't be empty");
        setContactFormProcessing(0);
      }
      else if (isEmpty(contactFormSub)) {
        setContactFormError("Subject can't be empty");
        setContactFormProcessing(0);
      }
      else if (isEmpty(contactFormMsg)) {
        setContactFormError("Message can't be empty");
        setContactFormProcessing(0);
      }
      else {
        setContactFormProcessing(1);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: contactFormEmail,
            name: contactFormName,
            topic: contactFormTopic,
            sub: contactFormSub,
            msg: contactFormMsg
          })
        };

        fetch('https://backend-kovan.epns.io/apis/mailing/send_mail', requestOptions)
          .then(response => response.json())
          .then(jsondata => {
            // console.log(jsondata);
            setContactFormProcessing(2);
          })
          .catch(err => {
            // console.log(err);
            setContactFormError("Mayday! Mayday! something went wrong. Please retry...");
            setContactFormProcessing(0);
          });
      }
    }
    else {
      setContactFormError("Incorrect e-mail, please check and retry!");
      setContactFormProcessing(0);
    }
  }
  // ---------

  // HELPER METHODS
  // ---------
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  }
  // ---------

  // RENDER
  return (
    <>
      {/* OPEN GRAPH DEFINITION */}
      <ReactTitle title="EPNS Home" />
      {/*
      <MetaTags>
        <title>Ethereum Push Notification Service (EPNS) | Homepage</title>
        <meta name="description" content="Homepage of Ethereum Push Notification Service (EPNS) - #BUIDLing World's first notification protocol" />
        <meta property="og:title" content="Ethereum Push Notification Service | Homepage" />
        <meta property="og:image" content="https://epns.io/previews/homepage.jpg" />
      </MetaTags>
      */}

      {/* HERO SECTION */}
      <ScrollTrigger onEnter={() => { setAnimateHero(true) }} onExit={() => { setAnimateHero(false) }} triggerOnLoad={false}>
        <SectionFSHero id="hero" padding="50px 0px 150px 0px">
          <Content className="contentBox">
            <ItemH columnGap="40px" margin="0px 20px">
              <Item align="flex-start">

                <H1>The native communication protocol of Web3</H1>

                <Span margin="20px 0px" color="rgba(255, 255, 255, 0.5)" size="1.5rem" weight="200">Protocol for <Span color="#fff" weight="600">blockchain</Span> based <Span color="#fff" weight="600">notifications</Span> that are <Span color="rgba(255, 255, 255, 0.5)" weight="600">chain agnostic</Span>, <Span color="rgba(255, 255, 255, 0.5)" weight="600">platform independent</Span> and <Span color="rgba(255, 255, 255, 0.5)" weight="600">incentivized!</Span></Span>

                <ItemH align="flex-start" justify="flex-start" margin="10px -10px 10px -10px" size="0.8rem">
                  <Anchor href="https://docs.epns.io/developers" title="Developer Docs" target="_blank" bg="#000" margin="10px" radius="4px">Start Developing</Anchor>
                </ItemH>

                <ItemH align="flex-start" justify="flex-start" margin="10px -10px 10px -10px" size="0.8rem">
                  <Anchor href="https://app.epns.io/" title="EPNS Dapp" target="_blank" bg="#000" margin="10px" radius="4px">Explore Notifications</Anchor>
                </ItemH>

              </Item>

              <HeroBanner margin="0px">
                <Image1 src="./hero/heroaltv7.png" srcSet="./hero/heroaltv5@2x.png 2x, ./hero/heroaltv5@3x.png 3x" alt="Hero Banner for Ethereum Push Notification Service" />
              </HeroBanner>
            </ItemH>
          </Content>
          <WaveOuter>
            <WaveInner>
              <Wave fill='#35c5f3'
                paused={!animateHero}
                options={{
                  height: 40,
                  amplitude: 30,
                  speed: 0.35,
                  points: 3
                }}
              />
            </WaveInner>
            <WaveInner>
              <Wave fill='#e20880'
                paused={!animateHero}
                options={{
                  height: 20,
                  amplitude: 35,
                  speed: 0.25,
                  points: 3
                }}
              />
            </WaveInner>
          </WaveOuter>
        </SectionFSHero>
      </ScrollTrigger>

      {/* PROBLEM AND SOLUTION - PART 1 */}
      <Section id="solution" theme="#fff" padding="20px 0px 0px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            {/* THE PROBLEM */}
            <Item align="flex-start" padding="0px 0px 40px 0px">
              <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
                <H2 maxWidth="400px"><Span bg="#e20880" color="#fff" padding="0px 8px">EPNS is the missing piece of web3 infrastructure</Span></H2>
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="300">The </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Problem</Span>
                </H2>
              </Item>

              <ItemH margin="10px -20px 10px -20px" align="stretch" flex="auto">
                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage margin="20px" padding="20px">
                    <Image src="./problem/stone.png" srcSet="./problem/stone@2x.png 2x, ./problem/stone@3x.png 3x" alt="Cavemen representing the current blockchain communication" />
                  </EmphasisImage>

                  <EmphasisText>
                    Dapps and services have no way to natively communicate. Users must repeatedly check their actions.
                  </EmphasisText>
                </EmphasisBlock>

                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage>
                    <Image src="./problem/quiet.png" srcSet="./problem/quiet@2x.png 2x, ./problem/quiet@3x.png 3x" atl="Missing poster of EPNS alert" />
                  </EmphasisImage>

                  <EmphasisText>
                    Wallet addresses and users do not receive alerts or communication from any Web3 activity.
                  </EmphasisText>
                </EmphasisBlock>

                <EmphasisBlock margin="10px 10px">
                  <EmphasisImage>
                    <Image src="./problem/angry.png" srcSet="./problem/angry@2x.png 2x, ./problem/angry@3x.png 3x" alt="Angry Unicorn cat for missing out on important alerts" />
                  </EmphasisImage>

                  <EmphasisText>
                    The disconnect leads to poor UX, incomplete engagement and lost opportunities.
                  </EmphasisText>
                </EmphasisBlock>
              </ItemH>
            </Item>

            {/* THE SOLUTION */}
            {playTeaserVideo &&
              <PreviewOuter>
                <PreviewBG
                  href="#"
                  bg="transparent"
                  onClick={(e) => { e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo) }}
                  flex="1"

                >
                  <Content className="contentBox">
                    <PreviewClose
                      href="#"
                      bg="transparent"
                      hover="transparent"
                      hoverBG="transparent"
                      onClick={(e) => { e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo) }}
                    >
                      <VscClose size={40} color="#fff" />
                    </PreviewClose>
                    <Preview>
                      <div className='videoWrapper'><iframe src="https://www.youtube.com/embed/kwwnlmUpRsk?controls=0&autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </Preview>
                  </Content>
                </PreviewBG>
              </PreviewOuter>
            }

            <Item padding="20px 0px 30px 0px">
              <Item self="stretch" align="flex-end" tabletAlign="flex-start" margin="20px 0px" textAlign="right" tabletTextAlign="left" >
                <H2 maxWidth="400px"><Span bg="#674c9f" color="#fff" padding="0px 8px">EPNS is a decentralized middleware for all dapps, smart contracts and services</Span></H2>
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="300">The </Span><Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">Solution</Span>
                </H2>


              </Item>

              <Solution margin="20px 0px">
                <Item margin="30px 0px" padding="0px 30px 0px 0px" minWidth="auto" align="center" minWidth="280px" maxWidth="550px">
                  <Anchor
                    href="#"
                    bg="transparent"
                    onClick={(e) => { e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo) }}
                    radius="12px"
                  >
                    <Image src="youtubeplay.png" srcSet="youtubeplay@2x.png 2x, youtubeplay@3x.png 3x" />
                  </Anchor>
                </Item>

                <Item margin="10px 0px" padding="0px 0px 0px 30px" align="flex-start" size="1.2rem" rowGap="60px" minWidth="280px">
                  <ShadowBox align="flex-start" bg="#e20880" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <FaSeedling size={140} color="#fff" />
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Network Agnostic</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200">EPNS is built for a multichain world to power communication for any dapp or smart contract. Currently live on Ethereum and Polygon</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#674c9f" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <RiHeartsFill size={140} color="#fff" />
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Opt-in Communication</Span>
                    </H2>
                    <Span margin="20px" color="#fff" weight="200"><b>EPNS users always opt in</b> for alerts and communication from services and dapps. Indirect consent, while an option will require the service to reward users first!</Span>
                  </ShadowBox>
                  <ShadowBox align="flex-start" bg="#35c5f3" margin="30px 0px">
                    <Showoff
                      right="-20px"
                      bottom="-20px"
                      opacity="0.2"
                    >
                      <GiReceiveMoney size={140} color="#fff" />
                    </Showoff>
                    <H2 textTransform="uppercase" spacing="0.1em" margin="30px 0px 0px -1px">
                      <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Censorship Resistant!</Span>
                    </H2>
                    <Span margin="20px" color="#fff">The EPNS protocol does not dictate the content can or cannot be communicated among users.</Span>
                  </ShadowBox>
                </Item>

              </Solution>
            </Item>
          </Item>
        </Content>

      </Section>


      {/* SUBSCRIBE SECTION */}
      <Section id="subscribe" theme="#f1f1f1" padding="10px 0px 30px 0px" overflow="hidden">
        <BlurBG />
        <WaveOuter bottom="auto" top="70px">
          <WaveInner transform="rotate(180deg)">
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>

        <Content className="contentBox" padding="60px 0px 40px 0px">
          <Item margin="0px 20px 0px 20px">
            <Item self="stretch" align="stretch" margin="20px 0px 40px 0px">
              <Showoff
                left="-130px"
                tabletLeft="-60px"
                transform="rotate(45deg)"
                tabletOpacity="0.4"
              >
                <IoMdRocket size={120} color="#fff" />
              </Showoff>

              <ItemH>
                <FormSubmision
                  flex="1"
                  direction="row"
                  margin="20px 0px"
                  justify="center"
                  size="1.1rem"
                  onSubmit={handleMailingListSubmit}
                >

                  <Item align="stretch">
                    <Span weight="300" textTransform="uppercase" color="#fff" spacing="0.1em">Subscribe to our mailing list!</Span>
                    <ItemH margin="10px -10px" rowGap="20px" columnGap="20px">
                      {mailListProcessing == 0 &&
                        <>
                          <Item flex="1" margin="10px 10px" justify="flex-start" align="stretch" minWidth="280px">
                            <Input
                              radius="4px"
                              padding="12px"
                              bg="#fff"
                              border="12px"
                              placeholder="John Wick"
                              value={mailListName}
                              onChange={(e) => { setMailListName(e.target.value) }}
                              autocomplete="name"
                            />
                            {mailListName.trim().length == 0 &&
                              <Span
                                padding="4px 10px"
                                right="0px"
                                top="0px"
                                pos="absolute"
                                color="#fff"
                                bg="#000"
                                size="0.7rem"
                                z="1"
                              >
                                Name
                              </Span>
                            }
                          </Item>

                          <Item flex="5" margin="10px 10px" justify="flex-start" align="stretch" minWidth="280px">
                            <Input
                              required
                              placeholder="john@wick.com"
                              radius="4px"
                              padding="12px"
                              bg="#fff"
                              value={mailListEmail}
                              onChange={(e) => { setMailListEmail(e.target.value) }}
                              autocomplete="on"
                            />
                            {mailListEmail.trim().length == 0 &&
                              <Span
                                padding="4px 10px"
                                right="0px"
                                top="0px"
                                pos="absolute"
                                color="#fff"
                                bg="#000"
                                size="0.7rem"
                                z="1"
                              >
                                E-mail
                              </Span>
                            }
                          </Item>
                        </>
                      }

                      <Item flex="1" margin="10px 10px" justify="stretch" self="stretch" align="stretch" minWidth="280px">
                        {mailListProcessing != 2 &&
                          <Button
                            bg='#000'
                            color='#fff'
                            flex="1"
                            radius="4px"
                            disabled={mailListProcessing}
                          >
                            {mailListProcessing == 1 &&
                              <Loader
                                type="Oval"
                                color="#fff"
                                height={24}
                                width={24}
                              />
                            }
                            {mailListProcessing == 0 &&
                              <Input cursor="hand" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Submit" />
                            }
                          </Button>
                        }
                      </Item>
                    </ItemH>
                  </Item>

                  <ItemBreak />

                  <Item align="center">
                    {mailListProcessing == 2 &&
                      <ItemH
                        color="#fff"
                        bg="#000"
                        padding="10px 15px"
                        columnGap="0px"
                        rowGap="0px"
                      >
                        <FaCheckCircle size={24} color="#fff" />
                        <Span
                          padding="0px 0px 0px 8px"
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          Thanks for Subscribing! We will be in Touch :)
                        </Span>
                      </ItemH>
                    }

                    {mailListError && mailListProcessing == 0 &&
                      <Item
                        color="#fff"
                        bg="#000"
                        padding="10px 15px"
                        columnGap="0px"
                        rowGap="0px"
                      >
                        <Span
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          {mailListError}
                        </Span>
                      </Item>
                    }
                  </Item>
                </FormSubmision>

              </ItemH>
            </Item>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>


      {/* LATEST CHANNELS SECTION */}
      <Section id="supported" theme="#fff" padding="20px 0px 10px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" tabletAlign="flex-start" margin="20px 0px 40px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Latest</Span><Span weight="200"> Channels</Span>
              </H2>
              <H3>Delivering Decentralized Notifications For</H3>
            </Item>

            <Item margin="0px -20px 40px -20px" align="stretch" justify="space-around" width="100%">
              {/**/}
              <EPNSChannelItems
                numberOfChannels={5}
              />
              {/**/}
            </Item>

            <Item margin="0px 0px 40px 0px" align="flex-end" justify="space-between">
              <Anchor
                href="https://app.epns.io"
                target="_blank"
                title="Check out the dApp of Ethereum Push Notification Service"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
              >
                Explore All Channels
              </Anchor>
            </Item>

            <ItemBreak margin="10px 0px" />

          </Item>
        </Content>
      </Section>

      {/* NOTIFICATIONS ENABLED SECTION */}
      <Section id="supported" theme="#fff" padding="10px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="20px 0px 30px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Notifications</Span><Span weight="200"> Enabled Platforms</Span>
              </H2>
            </Item>

            <ItemH margin="0px -20px 40px -20px" align="stretch" justify="space-around">

              <Supported margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                  target="_blank"
                  title="Download Ethereum Push Notification Service (EPNS) from Apple App Store"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsios.png"
                      srcSet="./supported/epnsios@2x.png 2x, ./supported/epnsios@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) + Apple App Store Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS iOS App</Span>
                  </Item>
                </Anchor>
              </Supported>

              <Supported margin="20px" minWidth="280px" align="center">
                <Anchor
                  href="https://play.google.com/store/apps/details?id=io.epns.epns"
                  target="_blank"
                  title="Download Ethereum Push Notification Service (EPNS) from Google Play"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsplay.png"
                      srcSet="./supported/epnsplay@2x.png 2x, ./supported/epnsplay@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) + Google Play Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS Android App</Span>
                  </Item>

                </Anchor>
              </Supported>

              <Supported margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://app.epns.io"
                  target="_blank"
                  title="Get Notified from EPNS Dapp"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnsdapp.png"
                      srcSet="./supported/epnsdapp@2x.png 2x, ./supported/epnsdapp@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) dApp Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS dApp</Span>
                  </Item>
                </Anchor>
              </Supported>

              <Supported margin="20px" minWidth="280px" align="stretch">
                <Anchor
                  href="https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"
                  target="_blank"
                  title="Get Notified from EPNS Dapp"
                  direction="column"
                  bg="#fff"
                  hover="#fafafa"
                  radius="12px"
                  align="stretch"
                >
                  <Item margin="0px 0px 5px 0px" self="center">
                    <Image
                      src="./supported/epnschromeextension.png"
                      srcSet="./supported/epnschromeextension@2x.png 2x, ./supported/epnschromeextension@3x.png 3x"
                      alt="Ethereum Push Notification Service (EPNS) dApp Logo"
                    />
                  </Item>
                  <Item margin="5px 0px">
                    <Span size="0.85em" color="#000" spacing="0.2em" weight="400" textAlign="center">EPNS Chrome Extension</Span>
                  </Item>
                </Anchor>
              </Supported>

            </ItemH>

          </Item>
        </Content>
      </Section>

      {/* WEB3 WALLET SECTION */}
      <Section id="subscribe" theme="#f1f1f1" padding="10px 0px 30px 0px" overflow="hidden">
        <BlurBG />
        <WaveOuter bottom="auto" top="70px">
          <WaveInner transform="rotate(180deg)">
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>

        <Supported margin="20px" minWidth="280px" padding="50px">

          <Item margin="5px 0px 10px 0px">
            <Span size="1.8em" color="#000" spacing="0.2em" weight="400" textAlign="center">Are you a Web3 Wallet?</Span>
          </Item>
          <ItemH margin="15px 0px 10px 0px">
            <Span size="1.3em" color="#fff" bg="#e20880" padding="2px 5px 4px 8px" margin="0px 20px" spacing="0.2em" weight="400" textAlign="center">Integrate</Span>
            <Span size="1.3em" color="#000" spacing="0.2em" weight="200" padding="2px 5px 4px 8px" textAlign="center">AND</Span>
            <Span size="1.3em" color="#fff" bg="#35c5f3" padding="2px 5px 4px 8px" margin="0px 20px" spacing="0.2em" weight="400" textAlign="center">Earn</Span>
          </ItemH>
          <Anchor
            href="#contact"
            title="Get Notified from EPNS Dapp"
            direction="column"
            radius="12px"
            align="stretch"
          >
            <ItemH margin="15px 0px 10px 0px">
              <Span size="1.3em" color="#fff" bg="#000" padding="2px 5px 4px 8px" margin="0px 8px" spacing="0.2em" weight="400" textAlign="center">Start Here</Span>
            </ItemH>
          </Anchor>
        </Supported>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#f1f1f1'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>

      {/* PARTNERS AND COLLABORATORS */}
      <Section id="partners" theme="#f1f1f1" padding="20px 0px 80px 0px">

        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 40px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Partners</Span><Span weight="200"> AND <Span bg="#674c9f" size="0.8em" color="#fff" weight="600" padding="0px 8px">Collaborators</Span></Span>
              </H2>
              <H3>Let's talk partnerships</H3>
            </Item>

            <ItemH margin="0px -20px 20px -20px" rowGap="40px" columnGap="40px" align="stretch" justify="space-around">
              {
                Object.keys(partnersList.featured).map(function (key) {
                  const item = partnersList.featured[key]

                  return (
                    <Partner margin="20px" minWidth="280px" key={item.src}>
                      <Anchor
                        href={`${item.href}`}
                        target="_blank"
                        title={`${item.title}`}
                        bg="#fff"
                        hover={`${item.hover}`}
                        radius="12px"
                        align="stretch"
                      >
                        <Item>
                          <Item margin="30px 60px" maxWidth="320px">
                            <Image
                              src={`./partners/${item.src}.png`}
                              srcSet={`./partners/${item.src}@2x.png 2x, ./partners/${item.src}@3x.png 3x`}
                              alt={`${item.alt}`}
                            />
                          </Item>
                          <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">{item.display}</Span>
                        </Item>
                      </Anchor>
                    </Partner>
                  )
                })
              }

              {partnersShowAll &&
                <>
                  {
                    Object.keys(partnersList.drilldown).map(function (key) {
                      const item = partnersList.drilldown[key]

                      return (
                        <Partner margin="20px" minWidth="280px">
                          <Anchor
                            title={`${item.title}`}
                            href={`${item.href}`}
                            hover={`${item.hover}`}
                            target="_blank"
                            bg="#fff"
                            radius="12px"
                            align="stretch"
                          >
                            <Item>
                              <Item margin="30px 60px" maxWidth="320px">
                                <Image
                                  src={`./partners/${item.src}.png`}
                                  srcSet={`./partners/${item.src}@2x.png 2x, ./partners/${item.src}@3x.png 3x`}
                                  alt={`${item.alt}`}
                                />
                              </Item>
                              <Span bg="#000" color="#fff" margin="20px 0px" padding="12px" textAlign="center">{item.display}</Span>
                            </Item>
                          </Anchor>
                        </Partner>
                      )
                    })
                  }
                </>
              }

              <ItemBreak />

              <Partner minWidth="280px" align="stretch" margin="20px 20px 20px 20px">
                <Anchor
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPartnersShowAll(!partnersShowAll) }}
                  title="Toggle Show All / Fewer items in partners and collaborators section"
                  bg="#fff"
                  hover="#eee"
                  radius="12px"
                  align="stretch"
                >
                  <ItemH minWidth="auto">
                    <Item minWidth="auto" flex="none">
                      {!partnersShowAll &&
                        <BsChevronDown size={40} color="#000" />
                      }
                      {partnersShowAll &&
                        <BsChevronUp size={40} color="#000" />
                      }
                    </Item>
                  </ItemH>
                </Anchor>
              </Partner>
            </ItemH>
          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#e20880'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>

      {/* FOLLOW OUR STORY */}
      <Section id="story" theme="#e20880" padding="20px 0px 80px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 60px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span weight="200" color="#fff">Keep up with </Span><Span bg="#000" color="#fff" weight="600" padding="0px 8px">EPNS</Span>
              </H2>
              <H3 color="#fff">The latest developments, announcements, and community updates.</H3>
            </Item>

            <Medium numberOfPosts={3} />

            <ItemH margin="20px -20px 20px -20px" justify="space-between" align="flex-start" columnGap="40px" rowGap="40px">
              <TweetItem margin="20px">
                <Tweet
                  tweetId="1296110819604922369"
                  options={{ theme: "dark", align: "center" }}
                />
              </TweetItem>

              <TweetItem margin="20px">
                <Tweet
                  tweetId="1273731681287933953"
                  options={{ theme: "dark", align: "center" }}
                />
              </TweetItem>

            </ItemH>

            <Item margin="0px 0px 40px 0px" align="flex-end" justify="space-between">
              <Anchor
                href="https://medium.com/ethereum-push-notification-service"
                target="_blank"
                title="Read Medium Blog of Ethereum Push Notification Service"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
              >
                Read More
              </Anchor>
            </Item>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>

      {/* FEATURED SECTION */}
      <Section id="featured" theme="#fff" gradient="linear-gradient(0deg, #674c9f 0%, #fff 100%)" padding="0px 0px 80px 0px">
        <Content className="contentBox">
          <Item margin="20px 0px 20px 0px">
            <Featured>
              <Feature
                disabled={true}
                bg="#2f1a37"
              >
                <Item minWidth="auto">
                  <Span color="#fff" weight="400" size="1rem" spacing="0.1em">Featured In</Span>
                </Item>
              </Feature>

              {
                Object.keys(featuredList.featured).map(function (key) {
                  const item = featuredList.featured[key]

                  return (
                    <Feature
                      key={item.src}
                      title={`${item.title}`}
                      href={`${item.href}`}
                      bg={item.bg ? `${item.bg}` : null}
                      item={`${item.src}`}
                      target="_blank"
                    >
                      <Item minWidth="auto">
                        <FeatureImage src={`./featured/${item.src}.png`} srcSet={`./featured/${item.src}@2x.png 2x, ./featured/${item.src}@3x.png 3x`} alt={`${item.alt}`} />
                      </Item>
                    </Feature>
                  )
                })
              }

              {
                Object.keys(featuredList.featuredSecondary).map(function (key) {
                  const item = featuredList.featuredSecondary[key]

                  return (
                    <FeatureTabletOptional
                      key={item.src}
                      title={`${item.title}`}
                      href={`${item.href}`}
                      bg={item.bg ? `${item.bg}` : null}
                      item={`${item.src}`}
                      target="_blank"
                    >
                      <Item minWidth="auto">
                        <FeatureImage src={`./featured/${item.src}.png`} srcSet={`./featured/${item.src}@2x.png 2x, ./featured/${item.src}@3x.png 3x`} alt={`${item.alt}`} />
                      </Item>
                    </FeatureTabletOptional>
                  )
                })
              }

              {featuredShowAll &&
                <>

                  {
                    Object.keys(featuredList.featuredSecondary).map(function (key) {
                      const item = featuredList.featuredSecondary[key]

                      return (
                        <FeatureDesktopOptional
                          key={item.src}
                          title={`${item.title}`}
                          href={`${item.href}`}
                          bg={item.bg ? `${item.bg}` : null}
                          item={`${item.src}`}
                          target="_blank"
                        >
                          <Item minWidth="auto">
                            <FeatureImage src={`./featured/${item.src}.png`} srcSet={`./featured/${item.src}@2x.png 2x, ./featured/${item.src}@3x.png 3x`} alt={`${item.alt}`} />
                          </Item>
                        </FeatureDesktopOptional>
                      )
                    })
                  }

                  {
                    Object.keys(featuredList.drilldown).map(function (key) {
                      const item = featuredList.drilldown[key]

                      return (
                        <Feature
                          title={`${item.title}`}
                          href={`${item.href}`}
                          bg={item.bg ? `${item.bg}` : null}
                          item={`${item.src}`}
                          target="_blank"
                        >
                          <Item minWidth="auto">
                            <FeatureImage src={`./featured/${item.src}.png`} srcSet={`./featured/${item.src}@2x.png 2x, ./featured/${item.src}@3x.png 3x`} alt={`${item.alt}`} />
                          </Item>
                        </Feature>
                      )
                    })
                  }

                </>
              }

              <Feature
                href="#"
                onClick={(e) => { e.preventDefault(); setFeaturedShowAll(!featuredShowAll) }}
                title="Toggle Show All / Fewer items in feature section"
                bg="#e20880"
              >
                <ItemH minWidth="auto" justify="" columnGap="10px">
                  <Item minWidth="auto" margin="10px 0px" flex="none">
                    {!featuredShowAll &&
                      <Span color="#fff" weight="400" size="1rem" spacing="0.1em">See All</Span>
                    }
                    {featuredShowAll &&
                      <Span color="#fff" weight="400" size="1rem" spacing="0.1em">See Less</Span>
                    }
                  </Item>
                  <Item minWidth="auto" margin="10px 0px" flex="none">
                    <BsChevronExpand size={20} color="#fff" />
                  </Item>
                </ItemH>
              </Feature>
            </Featured>
          </Item>
        </Content>
        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>

      {/* TEAM SECTION | 1=Founder, 2=Founder+Lead, 3=Founder+Team, 4=Lead, 5=Team, 6=Advisor */}
      <Section id="team" theme="#fff" padding="20px 0px 120px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Meet</Span><Span weight="200"> the Team</Span>
              </H2>
              <H3>{randomTeamQuotes[Math.floor(Math.random() * (randomTeamQuotes.length))]}</H3>
            </Item>

            <ItemH self="stretch" align="stretch" flex="initial" margin="20px -20px" minWidth="auto">
              <TeamMember
                img="./team/harsh.jpg"
                srcSet="./team/harsh@2x.jpg 2x, ./team/harsh@3x.jpg 3x"
                type={2}
                name="Harsh Rajat"
                title="Founder / Project Lead"
                twitter="https://twitter.com/harshrajat"
                linkedin="https://www.linkedin.com/in/harshrajat/"
                email="mailto://harsh@epns.io"
              />
              <TeamMember
                img="./team/richa.jpg"
                srcSet="./team/richa@2x.jpg 2x, ./team/richa@3x.jpg 3x"
                type={2}
                name="Richa Joshi"
                title="Co-Founder / Marketing Lead"
                twitter="https://twitter.com/riijo"
                linkedin="https://www.linkedin.com/in/richa-joshi-90b04126/"
                email="mailto://richa@epns.io"
              />
              <TeamMember
                img="./team/jaf.jpg"
                srcSet="./team/jaf@2x.jpg 2x, ./team/jaf@3x.jpg 3x"
                type={4}
                name="Jafett Sandi"
                title="Product / Dev Lead"
                twitter="https://twitter.com/jafetsc"
                linkedin="https://www.linkedin.com/in/jafettsandi/"
                email="mailto://jaf@epns.io"
              />
              <TeamMember
                img="./team/everett.jpg"
                srcSet="./team/everett@2x.jpg 2x, ./team/everett@3x.jpg 3x"
                type={4}
                name="Everett Muzzy"
                title="Strategy Lead"
                twitter="https://twitter.com/everett_muzzy"
                linkedin="https://www.linkedin.com/in/everett-muzzy/"
              />
            </ItemH>
            <ItemH self="stretch" align="stretch" flex="1" margin="0px 0px 20px 0px" minWidth="auto">
              <Advisor
                img="./team/nischal.jpg"
                srcSet="./team/nischal@2x.jpg 2x, ./team/nischal@3x.jpg 3x"
                type={6}
                name="Nischal Shetty"
                title="Founder / CEO, WazirX"
                twitter="https://twitter.com/NischalShetty"
                linkedIn="https://www.linkedin.com/in/nischalshetty/"
              />
              <Advisor
                img="./team/sandeep.jpg"
                srcSet="./team/sandeep@2x.jpg 2x, ./team/sandeep@3x.jpg 3x"
                type={6}
                name="Sandeep Nailwal"
                title="Co-Founder, Polygon"
                twitter="https://twitter.com/sandeepnailwal"
              />
              <Advisor
                img="./team/defidad.jpg"
                srcSet="./team/defidad@2x.jpg 2x, ./team/defidad@3x.jpg 3x"
                type={6}
                name="DeFi Dad"
                title="All things DeFi"
                twitter="https://twitter.com/DeFi_Dad"
              />
              <Advisor
                img="./team/kernel.jpg"
                srcSet="./team/kernel@2x.jpg 2x, ./team/kernel@3x.jpg 3x"
                type={6}
                name="Kernel"
                title="A Gitcoin Collective"
                twitter="https://twitter.com/KERNEL0x"
              />
              <Advisor
                img="./team/vivek.jpg"
                srcSet="./team/vivek@2x.jpg 2x, ./team/vivek@3x.jpg 3x"
                type={6}
                name="Vivek Singh"
                title="Co-Founder, Gitcoin"
                twitter="https://twitter.com/vsinghdothings"
                linkedin="https://www.linkedin.com/in/vivek-singh-b5a4b675/"
              />
            </ItemH>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#35c5f3'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>


      {/* CONTACT US SECTION */}
      <Section id="contact" theme="#35c5f3" padding="20px 0px 80px 0px">
        {/* SNOWING
        <Snowfall
          color="white"
          snowflakeCount={100}
          radius={[0.5, 2]}
        />
        */}

        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" tabletAlign="flex-start" margin="0px 0px 20px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#fff" color="#000" weight="600" padding="0px 8px">Contact</Span><Span weight="200" color="#fff"> Us!</Span>
              </H2>
              <H3 color="#fff">Get in Touch</H3>
            </Item>

            <Item margin="10px -10px" self="stretch">
              <FormSubmision
                flex="1"
                direction="row"
                margin="20px 0px"
                justify="stretch"
                margin="10px"
                size="1.1rem"
                onSubmit={handleContactFormSubmit}
              >

                <Item align="stretch" justify="stretch" margin="10px -15px">
                  {contactFormProcessing == 0 &&
                    <>
                      <ItemH align="stretch">

                        <Item flex="1" margin="15px" justify="flex-start" align="stretch" minWidth="280px">
                          <Input
                            radius="4px"
                            padding="12px"
                            bg="#fff"
                            border="12px"
                            placeholder="John Wick"
                            value={contactFormName}
                            onChange={(e) => { setContactFormName(e.target.value) }}
                            autocomplete="name"
                          />
                          {contactFormName.trim().length == 0 &&
                            <Span
                              padding="4px 10px"
                              right="0px"
                              top="0px"
                              pos="absolute"
                              color="#fff"
                              bg="#000"
                              size="0.7rem"
                              z="1"
                            >
                              Name
                            </Span>
                          }
                        </Item>

                        <Item flex="5" margin="15px" justify="flex-start" align="stretch" minWidth="280px">
                          <Input
                            required
                            placeholder="john@wick.com"
                            radius="4px"
                            padding="12px"
                            bg="#fff"
                            value={contactFormEmail}
                            onChange={(e) => { setContactFormEmail(e.target.value) }}
                            autocomplete="email"
                          />
                          {contactFormEmail.trim().length == 0 &&
                            <Span
                              padding="4px 10px"
                              right="0px"
                              top="0px"
                              pos="absolute"
                              color="#fff"
                              bg="#000"
                              size="0.7rem"
                              z="1"
                            >
                              E-mail
                            </Span>
                          }
                        </Item>
                      </ItemH>

                      <Item flex="5" justify="flex-start" align="stretch" minWidth="280px" margin="15px">
                        <DropdownStyled options={contactFormTopics} onChange={(option) => setContactFormTopic(option.value)} value={contactFormTopic} placeholder="Select an option" />
                      </Item>

                      <Item justify="center" align="stretch" minWidth="280px" margin="15px">
                        <Input
                          required
                          placeholder="I want to tell you guys a secret!"
                          radius="4px"
                          padding="12px"
                          bg="#fff"
                          value={contactFormSub}
                          onChange={(e) => { setContactFormSub(e.target.value) }}
                          autocomplete="on"
                        />
                        {contactFormSub.trim().length == 0 &&
                          <Span
                            padding="4px 10px"
                            right="0px"
                            top="0px"
                            pos="absolute"
                            color="#fff"
                            bg="#000"
                            size="0.7rem"
                            z="1"
                          >
                            Subject
                          </Span>
                        }
                      </Item>

                      <Item justify="center" align="stretch" minWidth="280px" margin="15px">
                        <TextField
                          required
                          placeholder="This is where you will tell us that secret, or a bug or whatever is on your mind."
                          rows="6"
                          radius="4px"
                          padding="12px"
                          bg="#fff"
                          value={contactFormMsg}
                          onChange={(e) => { setContactFormMsg(e.target.value) }}
                          autocomplete="off"
                        />
                      </Item>
                    </>
                  }

                  {contactFormProcessing == 2 &&
                    <Item align="center" margin="0px 10px">
                      <ItemH
                        color="#e20880"
                        bg="#000"
                        padding="10px 15px"
                        columnGap="0px"
                        rowGap="0px"
                      >
                        <FaCheckCircle size={24} color="#fff" />
                        <Span
                          padding="0px 0px 0px 8px"
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          Message Sent! We will be in Touch :)
                        </Span>
                      </ItemH>
                    </Item>
                  }

                  {contactFormError && contactFormProcessing == 0 &&
                    <Item align="center" margin="0px 10px">
                      <Item
                        color="#e20880"
                        bg="#000"
                        padding="10px 15px"
                        margin="15px"
                      >
                        <Span
                          color="#fff"
                          textTransform="uppercase"
                          spacing="0.1em"
                        >
                          {contactFormError}
                        </Span>
                      </Item>
                    </Item>
                  }

                  <Item justify="stretch" self="stretch" align="stretch" minWidth="280px">
                    {contactFormProcessing != 2 &&
                      <Button
                        bg='#000'
                        color='#fff'
                        flex="1"
                        radius="4px"
                        disabled={contactFormProcessing}
                        margin="15px"
                        padding="12px 15px"
                      >
                        {contactFormProcessing == 1 &&
                          <Loader
                            type="Oval"
                            color="#fff"
                            height={24}
                            width={24}
                          />
                        }
                        {contactFormProcessing == 0 &&
                          <Input cursor="hand" color="#fff" weight="400" size="0.8em" spacing="0.2em" type="submit" value="Submit" />
                        }
                      </Button>
                    }
                  </Item>
                </Item>
              </FormSubmision>
            </Item>

          </Item>
        </Content>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
      </Section>


      {/* INVESTORS SECTION */}
      <Section id="investors" theme="#fff" padding="20px 0px 120px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="0px 20px" wrap="nowrap">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Backed</Span><Span weight="200"> By</Span>
              </H2>
            </Item>

            <VCs margin="0px -10px 20px -10px" s align="stretch" justify="center">

              {
                Object.keys(investorsList.vcs).map(function (key) {
                  const item = investorsList.vcs[key]

                  return (
                    <Investor key={item.src}>
                      <Anchor
                        title={`${item.title}`}
                        href={`${item.href}`}
                        disabled={item.disabled}
                        target="_blank"
                        bg="#fff"
                        hoverBG="transparent"
                        radius="12px"
                        align="stretch"
                        margin="10px"
                      >
                        <Item>
                          <Item>
                            <Image
                              src={`./investors/${item.src}.png`}
                              srcSet={`./investors/${item.src}@2x.png 2x, ./investors/${item.src}@3x.png 3x`}
                              alt={`${item.alt}`}
                            />
                          </Item>
                        </Item>
                      </Anchor>
                    </Investor>
                  )
                })
              }

            </VCs>

            <Angels margin="0px -10px 20px -10px" align="stretch" justify="center">

              {
                Object.keys(investorsList.angels).map(function (key) {
                  const item = investorsList.angels[key]

                  return (
                    <Investor>
                      <Anchor
                        key={item.src}
                        title={`${item.title}`}
                        href={`${item.href}`}
                        disabled={item.disabled}
                        target="_blank"
                        bg="#fff"
                        hoverBG="transparent"
                        radius="12px"
                        align="stretch"
                        margin="10px"
                      >
                        <Item>
                          <Item>
                            <Image
                              src={`./investors/${item.src}.png`}
                              srcSet={`./investors/${item.src}@2x.png 2x, ./investors/${item.src}@3x.png 3x`}
                              alt={`${item.alt}`}
                            />
                            <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">{item.name}</Span>
                            <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">{item.job}</AngelJob>
                          </Item>
                        </Item>
                      </Anchor>
                    </Investor>
                  )
                })
              }

            </Angels>

            <AngelsOptional margin="-10px">

              {
                Object.keys(investorsList.angelsoptional).map(function (key) {
                  const item = investorsList.angelsoptional[key]

                  if (!item.hidden) {
                    return (
                      <Investor>
                        <Anchor
                          key={item.src}
                          title={`${item.title}`}
                          href={`${item.href}`}
                          disabled={item.disabled}
                          target="_blank"
                          bg="#fff"
                          hoverBG="transparent"
                          radius="12px"
                          align="stretch"
                          margin="10px"
                        >
                          <Item>
                            <Item>
                              <Image
                                src={`./investors/${item.src}.png`}
                                srcSet={`./investors/${item.src}@2x.png 2x, ./investors/${item.src}@3x.png 3x`}
                                alt={`${item.alt}`}
                              />
                              <Span size="0.85em" color="#233234" spacing="0.2em" weight="400" textAlign="center">{item.name}</Span>
                              <AngelJob size="0.5em" color="#233234" spacing="0.2em" weight="600" textAlign="center">{item.job}</AngelJob>
                            </Item>
                          </Item>
                        </Anchor>
                      </Investor>
                    )
                  }
                  else {
                    return null;
                  }

                })
              }

            </AngelsOptional>

          </Item>
        </Content>

      </Section>

    </>
  );
}

// css style
const HeroBanner = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`


const Featured = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`

const Feature = styled.a`
  display: flex;
  flex: 1;
  position: relative;
  margin: 20px;
  min-width: 220px;
  max-width: 340px;
  padding: 10px;
  background: #2f1a37;
  border-radius: 14px;
  box-shadow: 0px 0px 10px #00000085;
  text-decoration: none;

  &:hover {
    background: ${props => props.bg || "#fff"};
  }

  // &:nth-child(3n+1):before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: -14px;
  //   left: 10px;
  //   right: -7px;
  //   height: 100%;
  //   background: url(snow/snowbig.svg);
  //   background-size: 120px auto;
  //   background-repeat: no-repeat;
  // }

  // &:nth-child(3n+2):before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   bottom: -24px;
  //   left: 6px;
  //   right: -6px;
  //   height: 40px;
  //   background: url(snow/snowmid.svg);
  //   background-size: 110px auto;
  //   background-repeat: no-repeat;
  // }

  // &:nth-child(3n+3):before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   bottom: -29px;
  //   left: calc(100% - 75px);
  //   right: 0px;
  //   height: 50px;
  //   background: url(snow/snowsmall.svg);
  //   background-size: 70px auto;
  //   background-repeat: no-repeat;
  // }
`

const FeatureTabletOptional = styled(Feature)`
  @media (max-width: 768px) {
    display: none;
  }
`

const FeatureDesktopOptional = styled(Feature)`
  @media (min-width: 768px) {
    display: none;
  }
`

const FeatureImage = styled(Image)`
  filter: saturate(0) brightness(0) invert(1);

  ${Feature}:hover & {
    filter: saturate(1) brightness(1) invert(0);
  }
`

const EmphasisBlock = styled(Item)`
  min-width: 280px;

`

const EmphasisImage = styled(Item)`
  padding: 20px;
  margin: 20px 0px 20px;
`

const EmphasisText = styled(Span)`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`

const PreviewOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 0.75);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PreviewBG = styled(Anchor)`
  position: initial;
`

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 40px 20px;
  border-left: 10px solid #35c4f3;
  border-radius: 10px;
`

const PreviewClose = styled(Anchor)`
  align-self: flex-end;
  margin-bottom: -40px;
`

const Solution = styled(ItemH)`
  @media (max-width: 940px) {
    flex-direction: column;

    ${Item} {
      padding:0px 20px;
    }
  }

  @media (max-width: 768px) {
    ${Item} {
      padding: 0px;
    }
  }
`

const ShadowBox = styled(Item)`
  border-radius: 12px;
  border: ${props => props.border || '0px solid transparent'};
  min-width: 280px;
  overflow: hidden;
`

const BlurBG = styled.div`
  background: linear-gradient(300deg,#e20880,#35c5f3,#674c9f,#e20880);
  background-size: 800% 800%;
  background-size: 1200% 1200%;
  animation: BGColorTransition 30s ease infinite;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const Supported = styled(Item)`
  flex: 1;
  min-width: auto;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 280px;
  }

  ${Span} {
    align-self: stretch;
    text-align: center;
  }
`

const Partner = styled(Item)`
  flex: 0 1 calc(33% - 40px);
  min-width: auto;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 280px;
  }

  ${Anchor} {
    flex: 1;
  }

  ${Image} {
    filter: brightness(0);

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  &:hover ${Image} {
    filter: brightness(1);
  }

  ${Span} {
    align-self: stretch;
    text-align: center;
  }
`

const TweetItem = styled(Item)`

  div {
    width: 530px;
  }

  @media (max-width: 1140px) {
    width: 280px;
    flex: 1;

    div {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;

    div {
    }
  }
`

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
    font-size: 0.8em;
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`

const Investor = styled(Item)`

`

const AngelJob = styled(Span)`

`

const VCs = styled(ItemH)`
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  ${Investor} {
    flex: 0 1 calc(15% - 10px);
    margin: 0px;
    min-width: auto;

    @media (max-width: 768px) {
      flex: 0 1 calc(33% - 20px);
      min-width: 130px;
    }

    @media (max-width: 480px) {
      flex: 1;
      max-width: 200px;
    }
  }

  ${Anchor} {
    &:hover {
      box-shadow: 0px 0px 30px -10px #23323442;
    }
  }
`

const Angels = styled(VCs)`
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  ${Investor} {
    flex: 0 1 calc(25% - 20px);
    margin: 0px;
    min-width: auto;

    @media (max-width: 768px) {
      flex: 0 1 25%;
      min-width: 200px;
    }

    @media (max-width: 480px) {
      flex: 0 1 calc(50% - 20px);
      min-width: 140px;
    }
  }

  ${AngelJob} {
    @media (max-width: 480px) {
      display: none;
    }
  }

  ${Anchor} {
    padding: 20px 20px 20px 20px;
  }
`

const AngelsOptional = styled(Angels)`
  @media (max-width: 768px) {
    display: none;
  }
`

// Export Default
export default Home;
