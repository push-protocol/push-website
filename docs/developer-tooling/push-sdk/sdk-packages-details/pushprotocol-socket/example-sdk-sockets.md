import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Example - SDK Sockets

:::info
Push for hackers repo contains all code coverage and examples of @pushprotocol/restapi and @pushprotocol/socket [👇](https://emojipedia.org/emoji/%F0%9F%91%87/)
:::

<CustomLinkCard text="Push for Hackers Repo Containing Code Coverage for all SDK Functionality with Examples" link="https://github.com/ethereum-push-notification-service/push-for-hackers/tree/main/sdk-functionality"/>

## Basic example of using SDK sockets in a React App

```typescript
import { useState, useEffect } from "react";
import { createSocketConnection, EVENTS } from '@pushprotocol/socket';

const user = '0xD8634C39BBFd4033c0d3289C4515275102423681';
const chainId = 5;

const userCAIP = `eip155:${chainId}:${user}`;

function App() {
  const [sdkSocket, setSDKSocket] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(sdkSocket?.connected);

  const addSocketEvents = () => {
    sdkSocket?.on(EVENTS.CONNECT, () => {
      setIsConnected(true);
    })

    sdkSocket?.on(EVENTS.DISCONNECT, () => {
      setIsConnected(false);
    })

    sdkSocket?.on(EVENTS.USER_FEEDS, (feedItem) => {
      /**
       * "feedItem" is the latest notification received
       */
      console.log(feedItem);
    })
  };

  const removeSocketEvents = () => {
    sdkSocket?.off(EVENTS.CONNECT);
    sdkSocket?.off(EVENTS.DISCONNECT);
  };

  const toggleConnection = () => {
    if (sdkSocket?.connected) {
      sdkSocket.disconnect();
    } else {
      sdkSocket.connect();
    }
  };


  useEffect(() => {
    if (sdkSocket) {
      addSocketEvents();
    }
    return () => {
      removeSocketEvents();
    };
  }, [sdkSocket]);

  useEffect(() => {
    const connectionObject = createSocketConnection({
      user: userCAIP,
      env: 'dev',
      socketOptions: { autoConnect: false }
    });


    setSDKSocket(connectionObject);

    return () => {
      if (sdkSocket) {
        sdkSocket.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <h1>Socket Hello World</h1>

      <div>
        <p>Connection Status : {JSON.stringify(isConnected)}</p>

        <button onClick={toggleConnection}>{isConnected ? 'disconnect' : 'connect'}</button>
      </div>
    </div>
  );
}

export default App;
```

:::info
**Note:**
_Please note connecting with sockets and maintaining the state of the connection object in your DAPP might have a different setup like first getting the `user` account and `chainId` and then connecting with the socket._ 

_You can use_ [_React Context_](https://reactjs.org/docs/context.html) _for state management._
:::
