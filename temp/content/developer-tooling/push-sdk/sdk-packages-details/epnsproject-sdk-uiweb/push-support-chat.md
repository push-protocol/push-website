---
description: A React component for integrating Support Chat in DApps.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Push Support Chat

## Installation

<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">

```bash
npm install @pushprotocol/uiweb
```
</TabItem>
<TabItem value="yarn">

```bash
yarn add @pushprotocol/uiweb
```
</TabItem>
</Tabs>

> _**Note:**_ `styled-components` is a `peerDependency`. Please install it in your dApp if you don't have it already!

We'll need the `@pushprotocol/restapi` package as well.

<Tabs
    defaultValue="npm"
    values={[
        {label: 'npm', value: 'npm'},
        {label: 'yarn', value: 'yarn'},
    ]}>
<TabItem value="npm">

```bash
npm install styled-components

npm install @pushprotocol/restapi
```
</TabItem>
<TabItem value="yarn">

```bash
yarn add styled-components

yarn add @pushprotocol/restapi
```
</TabItem>
</Tabs>

## Support Chat component Usage

Import the SDK package in the component file where you want to render the support chat component.

```typescript
import { Chat } from "@pushprotocol/uiweb";
import { ITheme } from '@pushprotocol/uiweb';
```

Render the Chat Component as follows

```typescript
<Chat
   account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
   supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
   env="staging"
 />
```

| Prop             | Type   | Default           | Remarks                                              |
| ---------------- | ------ | ----------------- | ---------------------------------------------------- |
| account\*        | string | -                 | user address(sender)                                 |
| supportAddress\* | string | -                 | support user's address(receiver)                     |
| greetingMsg      | string | `'Hi there!'`     | first message in chat screen                         |
| theme            | ITheme | `lightTheme`      | theme for chat modal (only lightTheme available now) |
| modalTitle       | string | `'Chat with us!'` | Modal header title                                   |
| apiKey           | string | `''`              | api key                                              |
| env              | string | `'prod'`          | API env: `'prod'`, `'staging'`, `'dev'`              |

Example code for using custom theme

```typescript
import React from 'react';
import { Chat, ITheme } from '@pushprotocol/uiweb';

export const ChatSupportTest = () => {
  const theme: ITheme = {
    bgColorPrimary: 'gray',
    bgColorSecondary: 'purple',
    textColorPrimary: 'white',
    textColorSecondary: 'green',
    btnColorPrimary: 'red',
    btnColorSecondary: 'purple',
    border: '1px solid black',
    borderRadius: '40px',
    moduleColor: 'pink',
  };
  return (
    <Chat
      account='0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7'
      supportAddress="0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7"
      env='staging'
      theme={theme}
    />
  );
};
```

For customizing the Chat theme, here below are the list of variables:

<!-- <figure><img src="../../../../.gitbook/assets/Push Sdk Diagram (1).png" alt=""><figcaption><p>List of all themes variable</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/pushLogo.png" alt=""><figcaption><p>How Chat Component will look in your dapp</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/chat1.png" alt=""><figcaption><p>How Chat Component will look in your dapp</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/chat2.png" alt=""><figcaption><p>How Chat Component will look in your dapp</p></figcaption></figure> -->

## Troubleshoot

During the procedure, you might encounter an error, as can be seen in the image below.

<!-- <figure><img src="../../../../.gitbook/assets/err-1.png" alt=""><figcaption></figcaption></figure> -->

If you run into such an error, try to include the code below in config-overrides.js in the root folder.

```typescript
const webpack = require('webpack');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.resolve.fallback = {
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer'),
    child_process: false,
    constants: require.resolve('constants-browserify'),
    crypto: require.resolve('crypto-browserify'),
    fs: false,
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    path: require.resolve('path-browserify'),
    url: require.resolve('url'),
    util: require.resolve('util/'),
    stream: require.resolve('stream-browserify')
  }
  config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js']
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]
  config.module.rules = [...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    }
  ]

  return config
}
```
