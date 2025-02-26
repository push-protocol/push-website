import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { PushNetwork } from '@pushprotocol/push-chain';
import { ENV } from '@pushprotocol/push-chain/src/lib/constants';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

// Define a type for the context value
type AccountContextType = {
  account: string | null;
  pushNetwork: PushNetwork | null;
  handleSendSignRequestToPushWallet: (data: Uint8Array) => Promise<Uint8Array>;
};

// Create context with the defined type
const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const { universalAddress, handleSendSignRequestToPushWallet } =
    usePushWalletContext();
  const [pushNetwork, setPushNetwork] = useState<PushNetwork | null>(null);

  useEffect(() => {
    const setNetwork = async () => {
      try {
        const pushNetworkInstance = await PushNetwork.initialize(ENV.DEV);
        setPushNetwork(pushNetworkInstance);
      } catch (error) {
        console.error('Error initializing Push Network:', error);
      }
    };
    setNetwork();
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account: universalAddress ? universalAddress.address : null,
        pushNetwork,
        handleSendSignRequestToPushWallet,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccountContext must be used within an AccountProvider');
  }
  return context;
};

export default AccountContext;
