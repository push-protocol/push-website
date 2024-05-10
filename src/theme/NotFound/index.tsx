/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import { useLocation } from '@docusaurus/router';

// Internal Components
import Footer from '@site/src/segments/Footer';

export default function Index(): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;

  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />

      <Layout
        showNavbar={
          !location.pathname.startsWith('/docs') &&
          !location.pathname.startsWith('/blog')
            ? 'website'
            : 'docusaurus'
        }
      >
        <NotFoundContent />
      </Layout>
    </>
  );
}
