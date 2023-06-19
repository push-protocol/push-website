---
description: >-
  In this section, we will see how to leverage the front end SDK to add features
  to your UI
---

# Things Frontend SDK enables

The Frontend SDK comprises of three major modules, which function as:

1. Fetching the notifications from Push backend
2. Parsing the fetched notifications
3. Rendering the parsed notification on Mobile and Web Applications
4. Embedding Push notifications in your dApp

The whole process is aligned in this manner to maintain the flow of control from Push backend to your app's Frontend.

## Fetching and Parsing Notifications from the API

This is short summary on how to setup fetching and parsing notifications via Frontend SDK. A detailed demo guide can be found here at [`push-frontend-sdk/sample_code/loadNotifications`](https://github.com/ethereum-push-notification-service/push-frontend-sdk/tree/main/sample\_codes/loadNotifications)

```cpp
import { api, utils } from "@epnsproject/frontend-sdk";

// define the variables required to make a request
const walletAddress = "0x1234567890abcdcdefghijklmnopqrstuvwxyz123";
const pageNumber = 1;
const itemsPerPage = 20;

// fetch the notifications
const {count, results} = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
console.log({results});

// parse all the fetched notifications
const parsedResponse = utils.parseApiResponse(results);
console.log(parsedResponse);
```

### Rendering the Parsed Notification on The Web

```javascript
import { NotificationItem } from  "@epnsproject/frontend-sdk";

// This is used to render the text present in a notification body as JSX element
{
	NotificationItem.map(oneNotification => (
		<NotificationItem
			notificationTitle={oneNotification.title}
			notificationBody={oneNotification.message}
			cta={oneNotification.cta}
			app={oneNotification.app}
			icon={oneNotification.icon}
			image={oneNotification.image}
			url={oneNotification.url}
		/>
	))
}
```

![Screenshot of rendered Notifications](https://camo.githubusercontent.com/b7f1b513eb3c9e2bce2356d6b833cb7546147106cbcfc1631c6c5adfbf5cdae6/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f78616e6436722f696d6167652f75706c6f61642f76313633323233353637362f53637265656e73686f745f323032312d30392d32315f61745f31352e34342e34395f7336766674612e706e67)

### Rendering the Parsed Notification on A React Native Mobile Application

All the below mentioned parameters are optional and can be called as needed by the developers.

```javascript
import { NotificationItem } from '@epnsproject/frontend-sdk/dist/native';

<NotificationItem
    notificationTitle={parsedResponse.title}
    notificationBody={parsedResponse.message}
    cta={parsedResponse.cta}
    app={parsedResponse.app}
    icon={parsedResponse.icon}
    image={parsedResponse.image}
    url={parsedResponse.url}
/>
```

![](https://camo.githubusercontent.com/825803ddfc25ed387aa4a60fb1f9487a08977cffd19438bfc4219047e4b60cdb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f78616e6436722f696d6167652f75706c6f61642f76313633343437333237322f53637265656e73686f745f323032312d31302d31375f61745f31332e32302e34395f6967316a33792e706e67)

## Markdown Reference

This section contains several markdown formats available and how to use them. They can be viewed live by running the React app in [`src/sample_codes/parseNotificationMarkdown`](https://github.com/ethereum-push-notification-service/epns-frontend-sdk/tree/main/sample\_codes/parseNotificationMarkdown)``

![](https://camo.githubusercontent.com/f5d6277d83d929ad5c4568ad41b59194c9642b38038bd32aadd2b3a8c0f82416/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f78616e6436722f696d6167652f75706c6f61642f76313633323233363032342f53637265656e73686f745f323032312d30392d32315f61745f31352e35332e32395f70306c7074662e706e67)

|      Markdown      | Styling Effect               | Use case         |
| :----------------: | ---------------------------- | ---------------- |
|                    | New line                     | For Segregation  |
|  \[u: textcontent] | Underlined, Red Colored Text | For URLs         |
|  \[d: textcontent] | Push Primary colored Text    | For colored text |
|  \[s: textcontent] | Push Secondary colored Text  | For colored text |
|  \[t: textcontent] | Push Tetiary colored Text    | For colored text |
|  \[e: textcontent] | Push Secondary colored Text  | For colored text |
|  \[w: textcontent] | White colored Text           | For colored text |
| \[mg: textcontent] | Medium grey colored Text     | For colored text |
| \[dg: textcontent] | Dark grey colored Text       | For colored text |
|  \[b: textcontent] | Bold Text                    | For Emphasis     |
|  \[i: textcontent] | Italics Text                 | For Emphasis     |
| \[bi: textcontent] | Bold and Italics Text        | For Emphasis     |

## Embedding Push Notifications in your App

For using the **EmbedSDK** in your decentralized application, you should follow the given command (_skip this if already installed!_)

```bash
yarn add @epnsproject/frontend-sdk-staging
```

After that, in `App.js` of your App entry point, add below line 👇

```javascript
import { EmbedSDK } from "@epnsproject/frontend-sdk-staging";
```

Also add the below HTML tag in HTML/JSX file -

```html
<button id="sdk-trigger-id">trigger button</button>
```

You can also add some other component with the ID **`sdk-trigger-id`.** Make sure the ID you give to the **`button`** is same as that of the **`targetID`** yo pass to the **`init()`** below

After the wallet connect happens in your application, trigger the below code snippet 👇

**Note:** You need to have the wallet connected with an account to execute the below code. This is because the SDK internally calls the Push `get_feeds()` API which required the Wallet Address. You will see notifications if you have opted-in to a channel using [Push](https://staging.push.org/).

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

    return () => {
      EmbedSDK.cleanup();
    };
  }, []);
```

### **Initialization Config Options**

|                 Option                |    Type    | Mandatory | Remarks                                                                                    |
| :-----------------------------------: | :--------: | :-------: | ------------------------------------------------------------------------------------------ |
|               `targetID`              |  `string`  |    yes    | can be any string but has to match the ID given to the trigger button in the HTML/JSX      |
|               `appName`               |  `string`  |    yes    | your app name e.g. - 'appName'                                                             |
|                 `user`                |  `string`  |    yes    | public wallet address e.g. - '0x1434A7882cDD877B458Df5b83c993e9571c65813'                  |
|           `viewOptions.type`          |  `string`  |     no    | default 'sidebar', can give 'modal'                                                        |
|   `viewOptions.showUnreadIndicator`   |  `boolean` |     no    | will show the unread indicator                                                             |
|   `viewOptions.unreadIndicatorColor`  |  `string`  |     no    | color for the unread indicator e.g. - '#cc1919'                                            |
| `viewOptions.unreadIndicatorPosition` |  `string`  |     no    | default is 'top-right', other possible options - 'top-left', 'bottom-left', 'bottom-right' |
|              `headerText`             |  `string`  |     no    | any header text                                                                            |
|                `theme`                |  `string`  |     no    | default is 'light', can give 'dark'                                                        |
|                `onOpen`               | `function` |     no    | callback you want to trigger when the modal/sidebar opens                                  |
|               `onClose`               | `function` |     no    | callback you want to trigger when the modal/sidebar closes                                 |



The UI should look somewhat like this screenshot below 👇

![Here, if the user is connected to their wallet and clicks on the bell icon, they will see the next screen](../../../../../static/img/assets/frontend-sdk-1.png)

![The Sidebar shows the Push notifications with a header which is a clickable link to the Push dApp.](../../../../../static/img/assets/frontend-sdk-2.png)

