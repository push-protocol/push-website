import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Testing Sent Notifications

Push is an open network and supports all platforms. This means that notifications work just like how Ethereum functions. The communications are stored in an open, distributed (and soon to be decentralised) network (much like how the backend of Ethereum stores the data).&#x20;

This can then fetched by any crypto frontend / wallet / software to display it out to their users (very similar to how frontend wallets like Metamask, Trust, Phantom, etc works).

This means you can see notifications on any platform or frontend that integrates Push. You can test out how notifications come by using any of the crypto frontends listed below or any other third party ones that have integrated the Push protocol.

## Push Protocol Integrated Mobile Apps / Wallets / Extensions and dApps

:::tip
Push protocol is made for users and all its functions including opting in to receive notifications are completely gassless :tada:
:::

### Extensions

**Step 1:** Install Push Staging Chrome Extension.

<CustomLinkCard text="Staging Environment" link="https://chrome.google.com/webstore/detail/push-staging-protocol-alp/bjiennpmhdcandkpigcploafccldlakj"/>

<CustomLinkCard text="Production Environment" link="https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"/>

:::tip
**Next steps:** just sign in from the public wallet address with which you have opted in to receive notifications from your channel.
:::

:::caution
If you are installing the Chrome extension on **Brave** then you need to enable the following for the extension to work properly:

**Go on settings-> Privacy and Security ->Use Google services for push messaging (enable this and relaunch)**&#x20;
:::

### dApp

<CustomLinkCard text="Staging Environment" link="https://staging.push.org/"/>

<CustomLinkCard text="Production Environment" link="https://app.push.org/"/>

:::tip
**Next steps:** just sign in from the public wallet address with which you have opted in to receive notifications from your channel.
:::

### Mobile Apps

#### Android

<CustomLinkCard text="Staging Environment" link="https://play.google.com/store/apps/details?gl=US&hl=en&id=io.epns.epnsstaging"/>

<CustomLinkCard text="Production Environment" link="https://play.google.com/store/apps/details?gl=US&hl=en&id=io.epns.epns"/>

:::tip
**Next steps:** just sign in from the public wallet address with which you have opted in to receive notifications from your channel.
:::

#### iOS

:::caution
iOS doesn't have a public staging app (only production app is available on the App Store).

Best way to test staging on iOS would be to join :point_right: [Push Discord Channel](https://discord.com/invite/YVPB99F9W5) :point_left: and ask a team member to provide you with a testflight beta link.&#x20;
:::

<CustomLinkCard text="For Requesting Staging Environment App" link="https://discord.com/invite/pushprotocol"/>

<CustomLinkCard text="Production Environment" link="https://apps.apple.com/us/app/ethereum-push-service-epns/id1528614910"/>
