// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Layout from '@theme/Layout';

// Internal Component
import ChainEcosystem from '../../components/ChainEcosystem/ChainEcosystem';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushChainEcosystem() {
  return (
    <Layout
      title={PageMeta.ECOSYSTEM.pageTitle}
      description={PageMeta.ECOSYSTEM.pageDescription}
      showNavbar={'chain'}
    >
      <ChainEcosystem />
    </Layout>
  );
}

export default PushChainEcosystem;
