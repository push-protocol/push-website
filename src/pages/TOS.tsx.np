// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Internal Component
import HybridSection from '../components/HybridSection';
import PageWrapper from '../components/PageWrapper';
import {
  Atag,
  ContentV2,
  H2V2,
  H3V2,
  HeroHeaderV2,
  ItemHV2,
  ItemVV2,
  SpanV2,
  PV2,
  BV2,
  LIV2,
  ULV2,
} from '../components/SharedStylingV2';

// Internal Configs
import { device } from '../config/globals';
import PageMeta from '../config/pageMeta';

function TermsOfService() {
  // React GA Analytics
  ReactGA.pageview('/tos');

  // Internationalization
  const { t } = useTranslation();

  return (
    <PageWrapper
      pageName={PageMeta.TOS.pageName}
      pageTitle={PageMeta.TOS.pageTitle}
    >
      <TosWrapper>
        <ResponsiveSection
          curve="bottom"
          padding="80px 0px 20px 0px"
          data-bkg="dark"
          justifyContent="flex-start"
        >
          <ContentV2
            className="contentBox"
            padding="80px 0px 20px 0px"
            flex="1"
            alignSelf="center"
          >
            <ItemVV2
              flexDirection="column"
              justifyContent="flex-start"
            >
              <HeroHeaderV2>{t('terms.hero.title')}</HeroHeaderV2>
              <Para
                margin="20px 0 0 0"
                size="1.5rem"
              >
                {t('terms.hero.description')}
              </Para>

              <ItemVV2
                align="flex-start"
                margin="0"
                height="50px"
              >
                <H3V2
                  maxWidth="400px"
                  fontSize="1rem"
                  lineHeight={8}
                  margin="0px 0px 80px 0px"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                >
                  {t('terms.hero.update-text')}
                </H3V2>
              </ItemVV2>

              <ItemVV2
                align="flex-start"
                margin="0px"
              >
                <Para size="1.5rem">
                  <BV2>IMPORTANT NOTICE: </BV2>THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS
                  ACTION RIGHTS AS DETAILED IN <BV2>SCHEDULE B</BV2>. PLEASE READ THE AGREEMENT CAREFULLY.
                </Para>
              </ItemVV2>
            </ItemVV2>
          </ContentV2>
        </ResponsiveSection>

        {/* TOS SECTION */}
        <ResponsiveSection
          curve="bottom"
          padding="80px 0px 40px 0px"
          data-bkg="light"
        >
          <ContentV2
            className="contentBox"
            alignSelf="center"
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
                {/* 1. Acceptance of terms */}
                <Para
                  fontWeight="400"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  fontSize="1.2em"
                >
                  1. ACCEPTANCE OF TERMS
                </Para>
                <Para margin="-10px 0px 0px">
                  <BV2>&quot;Push&rdquo;</BV2>, <BV2>&quot;we,&rdquo;</BV2> <BV2>&quot;us&rdquo;</BV2> or{' '}
                  <BV2>&quot;our&rdquo;</BV2> provides an experimental open source protocol comprising a set of Ethereum
                  based smart contracts (the <BV2>&quot;Push Protocol&rdquo;</BV2>) that enables any service / DApp or
                  Ethereum based smart contract to create channels, whereby they may display, publish or distribute
                  decentralized and incentivized notifications to subscribers to those channels (each with a unique
                  wallet addresses). Each user/subscriber (unique wallet addresses) will be able to control what
                  notifications they opt in to receive, or are rewarded for indirect opt in by channels. Users may
                  interact with the Push Protocol directly via the smart contracts, or the dApp located at{' '}
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
                  or at{' '}
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
                  or any other subdomains associated with <BV2>push.org</BV2>, including any mobile application or any
                  similar frontend interface that can interact with blockchain smart contracts (the{' '}
                  <BV2>&quot;App&rdquo;</BV2>). Channels and subscribers/users interact directly in a peer to peer
                  manner via the Push Protocol (for example, transaction requests and notifications are sent directly
                  from each channel to the subscriber), and Push is not, under any circumstances, a party or
                  intermediary to that process.
                </Para>

                <Para margin="20px 0px 0px">
                  The content of the notifications will be created by you, is presented to the subscriber/user in a
                  variety of ways including images, data, text, messages, video or audio (collectively, the{' '}
                  <BV2>&quot;Content&rdquo;</BV2>). All Content created by you is solely your responsibility and you
                  must evaluate and bear all risks associated with the use and distribution of any of your Content.
                </Para>

                <Para margin="20px 0px 0px">
                  The Site, the App and any other features, tools, materials, or other services offered from time to
                  time by Push are referred to here as (the <BV2>&quot;Services&rdquo;</BV2>). Please read these Terms
                  of Use (these <BV2>&quot;Terms&rdquo;</BV2>) carefully before using the Services. By using or
                  otherwise accessing the Services, or clicking to accept or agree to these Terms where that option is
                  made available, you (1) accept and agree to these Terms, (2) consent to the collection, use,
                  disclosure and other handling of information as described in our{' '}
                  <Atag
                    href="./privacy"
                    target="_blank"
                    display=" inline"
                    color="#e1087f"
                    background="transparent"
                    padding="0px"
                    letterSpacing="inherit"
                    textTransform="initial"
                  >
                    Privacy Policy
                  </Atag>{' '}
                  and (3) agree to any additional terms, rules and conditions of participation issued by Push from time
                  to time. If you do not agree to these Terms, then you may not access or use the Content or Services.
                </Para>

                <Para margin="20px 0px 0px">
                  In no circumstances shall the Site, the App or the Services be utilised for distributing Content
                  relating to: (a) investment products, financial transactions or payment services, (b) gambling,
                  lottery, sweepstakes or contests, (c) racism, (d) violence and weapons, (e) self-harm, (f) nudity,
                  pornography or sexual services, (g) illegal substances, (h) terrorism (i) emergency calling or
                  messaging to any emergency services personnel or public safety answering points or (j) malicious
                  programs, viruses, Trojan horses and worms.
                </Para>

                <Para>
                  We reserve the right to revise these Terms at any time, which revised Terms shall become effectively
                  immediately upon posting on the Site or the App (as the case may be), and the amended Terms shall
                  supersede and replace these Terms.{' '}
                  <BV2>
                    YOU ARE HEREBY ADVISED THAT YOUR CONTINUED USE OF THE SITE, THE APP AND/OR THE SERVICES CONSTITUTES
                    YOUR ACCEPTANCE OF THESE TERMS OF USE, AND ANY APPLICABLE CURRENT AND PRIOR VERSIONS, AND ANY
                    AMENDMENTS THERETO.
                  </BV2>
                </Para>

                {/* 2. Modification of Terms of Use */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  2. MODIFICATIONS TO TERMS OF SERVICE / USE
                </Para>
                <Para
                  margin="-10px 0px 20px 0px"
                  color="#FFF"
                >
                  Push reserves the right, at its sole discretion, to modify or replace these Terms at any time,
                  including the Schedules hereto. The most current version of these Terms will be posted on our Site.
                  You shall be responsible for reviewing and becoming familiar with any such modifications. Use of the
                  Services by you after any modification to these Terms constitutes your acceptance of these Terms as
                  modified.
                </Para>

                {/* 3. Eligibility */}
                <TermsHeaderGroup>
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    textTransform="uppercase"
                    size="1.2em"
                  >
                    3. REPRESENTATIONS
                  </Para>
                  <Para
                    margin="0"
                    color="#FFF"
                  >
                    You hereby represent and warrant that:
                  </Para>
                </TermsHeaderGroup>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(a)</BV2> you are of the legal age of majority in your jurisdiction as is required to access such
                  Services and Content and enter into arrangements as provided by the Services;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(b)</BV2> (in the case of a corporation) you are duly incorporated and in good standing under the
                  laws of your jurisdiction of incorporation;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(c)</BV2> you are fully able and competent to enter into the terms, conditions, obligations,
                  affirmations, representations and warranties set forth in these Terms and to abide by and comply with
                  these Terms;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(d)</BV2> the execution and performance of these Terms shall not violate or conflict with the
                  terms or conditions of any other agreement to which you are a party or by which you are bound;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(e)</BV2> you have the right, power, and authority to enter into these terms, grant the rights
                  granted by it herein, and perform your obligations without the consent or approval of any third party
                  or governmental or regulatory authority;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(f)</BV2> you are legally permitted to use the service in your jurisdiction including owning
                  cryptographic tokens of value, and interacting with the Services or Content in any way;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(g)</BV2> you are responsible for ensuring compliance with the laws of all applicable
                  jurisdictions at your own expense (including without limitation all intellectual property, data
                  protection and privacy laws) and acknowledge that Push is not liable for your failure to comply with
                  such laws. Push reserves the right to disclose any information as it deems necessary to satisfy any
                  applicable law, regulation, legal process or governmental request;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(h)</BV2> you have not relied and shall not rely upon Push for legal advice regarding your
                  compliance with applicable law; and
                </Para>

                <Para margin="20px 0px 20px 20px">
                  <BV2>(i)</BV2> you and your financial institutions, or any party that owns or controls you or your
                  financial institutions, are (i) not subject to sanctions or otherwise designated on any list of
                  prohibited or restricted parties, including but not limited to the lists maintained by the United
                  Nations Security Council, the U.S. Government (e.g., the Specially Designated Nationals List and
                  Foreign Sanctions Evaders List of the U.S. Department of Treasury and the Entity List of the U.S.
                  Department of Commerce), the European Union or its Member States, or other applicable government
                  authority and (ii) not located in any country to which the United States has embargoed goods or has
                  otherwise applied any sanctions.
                </Para>

                {/* 4. Account Related, Password and Security */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  4. ACCOUNT RELATED, PASSWORD AND SECURITY
                </Para>
                <Para margin="-10px 0px 20px">
                  When setting up an account within Push, you will be responsible for keeping your own account secrets,
                  which may be a seed phrase with a number of secret words, an account file, or other locally stored
                  secret information or any other information associated with the account. Push encrypts this
                  information locally with a password you provide, and it&apos;s never accessible to us or our servers.
                  You agree to (a) never use the same password for Push that you have ever used outside of this service,
                  (b) keep your secret information and password confidential and do not share them with anyone else and
                  (c) immediately notify Push of any unauthorized use of your account or breach of security. Push cannot
                  and will not be liable for any loss or damage arising from your failure to comply with this section.
                </Para>

                {/* 5. Code of Conduct */}
                <TermsHeaderGroup>
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    textTransform="uppercase"
                    size="1.2em"
                  >
                    5. CODE OF CONDUCT
                  </Para>
                  <Para margin="0">While using the Site, the App or the Services you agree not to:</Para>
                </TermsHeaderGroup>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(a)</BV2> restrict or inhibit any other user from using the Site, the App, the Services or the
                  Content, including without limitation, by means of &quot;hacking&rdquo; or defacing any portion of the
                  Site or the App;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(b)</BV2> use the Site, the App, the Services or Content for any unlawful purpose or in any
                  manner not intended by Company or as contemplated herein and on the Site or the App;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(c)</BV2> engage in rude, unlawful, harassing, vulgar, obscene, hateful, threatening, abusive or
                  otherwise objectionable behaviour;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(d)</BV2> institute an attack upon any server used in connection with the Site or the App or any
                  portion thereof or otherwise attempt to disrupt such servers;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(e)</BV2> express or imply that any statements you make are endorsed by Push, without our prior
                  express written consent;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(f)</BV2> knowingly transmit: (i) any content or information that is unlawful, fraudulent,
                  threatening, abusive, libellous, defamatory, obscene or otherwise objectionable, or infringes our or
                  any third party’s intellectual property or other rights; (ii) any material, non-public information
                  about companies without the authorization to do so; (iii) any trade secret of any third party; or (iv)
                  any advertisements, solicitations, chain letters, pyramid schemes, investment opportunities or other
                  unsolicited commercial communication;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(g)</BV2> engage in spamming or flooding;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(h)</BV2> transmit any software or other materials that contain any viruses, worms, trojan
                  horses, defects, date bombs, time bombs or other items of a destructive nature;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(i)</BV2> modify, adapt, sublicense, translate, reverse engineer, decompile or disassemble all or
                  any portion of the Site or the App;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(j)</BV2> remove, alter, conceal any copyright, trademark, patent or other proprietary rights
                  notices contained in the Site or the App;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(k)</BV2> link the Site or the App or any Content thereon to any third party website or portion
                  thereof;
                </Para>

                <Para margin="20px 0px 0px 20px">
                  <BV2>(l)</BV2> use any robot, spider, site search/retrieval application or other manual or automatic
                  device or process to retrieve, index, &quot;data mine&rdquo; or in any way reproduce or circumvent the
                  navigational structure or presentation of the Site or the App or its contents; or
                </Para>

                <Para margin="20px 0px 20px 20px">
                  <BV2>(m)</BV2> harvest or collect information about users of the Site or the App without their express
                  consent.
                </Para>

                {/* 6. Disclaimers and Associated Risks */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  6. Disclaimers and Associated Risks
                </Para>

                <ListGroup>
                  {/* 6.1 Risk of Cryptographic Systems */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="0px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.1 Risk of Cryptographic Systems
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    By utilizing the Services or interacting with the Content or platform in any way, you represent that
                    you understand the inherent risks associated with cryptographic systems; and warrant that you have
                    an understanding of the usage and intricacies of native cryptographic tokens such as Ether (ETH) and
                    Bitcoin (BTC), smart contract based tokens such as those that follow an Ethereum token standard
                    (e.g.{' '}
                    <Atag
                      href="https://github.com/ethereum/EIPs/issues/20"
                      tarrget="_blank"
                      display=" inline"
                      color="#e1087f"
                      background="transparent"
                      padding="0px"
                      letterSpacing="inherit"
                      textTransform="initial"
                    >
                      github.com/ethereum/EIPs/issues/20
                    </Atag>
                    ), and blockchain-based software systems.
                  </Para>

                  {/* 6.2 Risk of Regulatory Actions */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.2 Risk of Regulatory Actions
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    Push and any supported cryptographic token and blockchain could be impacted by one or more
                    regulatory inquiries or regulatory action, which could impede or limit the ability of Push to
                    continue to develop, or which could impede or limit your ability to access or use the Services or
                    the underlying blockchain network.
                  </Para>

                  {/* 6.3 Warranty Disclaimer */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.3 Warranty Disclaimer
                  </Para>

                  <Para margin="-10px 0px 0px 20px">
                    You expressly understand and agree that your use of the Services is at your sole risk. The Services
                    (including the Site, the App and the Content) are provided on an &quot;as is&rdquo; and &quot;as
                    available&rdquo; basis, without warranties of any kind, either express or implied, including,
                    without limitation, implied warranties of merchantability, fitness for a particular purpose or
                    non-infringement. You acknowledge that Push has no control over, and no duty to take any action
                    regarding: which users gain access to or use the Services; what effects the Content may have on you;
                    how you may interpret or use the Content; or what actions you may take as a result of having been
                    exposed to the Content. You release Push from all liability for you having acquired or not acquired
                    Content through the Services. Push makes no representations concerning any Content contained in or
                    accessed through the Services, and Push will not be responsible or liable for the accuracy,
                    copyright compliance, compliance with data protection laws, legality or decency of material
                    contained in or accessed through the Services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    We do not represent or warrant that access to the Services will be continuous, uninterrupted, timely
                    or secure. You acknowledge and accept that the Services (a) may contain bugs, errors and defects,
                    (b) may behave improperly or be subject to periods of downtime and unavailability, (c) may result in
                    total or partial loss or corruption of data and (d) may be modified at any time, including through
                    the release of subsequent versions, all with or without notice to you.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    You acknowledge that Push is not responsible for transferring, safeguarding, or maintaining your
                    private keys or any digital currency associated therewith. If you lose, mishandle or have stolen
                    associated digital currency private keys, you acknowledge that you may not be able to recover
                    associated digital currency, and that Push is not responsible for such loss. You acknowledge that
                    Push is not responsible for any loss, damage or liability arising from your failure to comply with
                    these Terms hereunder.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>
                      THE SITE, THE APP AND THE SERVICES ARE PROVIDED BY PUSH (AND ITS LICENSORS AND SUPPLIERS) ON AN
                      &quot;AS-IS&rdquo; BASIS, WITHOUT WARRANTIES OR ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                      WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                      NON-INFRINGEMENT, THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THE SECURITY
                      ASSOCIATED USE OF, OR TRANSMISSION OF INFORMATION THROUGH, THE SERVICES. SOME JURISDICTIONS DO NOT
                      ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO
                      YOU. YOU ASSUME ALL RESPONSIBILITY AND RISK FOR YOUR USE OF THE SITE, THE APP, AND THE SERVICES,
                      AND YOUR RELIANCE THEREON. NO OPINION, ADVICE OR STATEMENT OF PUSH OR ITS AFFILIATES, LICENSORS,
                      CUSTOMERS, SUPPLIERS, ADVERTISERS, SPONSORS, AGENTS, MEMBERS OR VISITORS, WHETHER MADE ON THE
                      SITE, THE APP, OR IN CONNECTION WITH THE SERVICES OR OTHERWISE, SHALL CREATE ANY WARRANTY. YOUR
                      USE OF THE SITE, THE APP AND THE SERVICES ARE ENTIRELY AT YOUR OWN RISK.
                    </BV2>{' '}
                    There is a risk that the Site or the App could include inaccuracies or errors. Additionally, a
                    possibility exists that unauthorised alterations could be made by third parties to the Site or the
                    App. Although we attempt to maintain and ensure the integrity of the Site and the App, we make no
                    guarantees as to the completeness or correctness or the Site or the App.
                  </Para>

                  {/* 6.4 Risk of Exploits and Weaknesses in Cryptography Field */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.4 Risk of Exploits and Weaknesses in Cryptography Field
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking
                    or technical advances such as the development of quantum computers may present risks to
                    cryptocurrencies and Services of Content, which could result in the theft or loss of your
                    cryptographic tokens or property. To the extent possible, Push intends to update the protocol
                    underlying Services to account for any advances in cryptography and to incorporate additional
                    security measures, but does not guarantee or otherwise represent full security of the system. By
                    using the Services or accessing Content, you acknowledge these inherent risks.
                  </Para>

                  {/* 6.5 Cryptocurrency and Volatility */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.5 Cryptocurrency and Volatility
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    You understand that Ethereum and other blockchain technologies and associated cryptographic tokens
                    are highly volatile due to many factors including but not limited to adoption, speculation,
                    technology and security risks. You also acknowledge that the cost of transacting on such
                    technologies is variable and may increase at any time causing impact to any activities taking place
                    on the blockchain network. You acknowledge these risks and agree that Push cannot be held liable for
                    such fluctuations or increased costs.
                  </Para>

                  {/* 6.6 Application Security */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.6 Application Security
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    You further acknowledge that blockchain applications are code subject to flaws and acknowledge that
                    you are solely responsible for evaluating any code provided by the Services or Content and the
                    trustworthiness of any third-party websites, products, smart-contracts, or Content you access or use
                    through the Services. You further expressly acknowledge and represent that blockchain applications
                    can be written maliciously or negligently, that Push cannot be held liable for your interaction with
                    such applications and that such applications may cause the loss of property or even identity. This
                    warning and others later provided by Push in no way evidence or represent an on-going duty to alert
                    you to all of the potential risks of utilizing the Services or Content.
                  </Para>

                  {/* 5.7 Affiliated Service / Third Party Service */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.7 Affiliated Service / Third Party Service
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    Software and services provided by our affiliates (<BV2>&quot;Affiliated Services&rdquo;</BV2>) and
                    third party software and services (<BV2>&quot;Third Party Services&rdquo;</BV2> and, together with
                    Affiliated Services, <BV2>&quot;Additional Services&rdquo;</BV2>) included in, integrated into, or
                    made accessible through, the Services, including through the Snap System, are made available to you
                    under the terms of use of such service providers (collectively,{' '}
                    <BV2>&quot;Service Providers&rdquo;</BV2>) (for example, Infura, Google Analytics, etc). Please
                    conduct your own research and due diligence, and review the applicable terms of use on their
                    websites prior to using or accessing their services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    Service Providers may charge you a fee for use of, or access to, such Additional Services. You
                    acknowledge that Push may earn fees from Service Providers in connection with your use of such
                    Additional Services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    You agree that Push and its affiliates are not in any way associated with the owner or operator of
                    any Third Party Services or responsible or liable for the software and services offered by them or
                    for anything in connection with such Third Party Services. Push does not endorse or approve and
                    makes no warranties, representations or undertakings relating to the software, service or content of
                    any Third Party Services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    In addition, Push disclaims liability for any loss, damage and any other consequence resulting
                    directly or indirectly from or relating to your use or access of Third Party Services or any
                    information that you may provide or any transaction conducted with or through the Third Party
                    Services or the failure of any information, software or services posted or offered by such Service
                    Providers or any error, omission or misrepresentation by such Service Providers or any computer
                    virus arising from or system failure associated with the Third Party Services.
                  </Para>

                  <Para margin="20px 0px 20px 20px">
                    In the event of any inconsistency between the terms herein and the terms of the Additional Services,
                    the terms herein will prevail.
                  </Para>

                  {/* 6.8 Push Not Liable */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.8 Push Not Liable
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    Without prejudice to the generality of any of the provisions in these Terms, Push shall not be
                    liable for your usage of the Site, the App or the Services in the event of any unavailability,
                    downtime, suspension or termination:
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(a)</BV2> caused by factors outside of our reasonable control, including any force majeure
                    event or Internet access or related problems;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(b)</BV2> that result from any voluntary actions or inactions from you or any third party
                    (including without limitation capacity scaling issues, misconfiguration of settings or credentials,
                    disabling encryption keys or making the encryption keys inaccessible etc.);
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(c)</BV2> that result from you not following any best/industry practices or standards as
                    notified to you;
                  </Para>

                  <Para margin="20px 0px 0px 40px">
                    <BV2>(d)</BV2> that result from your equipment, software or other technology and/or third party
                    equipment, software or other technology (other than third party equipment within our direct
                    control); or
                  </Para>

                  <Para margin="20px 0px 20px 40px">
                    <BV2>(e)</BV2> arising from our suspension or termination of your right to use the Site, the App or
                    the Service in accordance with these Terms.
                  </Para>

                  {/* 6.9 Sensitive Data */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    6.9 Sensitive Data
                  </Para>
                  <Para margin="-10px 0px 20px 20px">
                    Sensitive Data (as defined below) will not be provided to Push at any time and without prejudice to
                    the generality of any of the provisions in these Terms, Push will have no liability whatsoever for
                    Sensitive Data, whether in connection with a security incident or otherwise. For purposes of these
                    Terms, <BV2>&quot;Sensitive Data&rdquo;</BV2> means (a) social security number, passport number,
                    driver’s license number, or similar identifier (or any portion thereof), (b) credit or debit card
                    number, (c) employment, financial, genetic, biometric or health information, (d) racial, ethnic,
                    political or religious affiliation, trade union membership, or information about sexual life or
                    sexual orientation, (e) account passwords, (f) date of birth, (g) criminal history, (h) mother’s
                    maiden name or (i) any other information or combinations of information that is deemed sensitive or
                    private under the legal framework of any applicable jurisdiction.
                  </Para>
                </ListGroup>

                {/* 7. Intellectual Property */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  7. Intellectual Property
                </Para>

                <ListGroup>
                  {/* 7.1 Ownership and Intellectual Property */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="0px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    7.1 OWNERSHIP AND INTELLECTUAL PROPERTY
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    All title, ownership and intellectual property rights in and to the Site, the App and the Services
                    are owned by Push or its licensors. You acknowledge and agree that the Services contains proprietary
                    and confidential information that is protected by applicable intellectual property and other laws.
                    Except as expressly authorized by Push in writing, you agree not to copy, modify, rent, lease, loan,
                    sell, distribute, perform, display or create derivative works based on the Site, the App or the
                    Services, in whole or in part.
                  </Para>

                  {/* 7.2 Limited and Revocable License */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    7.2 LIMITED AND REVOCABLE LICENSE
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    We grant you limited, non-exclusive, non-transferrable, revocable permission to make use of the
                    Site, the App and the Services (collectively, <BV2>&quot;Access&rdquo;</BV2>). This Access shall
                    remain in effect until and unless terminated by you or us. You promise and agree that you will not
                    rent, redistribute, disclose, publish, sell, assign, lease, sublicense, market or transfer the
                    Services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    The Push software application, including without limitation the Site, the App and the Services, are
                    not sold or transferred to you, and Push and its licensors retain ownership of all copies of the
                    software applications even after installation on your personal computers, mobile handsets, tablets,
                    wearable devices, speakers and/or other devices (<BV2>&quot;Devices&rdquo;</BV2>).
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    All Push trademarks, service marks, trade names, logos, domain names, and any other features of the
                    Push brand (“Push Brand Features”) are the sole property of Push or its licensors. The Terms do not
                    grant you any rights to use any Push Brand Features whether for commercial or non-commercial use.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    All Push trademarks, service marks, trade names, logos, domain names, and any other features of the
                    Push brand (<BV2>&quot;Push Brand Features&rdquo;</BV2>) are the sole property of Push or its
                    licensors. These Terms do not grant you any rights to use any Push Brand Features whether for
                    commercial or non-commercial use.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    You agree to abide by our user guidelines and not to use the Services or any part thereof in any
                    manner not expressly permitted by these Terms. Except for the rights expressly granted to you in
                    these Terms, Push grants no right, title, or interest to you in the Site, the App or the Services.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    Third party software (for example, open source software libraries) included in the Services are made
                    available to you under the relevant third party software library’s license terms.
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    Notwithstanding anything herein to the contrary, nothing in these Terms entitle you to copy, modify,
                    fork, merge, combine with another program or create a derivative work of the Services, including
                    without limitation the Site and the App.
                  </Para>

                  {/* 7.3 CONTENT */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 20px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    7.3 CONTENT
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    By displaying, publishing or distributing Content via the Site, the App or the Services, you hereby
                    grant to Push an irrevocable, perpetual, worldwide, royalty-free, non-exclusive license to use,
                    modify, delete from, add to, create derivative works of, publicly perform, publicly display,
                    reproduce and distribute (and to sublicense the foregoing rights through multiple tiers of
                    licensees) such Content via the Site or the App. From time to time, we may remove Content from the
                    Site or the App, permanently or temporarily.
                  </Para>

                  <Para margin="20px 0px 20px 20px">
                    You represent and warrant that: (a) you own the Content displayed, published or distributed via the
                    Site, the App or the Services, or otherwise have the right to grant the licenses set forth above,
                    and (b) the display, publishing or distribution of your Content on or through the Site, the App or
                    the Services does not violate the privacy rights, publicity rights, contract rights, intellectual
                    property or any other rights of any person or entity. You agree to be fully responsible for and to
                    pay any and all royalties, fees, and any other monies owing any person or entity by reason of any
                    Content displayed published or distributed by you.
                  </Para>
                </ListGroup>

                {/* 8. Links */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  8. Links
                </Para>
                <Para margin="-10px 0px 20px 0px">
                  The Services provide, or third parties may provide, links to other World Wide Web or accessible sites,
                  applications or resources. Because Push has no control over such sites, applications and resources,
                  you acknowledge and agree that Push is not responsible for the availability of such external sites,
                  applications or resources, and does not endorse and is not responsible or liable for any content,
                  advertising, products or other materials on or available from such sites or resources. You further
                  acknowledge and agree that Push shall not be responsible or liable, directly or indirectly, for any
                  damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such
                  content, goods or services available on or through any such site or resource.
                </Para>

                {/* 9. INDEMNITY */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  9. INDEMNITY
                </Para>
                <Para margin="-10px 0px 20px 0px">
                  You agree to release and to indemnify, defend and hold harmless Push and its parents, subsidiaries,
                  affiliates and agencies, as well as the officers, directors, employees, shareholders and
                  representatives of any of the foregoing entities, from and against any and all losses, liabilities,
                  expenses, damages, costs (including attorneys’ fees and court costs) claims or actions of any kind
                  whatsoever arising or resulting from:
                </Para>

                <ListGroup>
                  <Para margin="0px 0px 0px 20px">
                    <BV2>(a)</BV2> your use of the Site, App or Services;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(b)</BV2> your breach of these Terms;
                  </Para>

                  <Para margin="20px 0px 0px 20px">
                    <BV2>(c)</BV2> any of your acts or omissions that implicate publicity rights, defamation or invasion
                    of privacy.
                  </Para>
                </ListGroup>

                <Para margin="20px 0px 20px 0px">
                  Push reserves the right, at its own expense, to assume exclusive defence and control of any matter
                  otherwise subject to indemnification by you and, in such case, you agree to cooperate with Push in the
                  defence of such matter.
                </Para>

                {/* 10. Limitation on Liability */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  10. LIMITATION ON LIABILITY
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  <BV2>
                    YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE SITE, THE APP AND
                    THE SERVICES. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU SEND OR RECEIVE DURING YOUR USE OF
                    THE SITE, THE APP AND THE SERVICES MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER ACQUIRED BY
                    UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE, THE APP AND THE SERVICES
                    IS AT YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT
                    PERMITTED BY APPLICABLE LAW, NEITHER PUSH NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR
                    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF
                    ANY KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER
                    TANGIBLE OR INTANGIBLE LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT LIABILITY OR ANY
                    OTHER THEORY (EVEN IF PUSH HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE
                    SITE, THE APP OR SERVICES; THE USE OR THE INABILITY TO USE THE SITE, THE APP OR THE SERVICES;
                    UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR CONDUCT OF ANY
                    THIRD PARTY ON THE SITE, THE APP OR THE SERVICES; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF
                    COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL MALFUNCTIONS; FAILURES, INCLUDING PUBLIC
                    UTILITY OR TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY, DELETIONS OR DEFECTS OF ANY DEVICE
                    OR NETWORK, PROVIDERS, OR SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT PERMIT
                    PARTICIPATION IN THE SERVICES); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY TO FULLY
                    ACCESS THE SITE, THE APP OR THE SERVICES OR ANY OTHER WEBSITE; THEFT, TAMPERING, DESTRUCTION, OR
                    UNAUTHORIZED ACCESS TO, IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR
                    INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATION
                    THEREOF; OR ANY OTHER MATTER RELATING TO THE SITE, THE APP OR ANY OTHER ASPECT OF THE SERVICES.
                  </BV2>
                </Para>

                <Para margin="20px 0px 20px 0px">
                  <BV2>
                    SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION
                    OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY
                    NOT APPLY TO YOU.
                  </BV2>
                </Para>

                {/* 11. NO OTHER BENEFICARY (THIRD PARTY) */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  11. NO OTHER BENEFICARY (THIRD PARTY)
                </Para>
                <Para margin="-10px 0px 20px 0px">
                  You agree that, except as otherwise expressly provided in these Terms, there shall be no third party
                  beneficiaries to these Terms.
                </Para>

                {/* 12. Termination and Suspension */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  12. Termination and Suspension
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  Push may terminate or suspend all or part of the Services and your Push access immediately, without
                  prior notice or liability, if you breach any of the provisions of these Terms, or in the event of any
                  adverse change of regulatory environment. Upon termination of your access, your right to use the
                  Services will immediately cease.
                </Para>

                <Para margin="20px 0px 20px 0px">
                  The following provisions of these Terms survive any termination of these Terms: WARRANTY DISCLAIMERS;
                  OWNERSHIP AND INTELLECTUAL PROPERTY; LINKS; INDEMNITY; LIMITATION ON LIABILITY; NO OTHER BENEFICARY
                  (THIRD PARTY); TERMINATION; GENERAL INFORMATION (Schedule A); BINDING ARBITRATION AND CLASS ACTION
                  WAIVER (Schedule B).
                </Para>

                {/* 13. NOTICE AND PROCEDURE FOR MAKING CLAIMS */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  13. NOTICE AND PROCEDURE FOR MAKING CLAIMS
                </Para>
                <Para margin="10px 0px 0px 0px">
                  If you believe that your copyright or the copyright of a person on whose behalf you are authorized to
                  act has been infringed, please provide Push a written Notice containing the following information:
                </Para>

                <Para margin="10px 0px 20px 0px">
                  <ULV2>
                    <LIV2>
                      <BV2>
                        An electronic (or) physical signature of the person authorized to act on behalf of the owner
                        (or) the owner themselves of the copyright or other intellectual property interest.
                      </BV2>
                    </LIV2>
                    <LIV2>
                      <BV2>
                        A detailed description of the copyrighted work in question or the intellectual property that you
                        claim has been infringed.
                      </BV2>
                    </LIV2>
                    <LIV2>
                      <BV2>
                        A detailed description of where the material that you claim is infringing and where it is
                        located on the Services.
                      </BV2>
                    </LIV2>
                    <LIV2>
                      <BV2>Your address, Phone Number, and Email.</BV2>
                    </LIV2>
                    <LIV2>
                      <BV2>
                        A statement by you that you have a good faith belief that the disputed use is not authorized by
                        the copyright owner, its agent, or the law.
                      </BV2>
                    </LIV2>
                    <LIV2>
                      <BV2>
                        A statement by you, made under penalty of perjury, that the above information in your Notice is
                        accurate and that you are the copyright or intellectual property owner or authorized to act on
                        the copyright or intellectual property owner’s behalf.
                      </BV2>
                    </LIV2>
                  </ULV2>
                </Para>

                <Para margin="0px 0px 20px 0px">
                  The above information should be sent to:{' '}
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
                </Para>
              </ItemHV2>

              {/* Schedule A */}
              <ItemHV2
                alignItems="flex-start"
                margin="0px 0px 20px 0px"
                justifyContent="flex-start"
              >
                <H2V2
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  className="scheduleHeader"
                >
                  <SpanV2
                    background="#000"
                    fontWeight="600"
                    padding="0px 8px"
                  >
                    Schedule
                  </SpanV2>
                  <SpanV2
                    fontWeight="600"
                    color="#fff"
                    background="#e20880"
                    padding="0px 8px"
                  >
                    A
                  </SpanV2>
                </H2V2>
              </ItemHV2>

              <ItemHV2
                alignItems="flex-start"
                margin="-30px 0px 20px 0px"
                justifyContent="flex-start"
              >
                {/* A. General Information */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  GENERAL INFORMATION
                </Para>

                <ListGroup>
                  {/* 1. Entire Agreement */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="0px 0px 20px 0px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    1. ENTIRE AGREEMENT
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    These Terms (and any additional terms, rules and conditions of participation that Push may post on
                    the Services) constitute the entire agreement between you and Push with respect to the Services and
                    supersedes any prior agreements, oral or written, between you and Push. In the event of a conflict
                    between these Terms and the additional terms, rules and conditions of participation, the latter will
                    prevail over these Terms to the extent of the conflict. These Terms (and any additional terms, rules
                    and conditions of participation that Push may post on the Services) constitute the entire agreement
                    between you and Push with respect to the Services and supersedes any prior agreements, oral or
                    written, between you and Push. In the event of a conflict between these Terms and the additional
                    terms, rules and conditions of participation, the latter will prevail over these Terms to the extent
                    of the conflict.
                  </Para>

                  {/* 2. Waiver and Severability */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 0px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    2. WAIVER AND SEVERABILITY
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    The failure of Push to exercise or enforce any right or provision of these Terms shall not
                    constitute a waiver of such right or provision. If any provision of these Terms is found by an
                    arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the
                    arbitrator or court should endeavour to give effect to the parties’ intentions as reflected in the
                    provision, and the other provisions of these Terms remain in full force and effect.
                  </Para>

                  {/* 3. Statute of Limitations */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 0px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    3. STATUTE OF LIMITATIONS
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    You agree that regardless of any statute or law to the contrary, any claim or cause of action
                    arising out of or related to the use of the Services or these Terms must be filed within one (1)
                    year after such claim or cause of action arose or be forever barred.
                  </Para>

                  {/* 4. Miscellaneous */}
                  <Para
                    weight="400"
                    spacing="0.2em"
                    color="#FFF"
                    margin="20px 0px 20px 0px"
                    textTransform="uppercase"
                    size="1.1em"
                  >
                    4. MISCELLANEOUS
                  </Para>
                  <Para margin="-10px 0px 0px 20px">
                    The section subject in these Terms are only for your convenience and have no legal or contractual
                    effect.
                  </Para>
                </ListGroup>
              </ItemHV2>

              {/* Schedule B */}
              <ItemHV2
                alignItems="flex-start"
                margin="20px 0px 20px 0px"
                justifyContent="flex-start"
              >
                <H2V2
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  className="scheduleHeader"
                >
                  <SpanV2
                    background="#000"
                    color="#fff"
                    fontWeight="600"
                    padding="0px 8px"
                  >
                    Schedule
                  </SpanV2>
                  <SpanV2
                    fontWeight="600"
                    color="#fff"
                    background="#e20880"
                    padding="0px 8px"
                  >
                    B
                  </SpanV2>
                </H2V2>
              </ItemHV2>

              <ItemHV2
                align="flex-start"
                margin="-30px 0px 20px 0px"
                justifyContent="flex-start"
              >
                {/* A. General Information */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  textTransform="uppercase"
                  size="1.2em"
                >
                  BINDING ARBITRATION AND CLASS ACTION WAIVER
                </Para>

                <Para
                  color="#FFF"
                  margin="-10px 0px 20px 0px"
                  textTransform="uppercase"
                >
                  <BV2>
                    PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR
                    RIGHT TO FILE A LAWSUIT IN COURT
                  </BV2>
                </Para>

                {/* 1. Initial Dispute Resolution */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="0px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  1. INITIAL DISPUTE RESOLUTION
                </Para>
                <Para margin="-10px 0px 0px 0px">
                  The parties shall use their best efforts to engage directly to settle any dispute, claim, question, or
                  disagreement and engage in good faith negotiations which shall be a condition to either party
                  initiating an arbitration or lawsuit.
                </Para>

                {/* 2. Binding Arbitration */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="20px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  2. BINDING ARBITRATION
                </Para>
                <Para margin="-10px 0px 20px 0px">
                  If the parties do not reach an agreed upon solution within a period of 30 days from the time informal
                  dispute resolution under the Initial Dispute Resolution provision begins, then either party may
                  initiate binding arbitration as the sole means to resolve claims, subject to the provisions set forth
                  below. Specifically, all claims arising out of or relating to these Terms (including their formation,
                  performance and breach), the parties’ relationship with each other and/or your use of the Services
                  shall be finally settled by binding arbitration.
                </Para>
                <Para margin="0px 0px 20px 0px">
                  You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, in any
                  way (by operation of law or otherwise) without our prior written consent. We may transfer, assign, or
                  delegate these Terms and our rights and obligations without consent. These Terms are governed by and
                  will be construed under the laws of Singapore, without regard to the conflicts of laws provisions
                  thereof. Any dispute arising from or relating to the subject matter of these Terms shall be finally
                  settled in Singapore, in English, in accordance with the Arbitration Rules of the Singapore
                  International Arbitration Centre (the <BV2>&quot;Rules&rdquo;</BV2>) for the time being in force,
                  which rules are deemed to be incorporated by reference in this Section, by one commercial arbitrator
                  with substantial experience in resolving intellectual property and commercial contract disputes, who
                  shall be selected from the appropriate list of arbitrators in accordance with such Rules. The seat of
                  the arbitration shall be Singapore.
                </Para>
                <Para margin="0px 0px 20px 0px">
                  Judgment upon the award rendered by such arbitrator may be entered in any court of competent
                  jurisdiction. Despite the foregoing obligation to arbitrate disputes, each party shall have the right
                  to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction.
                  For all purposes of this Agreement, the parties consent to exclusive jurisdiction and venue in
                  Singapore.{' '}
                  <BV2>
                    {' '}
                    Any arbitration under these Terms will take place on an individual basis: class arbitrations and
                    class actions are not permitted. YOU UNDERSTAND AND AGREE THAT BY ENTERING INTO THESE TERMS, YOU AND
                    PUSH ARE EACH WAIVING THE RIGHT TO TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION
                  </BV2>
                </Para>

                {/* 3. Class Action Waiver */}
                <Para
                  weight="400"
                  spacing="0.2em"
                  color="#FFF"
                  margin="0px 0px 20px 0px"
                  textTransform="uppercase"
                  size="1.1em"
                >
                  3. CLASS ACTION WAIVER
                </Para>
                <Para margin="-10px 0px 20px 0px">
                  The parties further agree that any arbitration shall be conducted in their individual capacities only
                  and not as a class action or other representative action, and the parties expressly waive their right
                  to file a class action or seek relief on a class basis.{' '}
                  <BV2>
                    YOU AND PUSH AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
                    CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
                    PROCEEDING.
                  </BV2>{' '}
                  If any court or arbitrator determines that the class action waiver set forth in this paragraph is void
                  or unenforceable for any reason or that an arbitration can proceed on a class basis, then the
                  arbitration provision set forth above shall be deemed null and void in its entirety and the parties
                  shall be deemed to have not agreed to arbitrate disputes.
                </Para>
              </ItemHV2>
            </ItemHV2>
          </ContentV2>
        </ResponsiveSection>
      </TosWrapper>
    </PageWrapper>
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

    & .scheduleHeader {
      & span:nth-child(1) {
        color: #fff;
        background: #fff;
      }

      & span:nth-child(2) {
        background: #e20880;
        color: #fff;
      }
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

    & .scheduleHeader {
      & span:nth-child(1) {
        color: #fff;
        background: #000;
      }

      & span:nth-child(2) {
        background: #e20880;
        color: #fff;
      }
    }
  }
`;

const TosWrapper = styled.div`
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Para = styled(PV2)`
  font-weight: 300;
  letter-spacing: 0.02em;
  font-size: ${(props) => props.size || '1.1em'};
  color: #000000ee;
`;

const TermsHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export default TermsOfService;
