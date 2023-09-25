// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// External Components
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Components
import { subscribeToSpace } from '@site/src/api';
import ImageHolder from '@site/src/components/ImageHolder';
import { SpanV2 } from '@site/src/components/SharedStylingV2';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import MobileSpaceBg from '@site/static/assets/mobile-space-background.webp';
import MobileSpaceImage from '@site/static/assets/mobile-space-image.webp';
import SpaceBg from '@site/static/assets/space-background.webp';
import SpaceImage from '@site/static/assets/space-image.webp';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PageMeta } from "@site/src/config/pageMeta";

const MESSAGES = {
  SUCCESS: 'Thanks for subscribing!',
  ERROR: 'Something went wrong!',
  REPEAT: 'Already subscribed!',
  INVALID: 'Invalid Email!',
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Spaces = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const isMobile = useMediaQuery(device.tablet);

  const joinWaitlist = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (validateEmail(formData.email)) {
      console.log(formData.email);
      try {
        setIsLoading(true);
        const getResponse = await subscribeToSpace({
          email: formData.email,
        });

        console.log(getResponse);

        if (getResponse?.status === 201) {
          console.log('Succesfully added to waitlist');
          setEmailSuccess(MESSAGES.SUCCESS);
          setEmailError('');
        } else if (
          getResponse?.response?.status === 500 &&
          getResponse?.response?.data?.error?.info?.includes('ER_DUP_ENTRY')
        ) {
          setEmailSuccess('');
          setEmailError(MESSAGES.REPEAT);
        }
      } catch (e) {
        setEmailSuccess('');
        setEmailError(MESSAGES.ERROR);
        console.log('emailSent error: ', e);
      } finally {
        setIsLoading(false);
      }
    } else {
      setEmailSuccess('');
      setEmailError(MESSAGES.INVALID);
    }
  };

  const shootUpHandler = () => {
    window.open('https://app.push.org/spaces');
  };

  return (
    <Layout title={PageMeta.FRENS.pageTitle} description={PageMeta.FRENS.pageDescription}>
      {/* <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          })}
        </script>
      </Head> */}
      <SpaceWrapper>
        <SpaceText>
          Unlock new {isMobile && <br></br>} dimensions in your <br></br> web3 journey.
        </SpaceText>

        <SpaceSubText>Join the conversation on Push Spaces</SpaceSubText>

        <Box>
          <Wrapper>
            <ShootUp onClick={shootUpHandler}>Shoot Up Now!</ShootUp>
          </Wrapper>
          {/* <Wrapper>
            <input type="text" name="email" placeholder="Your Email Address" tabIndex={0} required/>
            <button tabIndex={0} type="submit">{isLoading ? 'Please Wait...' : 'Join the Waitlist'}</button>

            {isLoading ? <MaskInput /> : null}
          </Wrapper> */}
          {emailSuccess && (
            <SpanV2
              className="msg"
              fontSize={isMobile ? '18px' : '20px'}
              margin={isMobile ? '10px auto 0px auto' : '10px 0px 0px 15px'}
              color="white"
            >
              {emailSuccess}
            </SpanV2>
          )}

          {!emailSuccess && emailError && (
            <SpanV2
              className="msg"
              fontSize={isMobile ? '18px' : '20px'}
              margin={isMobile ? '10px auto 0px auto' : '10px 0px 0px 15px'}
              color="red"
            >
              {emailError}
            </SpanV2>
          )}
        </Box>

        <SpaceImageHolder isMobile={isMobile}>
          <MemberImage
            className="figureSvg"
            src={isMobile ? MobileSpaceImage : SpaceImage}
            srcSet={isMobile ? MobileSpaceImage : SpaceImage}
            alt={'Space Image'}
            title="Space Image"
            width="100%"
            height="100%"
          />
        </SpaceImageHolder>
      </SpaceWrapper>
    </Layout>
  );
};

const SpaceWrapper = styled.main`
  max-height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${(props) => (props.isMobile ? MobileSpaceBg : SpaceBg)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SpaceText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Strawford;
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 74.8px */
  letter-spacing: -2.04px;

  margin-top: 208px;

  @media ${device.tablet} {
    font-size: 36px;
    margin-top: 138px;
  }
`;

const MemberImage = styled(ImageHolder)``;

const SpaceSubText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Strawford;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 142%; /* 45.44px */
  letter-spacing: -0.96px;

  margin-top: 25px;

  @media ${device.tablet} {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const SpaceImageHolder = styled.div`
  width: 892px;
  margin: 96px auto 0 auto;

  @media ${device.tablet} {
    width: 100%;
    margin: 59px auto 0 auto;
  }
`;

// input button
const Box = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  margin: 28px auto 0 auto;

  & span.msg {
    font-weight: 300;
    line-height: 138.5%;
    margin-top: 12px;
    spacing: -0.03em;
  }

  @media ${device.tablet} {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ShootUp = styled.button`
  width: 177px;
  padding: 14px 32px;
  border: 0;
  font-size: 16px;
  border-radius: 16px;
  background: #dd44b9;
  color: #ffff;
  cursor: pointer;
`;

// const Wrapper = styled.form`
//     position: relative;
//     display: flex;
//     flex: 1;
//     column-gap: 6px;
//     align-items: center;
//     // background: #FFFFFF;
//     border-radius: 21px;
//     // border: 1px solid #FFFFFF;
//     padding: 5px;
//     // justify-content: space-between;
//     justify-content: center;

//     @media ${device.tablet} {
//         column-gap: 3px;
//     }

//     & input[type="text"] {
//         all: unset;

//         box-sizing: border-box;
//         font-family: 'Strawford';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: normal;
//         letter-spacing: -0.03em;
//         color: #9C9CBE;
//         background: #FFFFFF;
//         // min-width: 220px;
//         width: 100%;
//         padding: 6px;
//         padding-left: 8px;

//         &::placeholder {
//             color: #A5A7B4;
//             opacity: 1;
//         }

//     }

//     & button {
//         cursor: pointer;
//         min-width: 160px;
//         color: #FFFFFF;
//         background: #DD44B9;
//         border-radius: 16px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: 14px 32px;
//         white-space: nowrap;

//         @media ${device.tablet} {
//           min-width: auto;
//           font-size: 12px;
//           padding: 14px 16px;
//         }
//     }
// `;

const MaskInput = styled.div`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  opacity: 0.4;
  z-index: 10;
`;

export default Spaces;
