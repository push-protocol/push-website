---
description: This package helps to embed sidebar notifications to any dApp
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# @pushprotocol/uiembed

## Installation

<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">

```bash
  npm install @pushprotocol/uiembed
```
</TabItem>
<TabItem value="yarn">

```bash
  yarn add @pushprotocol/uiembed
```
</TabItem>
</Tabs>

### Importing and Setting Up

```typescript
import { EmbedSDK } from "@pushprotocol/uiembed";
```

add in HTML/JSX the below HTML tag -

```typescript
<button id="sdk-trigger-id">trigger button</button>
```

or any component with the ID _**sdk-trigger-id**_

> _**Note:** Make sure the ID you give to the "button" is same as that of the targetID you pass to the init() below_

After the wallet is connected to your app flow, trigger the below code snippet.

> **Note:** _You have to have the wallet connected with an account to execute the below code because internally the SDK calls the Push `FeedsAPI` which needs the account address. You will see notifications if you have opted-in to a channel using_ [_Push_](https://staging.push.org/#/channels)

```typescript
useEffect(() => {
  if (account) { // 'your connected wallet address'
    EmbedSDK.init({
      headerText: 'Hello DeFi', // optional
      targetID: 'sdk-trigger-id', // mandatory
      appName: 'consumerApp', // mandatory
      user: account, // mandatory
      chainId: 1, // mandatory
      viewOptions: {
          type: 'sidebar', // optional [default: 'sidebar', 'modal']
          showUnreadIndicator: true, // optional
          unreadIndicatorColor: '#cc1919',
          unreadIndicatorPosition: 'bottom-right',
      },
      theme: 'light',
      onOpen: () => {
        console.log('-> client dApp onOpen callback');
      },
      onClose: () => {
        console.log('-> client dApp onClose callback');
      }
    });
  }

  return () => {
    EmbedSDK.cleanup();
  };
}, []);
```

#### **Init Config Options**

| option                                | type       | mandatory | remarks                                                                                    |
| ------------------------------------- | ---------- | --------- | ------------------------------------------------------------------------------------------ |
| `targetID`                            | `string`   | yes       | can be any string but has to match the ID given to the trigger button in the HTML/JSX      |
| `chainId`                             | `number`   | yes       | the chain ID of the blockchain network. by default is 1                                    |
| `appName`                             | `string`   | yes       | your app name e.g. - 'appName'                                                             |
| `user`                                | `string`   | yes       | public wallet address e.g. - '0x1434A7882cDD877B458Df5b83c993e9571c65813'                  |
| `viewOptions.type`                    | `string`   | no        | default 'sidebar', can give 'modal'                                                        |
| `viewOptions.showUnreadIndicator`     | `boolean`  | no        | will show the unread indicator                                                             |
| `viewOptions.unreadIndicatorColor`    | `string`   | no        | color for the unread indicator e.g. - '#cc1919'                                            |
| `viewOptions.unreadIndicatorPosition` | `string`   | no        | default is 'top-right', other possible options - 'top-left', 'bottom-left', 'bottom-right' |
| `headerText`                          | `string`   | no        | any header text                                                                            |
| `theme`                               | `string`   | no        | default is 'light', can give 'dark'                                                        |
| `onOpen`                              | `function` | no        | callback you want to trigger when the modal/sidebar opens                                  |
| `onClose`                             | `function` | no        | callback you want to trigger when the modal/sidebar closes                                 |

