---
description: Package for React based UI web components to be used by dApp.
---

# @pushprotocol/uiweb

## Installation

{% tabs %}
{% tab title="npm" %}
```bash
npm install @pushprotocol/uiweb
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @pushprotocol/uiweb
```
{% endtab %}
{% endtabs %}

> _**Note:**_ `styled-components` is a `peerDependency`. Please install it in your dApp if you don't have it already!

{% tabs %}
{% tab title="npm" %}
```bash
npm install styled-components
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add styled-components
```
{% endtab %}
{% endtabs %}

### Notification Item Component

Import the SDK package in the component file where you want to render notification(s)

```typescript
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
```

After you get the Notification data from the [API](https://app.gitbook.com/o/-MCJn6rNLQKVOk-aCimu/s/pQzrIQwtTyxis5s10tsE/\~/changes/OfIXJ2KYkdQs4ZwCZcMo/developer-tooling/epns-sdk/sdk-packages/epnsproject-sdk-restapi) or otherwise,

```typescript
const notifications = await PushAPI.user.getFeeds({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
  env: 'staging'
});
```

Render the Notification UI as follows

```typescript
<div>
{notifications.map((oneNotification, i) => {
    const { 
        cta,
        title,
        message,
        app,
        icon,
        image,
        url,
        blockchain,
        notification
    } = oneNotification;

    return (
        <NotificationItem
            key={id} // any unique id
            notificationTitle={title}
            notificationBody={message}
            cta={cta}
            app={app}
            icon={icon}
            image={image}
            url={url}
            theme={theme}
            chainName={blockchain}
            // chainName={blockchain as chainNameType} // if using Typescript
        />
        );
    })}
</div>
```

For Spam data [API](https://github.com/ethereum-push-notification-service/push-sdk/blob/main/packages/restapi/README.md#fetching-user-spam-notifications)

```typescript
const spams = await PushAPI.user.getFeeds({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
  spam: true,
  env: 'staging'
});
```

render the Spam UI as follows

```typescript
 {spams.map((oneNotification, i) => {
    const { 
      cta,
      title,
      message,
      app,
      icon,
      image,
      url,
      blockchain,
      secret,
      notification
    } = oneNotification;

    return (
      <NotificationItem
        key={`spam-${i}`}
        notificationTitle={title}
        notificationBody={message}
        cta={cta}
        app={app}
        icon={icon}
        image={image}
        url={url}
        theme={theme}
        chainName={blockchain}
        // optional parameters for rendering spams
        isSpam
        subscribeFn={subscribeFn} // see below
        isSubscribedFn={isSubscribedFn} // see below
      />
    );
  })}
```

```typescript
const subscribeFn = async () => {
  // opt in to the spam notification item channel
}
```

We can use this [epnsproject-sdk-restapi](../epnsproject-sdk-restapi/ "mention") method to do that - [subscribe](https://github.com/ethereum-push-notification-service/push-sdk/blob/main/packages/restapi/README.md#opt-in-to-a-channel)

```typescript
const isSubscribedFn = async () => {
  // return boolean which says whether the channel for the 
  // spam notification item is subscribed or not by the user.
}
```

We can use this [epnsproject-sdk-restapi](../epnsproject-sdk-restapi/ "mention") method to find out that - [getSubscriptions](https://github.com/ethereum-push-notification-service/push-sdk/blob/main/packages/restapi/README.md#fetching-user-subscriptions), where

| Prop              | Type    | Remarks                                                                                                                                                                                |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| notificationTitle | string  | Title of the notification (given during notification creation)                                                                                                                         |
| notificationBody  | number  | Message body of the notification (given during notification creation)                                                                                                                  |
| icon              | string  | Channel Icon (IPFS url) (given during channel setup)                                                                                                                                   |
| app               | string  | Channel Name (given during channel setup)                                                                                                                                              |
| cta               | string  | Call To Action Link (given during notification creation)                                                                                                                               |
| image             | string  | Any media link (given during notification creation)                                                                                                                                    |
| url               | string  | Channel Link (given during channel setup)                                                                                                                                              |
| chainName         | string  | Can be anyone of the following blockchain networks on which the notification was sent - "ETH\_MAINNET", "ETH\_TEST\_GOERLI", "POLYGON\_MAINNET", "POLYGON\_TEST\_MUMBAI", "THE\_GRAPH" |
| theme             | string  | 'light' or 'dark' (customization to be given by the dApp)                                                                                                                              |
| isSpam            | boolean | whether a spam notification or not                                                                                                                                                     |
| subscribeFn       | Promise | Function to subscribe to the channel                                                                                                                                                   |
| isSubscribedFn    | Promise | Function that returns the subscription status of a channel                                                                                                                             |
