import BrowserOnly from '@docusaurus/BrowserOnly';
import { Button } from '@site/src/css/SharedStyling';
import React from 'react';

declare global {
  interface Window {
    ethereum?: {
      request: (args: {
        method: string;
        params: Array<{
          chainId: string;
          chainName: string;
          nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
          };
          iconUrls: string[];
          rpcUrls: string[];
          blockExplorerUrls: string[];
        }>;
      }) => Promise<void>;
    };
  }
}

interface NetworkConfig {
  chainId: number;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  iconUrls: string[];
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

interface AddChainToWalletProps {
  config: NetworkConfig;
  title?: string;
}

const AddChainToWallet: React.FC<AddChainToWalletProps> = ({
  title = 'Add to Wallet',
  config,
}) => {
  const addNetwork = async () => {
    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        alert('Please install MetaMask first!');
        return;
      }

      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${config.chainId.toString(16)}`,
            chainName: config.chainName,
            nativeCurrency: config.nativeCurrency,
            iconUrls: config.iconUrls,
            rpcUrls: config.rpcUrls,
            blockExplorerUrls: config.blockExplorerUrls,
          },
        ],
      });
    } catch (error) {
      console.error('Error adding network:', error);
      alert('Failed to add network to MetaMask');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '20px 0',
      }}
    >
      <Button
        onClick={addNetwork}
        style={{
          backgroundColor: '#D548EC',
          border: 'none',
          padding: '12px 24px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        {title}
      </Button>
    </div>
  );
};

export default function Wrapper(props: AddChainToWalletProps) {
  return <BrowserOnly>{() => <AddChainToWallet {...props} />}</BrowserOnly>;
}
