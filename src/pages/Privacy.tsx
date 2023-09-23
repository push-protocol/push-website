// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import HybridSection from '@site/src/components/HybridSection';
import PageWrapper from '@site/src/components/PageWrapper';
import { Atag, BV2, ContentV2, H3V2, HeroHeaderV2, ItemHV2, ItemVV2, PV2 } from '@site/src/components/SharedStylingV2';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

function Privacy() {
  // Internationalization
  const { t } = useTranslation();

  return (
    <Layout title={PageMeta.PRIVACY.pageTitle} description={PageMeta.PRIVACY.pageDescription}>
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
      <PrivacyWrapper>
        <ResponsiveSection
          curve="bottom"
          padding="160px 0px 20px 0px"
          data-bkg="dark"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <ContentV2
            className="contentBox"
            flex="1"
            alignSelf="center"
            padding="40px 0px"
          >
            <ItemHV2
              flexDirection="column"
              justifyContent="flex-start"
            >
              <HeroHeaderV2 textAlign="center">{t('privacy.hero.title')}</HeroHeaderV2>
              <Para
                margin="20px 0 0 0"
                size="1.5rem"
                textAlign="center"
              >
                {t('privacy.hero.description')}
              </Para>

              <ItemVV2
                align="center"
                margin="0"
              >
                <H3V2
                  maxWidth="400px"
                  fontSize="1rem"
                  margin="40px 0 0 0"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  lineHeight="1.5em"
                  textAlign="center"
                >
                  {t('privacy.hero.update-text')}
                </H3V2>
              </ItemVV2>
            </ItemHV2>
          </ContentV2>
        </ResponsiveSection>

        <ResponsiveSection
          curve="bottom"
          padding="80px 0px 40px 0px"
          data-bkg="light"
        >
          <ContentV2
            className="contentBox"
            alignSelf="center"
            psdding="0px"
            padding="40px 0px"
          >
            <ItemHV2
              alignSelf="stretch"
              justifyContent="flex-start"
              margin="0px 20px 40px 20px"
              flexDirection="column"
            >
              <ItemHV2
                alignItems="flex-start"
                margin="30px 0px 20px 0px"
                justifyContent="flex-start"
              >
                {/* SUMMARY */}
                <Para
                  fontWeight="400"
                  letterSpacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  SUMMARY
                </Para>
                <Para margin="-10px 0px 0px">
                  We recognise our responsibilities in relation to the collection, holding, processing, use and/or
                  transfer of personal data. Your privacy is of utmost importance to us.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  This policy (the <BV2>Policy</BV2>) outlines how we collect, use, store and disclose your personal
                  data. Please take a moment to read about how we collect, use and/or disclose your personal data so
                  that you know and understand the purposes for which we may collect, use and/or disclose your personal
                  data. By accessing the website at{' '}
                  <Atag
                    href="https://push.org"
                    target="_blank"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    push.org
                  </Atag>
                  ,{' '}
                  <Atag
                    href="https://app.push.org"
                    target="_blank"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    app.push.org
                  </Atag>{' '}
                  or{' '}
                  <Atag
                    href="https://staging.push.org"
                    target="_blank"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    staging.push.org
                  </Atag>{' '}
                  or any other subdomains of <BV2>push.org</BV2> (the <BV2>Website(s)</BV2>), you agree and consent to
                  Ethereum Push Notification Service Foundation (the <BV2>Company</BV2>), its related corporations,
                  business units and affiliates, as well as their respective representatives and/or agents (collectively
                  referred to herein as “Push”, “us”, “we” or “our”), collecting, using, disclosing and sharing amongst
                  themselves the personal data, and to disclosing such personal data to relevant third party providers.
                  This Policy supplements but does not supersede nor replace any other consent which you may have
                  previously provided to us nor does it affect any rights that we may have at law in connection with the
                  collection, use and/or disclosure of your personal data. We may from time to time update this Policy
                  to ensure that this Policy is consistent with our future developments, industry trends and/or any
                  changes in legal or regulatory requirements. Subject to your rights at law, the prevailing terms of
                  this Policy shall apply. For the avoidance of doubt, this Policy forms part of the Terms of Service
                  governing your relationship with us and should be read in conjunction with such{' '}
                  <Atag
                    href="./terms"
                    target="_blank"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    Terms of Service
                  </Atag>
                  . All capitalised terms used but not defined herein shall have the meaning ascribed to them in the
                  Terms of Service.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  The security of your personal data is important to us. At each stage of data collection, use and
                  disclosure, Push has in place physical, electronic, administrative and procedural safeguards to
                  protect the personal data stored with us. However, do note that no transmission of personal data over
                  the internet can be guaranteed to be 100% secure – accordingly and despite our efforts, Push cannot
                  guarantee or warrant the security of any information you transmit to us, or to or from our online
                  services. Push shall not have any responsibility or liability for the security of information
                  transmitted via the internet.
                </Para>

                <Para>
                  This Policy describes how Push may collect, use, disclose, process and manage your personal data, and
                  applies to any individual’s personal data which is in our possession or under our control.
                </Para>

                {/* What personal data is collected by Push */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.1 What personal data is collected by Push
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  &quot;Personal data&rdquo; means data, whether true or not, about an individual who can be identified
                  (i) from that data, or (ii) from that data and other information to which the organisation has or is
                  likely to have access. Some examples of personal data that Push may collect are:
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(a)</BV2> personal particulars (e.g. name, contact details, residential address, date of birth,
                  identity card/passport details, social media handles and other social media profile information,
                  and/or education details);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(b)</BV2> financial details (e.g. income, expenses, credit history and/or credit card and bank
                  information);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(c)</BV2> images and voice recordings of our conversations with you, whether from our events or
                  office surveillances or otherwise;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(d)</BV2> work experience and employment details (e.g. occupation, directorships and other
                  positions held, employment history, salary, and/or benefits);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(e)</BV2> tax and insurance information;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(f)</BV2> information about your risk profile, investments, investment objectives, knowledge and
                  experience and/or business interests and assets;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(g)</BV2> information about your use of our services and Website;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(h)</BV2> usernames and password, third party account credentials (such as your Facebook login
                  credentials, Google login credentials) and IP address;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(i)</BV2> banking information (e.g. account numbers and banking transactions);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(j)</BV2> private or public cryptographic key relating to addresses on distributed ledger
                  networks and/or similar information; and/or
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(k)</BV2> personal opinions made known to us (e.g. feedback or responses to surveys).
                </Para>

                <Para margin="20px 0px 20px 0px">
                  Personal data may be collected when you interact with our services or use the Website, or may be
                  received by Push from third-party databases or service providers that provide business information.
                </Para>

                {/* Changes to this Privacy Policy */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.2 Purposes for collection, use and disclosure of your personal data
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  Push may collect, use and/or disclose your personal data for its business purposes, including
                  operations for these purposes. These may include, without limitation, the following:
                </Para>

                <ListGroup>
                  <Para margin="20px 0px 0px 20px">
                    <BV2>(a)</BV2> developing and providing facilities, products or services (whether made available by
                    us or through us), including but not limited to:
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(i)</BV2> sale of digital tokens or virtual currencies;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(ii)</BV2> acting as intermediaries through any blockchain, network or platform developed or
                    managed by us;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(iii)</BV2> recording and/or encryption on any blockchain, network or platform developed or
                    managed by us;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(iv)</BV2> promoting advertisements or marketing material, whether from us or third parties;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(v)</BV2> various products and/or services (whether digital or not, and whether provided
                    through an external service provider or otherwise), including without limitation the Services as set
                    out in the Terms of Service;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(vi)</BV2> providing, managing or accessing digital wallets for holding digital assets;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(vii)</BV2> access to smart contracts on and/or interacting with the Push Protocol, the Website
                    or the App;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(viii)</BV2> sending and receiving notifications and Content from various channels on the Push
                    Protocol;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(ix)</BV2> making payments to you for participation in any blockchain, network or platform
                    developed or managed by us (as applicable);
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(x)</BV2> various products and/or services related to digital assets;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(xi)</BV2> any escrow, courier, anti-counterfeiting or dispute resolution services;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(xii)</BV2> transactions and clearing or reporting on these transactions;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(xiii)</BV2> carrying out research, planning and statistical analysis; and/or
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(xiv)</BV2> analytics for the purposes of developing or improving our products, services,
                    security, service quality, staff training, and advertising strategies;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(b)</BV2> assessing and processing applications, instructions, transactions, or requests from
                    you or our customers;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(c)</BV2> communicating with you, including providing you with updates on changes to products,
                    services and banking facilities (whether made available by us or through us) including any
                    additions, expansions, suspensions and replacements of or to such products, services and banking
                    facilities and their terms and conditions;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(d)</BV2> managing our infrastructure and business operations and complying with internal
                    policies and procedures;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(e)</BV2> responding to queries or feedback;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(f)</BV2> addressing or investigating any complaints, claims or disputes;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(g)</BV2> verifying your identity for the purposes of providing facilities, products or
                    services, which would require comparison of your personal information against third party databases
                    and/or provision of such information to third party service providers;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(h)</BV2> conducting credit checks, screenings or due diligence checks as may be required under
                    applicable law, regulation or directive;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(i)</BV2> complying with all applicable laws, regulations, rules, directives, orders,
                    instructions and requests from any local or foreign authorities, including regulatory, governmental,
                    tax and law enforcement authorities or other authorities;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(j)</BV2> enforcing obligations owed to us;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(k)</BV2> monitoring products and services provided by or made available through us;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(l)</BV2> complying with obligations and requirements imposed by us from time to time by any
                    credit bureau or credit information sharing services of which we are a member or subscriber;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(m)</BV2> creating and maintaining credit and risk related models;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(n)</BV2> financial reporting, regulatory reporting, management reporting, risk management
                    (including monitoring credit exposures, preventing, detecting and investigating crime, including
                    fraud and any form of financial crime), audit and record keeping purposes;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(o)</BV2> enabling any actual or proposed assignee or transferee, participant or
                    sub-participant of Push&apos;s rights or obligations to evaluate any proposed transaction;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(p)</BV2> enforcing obligations owed to us; and/or
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(q)</BV2> seeking professional advice, including legal or tax advice.
                  </Para>

                  <Para margin="20px 0px 20px 0px">
                    We may also use personal data for purposes set out in the Terms of Service that govern our
                    relationship with you or our customer.
                  </Para>
                </ListGroup>

                {/* Use of personal data for marketing purposes */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.3 Use of personal data for marketing purposes
                </Para>
                <Para margin="-10px 0px 0px">
                  We may use your personal data to offer you products or services, including special offers, promotions,
                  contests or entitlements that may be of interest to you or for which you may be eligible. Such
                  marketing messages may be sent to you in various modes including but not limited to electronic mail,
                  direct mailers, short message service, telephone calls, facsimile and other mobile messaging services.
                  In doing so, we will comply with all applicable data protection and privacy laws.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  In respect of sending telemarketing messages to your telephone number via short message service,
                  telephone calls, facsimile and other mobile messaging services, please be assured that we shall only
                  do so if we have your clear and unambiguous consent in writing or other recorded form to do so or if
                  you have not otherwise made the appropriate registration of that number with the Do Not Call Registry.
                  If we have an ongoing relationship with you and you have not indicated to us that you do not wish to
                  receive telemarketing messages sent to your telephone number, we may send you telemarketing messages
                  to that number related to the subject of our ongoing relationship via short message service, facsimile
                  and other mobile messaging services (other than a voice or video call).
                </Para>

                <Para margin="20px 0px 0px 0px">
                  You may at any time request that we stop contacting you for marketing purposes via selected or all
                  modes.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  To find out more on how you can change the way we use your personal data for marketing purposes,
                  please contact us at{' '}
                  <Atag
                    href="mailto://support@epns.io"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    support@epns.io
                  </Atag>
                  .
                </Para>

                <Para margin="20px 0px 20px 0px">
                  Nothing in this section shall vary or supersede the Terms of Service that govern our relationship with
                  you.
                </Para>

                {/* Disclosure and sharing of personal data */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.4 Disclosure and sharing of personal data
                </Para>
                <Para margin="-10px 0px 0px">
                  We may from time to time and in compliance with all applicable laws on data privacy, disclose your
                  personal data to any personnel of Push or to third parties (including without limitation banks,
                  financial institutions, credit card companies, credit bureaus and their respective service providers,
                  companies providing services relating to insurance and/or reinsurance to us, and associations of
                  insurance companies, agents, contractors or third party service providers who provide services to us
                  such as telecommunications, information technology, payment, data processing, storage and archival,
                  and our professional advisers such as our auditors and lawyers, and regulators and authorities),
                  whether located in Singapore or elsewhere, in order to carry out the purposes set out above. Please be
                  assured that when we disclose your personal data to such parties, we require them to ensure that any
                  personal data disclosed to them are kept confidential and secure.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  For more information about the third parties with whom we share your personal data, you may, where
                  appropriate, wish to refer to the agreement(s) and/or Terms of Service that govern our relationship
                  with you or our customer. You may also contact us for more information (please see section 1.9 below).
                </Para>

                <Para margin="20px 0px 0px 0px">
                  We wish to emphasise that Push does not sell personal data to any third parties and we shall remain
                  fully compliant of any duty or obligation of confidentiality imposed on us under the applicable
                  agreement(s) and/or Terms of Service that govern our relationship with you or our customer or any
                  applicable law.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  You are responsible for ensuring that the personal data you provide to us is accurate, complete, and
                  not misleading and that such personal data is kept up to date. You acknowledge that failure on your
                  part to do so may result in our inability to provide you with the products and services you have
                  requested. To update your personal data, please contact us (please see section 1.9 below for contact
                  details). Where you provide us with personal data concerning individuals other than yourself, you are
                  responsible for obtaining all legally required consents from the concerned individuals and you shall
                  retain proof of such consent(s), such proof to be provided to us upon our request.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  We may transfer, store, process and/or deal with your personal data outside Singapore. In doing so, we
                  will comply with all applicable data protection and privacy laws.
                </Para>

                {/* Cookies and related technologies */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.5 Cookies and related technologies
                </Para>
                <Para margin="-10px 0px 0px">
                  The Website uses cookies. A cookie is a small text file placed on your computer or mobile device when
                  you visit a Website or use an app. Cookies collect information about users and their visit to the
                  Website or use of the app, such as their Internet protocol (IP) address, how they arrived at the
                  Website (for example, through a search engine or a link from another Website), how they navigate
                  within the Website or app, browser information, computer or device type, operating system, internet
                  service provider, website usage, referring/exit pages, platform type, date/time stamp, number of
                  clicks, and ads viewed. We use cookies and other technologies to facilitate your internet sessions and
                  use of our apps, offer you products and/or services according to your preferred settings, track use of
                  our websites and apps and to compile statistics about activities carried out on our websites.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  You may set up your web browser to block cookies from monitoring your website visit. You may also
                  remove cookies stored from your computer or mobile device. However, if you do block cookies you may
                  not be able to use certain features and functions of our web sites.
                </Para>

                {/* Other web sites */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.6 Other web sites
                </Para>
                <Para margin="-10px 0px 20px">
                  Our websites may contain links to other websites which are not maintained by Push. This Policy only
                  applies to the websites of Push. When visiting these third party websites, you should read their
                  privacy policies which will apply to your use of such websites.
                </Para>

                {/* Retention of personal data */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.7 Retention of personal data
                </Para>
                <Para margin="-10px 0px 20px">
                  Your personal data is retained as long as the purpose for which it was collected remains and until it
                  is no longer necessary for any legal or business purposes.
                </Para>

                {/* Queries, Access/Correction Requests and Withdrawal of Consent */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.8 Queries, Access/Correction Requests and Withdrawal of Consent
                </Para>
                <Para margin="-10px 0px 20px">If you:</Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(a)</BV2> have queries about our data protection processes and practices;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(b)</BV2> wish to request access to and/or make corrections to your personal data in our
                  possession or under our control; or
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(c)</BV2> wish to withdraw your consent to our collection, use or disclosure of your personal
                  data,
                </Para>

                <Para margin="20px 0px 0px">
                  please submit a written request (with supporting documents, (if any) to our Compliance Officer at:{' '}
                  <Atag
                    href="mailto://support@epns.io"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    support@epns.io
                  </Atag>
                  . Our Compliance Officer shall endeavour to respond to you within 30 days of your submission. Please
                  note that if you withdraw your consent to any or all use or disclosure of your personal data,
                  depending on the nature of your request, we may not be in a position to continue to provide our
                  services or products to you or administer any contractual relationship in place. Such withdrawal may
                  also result in the termination of any agreement you may have with us. Our legal rights and remedies
                  are expressly reserved in such event.
                </Para>

                <Para margin="20px 0px 20px">
                  We may charge you a fee for processing your request for access. Such a fee depends on the nature and
                  complexity of your access request. Information on the processing fee will be made available to you.
                </Para>

                {/* Contact information */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.9 Contact information
                </Para>
                <Para margin="-10px 0px 20px">
                  To contact us on any aspect of this Policy or your personal data or to provide any feedback that you
                  may have, please contact our Compliance Officer at{' '}
                  <Atag
                    href="mailto://support@epns.io"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    support@epns.io
                  </Atag>
                  .
                </Para>

                {/* Governing Law and Jurisdiction */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.10 Governing Law and Jurisdiction
                </Para>
                <Para margin="-10px 0px 20px">
                  This Policy and your use of the Website shall be governed and construed in accordance with the laws of
                  Singapore. You agree to submit to the exclusive jurisdiction of the Singapore courts.
                </Para>

                {/* Governing Law and Jurisdiction */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.11 Amendments and updates to Push Privacy Policy
                </Para>
                <Para margin="-10px 0px 20px">
                  We reserve the right to amend this Policy from time to time to ensure that this Policy is consistent
                  with any developments to the way Push uses your personal data or any changes to the laws and
                  regulations applicable to Push. We will make available the updated Policy on the Website. You are
                  encouraged to visit the Website from time to time to ensure that you are well informed of our latest
                  policies in relation to personal data protection. All communications, transactions and dealings with
                  us shall be subject to the latest version of this Policy in force at the time.
                </Para>

                {/* For European Union or European Economic Area Residents */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.12 For European Union or European Economic Area Residents
                </Para>
                <Para margin="-10px 0px 20px">
                  This section applies if you are an individual located in the European Union or European Economic Area.
                  Subject to applicable law, you have the following additional rights in relation to your personal data:
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(a)</BV2> the right to access your personal data (if you ask us, we will confirm whether we are
                  processing your personal data in a structured, commonly used and machine-readable format and, if so,
                  provide you with a copy of that personal data (along with certain other details). If you require
                  additional copies, we may need to charge a reasonable fee;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(b)</BV2> the right to ensure the accuracy of your personal data;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(c)</BV2> the right to have us delete your personal data (we will do so in some circumstances,
                  such as where we no longer need it, but do note that we may not delete your data when other interests
                  outweigh your right to deletion);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(d)</BV2> the right to restrict further processing of your personal data (unless we demonstrate
                  compelling legitimate grounds for the processing);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(e)</BV2> rights in relation to automated decision-making and profiling (you have the right to be
                  free from decisions based solely on automated processing of your personal data, including profiling,
                  that affect you, unless such processing is necessary for entering into, or the performance of, a
                  contract between you and us or you provide your explicit consent to such processing);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(f)</BV2> the right to withdraw consent (if we rely on your consent to process your personal
                  data, you have the right to withdraw that consent at any time, but provided always that this shall not
                  affect the lawfulness of processing based on your prior consent); and
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(g)</BV2> the right to complain to a supervisory authority in your country of residence in the
                  event that data is misused.
                </Para>

                <Para margin="20px 0px 20px">
                  If you believe that our processing of your personal information infringes data protection laws, you
                  have a legal right to lodge a complaint with a supervisory authority responsible for data protection.
                  You may do so in the EU member state of your residence, your place of work or the place of the alleged
                  infringement. You may exercise any of your rights in relation to your personal data by contacting our
                  Compliance Officer at:{' '}
                  <Atag
                    href="mailto://support@epns.io"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    support@epns.io
                  </Atag>
                  .
                </Para>

                {/* Your acceptance of these terms */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1.13 Contact information
                </Para>
                <Para margin="-10px 0px 0px">
                  This Policy applies in conjunction with any other notices, contractual clauses and consent clauses
                  that apply in relation to the collection, use and disclosure of your personal data by us. We may
                  revise this Policy from time to time without any prior notice. You may determine if any such revision
                  has taken place by referring to the date on which this Policy was last updated.
                </Para>

                <Para margin="20px 0px 20px">
                  By using the Website and/or any services provided by Push, you signify your acceptance of this Policy
                  and terms of service. If you do not agree to this Policy or terms of service, please do not use the
                  Website or any services provided by Push. Your continued use of the Website following the posting of
                  changes to this Policy will be deemed your acceptance of those changes.
                </Para>
              </ItemHV2>
            </ItemHV2>
          </ContentV2>
        </ResponsiveSection>
      </PrivacyWrapper>
    </Layout>
  );
}

const ResponsiveSection = styled(HybridSection)`
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  &[data-bkg='dark'] {
    & h1 {
      color: #fff;
    }

    & h3 {
      color: #fff;
    }

    & span {
      color: #fff;
    }

    & p {
      color: #fff;
    }
  }

  &[data-bkg='light'] {
    & h1 {
      color: #000;
    }

    & h3 {
      color: #000;
    }

    & span {
      color: #000;
    }

    & p {
      color: #000;
    }
  }
`;

const PrivacyWrapper = styled.div`
  @media ${device.tablet} {
    width: 100%;
  }
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Para = styled(PV2)`
  font-weight: 300;
  font-size: ${(props) => props.size || '1.1em'};
  color: #000000ee;
  text-align: ${(props) => props.textAlign || 'initial'};
`;

export default Privacy;
