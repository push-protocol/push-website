// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React, { useEffect, useRef, useState } from 'react';

// External Components
import { useLocation } from '@docusaurus/router';
import * as PushAPI from '@pushprotocol/restapi';
import { ChatUIProvider } from '@pushprotocol/uiweb';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

// Internal Components
import { BRBMainComponent } from '@site/src/components/BRB/BRBMainComponent';

// Import Assets

// Internal Configs
import { PushChatTheme } from '@site/src/components/BRB/PushChatTheme';
import { PageMeta } from "@site/src/config/pageMeta";
import { AccountContext, EnvContext, SocketContext, Web3Context } from '@site/src/context';
import { ENV } from '@site/src/helpers/web3helper';
import { useSDKSocket } from '@site/src/hooks/useSDKSocket';

function getLibrary(provider: any) {
  // this will vary according to whether you use e.g. ethers or web3.js
  const gottenProvider = new ethers.providers.Web3Provider(provider, 'any');
  return gottenProvider;
}

export const BRBWeb3Component = () => {
  const { account, library, active, chainId } = useWeb3React();
  const location = useLocation();
  const [env, setEnv] = useState<ENV>(ENV.PROD);
  const [isCAIP, setIsCAIP] = useState(false);
  const [signer, setSigner] = useState();
  const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');

  const socketData = useSDKSocket({
    account: account,
    chainId: chainId,
    env,
    isCAIP,
  });

  useEffect(() => {
    (async () => {
      if (!account || !env || !library) return;

      const user = await PushAPI.user.get({ account: account, env });
      let pgpPrivateKey;
      const librarySigner = await library.getSigner(account);
      setSigner(librarySigner);
      if (user?.encryptedPrivateKey) {
        pgpPrivateKey = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: account,
          signer: librarySigner,
          env,
        });
      }

      setPgpPrivateKey(pgpPrivateKey);
    })();
  }, [account, env, library]);
  
  return (
    <EnvContext.Provider value={{ env, isCAIP }}>
      <Web3Context.Provider value={{ account, active, library, chainId }}>
        <SocketContext.Provider value={{ socketData }}>
          <AccountContext.Provider value={{ pgpPrivateKey }}>
            <ChatUIProvider
              env={env}
              theme={PushChatTheme}
            >
              
              {/* Load main BRB Component */}
              <BRBMainComponent />
            
            </ChatUIProvider>
          </AccountContext.Provider>
        </SocketContext.Provider>
      </Web3Context.Provider>
    </EnvContext.Provider>
  );
}
