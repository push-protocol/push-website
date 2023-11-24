import React from "react";
import styled from "styled-components";
import Link from "@docusaurus/Link";

// Internal Components
import {
  A,
  Button,
  Content,
  H2,
  Image,
  ItemH,
  ItemV,
  Span,
} from "@site/src/css/SharedStyling";
import { BsLinkedin, BsTwitter, BsYoutube, BsX } from "react-icons/bs";
import { BiLink, BiShareAlt } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import useMediaQuery from "@site/src/hooks/useMediaQuery";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItem from "@theme/BlogPostItem";

// Internal Configs
import GLOBALS, { device } from "@site/src/config/globals";

const MorePosts = ({ allPosts }) => {
  const isMobile = useMediaQuery(device.tablet);
  console.log(allPosts?.slice(0, 4), "allPosts");

  return (
    <div>
      <MoreRow>
        <ResponsiveH2
          size={isMobile ? "16px" : "24px"}
          weight="500"
          spacing="-0.02em"
          lineHeight="110%"
          color="#00000"
        >
          More from Push Protocol
        </ResponsiveH2>

        <MoreButton
          title="Developer Docs"
          background="#D53A94"
          radius="12px"
          padding="14px 20px"
          size="16px"
          weight="500"
          spacing="-0.03em"
          lineHeight="26px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          self={isMobile ? "stretch" : "self"}
          onClick={() => {
            window.open(`https://twitter.com/pushprotocol`, "_blank");
          }}
        >
          <BsTwitter size={23} color="#fff" style={{ marginRight: "10px" }} />
          Follow
        </MoreButton>
        {/* </Anchor> */}
      </MoreRow>

      <GridItem marginTop={false}>
        {allPosts?.slice(0, 4).map((item) => (
          <div>
            <Image src={item?.Preview?.assets?.image} />

            <TextView>
              <BlogPostItemHeaderInfo morePosts={item?.Preview?.metadata} />
              <Link itemProp="url" to={item?.Preview?.metadata?.permalink}>
                <LinkText>{item?.Preview?.frontMatter?.title}</LinkText>
              </Link>
              <TextSpan>{item?.Preview?.frontMatter?.text}</TextSpan>
            </TextView>
            <Link
              to={item?.Preview?.metadata?.permalink}
              style={{ color: "#dd44b9" }}
            >
              Read More
            </Link>
          </div>
        ))}
      </GridItem>
    </div>
  );
};

const ResponsiveH2 = styled(H2)``;

const MoreRow = styled.div`
  margin: 50px 0 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 52px;
    align-items: center;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const MoreButton = styled(Button)`
  @media ${device.mobileL} {
    width: 100%;
    margin: 20px;
  }
`;

const GridItem = styled.div`
  width: 800px !important;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 33px;
  box-sizing: border-box;
  margin: ${(props) =>
    props.marginTop ? "100px auto 0 auto" : "30px auto 100px auto"};

  @media (max-width: 820px) {
    width: 100% !important;
    padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}`};
    box-sizing: border-box;
    margin: 10px auto 0 auto;
    gap: 30px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const TextView = styled.div`
  margin-top: 20px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const TextSpan = styled.div`
  color: var(--ifm-color-secondary-blog);
  font-family: Strawford;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const LinkText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: var(--ifm-color-primary-blog) !important;

  font-family: Strawford;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;

  &:hover {
    color: #dd44b9 !important;
  }
`;

export default MorePosts;
