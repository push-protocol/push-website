---
description: Here we explain about how to install the Front End SDK for different purposes
---

import CustomLinkCard from '@site/src/components/CustomLinkCard';

# Installation

You can install the Frontend SDK for two purposes: **General Usage** and **SDK Development**. The installation guide for both types has been provided below.

:::warning
Currently, the frontend sdk is only compatible with react js / react native applications
:::

:::info
We have demonstrated the dev workflow using our **`staging`** repo/package **`@epnsproject/frontend-sdk-staging`**which will _always_ have the latest features as compared to a prod package **`@epnsproject/frontend-sdk`** which is a stable release.
:::

Please refer this for above repos -&#x20;

<CustomLinkCard text='Github Repositories' link='./github-repositories' />

### Installation for General Usage

In order to install this SDK onto your existing Dapp or Mobile Application, you can install it under the General Usage category and start parsing notifications from Push directly to your Dapp.

It can be installed as an **npm** package via the following command 👇

`npm i @epnsproject/frontend-sdk-staging`

In case you are using React version <17.0.0, use the below command 👇

`npm i @epnsproject/frontend-sdk-staging --force`

### Installation for SDK Development

As a developer, you might feel the need to add more features to the existing Frontend SDK. You can use the below steps to install in development mode and see changes firsthand as you improvise the code.

To install, test, and develop the SDK locally, the following steps are required to set up Push Frontend SDK for testing on existing React applications.

```bash
// cloning the Push Frontend SDK
-> git clone https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging.git

// navigate to the project's directory
-> cd epns-frontend-sdk-staging

// to install all the packages
-> npm install

// to build the project and watch out for changes
-> npm start

// in order to test and be made available locally
-> npm link

// since we intend to test the functionality, we will assume that another react
// app is running which wants to leverage the components from the framework
-> npm `link relative_path_to_react_application`/node_modules/react
  
-> cd `relative_path_to_react_application`

// library can be imported as normally would if installed using npm or yarn
- npm link epns-frontend-sdk
```

More information on the local testing and development of NPM packages are described next.
