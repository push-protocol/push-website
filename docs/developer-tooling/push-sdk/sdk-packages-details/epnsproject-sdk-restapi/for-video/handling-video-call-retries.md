# Handling video call retries

## Handle video call retries

Push video automatically handles the possibility of the call not connecting by retrying the connection. In order to make sure that call retrying works for your dapp, you just need to add the following to our good old event handler of the`USER_FEEDS` event from `@pushprotocol/socket`:

```typescript
pushSDKSocket?.on(EVENTS.USER_FEEDS, (feedItem: any) => {
    const { payload } = feedItem || {};
    // we check for the additionalMeta property in payload.data
    if (payload.hasOwnProperty('data') && payload['data'].hasOwnProperty('additionalMeta')) {
        const additionalMeta = payload['data']['additionalMeta'];
        
        // check for PUSH_VIDEO
        if (additionalMeta.type === `${ADDITIONAL_META_TYPE.PUSH_VIDEO}+1`){
            const videoCallMetaData = JSON.parse(additionalMeta.data);
            
            if (videoCallMetaData.status === VideoCallStatus.RETRY_RECEIVED) {
                const {
                    signalData,
                } = additionalMeta;
                
                videoObject.connect({
                    signalData,
                });
            }
            else if (videoCallMetaData.status === VideoCallStatus.RETRY_INITIALIZED && videoObject.isInitiator()) {
                videoObject.request({
                    senderAddress: videoObject.data.local.address,
                    recipientAddress: videoObject.data.incoming[0].address,
                    chatId: videoObject.data.meta.chatId,
                    retry: true,
                });
            }
            else if (videoCallMetaData.status === VideoCallStatus.RETRY_INITIALIZED && !videoObject.isInitiator()) {
                const {
                    signalData,
                } = additionalMeta;
                
                videoObject.acceptRequest({
                    signalData,
                    senderAddress: videoObject.data.local.address,
                    recipientAddress: videoObject.data.incoming[0].address,
                    chatId: videoObject.data.meta.chatId,
                    retry: true,
                });
            }
        }
    }
});
```
