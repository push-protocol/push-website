---
description: >-
  If a channel exists with Push , then from any dApp a user can opt in to that
  channel without having to go to the Push dApp with this feature
---

# Channel Opt-In/Opt-Out

Your dApp can use these abstractions to trigger opt in functionality from your UI to the Push backend. We also provide a UI component to show the users available Push apps if they are interested to checkout directly in the Push ecosystem of apps their notifications.

#### In order to implement signing, we take advantage of [EIP-712](https://eips.ethereum.org/EIPS/eip-712), more details on the `signer` parameter can be found [here](https://eips.ethereum.org/EIPS/eip-712)

```
import { channels } from  "@epnsproject/frontend-sdk-staging";

//get channel basic info
const details = await channels.getChannelByAddress(CHANNEL_ADDRESS)

//check if user is subscribed to channel
const isSubscribed = channels.isUserSubscribed(account, CHANNEL_ADDRESS)

//opt into a channel
channels.optIn(
  signer,
  channelAddress,
  chainId,
  userAccount,
  {
    onSuccess: () =>  // do something after a successfull subscription, like bring up a modal or a notification
  }
);

//opt out of a channel
channels.optOut(
  signer,
  channelAddress,
  chainId,
  userAccount,
  {
    onSuccess: () =>  // do something after a successfull unsubscription, like bring up a modal or a notification
  }
);
```

### OnSubscribeModal

You also get an additional **OnSubscribeModal** to display links to Push apps in several mediums.

```
import {
  OnSubscribeModal,
} from "@epnsproject/frontend-sdk-staging";
const [modalOpen, setModalOpen] = useState(false);

return (
    {modalOpen && <OnSubscribeModal onClose={() => setModalOpen(false)} />}
)
```
