import Link from '@docusaurus/Link';
import AddChainToWallet from '@site/src/components/AddChainToWallet/AddChainToWallet';
import Heading from '@theme/Heading';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

const TESTNET_CONFIG = {
  chainId: 42101,
  chainName: 'Push Chain Testnet',
  nativeCurrency: {
    name: 'Push Chain',
    symbol: 'PC',
    decimals: 18,
  },
  rpcUrls: [
    'https://evm.rpc-testnet-donut-node1.push.org/',
    'https://evm.rpc-testnet-donut-node1.push.org/',
  ],
  iconUrls: [],
  blockExplorerUrls: ['https://donut.push.network'],
};

const PushChainSpecs: React.FC = () => {
  const tabValues = [
    { value: 'testnet_donut', label: '🍩 Donut Testnet', default: true },
    { value: 'mainnet', label: 'Mainnet - Coming Soon 🚀' },
  ];

  return (
    <Tabs groupId='chain-network' values={tabValues}>
      <TabItem value='testnet_donut'>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Network Name</strong>
              </td>
              <td>
                <code>Push Chain Donut Testnet</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>RPC URL</strong>
              </td>
              <td>
                <code>https://evm.rpc-testnet-donut-node1.push.org/</code>
                {', '}
                <code>https://evm.rpc-testnet-donut-node2.push.org/</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Chain ID</strong>
              </td>
              <td>
                <code>42101</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Currency Symbol</strong>
              </td>
              <td>
                <code>PC</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Block Explorer URL</strong>
              </td>
              <td>
                <code>https://donut.push.network</code>
              </td>
            </tr>
          </tbody>
        </table>

        <AddChainToWallet
          title='Add to Wallet (Testnet Donut)'
          config={TESTNET_CONFIG}
        />
      </TabItem>

      <TabItem value='mainnet'>
        <div className='admonition admonition-info alert alert--info'>
          <div className='admonition-heading'>
            <Heading as='h5'>Coming Soon!</Heading>
          </div>
          <div className='admonition-content'>
            <p>
              Push Chain Mainnet is currently in development. Stay tuned for
              updates!
            </p>
            <ul>
              <li>
                Follow us on <Link to='https://x.com/pushchain'>X</Link> for
                announcements
              </li>
              <li>
                Join our{' '}
                <Link to='https://discord.gg/pushprotocol'>Discord</Link> to be
                part of the community
              </li>
            </ul>
          </div>
        </div>
      </TabItem>
    </Tabs>
  );
};

export default PushChainSpecs;
