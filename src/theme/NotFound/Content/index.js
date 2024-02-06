import React, { useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import sidebars from '@site/sidebars';
import Layout from '@theme/Layout';
import PageNotFound from '@site/src/components/PageNotFound';
import Link from '@docusaurus/Link';
import styled from 'styled-components';
import BlogSidebar from '@theme/BlogSidebar';
import CaretDown from "../../../../static/assets/svgs/CaretDown.svg";
import BlogListPage from '../../BlogListPage';
import { BlogListPageContent } from '../../BlogListPage';

export default function NotFoundContent({ className }) {
  const id = window.location.pathname;
  const [activeSidebarID, setActiveSidebarID] = useState(0);

  const pushNotificationSidebarItems = sidebars.pushNotificationSidebar.map((item) => ({
    ...item,
    permalink: item.id,
    active: item.id === id,
    title: item.label,
  }));
  console.log(pushNotificationSidebarItems, "sidebarssss");

  console.log(id, "iddd");
  return (
    <StyledContainer>
      <BlogSidebar
        className={clsx('docSidebar', className)}
        sidebar={{
          title: (
            <SideBarHeading>
              Intro to Push Notifications
            </SideBarHeading>
          ),
          items: [
            {
              title:
                (
                  <SidebarLink>
                    Quickstart
                  </SidebarLink>
                ),
              permalink: "/push-notifications/quickstart",
            },
            {
              title:
                (
                  <SidebarLink>
                    important Concepts
                  </SidebarLink>
                ),
              permalink: "/push-notifications/important-concepts",
            },
            {
              title: (
                <SidebarLink>
                  Supported Wallet Standards
                </SidebarLink>
              ),
              permalink: "/push-notifications/supported-wallet-standards",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink onClick={() => { activeSidebarID !== 1 ? setActiveSidebarID(1) : setActiveSidebarID(0) }}>
                    Build
                    <SidebarSvg style={{ transform: activeSidebarID === 1 ? "rotate(90deg)" : "rotate(0)" }} />
                  </SidebarLink>
                  {activeSidebarID === 1 && (
                    <SidebarLinkContainer>
                      <SidebarInnerLink>
                        Yooo
                      </SidebarInnerLink>
                      <SidebarInnerLink>
                        Yooo
                      </SidebarInnerLink>
                      <SidebarInnerLink>
                        Yooo
                      </SidebarInnerLink>
                      <SidebarInnerLink>
                        Yooo
                      </SidebarInnerLink>
                      <SidebarInnerLink>
                        Yooo
                      </SidebarInnerLink>
                    </SidebarLinkContainer>
                  )}
                </SidebarLinkContainer>
              ),
              collapsible: true,
              // permalink: "/docs/notifications/build/",
            },
            {
              title: (
                <SidebarLinkContainer>

                  <SidebarLink>
                    Playground
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/playground/",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink>
                    Showrunners Scaffold
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/showrunners-scaffold/",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink>
                    Tutorials
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/tutorials/",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink>
                    Concepts
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/concepts/",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink>
                    Notification Standards
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/notification-standards/",
            },
            {
              title: (
                <SidebarLinkContainer>
                  <SidebarLink>
                    Push Smart Contracts
                    <CaretDown />
                  </SidebarLink>
                </SidebarLinkContainer>
              ),
              permalink: "/docs/notifications/push-smart-contracts/",
            }
          ]
        }}
      />
      <CenteredRow>
        <PageContainer>
          <PageNotFound title='Oops...' text="The page you're trying to reach doesn't exist." buttonText="Go to Docs Hub" buttonFunction={() => console.log("Yo boi")} />
          {/* <BlogListPage {...props}/> */}
        </PageContainer>
      </CenteredRow>
    </StyledContainer>
  );
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 86%;
  margin: 0 auto;
  height: 91vh;
  .docSidebar {
    margin-right: 20px;
    width: 263px;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
`;

const SideBarHeading = styled.p`
  width: 100%;
  max-width: 270px;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  background-color: #DD44B9;
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
`;

const SideBarHeadingNotActive = styled.h2`
  width: 263px;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const StyledSidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 8px;
  height: 41px;
  width: 100%;
  max-width: 270px;
  padding: 10px 8px 10px 16px;
  justify-content: space-between;
  transition: transform 0.3s ease;  // Add smooth transition for transform property
  #innerLink {
    margin-left: 80px;
  }
`;

const SidebarInnerLink = styled(SidebarLink)`
  margin-left: 8px;
  transition: transform 0.3s ease;
  max-width: 250px;
  width: 90%;
`

const SidebarLinkContainer = styled.div`
cursor: pointer;
`;

const SidebarSvg = styled(CaretDown)`
  transition: transform 0.3s ease;
  transform: rotate(0);
  margin-left: 80px;
  #innerLink {
    margin-left: 80px;
  }
`;