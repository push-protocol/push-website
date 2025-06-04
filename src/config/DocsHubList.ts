interface IQuickstartItem {
  title: string;
  codeblock: string;
}

export interface ITechDocItem {
  title: string;
  description: string;
  codeblock?: string;
  srcref?: string;
  alt?: string;
  link?: string;
  target?: string;
}

interface ISdkListItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

export const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Push Chain Quickstart',
    codeblock: `// Import Push Chain SDK for blockchain interactions
import { PushChain, CONSTANTS } from '@pushchain/core';

// For Ethereum: Import utility functions from viem
import { hexToBytes } from 'viem';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';

// For Solana: Import utility functions from @solana/web3.js
import { Keypair } from '@solana/web3.js';

// For Ethereum: Generate a new random private key 
const ethereumPrivateKey = generatePrivateKey(); // Replace it with your private key generation logic
const ethereumAccount = privateKeyToAccount(ethereumPrivateKey);

// For Solana: Generate a new random Solana keypair
const solanaAccount = Keypair.generate(); // Replace it with your private key generation logic

// For Ethereum: Create universal signer from viem account
const ethereumUniversalSigner = await PushChain.utils.signer.toUniversal(ethereumAccount, {
  chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  library: CONSTANTS.LIBRARY.ETHEREUM_VIEM,
});

// For Solana: Create universal signer from Solana keypair
const solanaUniversalSigner = await PushChain.utils.signer.toUniversal(solanaAccount, {
  chain: CONSTANTS.CHAIN.SOLANA_TESTNET,
  library: CONSTANTS.LIBRARY.SOLANA_WEB3,
});

// Initialize Push Chain SDK on Testnet for Ethereum. You could also initialize it with solanaUniversalSigner for Solana.
const pushChainClient = await PushChain.initialize(ethereumUniversalSigner, {
  network: CONSTANTS.NETWORK.TESTNET,
});

// Send a cross-chain transaction
const txHash = await pushChainClient.Universal.sendTransaction({
  target: '0x2FE70447492307108Bdc7Ff6BaB33Ff37Dacc479', // Target contract address on Push Chain
  value: BigInt(0), // ETH value to send
  data: '0x2ba2ed980000000000000000000000000000000000000000000000000000000000000312', // Contract call data
  gasLimit: BigInt(50000000000000000),
  maxFeePerGas: BigInt(50000000000000000),
  maxPriorityFeePerGas: BigInt(200000000),
  deadline: BigInt(9999999999), // Transaction deadline (optional for some chains)
});
`,
  },
];

export const TechDocItems: ITechDocItem[] = [
  {
    title: 'Push Chain',
    srcref: 'pushchain',
    alt: 'Logo representing Push Chain - Push Protocol',
    link: '/docs/chain',
    target: '_self',
    description:
      'Explore Push Chain and learn how to integrate it for building universal Apps.',
    codeblock: `// For Ethereum: Generate a new random private key 
const ethereumPrivateKey = generatePrivateKey(); // Replace it with your private key generation logic
const ethereumAccount = privateKeyToAccount(ethereumPrivateKey);

const ethereumUniversalSigner = await PushChain.utils.signer.toUniversal(ethereumAccount, {
  chain: CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  library: CONSTANTS.LIBRARY.ETHEREUM_VIEM,
});

// Initialize Push Chain SDK on Testnet for Ethereum. 
const pushChainClient = await PushChain.initialize(ethereumUniversalSigner, {
  network: CONSTANTS.NETWORK.TESTNET,
});

// Send a cross-chain transaction
const txHash = await pushChainClient.Universal.sendTransaction({
  target: '0x2FE70447492307108Bdc7Ff6BaB33Ff37Dacc479', // Target contract address on Push Chain
  value: BigInt(0), // ETH value to send
  data: '0x2ba2ed980000000000000000000000000000000000000000000000000000000000000312', // Contract call data
  gasLimit: BigInt(50000000000000000),
  maxFeePerGas: BigInt(50000000000000000),
  maxPriorityFeePerGas: BigInt(200000000),
  deadline: BigInt(9999999999), // Transaction deadline (optional for some chains)
});
`,
  },
  {
    title: 'Examples',
    srcref: 'star',
    alt: 'Logo representing examples repo - Push Protocol',
    link: 'https://github.com/push-protocol/push-chain-sdk/tree/main/examples',
    target: '_blank',
    description:
      'Examples to showcase the power of Push Protocol’s communication stack.',
  },
  {
    title: 'Push Reward Points',
    srcref: 'rewards',
    alt: 'Logo representing reward points of Push Protocol',
    link: '/docs/rewards',
    target: '_self',
    description:
      'Reward Points Program for contributors. Complete activities and earn points.',
  },
  {
    title: 'Push Notification & Chat Protocol',
    srcref: 'showrunners',
    alt: 'Logo representing reward points of Push Protocol',
    link: 'https://comms.push.org/docs',
    target: '_blank',
    description:
      'Looking for Push Notification or Chat protocol? they have a new home over here.',
  },
];

export const SdkItemsList: ISdkListItem[] = [
  {
    title: 'Devnet SDK',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushchain/devnet',
  },
  // {
  //   title: 'REST API',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/restapi',
  // },
  // {
  //   title: 'React Native',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/react-native-sdk',
  // },
  // {
  //   title: 'Socket',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/socket',
  // },
  // {
  //   title: 'UIWeb',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/uiweb',
  // },
  {
    title: 'UI Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://github.com/push-protocol/push-chain-sdk',
  },
];

export const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  {
    title: 'How do I contact customer support?',
    content:
      'You can try telekinesis, but we recommend using our contact form instead.',
  },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  {
    title: 'How can I use Push as an end-user?',
    content: 'Content for Section 3',
  },
  {
    title: 'What are the web3 communication products launched by Push?',
    content: 'Content for Section 3',
  },
  {
    title: 'Do I have to pay to send notifications?',
    content: 'Content for Section 3',
  },
];
