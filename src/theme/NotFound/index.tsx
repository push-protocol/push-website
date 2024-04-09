/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

// Internal Components
import { Content, Section } from "@site/src/css/SharedStyling";
import Footer from "@site/src/segments/Footer";

export default function Index(): JSX.Element {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
       
         <Section>
          <Content>
             <NotFoundContent />
          </Content>
        </Section>

      </Layout>


   <Footer />
  </>
  );
}
