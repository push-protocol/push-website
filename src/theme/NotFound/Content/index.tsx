/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import { Content, ItemH, Section } from '../../../css/SharedStyling';
import { useLocation } from '@docusaurus/router';
import styled from 'styled-components';

// Internal Components
import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';
import ChainFooter from '@site/src/components/Chain/ChainFooter';

export default function NotFoundContent({ className }: Props): ReactElement {
  const location = useLocation();
  const baseURL = useSiteBaseUrl();

  // Determine if the pathname starts with '/docs'
  const isDocsPage =
    location?.pathname.startsWith(baseURL + '/docs') ||
    location?.pathname.startsWith(baseURL + '/blog');

  return (
    <PageContainer isDocsPage={isDocsPage!}>
      <Section>
        <Content>
          <main className={clsx('container margin-vert--xl', className)}>
            <div className='row'>
              <div className='col col--6 col--offset-3'>
                <Heading as='h1' className='hero__title'>
                  <Translate
                    id='theme.NotFound.title'
                    description='The title of the 404 page'
                  >
                    Page Not Found
                  </Translate>
                </Heading>
                <p>
                  <Translate
                    id='theme.NotFound.p1'
                    description='The first paragraph of the 404 page'
                  >
                    We could not find what you were looking for.
                  </Translate>
                </p>
                <p>
                  <Translate
                    id='theme.NotFound.p2'
                    description='The 2nd paragraph of the 404 page'
                  >
                    Please contact the owner of the site that linked you to the
                    original URL and let them know their link is broken.
                  </Translate>
                </p>
              </div>
            </div>
          </main>
        </Content>
      </Section>

      {isDocsPage && (
        <ItemH background='#e8eff8'>
          <ChainFooter showPattern={false} />
        </ItemH>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div<{ isDocsPage?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isDocsPage }) => !isDocsPage && 'background: #e8eff8'};
  ${({ isDocsPage }) => isDocsPage && 'min-height: 100vh;'};
  ${({ isDocsPage }) =>
    isDocsPage
      ? 'color: var(--ifm-color-primary-text) !important'
      : 'color: #000 !important'};
`;
