// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import HybridSection from '@site/src/components/HybridSection';
import PageWrapper from '@site/src/components/PageWrapper';
import { Atag, BV2, ContentV2, H3V2, HeroHeaderV2, ItemHV2, ItemVV2, PV2 } from '@site/src/components/SharedStylingV2';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

function PrivacyMobile() {
  return (
    <Layout title={PageMeta.PRIVACYFORMOBILE.pageTitle} description={PageMeta.PRIVACYFORMOBILE.pageDescription}>
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
      <PrivacyMobileWrapper>
        <ResponsiveSection
          curve="bottom"
          padding="180px 0px 20px 0px"
          data-bkg="dark"
          justifyContent="center"
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
              <HeroHeaderV2 textAlign="center">PRIVACY POLICY MOBILE APPS</HeroHeaderV2>
              <Para
                margin="20px 0 0 0"
                size="1.5rem"
                textAlign="center"
              >
                Defines how Push collects, handles and processes data.
              </Para>

              <ItemVV2
                align="flex-start"
                margin="0"
              >
                <H3V2
                  maxWidth="400px"
                  fontSize="1rem"
                  margin="40px 0px 80px 0px"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  textAlign="center"
                >
                  LAST UPDATED: 24TH SEPTEMBER 2022
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
            padding="0px"
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
                  This policy (the Policy) outlines how we collect, use, store and disclose your personal data. Please
                  take a moment to read about how we collect, use and/or disclose your personal data so that you know
                  and understand the purposes for which we may collect, use and/or disclose your personal data. By
                  accessing the &quot;Push&rdquo; application available on Google Play or Apple App Store (the App), you
                  agree and consent to Ethereum Push Notification Service Foundation (the Company), its related
                  corporations, business units and affiliates, as well as their respective representatives and/or agents
                  (collectively referred to herein as Push, us, we or our), collecting, using, disclosing and sharing
                  amongst themselves the personal data, and to disclosing such personal data to relevant third party
                  providers. This Policy supplements but does not supersede nor replace any other consent which you may
                  have previously provided to us nor does it affect any rights that we may have at law in connection
                  with the collection, use and/or disclosure of your personal data. We may from time to time update this
                  Policy to ensure that this Policy is consistent with our future developments, industry trends and/or
                  any changes in legal or regulatory requirements. Subject to your rights at law, the prevailing terms
                  of this Policy shall apply. For the avoidance of doubt, this Policy forms part of the terms and
                  conditions governing your relationship with us and should be read in conjunction with such terms and
                  conditions.
                </Para>

                {/* What personal data is collected by Push */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  1 What personal data is collected by Push
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  &quot;Personal data&rdquo; means data, whether true or not, about an individual who can be identified
                  (i) from that data, or (ii) from that data and other information to which the organisation has or is
                  likely to have access. Personal data may be collected when you interact with our services or use the
                  App, or may be received by Push from third-party databases or service providers that provide business
                  information. For example, Push may collect personal data such as particulars of digital wallet
                  addresses, transactions performed by said digital wallet addresses, public cryptographic key relating
                  to digital wallet addresses on distributed ledger networks and/or similar information.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  2 PERSONAL DATA AND THE BLOCKCHAIN
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  Blockchain technology, also known as distributed ledger technology (DLT), is at the core of our
                  business. Blockchains are decentralized and made up of digitally recorded data in a chain of packages
                  called &quot;blocks&rdquo;. The manner in which these blocks are linked is chronological, meaning that
                  the data is very difficult to alter once recorded. Since the ledger may be distributed all over the
                  world (across several &quot;nodes&rdquo; which usually replicate the ledger) this means there is no
                  single person making decisions or otherwise administering the system (such as an operator of a cloud
                  computing system), and that there is no centralized place where it is located either.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  Accordingly, by design, a blockchain’s data cannot be changed or deleted and is said to be
                  &quot;immutable&rdquo;. This may affect your ability to exercise your rights such as your right to
                  erasure (&quot;right to be forgotten&rdquo;), or your rights to object or restrict processing of your
                  personal data. Data on the blockchain cannot be erased and cannot be changed. Although smart contracts
                  may be used to revoke certain access rights, and some content may be made invisible to others, it is
                  not deleted.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  In certain circumstances, in order to comply with our contractual obligations to you (such as delivery
                  of tokens or provision of other services) it will be necessary to collect certain personal data, such
                  as your wallet address, onto the blockchain; this is done through a smart contract and requires you to
                  execute such transactions using your wallet’s private key.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  The ultimate decisions to (a) transact on the blockchain using your wallet address, as well as (b)
                  share the public key relating to your wallet address with anyone (including us) rests with you.{' '}
                  <BV2>
                    IF YOU WANT TO ENSURE YOUR PRIVACY RIGHTS ARE NOT AFFECTED IN ANY WAY, YOU SHOULD NOT TRANSACT ON
                    BLOCKCHAINS AS CERTAIN RIGHTS MAY NOT BE FULLY AVAILABLE OR EXERCISABLE BY YOU OR US DUE TO THE
                    TECHNOLOGICAL INFRASTRUCTURE OF THE BLOCKCHAIN. IN PARTICULAR THE BLOCKCHAIN IS AVAILABLE TO THE
                    PUBLIC AND ANY PERSONAL DATA SHARED ON THE BLOCKCHAIN WILL BECOME PUBLICLY AVAILABLE.
                  </BV2>
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  3 PURPOSES FOR COLLECTION, USE AND DISCLOSURE OF YOUR PERSONAL DATA
                </Para>

                <Para margin="0px 0px 0px 0px">
                  Push may collect, use and/or disclose your personal data for its legitimate interests or business
                  purposes, including operations for these purposes. These may include, without limitation, the
                  following:
                </Para>

                <ListGroup>
                  <Para margin="20px 0px 0px 20px">
                    <BV2>(a)</BV2> developing and providing facilities, products or services (whether made available by
                    us or through us), including but not limited to:
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(i)</BV2> services for sending of push-notifications, information updates, notices or
                    correspondence;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(ii)</BV2> acting as intermediaries through any blockchain, network or platform;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(iii)</BV2> recording and/or encryption on any blockchain, network or platform;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(iv)</BV2> promoting advertisements or marketing material, whether from us or third parties;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(v)</BV2> various products and/or services (whether digital or not, and whether provided
                    through an external service provider or otherwise);
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(vi)</BV2> making payments for participation in any blockchain, network or platform developed
                    or managed by us (as applicable);
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(vii)</BV2> carrying out research, planning and statistical analysis;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(viii)</BV2> trouble-shooting, technical maintenance and bug fixes; and/or
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(ix)</BV2> analytics for the purposes of developing or improving our products, services,
                    security, service quality, staff training, and advertising strategies;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(b)</BV2> communicating with you, including providing you with updates on changes to services
                    or products (whether made available by us or through us) including any additions, expansions,
                    suspensions and replacements of or to such services or products and their terms and conditions;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(c)</BV2> managing our infrastructure and business operations and complying with internal
                    policies and procedures;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(d)</BV2> responding to queries, feedback or complaint;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(e)</BV2> complying with all applicable laws, regulations, rules, directives, orders,
                    instructions and requests from any local or foreign authorities, including regulatory, governmental,
                    tax and law enforcement authorities or other authorities;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(f)</BV2> enabling any actual or proposed assignee or transferee, participant or
                    sub-participant of Push&apos;s rights or obligations to evaluate any proposed transaction;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(g)</BV2> enforcing obligations owed to us, protecting our rights or property, and protecting
                    against legal liability; and/or
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(h)</BV2> seeking professional advice, including legal or tax advice.
                  </Para>

                  <Para>
                    We may also use personal data for purposes set out in the terms and conditions that govern our
                    relationship with you or our customer.
                  </Para>
                </ListGroup>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  4 USE OF PERSONAL DATA FOR MARKETING PURPOSES
                </Para>

                <Para margin="0px 0px 0px 0px">
                  We may use your personal data to offer you products or services, including special offers, promotions,
                  contests or entitlements that may be of interest to you or for which you may be eligible. Such
                  marketing messages may be sent to you in various modes including but not limited to electronic mail,
                  direct mailers, short message service, telephone calls, facsimile and other mobile messaging services.
                  In doing so, we will comply with all applicable data protection and privacy laws.
                </Para>

                <Para margin="0px 0px 0px 0px">
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
                  please contact us.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  Nothing in this Policy shall vary or supersede the terms and conditions that govern our relationship
                  with you.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  5 DISCLOSURE AND SHARING OF PERSONAL DATA
                </Para>

                <Para margin="0px 0px 0px 0px">
                  We may from time to time and in compliance with all applicable laws on data privacy, disclose your
                  personal data to any personnel of Push, group entities, or to third parties (including without
                  limitation banks, financial institutions, credit card companies, credit bureaus and their respective
                  service providers, companies providing services relating to insurance and/or reinsurance to us, and
                  associations of insurance companies, agents, contractors or third party service providers who provide
                  services to us such as telecommunications, information technology, payment, data processing, storage
                  and archival, and our professional advisers such as our auditors and lawyers, and regulators and
                  authorities), located in any jurisdiction, in order to carry out the purposes set out above. Please be
                  assured that when we disclose your personal data to such parties, we will disclose only the personal
                  information that is necessary to deliver the service required, and will also require them to ensure
                  that any personal data disclosed to them are kept confidential and secure.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  For more information about the third parties with whom we share your personal data, you may, where
                  appropriate, wish to refer to the agreement(s) and/or terms and conditions that govern our
                  relationship with you or our customer. You may also contact us for more information (please see
                  section 11 below).
                </Para>

                <Para margin="20px 0px 0px 0px">
                  We wish to emphasise that Push does not sell personal data to any third parties and we shall remain
                  fully compliant of any duty or obligation of confidentiality imposed on us under the applicable
                  agreement(s) and/or terms and conditions that govern our relationship with you or our customer or any
                  applicable law.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  You are responsible for ensuring that the personal data you provide to us is accurate, complete, and
                  not misleading and that such personal data is kept up to date. You acknowledge that failure on your
                  part to do so may result in our inability to provide you with the products and services you have
                  requested. To update your personal data, please contact us (please see section 11 below for contact
                  details). Where you provide us with personal data concerning individuals other than yourself, you are
                  responsible for obtaining all legally required consents from the concerned individuals and you shall
                  retain proof of such consent(s), such proof to be provided to us upon our request.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  We may transfer, store, process and/or deal with your personal data in any jurisdiction, and
                  accordingly such personal data may be transferred to computers, servers or hardware located outside of
                  your state, province, country or other governmental jurisdiction where the data protection laws may
                  differ from those in your jurisdiction. Push will take all steps reasonably necessary to ensure that
                  your data is treated securely and in accordance with this Policy and no transfer of your personal data
                  will take place to an organisation or a country unless there are adequate controls in place including
                  the security of your data and other personal information (including without limitation the Standard
                  Contractual Clauses approved by the European Commission). Your consent to this Policy followed by your
                  submission of such information represents your agreement to the transfer of personal data as described
                  herein.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  6 COOKIES/TOKENS AND RELATED TECHNOLOGIES
                </Para>

                <Para margin="0px 0px 0px 0px">
                  The App uses tokens to store a user&apos;s credentials for interacting with the App. A token is a
                  small encrypted file placed on your computer or mobile device which may include an anonymous unique
                  identifier and certain information about your use of the App, such as their Internet protocol (IP)
                  address, browser information, computer or device type, operating system, internet service provider,
                  App usage, date/time stamp, and functions as your credentials for accessing the App. We use tokens,
                  cookies and other technologies to facilitate your internet sessions and use of the App, offer you
                  customised products and/or services according to your preferred settings, display features and
                  services which might be of interest to you (including ads on our services), track usage of the App, to
                  compile statistics about activities carried out on the App, and to hold certain information.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  You may set up your web browser to block or remove tokens stored from your computer or mobile device.
                  However, if you do so, you may not be able to use certain features and functions of the App.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  Tokens will also be deleted when you uninstall the App from your computer or mobile device.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  7 RETENTION OF PERSONAL DATA
                </Para>

                <Para margin="0px 0px 0px 0px">
                  Your personal data is retained as long as the purpose for which it was collected remains and until it
                  is no longer necessary for any legal or business purposes. This enables us to comply with legal and
                  regulatory requirements or use it where we need to for our legitimate purposes, such as transfers of
                  digital assets, and dealing with any disputes or concerns that may arise.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  We may need to retain information for a longer period where we need the information to comply with
                  regulatory or legal requirements or where we may need it for our legitimate purposes (e.g. to help us
                  respond to queries or complaints, fighting fraud and financial crime, responding to requests from
                  regulators etc).
                </Para>

                <Para margin="20px 0px 20px 0px">
                  When we no longer need to use personal data, we will remove it from our systems and records and/or
                  take steps to anonymise it so that you can no longer be identified from it.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  8 QUERIES, ACCESS/CORRECTION REQUESTS AND WITHDRAWAL OF CONSENT
                </Para>

                <ListGroup>
                  <Para margin="0px 0px 0px 0px">If you:</Para>

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

                  <Para margin="20px 0px 0px 0px">
                    Please submit a written request (with supporting documents, (if any) to our Compliance Officer at:{' '}
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
                    . Our Data Protection Officer shall respond to you within 30 days of your submission. Please note
                    that if you withdraw your consent to any or all use or disclosure of your personal data, depending
                    on the nature of your request, we may not be in a position to continue to provide our services or
                    products to you or administer any contractual relationship in place. Such withdrawal may also result
                    in the termination of any agreement you may have with us. Our legal rights and remedies are
                    expressly reserved in such event.
                  </Para>

                  <Para margin="20px 0px 0px 0px">
                    We may charge you a fee for processing your request for access. Such a fee depends on the nature and
                    complexity of your access request. Information on the processing fee will be made available to you.
                  </Para>
                </ListGroup>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  9 CONTACT INFORMATION
                </Para>

                <Para margin="0px 0px 0px 0px">
                  To contact us on any aspect of this Policy or your personal data or to provide any feedback that you
                  may have, please contact our Data Protection Officer at{' '}
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

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  10 GOVERNING LAW AND JURISDICTION
                </Para>

                <Para margin="0px 0px 0px 0px">
                  This Policy and your use of the Website shall be governed and construed in accordance with the laws of
                  Singapore. You agree to submit to the exclusive jurisdiction of the Singapore courts.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  11 AMENDMENTS AND UPDATES TO PUSH PRIVACY POLICY
                </Para>

                <Para margin="0px 0px 0px 0px">
                  We reserve the right to amend this Policy from time to time to ensure that this Policy is consistent
                  with any developments to the way Push uses your personal data or any changes to the laws and
                  regulations applicable to Push. We will make available the updated Policy on the App. You are
                  encouraged to visit the App from time to time to ensure that you are well informed of our latest
                  policies in relation to personal data protection. All communications, transactions and dealings with
                  us shall be subject to the latest version of this Policy in force at the time.
                </Para>

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  12 FOR EUROPEAN UNION OR EUROPEAN ECONOMIC AREA RESIDENTS
                </Para>

                <Para margin="0px 0px 0px 0px">
                  This section 12 applies if you are an individual located in the European Union or European Economic
                  Area. Subject to applicable law, you have the following additional rights in relation to your personal
                  data:
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
                  <BV2>(d)</BV2> rights in relation to automated decision-making and profiling (you have the right to be
                  free from decisions based solely on automated processing of your personal data, including profiling,
                  that affect you, unless such processing is necessary for entering into, or the performance of, a
                  contract between you and us or you provide your explicit consent to such processing);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(e)</BV2> the right to restrict further processing of your personal data (unless we demonstrate
                  compelling legitimate grounds for the processing);
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(f)</BV2> the right to withdraw consent (if we rely on your consent to process your personal
                  data, you have the right to withdraw that consent at any time, but provided always that this shall not
                  affect the lawfulness of processing based on your prior consent); and
                </Para>

                <Para margin="20px 0px 20px 20px">
                  <BV2>(g)</BV2> the right to complain to a supervisory authority in your country of residence in the
                  event that data is misused.
                </Para>

                <Para margin="0px 0px 20px 0px">
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

                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#000"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  13 YOUR ACCEPTANCE OF THESE TERMS
                </Para>

                <Para margin="0px 0px 0px 0px">
                  This Policy applies in conjunction with any other notices, contractual clauses and consent clauses
                  that apply in relation to the collection, use and disclosure of your personal data by us. We may
                  revise this Policy from time to time without any prior notice. You may determine if any such revision
                  has taken place by referring to the date on which this Policy was last updated.
                </Para>

                <Para margin="20px 0px 0px 0px">
                  By using the App and/or any services provided by Push, you signify your acceptance of this Policy and
                  terms of service. If you do not agree to this Policy or terms of service, please do not use the App or
                  any services provided by Push. Your continued use of the App following the posting of changes to this
                  Policy will be deemed your acceptance of those changes.
                </Para>
              </ItemHV2>
            </ItemHV2>
          </ContentV2>
        </ResponsiveSection>
      </PrivacyMobileWrapper>
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

const PrivacyMobileWrapper = styled.div`
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
  letter-spacing: 0.02em;
  font-size: 1.1em;
  color: #000000ee;
`;

export default PrivacyMobile;
