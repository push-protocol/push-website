// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';

// Internal Component

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';
import Template from '../components/Template/Template';

function TemplatePage() {
  return (
    <Layout
      title={PageMeta.TEMPLATE.pageTitle}
      description={PageMeta.TEMPLATE.pageDescription}
      showNavbar={false}
    >
      <Template />
    </Layout>
  );
}

export default TemplatePage;
