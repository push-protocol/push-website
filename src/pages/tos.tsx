// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Component
import {
  A,
  B,
  Content,
  H2,
  H3,
  HeroHeader,
  ItemH,
  ItemV,
  LI,
  P,
  Section,
  Span,
  UL,
} from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

function TermsOfService() {
  // Internationalization
  const { t } = useTranslation();

  return (
    <Layout
      title={PageMeta.TOS.pageTitle}
      description={PageMeta.TOS.pageDescription}
      showNavbar='website'
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/tos' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push | Terms of Service' />
        <meta
          property='og:description'
          content='Explore our terms of service to understand the rules and guidelines governing your use of our platform. Learn about your rights, responsibilities, and our commitment to a fair and secure user experience.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/tospreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@pushprotocol' />
        <meta name='twitter:title' content='Push | Terms of Service' />
        <meta
          name='twitter:description'
          content='Explore our terms of service to understand the rules and guidelines governing your use of our platform. Learn about your rights, responsibilities, and our commitment to a fair and secure user experience.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/tospreview.png').default,
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
        <HeroSection background='#121315' minHeight='70vh'>
          <HeroContent className='contentBox' flex='1' alignSelf='center'>
            <ItemV>
              <HeroHeader>{t('terms.hero.title')}</HeroHeader>
              <P margin='20px 0 0 0' size='1.5rem' color='#fff'>
                {t('terms.hero.description')}
              </P>
              <H3
                maxWidth='400px'
                fontSize='1rem'
                lineHeight={8}
                margin='0px 0px 80px 0px'
                letterSpacing='0.1em'
                textTransform='uppercase'
                color='#fff'
              >
                {t('terms.hero.update-text')}
              </H3>
              <P testAlign='center' size='1.3rem' color='#fff'>
                <B color='#fff'>IMPORTANT NOTICE: </B>THIS AGREEMENT IS SUBJECT
                TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS AS
                DETAILED IN <B color='#fff'>SCHEDULE B</B>. PLEASE READ THE
                AGREEMENT CAREFULLY.
              </P>
            </ItemV>
          </HeroContent>
        </HeroSection>

        {/* TOS SECTION */}
        <Section curve='bottom' data-bkg='light'>
          <Content className='contentBox'>
            <ItemH
              alignSelf='stretch'
              justifyContent='flex-start'
              margin='0px 0px 40px 0px'
              flexDirection='column'
            >
              <ItemH
                alignItems='flex-start'
                margin='30px 0px 20px 0px'
                justifyContent='flex-start'
              >
                {/* 1. Acceptance of terms */}
                <P
                  fontWeight='400'
                  letterSpacing='0.2em'
                  textTransform='uppercase'
                  fontSize='1.2em'
                >
                  1. ACCEPTANCE OF TERMS
                </P>
                <P margin='-10px 0px 0px'>
                  <B>&quot;Push&rdquo;</B>, <B>&quot;we,&rdquo;</B>{' '}
                  <B>&quot;us&rdquo;</B> or <B>&quot;our&rdquo;</B> provides an
                  experimental open source protocol comprising a set of Ethereum
                  based smart contracts (the <B>&quot;Push Protocol&rdquo;</B>)
                  that enables any service / DApp or Ethereum based smart
                  contract to create channels, whereby they may display, publish
                  or distribute decentralized and incentivized notifications to
                  subscribers to those channels (each with a unique wallet
                  addresses). Each user/subscriber (unique wallet addresses)
                  will be able to control what notifications they opt in to
                  receive, or are rewarded for indirect opt in by channels.
                  Users may interact with the Push Protocol directly via the
                  smart contracts, or the dApp located at{' '}
                  <A
                    href='https://app.push.org'
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    app.push.org
                  </A>{' '}
                  or at{' '}
                  <A
                    href='https://staging.push.org'
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    staging.push.org
                  </A>{' '}
                  or any other subdomains associated with <B>push.org</B>,
                  including any mobile application or any similar frontend
                  interface that can interact with blockchain smart contracts
                  (the <B>&quot;App&rdquo;</B>). Channels and subscribers/users
                  interact directly in a peer to peer manner via the Push
                  Protocol (for example, transaction requests and notifications
                  are sent directly from each channel to the subscriber), and
                  Push is not, under any circumstances, a party or intermediary
                  to that process.
                </P>

                <P margin='20px 0px 0px'>
                  The content of the notifications will be created by you, is
                  presented to the subscriber/user in a variety of ways
                  including images, data, text, messages, video or audio
                  (collectively, the <B>&quot;Content&rdquo;</B>). All Content
                  created by you is solely your responsibility and you must
                  evaluate and bear all risks associated with the use and
                  distribution of any of your Content.
                </P>

                <P margin='20px 0px 0px'>
                  The Site, the App and any other features, tools, materials, or
                  other services offered from time to time by Push are referred
                  to here as (the <B>&quot;Services&rdquo;</B>). Please read
                  these Terms of Use (these <B>&quot;Terms&rdquo;</B>) carefully
                  before using the Services. By using or otherwise accessing the
                  Services, or clicking to accept or agree to these Terms where
                  that option is made available, you (1) accept and agree to
                  these Terms, (2) consent to the collection, use, disclosure
                  and other handling of information as described in our{' '}
                  <A
                    href={useBaseUrl('./privacy')}
                    target='_blank'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    Privacy Policy
                  </A>{' '}
                  and (3) agree to any additional terms, rules and conditions of
                  participation issued by Push from time to time. If you do not
                  agree to these Terms, then you may not access or use the
                  Content or Services.
                </P>

                <P margin='20px 0px 0px'>
                  In no circumstances shall the Site, the App or the Services be
                  utilised for distributing Content relating to: (a) investment
                  products, financial transactions or payment services, (b)
                  gambling, lottery, sweepstakes or contests, (c) racism, (d)
                  violence and weapons, (e) self-harm, (f) nudity, pornography
                  or sexual services, (g) illegal substances, (h) terrorism (i)
                  emergency calling or messaging to any emergency services
                  personnel or public safety answering points or (j) malicious
                  programs, viruses, Trojan horses and worms.
                </P>

                <P>
                  We reserve the right to revise these Terms at any time, which
                  revised Terms shall become effectively immediately upon
                  posting on the Site or the App (as the case may be), and the
                  amended Terms shall supersede and replace these Terms.{' '}
                  <B>
                    YOU ARE HEREBY ADVISED THAT YOUR CONTINUED USE OF THE SITE,
                    THE APP AND/OR THE SERVICES CONSTITUTES YOUR ACCEPTANCE OF
                    THESE TERMS OF USE, AND ANY APPLICABLE CURRENT AND PRIOR
                    VERSIONS, AND ANY AMENDMENTS THERETO.
                  </B>
                </P>

                {/* 2. Modification of Terms of Use */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  2. MODIFICATIONS TO TERMS OF SERVICE / USE
                </P>
                <P margin='-10px 0px 20px 0px' color='#FFF'>
                  Push reserves the right, at its sole discretion, to modify or
                  replace these Terms at any time, including the Schedules
                  hereto. The most current version of these Terms will be posted
                  on our Site. You shall be responsible for reviewing and
                  becoming familiar with any such modifications. Use of the
                  Services by you after any modification to these Terms
                  constitutes your acceptance of these Terms as modified.
                </P>

                {/* 3. Eligibility */}
                <TermsHeaderGroup>
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    textTransform='uppercase'
                    size='1.2em'
                  >
                    3. REPRESENTATIONS
                  </P>
                  <P margin='0' color='#FFF'>
                    You hereby represent and warrant that:
                  </P>
                </TermsHeaderGroup>

                <P margin='20px 0px 0px 20px'>
                  <B>(a)</B> you are of the legal age of majority in your
                  jurisdiction as is required to access such Services and
                  Content and enter into arrangements as provided by the
                  Services;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(b)</B> (in the case of a corporation) you are duly
                  incorporated and in good standing under the laws of your
                  jurisdiction of incorporation;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(c)</B> you are fully able and competent to enter into the
                  terms, conditions, obligations, affirmations, representations
                  and warranties set forth in these Terms and to abide by and
                  comply with these Terms;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(d)</B> the execution and performance of these Terms shall
                  not violate or conflict with the terms or conditions of any
                  other agreement to which you are a party or by which you are
                  bound;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(e)</B> you have the right, power, and authority to enter
                  into these terms, grant the rights granted by it herein, and
                  perform your obligations without the consent or approval of
                  any third party or governmental or regulatory authority;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(f)</B> you are legally permitted to use the service in
                  your jurisdiction including owning cryptographic tokens of
                  value, and interacting with the Services or Content in any
                  way;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(g)</B> you are responsible for ensuring compliance with
                  the laws of all applicable jurisdictions at your own expense
                  (including without limitation all intellectual property, data
                  protection and privacy laws) and acknowledge that Push is not
                  liable for your failure to comply with such laws. Push
                  reserves the right to disclose any information as it deems
                  necessary to satisfy any applicable law, regulation, legal
                  process or governmental request;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(h)</B> you have not relied and shall not rely upon Push
                  for legal advice regarding your compliance with applicable
                  law; and
                </P>

                <P margin='20px 0px 20px 20px'>
                  <B>(i)</B> you and your financial institutions, or any party
                  that owns or controls you or your financial institutions, are
                  (i) not subject to sanctions or otherwise designated on any
                  list of prohibited or restricted parties, including but not
                  limited to the lists maintained by the United Nations Security
                  Council, the U.S. Government (e.g., the Specially Designated
                  Nationals List and Foreign Sanctions Evaders List of the U.S.
                  Department of Treasury and the Entity List of the U.S.
                  Department of Commerce), the European Union or its Member
                  States, or other applicable government authority and (ii) not
                  located in any country to which the United States has
                  embargoed goods or has otherwise applied any sanctions.
                </P>

                {/* 4. Account Related, Password and Security */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  4. ACCOUNT RELATED, PASSWORD AND SECURITY
                </P>
                <P margin='-10px 0px 20px'>
                  When setting up an account within Push, you will be
                  responsible for keeping your own account secrets, which may be
                  a seed phrase with a number of secret words, an account file,
                  or other locally stored secret information or any other
                  information associated with the account. Push encrypts this
                  information locally with a password you provide, and it&apos;s
                  never accessible to us or our servers. You agree to (a) never
                  use the same password for Push that you have ever used outside
                  of this service, (b) keep your secret information and password
                  confidential and do not share them with anyone else and (c)
                  immediately notify Push of any unauthorized use of your
                  account or breach of security. Push cannot and will not be
                  liable for any loss or damage arising from your failure to
                  comply with this section.
                </P>

                {/* 5. Code of Conduct */}
                <TermsHeaderGroup>
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    textTransform='uppercase'
                    size='1.2em'
                  >
                    5. CODE OF CONDUCT
                  </P>
                  <P margin='0'>
                    While using the Site, the App or the Services you agree not
                    to:
                  </P>
                </TermsHeaderGroup>

                <P margin='20px 0px 0px 20px'>
                  <B>(a)</B> restrict or inhibit any other user from using the
                  Site, the App, the Services or the Content, including without
                  limitation, by means of &quot;hacking&rdquo; or defacing any
                  portion of the Site or the App;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(b)</B> use the Site, the App, the Services or Content for
                  any unlawful purpose or in any manner not intended by Company
                  or as contemplated herein and on the Site or the App;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(c)</B> engage in rude, unlawful, harassing, vulgar,
                  obscene, hateful, threatening, abusive or otherwise
                  objectionable behaviour;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(d)</B> institute an attack upon any server used in
                  connection with the Site or the App or any portion thereof or
                  otherwise attempt to disrupt such servers;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(e)</B> express or imply that any statements you make are
                  endorsed by Push, without our prior express written consent;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(f)</B> knowingly transmit: (i) any content or information
                  that is unlawful, fraudulent, threatening, abusive, libellous,
                  defamatory, obscene or otherwise objectionable, or infringes
                  our or any third party’s intellectual property or other
                  rights; (ii) any material, non-public information about
                  companies without the authorization to do so; (iii) any trade
                  secret of any third party; or (iv) any advertisements,
                  solicitations, chain letters, pyramid schemes, investment
                  opportunities or other unsolicited commercial communication;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(g)</B> engage in spamming or flooding;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(h)</B> transmit any software or other materials that
                  contain any viruses, worms, trojan horses, defects, date
                  bombs, time bombs or other items of a destructive nature;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(i)</B> modify, adapt, sublicense, translate, reverse
                  engineer, decompile or disassemble all or any portion of the
                  Site or the App;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(j)</B> remove, alter, conceal any copyright, trademark,
                  patent or other proprietary rights notices contained in the
                  Site or the App;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(k)</B> link the Site or the App or any Content thereon to
                  any third party website or portion thereof;
                </P>

                <P margin='20px 0px 0px 20px'>
                  <B>(l)</B> use any robot, spider, site search/retrieval
                  application or other manual or automatic device or process to
                  retrieve, index, &quot;data mine&rdquo; or in any way
                  reproduce or circumvent the navigational structure or
                  presentation of the Site or the App or its contents; or
                </P>

                <P margin='20px 0px 20px 20px'>
                  <B>(m)</B> harvest or collect information about users of the
                  Site or the App without their express consent.
                </P>

                {/* 6. Disclaimers and Associated Risks */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  6. Disclaimers and Associated Risks
                </P>

                <ListGroup>
                  {/* 6.1 Risk of Cryptographic Systems */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='0px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.1 Risk of Cryptographic Systems
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    By utilizing the Services or interacting with the Content or
                    platform in any way, you represent that you understand the
                    inherent risks associated with cryptographic systems; and
                    warrant that you have an understanding of the usage and
                    intricacies of native cryptographic tokens such as Ether
                    (ETH) and Bitcoin (BTC), smart contract based tokens such as
                    those that follow an Ethereum token standard (e.g.{' '}
                    <A
                      href='https://github.com/ethereum/EIPs/issues/20'
                      tarrget='_blank'
                      display=' inline'
                      color='#e1087f'
                      background='transparent'
                      padding='0px'
                      letterSpacing='inherit'
                      textTransform='initial'
                    >
                      github.com/ethereum/EIPs/issues/20
                    </A>
                    ), and blockchain-based software systems.
                  </P>

                  {/* 6.2 Risk of Regulatory Actions */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.2 Risk of Regulatory Actions
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    Push and any supported cryptographic token and blockchain
                    could be impacted by one or more regulatory inquiries or
                    regulatory action, which could impede or limit the ability
                    of Push to continue to develop, or which could impede or
                    limit your ability to access or use the Services or the
                    underlying blockchain network.
                  </P>

                  {/* 6.3 Warranty Disclaimer */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.3 Warranty Disclaimer
                  </P>

                  <P margin='-10px 0px 0px 20px'>
                    You expressly understand and agree that your use of the
                    Services is at your sole risk. The Services (including the
                    Site, the App and the Content) are provided on an &quot;as
                    is&rdquo; and &quot;as available&rdquo; basis, without
                    warranties of any kind, either express or implied,
                    including, without limitation, implied warranties of
                    merchantability, fitness for a particular purpose or
                    non-infringement. You acknowledge that Push has no control
                    over, and no duty to take any action regarding: which users
                    gain access to or use the Services; what effects the Content
                    may have on you; how you may interpret or use the Content;
                    or what actions you may take as a result of having been
                    exposed to the Content. You release Push from all liability
                    for you having acquired or not acquired Content through the
                    Services. Push makes no representations concerning any
                    Content contained in or accessed through the Services, and
                    Push will not be responsible or liable for the accuracy,
                    copyright compliance, compliance with data protection laws,
                    legality or decency of material contained in or accessed
                    through the Services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    We do not represent or warrant that access to the Services
                    will be continuous, uninterrupted, timely or secure. You
                    acknowledge and accept that the Services (a) may contain
                    bugs, errors and defects, (b) may behave improperly or be
                    subject to periods of downtime and unavailability, (c) may
                    result in total or partial loss or corruption of data and
                    (d) may be modified at any time, including through the
                    release of subsequent versions, all with or without notice
                    to you.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    You acknowledge that Push is not responsible for
                    transferring, safeguarding, or maintaining your private keys
                    or any digital currency associated therewith. If you lose,
                    mishandle or have stolen associated digital currency private
                    keys, you acknowledge that you may not be able to recover
                    associated digital currency, and that Push is not
                    responsible for such loss. You acknowledge that Push is not
                    responsible for any loss, damage or liability arising from
                    your failure to comply with these Terms hereunder.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>
                      THE SITE, THE APP AND THE SERVICES ARE PROVIDED BY PUSH
                      (AND ITS LICENSORS AND SUPPLIERS) ON AN &quot;AS-IS&rdquo;
                      BASIS, WITHOUT WARRANTIES OR ANY KIND, EITHER EXPRESS OR
                      IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES
                      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                      NON-INFRINGEMENT, THAT USE OF THE SERVICES WILL BE
                      UNINTERRUPTED OR ERROR-FREE, OR THE SECURITY ASSOCIATED
                      USE OF, OR TRANSMISSION OF INFORMATION THROUGH, THE
                      SERVICES. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON
                      HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE
                      LIMITATIONS MAY NOT APPLY TO YOU. YOU ASSUME ALL
                      RESPONSIBILITY AND RISK FOR YOUR USE OF THE SITE, THE APP,
                      AND THE SERVICES, AND YOUR RELIANCE THEREON. NO OPINION,
                      ADVICE OR STATEMENT OF PUSH OR ITS AFFILIATES, LICENSORS,
                      CUSTOMERS, SUPPLIERS, ADVERTISERS, SPONSORS, AGENTS,
                      MEMBERS OR VISITORS, WHETHER MADE ON THE SITE, THE APP, OR
                      IN CONNECTION WITH THE SERVICES OR OTHERWISE, SHALL CREATE
                      ANY WARRANTY. YOUR USE OF THE SITE, THE APP AND THE
                      SERVICES ARE ENTIRELY AT YOUR OWN RISK.
                    </B>{' '}
                    There is a risk that the Site or the App could include
                    inaccuracies or errors. Additionally, a possibility exists
                    that unauthorised alterations could be made by third parties
                    to the Site or the App. Although we attempt to maintain and
                    ensure the integrity of the Site and the App, we make no
                    guarantees as to the completeness or correctness or the Site
                    or the App.
                  </P>

                  {/* 6.4 Risk of Exploits and Weaknesses in Cryptography Field */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.4 Risk of Exploits and Weaknesses in Cryptography Field
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    You acknowledge and understand that Cryptography is a
                    progressing field. Advances in code cracking or technical
                    advances such as the development of quantum computers may
                    present risks to cryptocurrencies and Services of Content,
                    which could result in the theft or loss of your
                    cryptographic tokens or property. To the extent possible,
                    Push intends to update the protocol underlying Services to
                    account for any advances in cryptography and to incorporate
                    additional security measures, but does not guarantee or
                    otherwise represent full security of the system. By using
                    the Services or accessing Content, you acknowledge these
                    inherent risks.
                  </P>

                  {/* 6.5 Cryptocurrency and Volatility */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.5 Cryptocurrency and Volatility
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    You understand that Ethereum and other blockchain
                    technologies and associated cryptographic tokens are highly
                    volatile due to many factors including but not limited to
                    adoption, speculation, technology and security risks. You
                    also acknowledge that the cost of transacting on such
                    technologies is variable and may increase at any time
                    causing impact to any activities taking place on the
                    blockchain network. You acknowledge these risks and agree
                    that Push cannot be held liable for such fluctuations or
                    increased costs.
                  </P>

                  {/* 6.6 Application Security */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.6 Application Security
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    You further acknowledge that blockchain applications are
                    code subject to flaws and acknowledge that you are solely
                    responsible for evaluating any code provided by the Services
                    or Content and the trustworthiness of any third-party
                    websites, products, smart-contracts, or Content you access
                    or use through the Services. You further expressly
                    acknowledge and represent that blockchain applications can
                    be written maliciously or negligently, that Push cannot be
                    held liable for your interaction with such applications and
                    that such applications may cause the loss of property or
                    even identity. This warning and others later provided by
                    Push in no way evidence or represent an on-going duty to
                    alert you to all of the potential risks of utilizing the
                    Services or Content.
                  </P>

                  {/* 5.7 Affiliated Service / Third Party Service */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.7 Affiliated Service / Third Party Service
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    Software and services provided by our affiliates (
                    <B>&quot;Affiliated Services&rdquo;</B>) and third party
                    software and services (
                    <B>&quot;Third Party Services&rdquo;</B> and, together with
                    Affiliated Services, <B>&quot;Additional Services&rdquo;</B>
                    ) included in, integrated into, or made accessible through,
                    the Services, including through the Snap System, are made
                    available to you under the terms of use of such service
                    providers (collectively,{' '}
                    <B>&quot;Service Providers&rdquo;</B>) (for example, Infura,
                    Google Analytics, etc). Please conduct your own research and
                    due diligence, and review the applicable terms of use on
                    their websites prior to using or accessing their services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    Service Providers may charge you a fee for use of, or access
                    to, such Additional Services. You acknowledge that Push may
                    earn fees from Service Providers in connection with your use
                    of such Additional Services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    You agree that Push and its affiliates are not in any way
                    associated with the owner or operator of any Third Party
                    Services or responsible or liable for the software and
                    services offered by them or for anything in connection with
                    such Third Party Services. Push does not endorse or approve
                    and makes no warranties, representations or undertakings
                    relating to the software, service or content of any Third
                    Party Services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    In addition, Push disclaims liability for any loss, damage
                    and any other consequence resulting directly or indirectly
                    from or relating to your use or access of Third Party
                    Services or any information that you may provide or any
                    transaction conducted with or through the Third Party
                    Services or the failure of any information, software or
                    services posted or offered by such Service Providers or any
                    error, omission or misrepresentation by such Service
                    Providers or any computer virus arising from or system
                    failure associated with the Third Party Services.
                  </P>

                  <P margin='20px 0px 20px 20px'>
                    In the event of any inconsistency between the terms herein
                    and the terms of the Additional Services, the terms herein
                    will prevail.
                  </P>

                  {/* 6.8 Push Not Liable */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.8 Push Not Liable
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    Without prejudice to the generality of any of the provisions
                    in these Terms, Push shall not be liable for your usage of
                    the Site, the App or the Services in the event of any
                    unavailability, downtime, suspension or termination:
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(a)</B> caused by factors outside of our reasonable
                    control, including any force majeure event or Internet
                    access or related problems;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(b)</B> that result from any voluntary actions or
                    inactions from you or any third party (including without
                    limitation capacity scaling issues, misconfiguration of
                    settings or credentials, disabling encryption keys or making
                    the encryption keys inaccessible etc.);
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(c)</B> that result from you not following any
                    best/industry practices or standards as notified to you;
                  </P>

                  <P margin='20px 0px 0px 40px'>
                    <B>(d)</B> that result from your equipment, software or
                    other technology and/or third party equipment, software or
                    other technology (other than third party equipment within
                    our direct control); or
                  </P>

                  <P margin='20px 0px 20px 40px'>
                    <B>(e)</B> arising from our suspension or termination of
                    your right to use the Site, the App or the Service in
                    accordance with these Terms.
                  </P>

                  {/* 6.9 Sensitive Data */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    6.9 Sensitive Data
                  </P>
                  <P margin='-10px 0px 20px 20px'>
                    Sensitive Data (as defined below) will not be provided to
                    Push at any time and without prejudice to the generality of
                    any of the provisions in these Terms, Push will have no
                    liability whatsoever for Sensitive Data, whether in
                    connection with a security incident or otherwise. For
                    purposes of these Terms, <B>&quot;Sensitive Data&rdquo;</B>{' '}
                    means (a) social security number, passport number, driver’s
                    license number, or similar identifier (or any portion
                    thereof), (b) credit or debit card number, (c) employment,
                    financial, genetic, biometric or health information, (d)
                    racial, ethnic, political or religious affiliation, trade
                    union membership, or information about sexual life or sexual
                    orientation, (e) account passwords, (f) date of birth, (g)
                    criminal history, (h) mother’s maiden name or (i) any other
                    information or combinations of information that is deemed
                    sensitive or private under the legal framework of any
                    applicable jurisdiction.
                  </P>
                </ListGroup>

                {/* 7. Intellectual Property */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  7. Intellectual Property
                </P>

                <ListGroup>
                  {/* 7.1 Ownership and Intellectual Property */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='0px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    7.1 OWNERSHIP AND INTELLECTUAL PROPERTY
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    All title, ownership and intellectual property rights in and
                    to the Site, the App and the Services are owned by Push or
                    its licensors. You acknowledge and agree that the Services
                    contains proprietary and confidential information that is
                    protected by applicable intellectual property and other
                    laws. Except as expressly authorized by Push in writing, you
                    agree not to copy, modify, rent, lease, loan, sell,
                    distribute, perform, display or create derivative works
                    based on the Site, the App or the Services, in whole or in
                    part.
                  </P>

                  {/* 7.2 Limited and Revocable License */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    7.2 LIMITED AND REVOCABLE LICENSE
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    We grant you limited, non-exclusive, non-transferrable,
                    revocable permission to make use of the Site, the App and
                    the Services (collectively, <B>&quot;Access&rdquo;</B>).
                    This Access shall remain in effect until and unless
                    terminated by you or us. You promise and agree that you will
                    not rent, redistribute, disclose, publish, sell, assign,
                    lease, sublicense, market or transfer the Services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    The Push software application, including without limitation
                    the Site, the App and the Services, are not sold or
                    transferred to you, and Push and its licensors retain
                    ownership of all copies of the software applications even
                    after installation on your personal computers, mobile
                    handsets, tablets, wearable devices, speakers and/or other
                    devices (<B>&quot;Devices&rdquo;</B>).
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    All Push trademarks, service marks, trade names, logos,
                    domain names, and any other features of the Push brand
                    (“Push Brand Features”) are the sole property of Push or its
                    licensors. The Terms do not grant you any rights to use any
                    Push Brand Features whether for commercial or non-commercial
                    use.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    All Push trademarks, service marks, trade names, logos,
                    domain names, and any other features of the Push brand (
                    <B>&quot;Push Brand Features&rdquo;</B>) are the sole
                    property of Push or its licensors. These Terms do not grant
                    you any rights to use any Push Brand Features whether for
                    commercial or non-commercial use.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    You agree to abide by our user guidelines and not to use the
                    Services or any part thereof in any manner not expressly
                    permitted by these Terms. Except for the rights expressly
                    granted to you in these Terms, Push grants no right, title,
                    or interest to you in the Site, the App or the Services.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    Third party software (for example, open source software
                    libraries) included in the Services are made available to
                    you under the relevant third party software library’s
                    license terms.
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    Notwithstanding anything herein to the contrary, nothing in
                    these Terms entitle you to copy, modify, fork, merge,
                    combine with another program or create a derivative work of
                    the Services, including without limitation the Site and the
                    App.
                  </P>

                  {/* 7.3 CONTENT */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 20px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    7.3 CONTENT
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    By displaying, publishing or distributing Content via the
                    Site, the App or the Services, you hereby grant to Push an
                    irrevocable, perpetual, worldwide, royalty-free,
                    non-exclusive license to use, modify, delete from, add to,
                    create derivative works of, publicly perform, publicly
                    display, reproduce and distribute (and to sublicense the
                    foregoing rights through multiple tiers of licensees) such
                    Content via the Site or the App. From time to time, we may
                    remove Content from the Site or the App, permanently or
                    temporarily.
                  </P>

                  <P margin='20px 0px 20px 20px'>
                    You represent and warrant that: (a) you own the Content
                    displayed, published or distributed via the Site, the App or
                    the Services, or otherwise have the right to grant the
                    licenses set forth above, and (b) the display, publishing or
                    distribution of your Content on or through the Site, the App
                    or the Services does not violate the privacy rights,
                    publicity rights, contract rights, intellectual property or
                    any other rights of any person or entity. You agree to be
                    fully responsible for and to pay any and all royalties,
                    fees, and any other monies owing any person or entity by
                    reason of any Content displayed published or distributed by
                    you.
                  </P>
                </ListGroup>

                {/* 8. Links */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  8. Links
                </P>
                <P margin='-10px 0px 20px 0px'>
                  The Services provide, or third parties may provide, links to
                  other World Wide Web or accessible sites, applications or
                  resources. Because Push has no control over such sites,
                  applications and resources, you acknowledge and agree that
                  Push is not responsible for the availability of such external
                  sites, applications or resources, and does not endorse and is
                  not responsible or liable for any content, advertising,
                  products or other materials on or available from such sites or
                  resources. You further acknowledge and agree that Push shall
                  not be responsible or liable, directly or indirectly, for any
                  damage or loss caused or alleged to be caused by or in
                  connection with use of or reliance on any such content, goods
                  or services available on or through any such site or resource.
                </P>

                {/* 9. INDEMNITY */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  9. INDEMNITY
                </P>
                <P margin='-10px 0px 20px 0px'>
                  You agree to release and to indemnify, defend and hold
                  harmless Push and its parents, subsidiaries, affiliates and
                  agencies, as well as the officers, directors, employees,
                  shareholders and representatives of any of the foregoing
                  entities, from and against any and all losses, liabilities,
                  expenses, damages, costs (including attorneys’ fees and court
                  costs) claims or actions of any kind whatsoever arising or
                  resulting from:
                </P>

                <ListGroup>
                  <P margin='0px 0px 0px 20px'>
                    <B>(a)</B> your use of the Site, App or Services;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(b)</B> your breach of these Terms;
                  </P>

                  <P margin='20px 0px 0px 20px'>
                    <B>(c)</B> any of your acts or omissions that implicate
                    publicity rights, defamation or invasion of privacy.
                  </P>
                </ListGroup>

                <P margin='20px 0px 20px 0px'>
                  Push reserves the right, at its own expense, to assume
                  exclusive defence and control of any matter otherwise subject
                  to indemnification by you and, in such case, you agree to
                  cooperate with Push in the defence of such matter.
                </P>

                {/* 10. Limitation on Liability */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  10. LIMITATION ON LIABILITY
                </P>
                <P margin='-10px 0px 0px 0px'>
                  <B>
                    YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL
                    RESPONSIBILITY FOR YOUR USE OF THE SITE, THE APP AND THE
                    SERVICES. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU
                    SEND OR RECEIVE DURING YOUR USE OF THE SITE, THE APP AND THE
                    SERVICES MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER
                    ACQUIRED BY UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE
                    THAT YOUR USE OF THE SITE, THE APP AND THE SERVICES IS AT
                    YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE
                    THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
                    NEITHER PUSH NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE
                    TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF ANY
                    KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
                    PROFITS, GOODWILL, USE, DATA OR OTHER TANGIBLE OR INTANGIBLE
                    LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT
                    LIABILITY OR ANY OTHER THEORY (EVEN IF PUSH HAD BEEN ADVISED
                    OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE
                    SITE, THE APP OR SERVICES; THE USE OR THE INABILITY TO USE
                    THE SITE, THE APP OR THE SERVICES; UNAUTHORIZED ACCESS TO OR
                    ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR
                    CONDUCT OF ANY THIRD PARTY ON THE SITE, THE APP OR THE
                    SERVICES; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF
                    COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL
                    MALFUNCTIONS; FAILURES, INCLUDING PUBLIC UTILITY OR
                    TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY,
                    DELETIONS OR DEFECTS OF ANY DEVICE OR NETWORK, PROVIDERS, OR
                    SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT
                    PERMIT PARTICIPATION IN THE SERVICES); ANY INJURY OR DAMAGE
                    TO COMPUTER EQUIPMENT; INABILITY TO FULLY ACCESS THE SITE,
                    THE APP OR THE SERVICES OR ANY OTHER WEBSITE; THEFT,
                    TAMPERING, DESTRUCTION, OR UNAUTHORIZED ACCESS TO, IMAGES OR
                    OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR
                    INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL,
                    PRINTING OR OTHER ERRORS, OR ANY COMBINATION THEREOF; OR ANY
                    OTHER MATTER RELATING TO THE SITE, THE APP OR ANY OTHER
                    ASPECT OF THE SERVICES.
                  </B>
                </P>

                <P margin='20px 0px 20px 0px'>
                  <B>
                    SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                    WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
                    INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF
                    THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                  </B>
                </P>

                {/* 11. NO OTHER BENEFICARY (THIRD PARTY) */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  11. NO OTHER BENEFICARY (THIRD PARTY)
                </P>
                <P margin='-10px 0px 20px 0px'>
                  You agree that, except as otherwise expressly provided in
                  these Terms, there shall be no third party beneficiaries to
                  these Terms.
                </P>

                {/* 12. Termination and Suspension */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  12. Termination and Suspension
                </P>
                <P margin='-10px 0px 0px 0px'>
                  Push may terminate or suspend all or part of the Services and
                  your Push access immediately, without prior notice or
                  liability, if you breach any of the provisions of these Terms,
                  or in the event of any adverse change of regulatory
                  environment. Upon termination of your access, your right to
                  use the Services will immediately cease.
                </P>

                <P margin='20px 0px 20px 0px'>
                  The following provisions of these Terms survive any
                  termination of these Terms: WARRANTY DISCLAIMERS; OWNERSHIP
                  AND INTELLECTUAL PROPERTY; LINKS; INDEMNITY; LIMITATION ON
                  LIABILITY; NO OTHER BENEFICARY (THIRD PARTY); TERMINATION;
                  GENERAL INFORMATION (Schedule A); BINDING ARBITRATION AND
                  CLASS ACTION WAIVER (Schedule B).
                </P>

                {/* 13. NOTICE AND PROCEDURE FOR MAKING CLAIMS */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  13. NOTICE AND PROCEDURE FOR MAKING CLAIMS
                </P>
                <P margin='10px 0px 0px 0px'>
                  If you believe that your copyright or the copyright of a
                  person on whose behalf you are authorized to act has been
                  infringed, please provide Push a written Notice containing the
                  following information:
                </P>

                <P margin='10px 0px 20px 0px'>
                  <UL>
                    <LI>
                      <B>
                        An electronic (or) physical signature of the person
                        authorized to act on behalf of the owner (or) the owner
                        themselves of the copyright or other intellectual
                        property interest.
                      </B>
                    </LI>
                    <LI>
                      <B>
                        A detailed description of the copyrighted work in
                        question or the intellectual property that you claim has
                        been infringed.
                      </B>
                    </LI>
                    <LI>
                      <B>
                        A detailed description of where the material that you
                        claim is infringing and where it is located on the
                        Services.
                      </B>
                    </LI>
                    <LI>
                      <B>Your address, Phone Number, and Email.</B>
                    </LI>
                    <LI>
                      <B>
                        A statement by you that you have a good faith belief
                        that the disputed use is not authorized by the copyright
                        owner, its agent, or the law.
                      </B>
                    </LI>
                    <LI>
                      <B>
                        A statement by you, made under penalty of perjury, that
                        the above information in your Notice is accurate and
                        that you are the copyright or intellectual property
                        owner or authorized to act on the copyright or
                        intellectual property owner’s behalf.
                      </B>
                    </LI>
                  </UL>
                </P>

                <P margin='0px 0px 20px 0px'>
                  The above information should be sent to:{' '}
                  <A
                    href='mailto://support@epns.io'
                    display=' inline'
                    color='#e1087f'
                    background='transparent'
                    padding='0px'
                    letterSpacing='inherit'
                    textTransform='initial'
                  >
                    support@epns.io
                  </A>
                </P>
              </ItemH>

              {/* Schedule A */}
              <ItemH
                alignItems='flex-start'
                margin='0px 0px 20px 0px'
                justifyContent='flex-start'
              >
                <H2
                  textTransform='uppercase'
                  letterSpacing='0.1em'
                  className='scheduleHeader'
                >
                  <Span
                    background='#000'
                    color='#fff'
                    fontWeight='600'
                    padding='0px 8px'
                  >
                    Schedule
                  </Span>
                  <Span
                    fontWeight='600'
                    color='#fff'
                    background='#e20880'
                    padding='0px 8px'
                  >
                    A
                  </Span>
                </H2>
              </ItemH>

              <ItemH
                alignItems='flex-start'
                margin='-30px 0px 20px 0px'
                justifyContent='flex-start'
              >
                {/* A. General Information */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  GENERAL INFORMATION
                </P>

                <ListGroup>
                  {/* 1. Entire Agreement */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='0px 0px 20px 0px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    1. ENTIRE AGREEMENT
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    These Terms (and any additional terms, rules and conditions
                    of participation that Push may post on the Services)
                    constitute the entire agreement between you and Push with
                    respect to the Services and supersedes any prior agreements,
                    oral or written, between you and Push. In the event of a
                    conflict between these Terms and the additional terms, rules
                    and conditions of participation, the latter will prevail
                    over these Terms to the extent of the conflict. These Terms
                    (and any additional terms, rules and conditions of
                    participation that Push may post on the Services) constitute
                    the entire agreement between you and Push with respect to
                    the Services and supersedes any prior agreements, oral or
                    written, between you and Push. In the event of a conflict
                    between these Terms and the additional terms, rules and
                    conditions of participation, the latter will prevail over
                    these Terms to the extent of the conflict.
                  </P>

                  {/* 2. Waiver and Severability */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 0px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    2. WAIVER AND SEVERABILITY
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    The failure of Push to exercise or enforce any right or
                    provision of these Terms shall not constitute a waiver of
                    such right or provision. If any provision of these Terms is
                    found by an arbitrator or court of competent jurisdiction to
                    be invalid, the parties nevertheless agree that the
                    arbitrator or court should endeavour to give effect to the
                    parties’ intentions as reflected in the provision, and the
                    other provisions of these Terms remain in full force and
                    effect.
                  </P>

                  {/* 3. Statute of Limitations */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 0px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    3. STATUTE OF LIMITATIONS
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    You agree that regardless of any statute or law to the
                    contrary, any claim or cause of action arising out of or
                    related to the use of the Services or these Terms must be
                    filed within one (1) year after such claim or cause of
                    action arose or be forever barred.
                  </P>

                  {/* 4. Miscellaneous */}
                  <P
                    weight='400'
                    spacing='0.2em'
                    color='#FFF'
                    margin='20px 0px 20px 0px'
                    textTransform='uppercase'
                    size='1.1em'
                  >
                    4. MISCELLANEOUS
                  </P>
                  <P margin='-10px 0px 0px 20px'>
                    The section subject in these Terms are only for your
                    convenience and have no legal or contractual effect.
                  </P>
                </ListGroup>
              </ItemH>

              {/* Schedule B */}
              <ItemH
                alignItems='flex-start'
                margin='20px 0px 20px 0px'
                justifyContent='flex-start'
              >
                <H2
                  textTransform='uppercase'
                  letterSpacing='0.1em'
                  className='scheduleHeader'
                >
                  <Span
                    background='#000'
                    color='#fff'
                    fontWeight='600'
                    padding='0px 8px'
                  >
                    Schedule
                  </Span>
                  <Span
                    fontWeight='600'
                    color='#fff'
                    background='#e20880'
                    padding='0px 8px'
                  >
                    B
                  </Span>
                </H2>
              </ItemH>

              <ItemH
                align='flex-start'
                margin='-30px 0px 20px 0px'
                justifyContent='flex-start'
              >
                {/* A. General Information */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  textTransform='uppercase'
                  size='1.2em'
                >
                  BINDING ARBITRATION AND CLASS ACTION WAIVER
                </P>

                <P
                  color='#FFF'
                  margin='-10px 0px 20px 0px'
                  textTransform='uppercase'
                >
                  <B>
                    PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY
                    AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A
                    LAWSUIT IN COURT
                  </B>
                </P>

                {/* 1. Initial Dispute Resolution */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='0px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  1. INITIAL DISPUTE RESOLUTION
                </P>
                <P margin='-10px 0px 0px 0px'>
                  The parties shall use their best efforts to engage directly to
                  settle any dispute, claim, question, or disagreement and
                  engage in good faith negotiations which shall be a condition
                  to either party initiating an arbitration or lawsuit.
                </P>

                {/* 2. Binding Arbitration */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='20px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  2. BINDING ARBITRATION
                </P>
                <P margin='-10px 0px 20px 0px'>
                  If the parties do not reach an agreed upon solution within a
                  period of 30 days from the time informal dispute resolution
                  under the Initial Dispute Resolution provision begins, then
                  either party may initiate binding arbitration as the sole
                  means to resolve claims, subject to the provisions set forth
                  below. Specifically, all claims arising out of or relating to
                  these Terms (including their formation, performance and
                  breach), the parties’ relationship with each other and/or your
                  use of the Services shall be finally settled by binding
                  arbitration.
                </P>
                <P margin='0px 0px 20px 0px'>
                  You may not assign, delegate or transfer these Terms or your
                  rights or obligations hereunder, in any way (by operation of
                  law or otherwise) without our prior written consent. We may
                  transfer, assign, or delegate these Terms and our rights and
                  obligations without consent. These Terms are governed by and
                  will be construed under the laws of Singapore, without regard
                  to the conflicts of laws provisions thereof. Any dispute
                  arising from or relating to the subject matter of these Terms
                  shall be finally settled in Singapore, in English, in
                  accordance with the Arbitration Rules of the Singapore
                  International Arbitration Centre (the{' '}
                  <B>&quot;Rules&rdquo;</B>) for the time being in force, which
                  rules are deemed to be incorporated by reference in this
                  Section, by one commercial arbitrator with substantial
                  experience in resolving intellectual property and commercial
                  contract disputes, who shall be selected from the appropriate
                  list of arbitrators in accordance with such Rules. The seat of
                  the arbitration shall be Singapore.
                </P>
                <P margin='0px 0px 20px 0px'>
                  Judgment upon the award rendered by such arbitrator may be
                  entered in any court of competent jurisdiction. Despite the
                  foregoing obligation to arbitrate disputes, each party shall
                  have the right to pursue injunctive or other equitable relief
                  at any time, from any court of competent jurisdiction. For all
                  purposes of this Agreement, the parties consent to exclusive
                  jurisdiction and venue in Singapore.{' '}
                  <B>
                    {' '}
                    Any arbitration under these Terms will take place on an
                    individual basis: class arbitrations and class actions are
                    not permitted. YOU UNDERSTAND AND AGREE THAT BY ENTERING
                    INTO THESE TERMS, YOU AND PUSH ARE EACH WAIVING THE RIGHT TO
                    TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION
                  </B>
                </P>

                {/* 3. Class Action Waiver */}
                <P
                  weight='400'
                  spacing='0.2em'
                  color='#FFF'
                  margin='0px 0px 20px 0px'
                  textTransform='uppercase'
                  size='1.1em'
                >
                  3. CLASS ACTION WAIVER
                </P>
                <P margin='-10px 0px 20px 0px'>
                  The parties further agree that any arbitration shall be
                  conducted in their individual capacities only and not as a
                  class action or other representative action, and the parties
                  expressly waive their right to file a class action or seek
                  relief on a class basis.{' '}
                  <B>
                    YOU AND PUSH AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                    OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A
                    PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                    REPRESENTATIVE PROCEEDING.
                  </B>{' '}
                  If any court or arbitrator determines that the class action
                  waiver set forth in this Pgraph is void or unenforceable for
                  any reason or that an arbitration can proceed on a class
                  basis, then the arbitration provision set forth above shall be
                  deemed null and void in its entirety and the parties shall be
                  deemed to have not agreed to arbitrate disputes.
                </P>
              </ItemH>
            </ItemH>
          </Content>
        </Section>
      </Section>
    </Layout>
  );
}

const TermsHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled(Section)`
  border-radius: 0 0 48px 48px;
`;

const HeroContent = styled(Content)`
  align-self: stretch;
  padding-top: 250px;
  padding-bottom: 40px;

  @media ${device.laptop} {
    padding-top: 200px;
    padding-bottom: 40px;
  }

  @media ${device.mobileL} {
    padding-top: 112px;
    padding-bottom: 40px;
  }
`;

export default TermsOfService;
