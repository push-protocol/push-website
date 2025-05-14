// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// External Components
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Components
import { subscribeToSpace } from '@site/src/api';
import ImageHolder from '@site/src/components/ImageHolder';
import { Content, ItemV, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import MobileSpaceBg from '@site/static/assets/website/spaces/mobile-space-background.webp';
import MobileSpaceImage from '@site/static/assets/website/spaces/mobile-space-image.webp';
import SpaceBg from '@site/static/assets/website/spaces/space-background.webp';
import SpaceImage from '@site/static/assets/website/spaces/space-image.webp';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

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
    <Layout
      title={PageMeta.SPACES.pageTitle}
      description={PageMeta.SPACES.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://comms.push.org/spaces' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push | Spaces' />
        <meta
          property='og:description'
          content='Explore the spaces feature in the Push dapp, where you can join live audio conversations, connect with experts, and engage with a diverse community. Dive into real-time discussions and expand your horizons on Push Spaces.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/spacespreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:title' content='Push | Spaces' />
        <meta
          name='twitter:description'
          content='Explore the spaces feature in the Push dapp, where you can join live audio conversations, connect with experts, and engage with a diverse community. Dive into real-time discussions and expand your horizons on Push Spaces.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/spacespreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://comms.push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <SpaceWrapper>
        <ItemV>
          <SpaceText>
            Unlock new {isMobile && <br></br>} dimensions in your <br></br> web3
            journey.
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
          </Box>

          <SpaceImageHolder isMobile={isMobile}>
            {!isMobile && (
              <MemberImage
                className='figureSvg'
                src={SpaceImage}
                srcSet={SpaceImage}
                alt={'Space Image'}
                title='Space Image'
                width='100%'
                height='100%'
              />
            )}

            {isMobile && (
              <MemberImage
                className='figureSvg'
                src={MobileSpaceImage}
                srcSet={MobileSpaceImage}
                alt={'Space Image'}
                title='Space Image'
                width='100%'
                height='100%'
              />
            )}
          </SpaceImageHolder>
        </ItemV>
      </SpaceWrapper>
    </Layout>
  );
};

const SpaceWrapper = styled(ItemV)`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${(props) =>
    props.isMobile ? MobileSpaceBg : SpaceBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SpaceText = styled.div`
  margin: 280px 0 0 0;
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
