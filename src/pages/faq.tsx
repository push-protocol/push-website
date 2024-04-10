// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React from "react";

// External Components
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Internal Components
import {
  A,
  Button,
  Content,
  H2,
  H3,
  HeroHeader,
  ItemH,
  ItemV,
  P,
  Section,
  Span,
  ULV2,
} from "@site/src/css/SharedStyling";

// Import Assets
import ImageFAQ from "@site/static/assets/website/faq/faq-projects.webp";
import { BsChevronExpand } from "react-icons/bs";

// Internal Configs
import { device } from "@site/src/config/globals";
import { PageMeta } from "@site/src/config/pageMeta";
import { General, Notifs, Chat, IntegratingPush, Governance, Token } from "@site/src/config/FAQList";


function FAQ() {
  const { t } = useTranslation();

  const [showAnswers, setShowAnswers] = React.useState([]);
  const [active, setActiveSection] = React.useState();

  const toggleShowAnswer = (id, section) => {
    setActiveSection(section);
    if (active === section) {
      setShowAnswers((oldAnswers) => {
        return {
          ...oldAnswers,
          [id]: !oldAnswers[id],
        };
      });
    } else {
      setShowAnswers([]);
      setShowAnswers((oldAnswers) => {
        return {
          [id]: !oldAnswers[id],
        };
      });
    }
  };

  const Items = ({ body }) => {
    return (
      <ItemH flexDirection="column">
        {body?.map(({ question, section, renderAnswer }, index) => (
          <QnAItem key={index} justifyContent="flex-start">
            <Question
              onClick={() => {
                toggleShowAnswer(index, section);
              }}
              hover="#e20880"
              isOpen={showAnswers[index] && active === section}
            >
              <Span fontSize="16px">{question}</Span>
              <BsChevronExpand size={20} color={"#ddd"} />
            </Question>

            {showAnswers[index] && active === section && renderAnswer()}
          </QnAItem>
        ))}
      </ItemH>
    );
  };

  return (
    <Layout
      title={PageMeta.FAQS.pageTitle}
      description={PageMeta.FAQS.pageDescription}
      showNavbar="website"
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push | FAQ" />
        <meta
          property="og:description"
          content="Find answers to your most common questions in our FAQ section. Get clear and concise explanations on a variety of topics to solve your queries quickly and efficiently."
        />
        <meta
          property="og:image"
          content={useBaseUrl(
            require("/static/assets/previews/faqpreview.png").default,
            { absolute: true },
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pushprotocol" />
        <meta name="twitter:title" content="Push | FAQ" />
        <meta
          name="twitter:description"
          content="Find answers to your most common questions in our FAQ section. Get clear and concise explanations on a variety of topics to solve your queries quickly and efficiently."
        />
        <meta
          property="twitter:image"
          content={useBaseUrl(
            require("/static/assets/previews/faqpreview.png").default,
            { absolute: true },
          )}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Push Protocol",
            description: "The Communication Protocol of Web3",
            url: "https://push.org",
            logo: "/assets/website/favicon.ico",
            sameAs: [
              "https://twitter.com/pushprotocol",
              "https://www.linkedin.com/company/push-protocol/mycompany/",
            ],
          })}
        </script>
      </Head>

        
        <HeroSection 
          background="#121315"
          minHeight="70vh"
          >
          <Content
            className="contentBox"
            flex="1"
            alignSelf="center"
          >
            <ItemH flexDirection="column">
              <H2 color="#fff" textAlign="center" fontSize="36px">
                {t("faq.hero.title")}
              </H2>
              <H3
                fontSize="16px"
                fontWeight="300"
                margin="30px 0px 30px 0px"
                letterSpacing="0.1em"
                color="#fff"
                textAlign="center"
                style={{ maxWidth: "400px" }}
              >
                {t("faq.hero.update-text")}
              </H3>
            </ItemH>
          </Content>
        </HeroSection>

        <Section
          curve="bottom"
          data-bkg="light"
        >
          <Content
            className="contentBox"
            alignSelf="center"
          >
            <ItemV alignItems="flex-start">
              {/* Questions and answers */}
              <Title>General</Title>
              <Items body={General} />

              <Title>Push Notifications</Title>
              <Items body={Notifs} />

              <Title>Push Chat</Title>
              <Items body={Chat} />

              <Title>Integrating Push</Title>
              <Items body={IntegratingPush} />

              <Title>Push Governance</Title>
              <Items body={Governance} />

              <Title>$PUSH Token</Title>
              <Items body={Token} />
            </ItemV>
          </Content>
        </Section>
    </Layout>
  );
}



// css style
const Question = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border-radius: 0px;
  background: ${(props) => (props.isOpen ? "#e20880" : "#fff")};

  & span {
    color: ${(props) => (props.isOpen ? "#FFF !important" : "#000")};
  }

  &:hover {
    color: #fff !important;
  }
`;

const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
`;

const QnAItem = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  color: #000;

  & ${Question} {
    // background: transparent;
    justify-content: flex-start;

    &:hover {
    }

    & ${Span} {
      font-weight: 400;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #000;
      font-size: 1.05em;
    }
  }
`;

const AMod = styled(A)`
  color: #000 !important;
  font-weight: 400;
  text-decoration: underline;
  background: transparent;
  padding: 0px;
`;

const Image = styled.img`
  width: 400px;
`;

const Title = styled.div`
  font-family: "Strawford";
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  margin-top: 50px;
`;

const HeroSection = styled(Section)`
  border-radius: 0 0 48px 48px;
`;

export default FAQ;
