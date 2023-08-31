---
description: Get notifications and channel information
---

# Fetching User and Channel Details

:::caution
All SDK functions require passing the parameter **env** which should either pass **staging** or **prod** based on the demand. Passing anything else in this param might result in unexpected results.
:::

## Introduction

To receive notifications, the user must opt-in to the channel. This is done only once and is gasless, the user only needs to sign a message.

To see all the supported channels on Push, go to [Push Protocol dapp](https://app.push.org/#/channels) and opt-in to your favorite protocol to receive notifications.

:::info
If the user hasn't opt-in to a channel, the notifications will land in **spam** instead of the **inbox**.
:::

## Get **user notifications**&#x20;

Get all the notifications from a user.

```typescript
const notifications = await PushAPI.user.getFeeds({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
  env: 'staging'
});
```

## **Get user spam notifications**

Get all the notifications from a user that are in the spam box. Notifications go to spam if the user hasn't opt-in to the channel.

```typescript
const spams = await PushAPI.user.getFeeds({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
  spam: true,
  env: 'staging'
});
```

#### Allowed Options (params with \* are mandatory)

| Param  | Type    | Default | Remarks                                                       |
| ------ | ------- | ------- | ------------------------------------------------------------- |
| user\* | string  | -       | user account address (CAIP)                                   |
| page   | number  | 1       | page index of the results                                     |
| limit  | number  | 10      | number of items in 1 page                                     |
| spam   | boolean | false   | if “true” it will fetch spam feeds                            |
| env    | string  | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev’                            |
| raw    | boolean | false   | if “true” the method will return unformatted raw API response |

## **Get user subscriptions**

This method provides us with the list of channel addresses subscribed by a user address

```typescript
const subscriptions = await PushAPI.user.getSubscriptions({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
  env: 'staging'
});
```

where `subscriptions` variable is a list of channels `[{ channel: '0xaddress', ... }]` subscribed by the user.

_Note: We can find out if a user is subscribed to a channel by checking if the channel address is present in the subscriptions list_

#### Allowed Options (params with \* are mandatory)

| Param  | Type   | Default | Remarks                            |
| ------ | ------ | ------- | ---------------------------------- |
| user\* | string | -       | user address (CAIP)                |
| env    | string | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev’ |

## **Get channel details**

This method will return the channel's data

```typescript
const channelData = await PushAPI.channels.getChannel({
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // channel address in CAIP
  env: 'staging'
});
```

#### Allowed Options (params with \* are mandatory)

| Param     | Type   | Default | Remarks                            |
| --------- | ------ | ------- | ---------------------------------- |
| channel\* | string | -       | channel address (CAIP)             |
| env       | string | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev’ |

### **Get Subscribers of a Channel**

This method fetches the subscribers of a channel.

```typescript
const subscribers = await PushAPI.channels.getSubscribers({
  channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // channel address in CAIP
  page: 1, // Optional, defaults to 1
  limit: 10, // Optional, defaults to 10
  env: 'prod' // Optional, defaults to 'prod'
});
```

#### Allowed Options (params with \* are mandatory)

| Param   | Type    | Default | Remarks                                                                       |
| ------- | ------- | ------- | ----------------------------------------------------------------------------- |
| channel | string  | -       | Mandatory                                                                     |
| page    | number  | 1       | <p>Optional: <br/><br/>page index of the results, greater than 0</p>            |
| limit   | number  | 10      | <p>Optional: <br/><br/>number of items in 1 page, greater than 0 and max 30</p> |
| env     | string  | prod    | <p>Optional:<br/><br/>API env - 'prod', 'staging', 'dev'</p>                    |

## **Searching for channel(s)**

&#x20;This method fetches the list of channels’ data that match the query in the search

```typescript
const channelsData = await PushAPI.channels.search({
  query: 'push', // a search query
  page: 1, // page index
  limit: 20, // no of items per page
  env: 'staging'
});
```

#### Allowed Options (params with \* are mandatory)

| Param   | Type   | Default | Remarks                            |
| ------- | ------ | ------- | ---------------------------------- |
| query\* | string | -       | search query                       |
| page    | number | 1       | page index of the results          |
| limit   | number | 10      | number of items in 1 page          |
| env     | string | ‘prod’  | API env - ‘prod’, ‘staging’, ‘dev’ |
