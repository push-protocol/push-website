---
description: Embedding Push notifications in your dApp
---

# EmbedSDK

This will embed an Push sidebar/modal to your UI which will show the Push notifications, easiest way to integrate Push with your dApp.



In `App.js` of your App entry point

```javascript
import { EmbedSDK } from "@epnsproject/frontend-sdk-staging";
```

add in HTML/JSX the below HTML tag -

```html
<button id="sdk-trigger-id">trigger button</button>
```

or any component with the ID _**sdk-trigger-id**_

_**Make sure the ID you give to the "button" is same as that of the targetID you pass to the init() below**_

After the wallet connect happens in your app flow trigger the below code snippet.

```javascript
  useEffect(() => {
    if (account) { // 'your connected wallet address'
      EmbedSDK.init({
        headerText: 'Hello DeFi', // optional
        targetID: 'sdk-trigger-id', // mandatory
        appName: 'consumerApp', // mandatory
        user: account, // mandatory
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

```
