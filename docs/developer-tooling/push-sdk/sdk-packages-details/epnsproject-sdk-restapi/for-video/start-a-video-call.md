---
description: All set with the video object, let's initiate the video call
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Start a video call

## 1. Create a Local Media Stream

Before initiating the call, we need to create a local media stream, i.e., local audio and video which will be used during the call initiation.

```typescript
await videoObject.create({
  video?: boolean; // for frontend use
   audio?: boolean; // for frontend use
   stream?: MediaStream; // for backend use
  });
```


* create() function generates a new MediaStream object using `navigator.mediaDevices.getUserMedia`
* The `video` and `audio` boolean params are used to tell if you want to enable your audio/video during the video call or not. Example:
  * If you pass the `video` as `false`, your video will be disabled during the entire call. If you pass it as `true`, then your video will be turned on initially during the call, and later, you will have the option to toggle it on or off.
  * For `audio` the above logic is the same.

:::info
If `stream` object is passed as a param to `create()` function then `create` doesn't generate a new MediaStream rather, it would just assigns `data.local.stream` to the passed `stream` object param. This is for backend use.
:::

| Property | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| video    | Whether the video should be enabled or not during the call. Defaults to `true`. |
| audio    | Whether the audio should be enabled or not during the call. Defaults to `true`. |
| stream   | Local stream. For backend use. Defaults to `null`.                              |

:::info
⚠ **Warning**: If `audio`, `video` aren't passed as true in `create()` then they won't be available during the entire video call respectively.
:::

<CustomLinkCard text='Create' link='https://www.npmjs.com/package/@pushprotocol/restapi#create' />

## 2. Fire a Request for a Video Call

We are now ready to request/initiate a video call. As the name suggests, this will be done on the initiator's end.

```typescript
await videoObject.request({
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  onReceiveMessage?: (message: string) => void;
  retry?: boolean;
});
```

| Property         | Description                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| senderAddress    | Wallet address of the local peer/user                                                                   |
| recipientAddress | Wallet address of remote peer/user ie the address which you want to call                                |
| chatId           | Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress |
| onReceiveMessage | Function which will be called when the sender receives a message via webRTC data channel                |
| retry            | If we are retrying the call then this param should be set to true, only for internal use                |

<CustomLinkCard text='Request' link='https://www.npmjs.com/package/@pushprotocol/restapi#request' />

## 3. Accept a Request for a Video Call

### Receiving a request in sockets

In order to receive a video call request, we need to listen for the `USER_FEEDS` event from `@pushprotocol/socket` and use the following code inside of the event listener:

```typescript
import { VideoCallStatus } from '@pushprotocol/restapi';
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads/constants';

pushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
    // The event listner for the USER_FEEDS event
    const { payload } = feedItem || {};
    // we check if the additionalMeta property is present in payload.data
    if (payload.hasOwnProperty('data') && payload['data'].hasOwnProperty('additionalMeta')) {
    
        const additionalMeta = payload['data']['additionalMeta'];
        
        // check for PUSH_VIDEO
        if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){
            const videoCallMetaData = JSON.parse(additionalMeta.data);
        
            // If the received status is INITIALIZED that means we have an incoming call
            if (videoCallMetaData.status === VideoCallStatus.INITIALIZED) {
                const {
                    // your address, ie the recipient address of the video call notification
                    recipientAddress,
                    
                    // address of the other peer/user part of the video call, who sent you this notification
                    senderAddress,
                    
                    // the unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress
                    chatId,
                    
                    // webRTC signal data received from the peer which sent this notification
                    signalData,
                    
                    // current status of the video call, can be found from VideoCallStatus enum
                    status,
                } = videoCallMetaData;
                // Note - We'll need signalData while calling acceptRequest function
                // You can save these properties in a state for furture use
                
                /* 
                    If you want you can also save these properties on the data state
                    we created while initializing the video object.
                    Later you can use it while calling acceptRequest()
                    signalData will be available via data.meta.initiator.signal
                */
                videoObject.setData((oldData) => {
                  return produce(oldData, (draft) => {
                    draft.local.address = recipientAddress;
                    draft.incoming[0].address = senderAddress;
                    draft.incoming[0].status = PushAPI.VideoCallStatus.RECEIVED;
                    draft.meta.chatId = chatId;
                    draft.meta.initiator.address = senderAddress;
                    draft.meta.initiator.signal = signalData;
                  });
                });
                // PS: Don't forget to import videoObject. :)
            }
        }
    }
});
```

The `additionalMeta` property has the following type:

```typescript
additionalMeta?: {
  /**
   * type = ADDITIONAL_META_TYPE+VERSION
   * VERSION > 0
   */
  type: `${ADDITIONAL_META_TYPE}+${number}`;
  data: string;
  domain?: string;
};
```

When you parse the `data` property from the `additionalMeta` object, you'll receive the videoCallMetaData, which has the following type:

```typescript
interface VideoCallMetaDataType {
  recipientAddress: string;
  senderAddress: string;
  chatId: string;
  signalData?: any;
  status: VideoCallStatus;
}
```

| Property         | Description                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| recipientAddress | Wallet address of remote peer/user ie the address which you want to call                                |
| senderAddress    | Wallet address of the local peer/user                                                                   |
| chatId           | Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress |
| signalingData    | WebRTC signal data received from the peer which sent this notification                                  |
| status           | Current status of the video call, can be found from VideoCallStatus enum                                |

### Accepting the Request

After receiving a request for a video call, you can show a sort of incoming call UI. Now it's time to accept the request for a video call on the receiver's end. For this, we'll need the `signalData` we received from the event handler of the `USER_FEEDS` event above.

```typescript
await videoObject.acceptRequest({
  signalData: any;
  senderAddress: string;
  recipientAddress: string;
  chatId: string;
  onReceiveMessage?: (message: string) => void;
  retry?: boolean;
});

// Note: If you saved the properties from the additionalMeta received in the sockets
// You can call acceptRequest() like below:
await videoObject.acceptRequest({
  signalData: data.meta.initiator.signal;
  senderAddress: data.local.address;
  recipientAddress: data.incoming[0].address;
  chatId: data.meta.chatId;
});
```

| Property         | Description                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| signalData       | Signal data received from the initiator peer via push notification upon request() call                  |
| senderAddress    | Wallet address of the local peer/user                                                                   |
| recipientAddress | Wallet address of remote peer/user ie the address which you want to call                                |
| chatId           | Unique identifier for every push chat, here, the one between the senderAddress and the recipientAddress |
| onReceiveMessage | Function which will be called when the sender receives a message via webRTC data channel                |
| retry            | If we are retrying the call, only for internal use                                                      |

<CustomLinkCard text='Accept Request' link='https://www.npmjs.com/package/@pushprotocol/restapi#acceptrequest' />

## 4. Connect a video call

Now, to finally connect a video call on the initiator's end, we need to listen for the `USER_FEEDS` event from `@pushprotocol/socket` and use the following code inside of the event listener:

```typescript
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads/constants'

pushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
    // The event listner for the USER_FEEDS event
    const { payload } = feedItem || {};
    //We check if the additionalMeta property is present in payload.data
    if (payload.hasOwnProperty('data') && payload['data'].hasOwnProperty('additionalMeta')) {
        
        const additionalMeta = payload['data']['additionalMeta'];
        
        // check for PUSH_VIDEO
        if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){
            const videoCallMetaData = JSON.parse(additionalMeta.data);
        
            // If the received status is RECEIVED that means we can connect the video call
            if (videoCallMetaData.status === VideoCallStatus.RECEIVED) {
                const {
                    signalData,
                } = videoCallMetaData;
                
                // connecting the call using received signalData
                videoObject.connect({
                    signalData,
                })
                // PS: Dont forget to import videoObject. :)
            }
        }
    }
});
```

```typescript
videoObject.connect({
  signalData: any;
});
```

| Property   | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| signalData | Signal data received from the receiver peer via push notification upon acceptRequest() call |

<CustomLinkCard text='Connect' link='https://www.npmjs.com/package/@pushprotocol/restapi#connect' />

## 5. Disconnect a video call

To disconnect a call, we use the `disconnect()` method on the videoObject.

```typescript
videoObject.disconnect();
```

And add this to the event handler of the`USER_FEEDS` event from `@pushprotocol/socket`:

```typescript
import { ADDITIONAL_META_TYPE } from '@pushprotocol/restapi/src/lib/payloads/constants'

pushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
    // The event listner for the USER_FEEDS event

    const { payload } = feedItem || {};
    // we check if the additionalMeta property is present in payload.data
    if (payload.hasOwnProperty('data') && payload['data'].hasOwnProperty('additionalMeta')) {
        
        // parsing additionalMeta
        const additionalMeta = payload['data']['additionalMeta'];
        
        // check for PUSH_VIDEO
        if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){
            const videoCallMetaData = JSON.parse(additionalMeta.data);
            
            // If the received status is DISCONNECTED that means the call has ended
            if (videoCallMetaData.status === VideoCallStatus.DISCONNECTED) {
                // here you can do a window reload or just clear out the video state
            }
        }
    }
});
```

<CustomLinkCard text='Disconnect' link='https://www.npmjs.com/package/@pushprotocol/restapi#disconnect' />
