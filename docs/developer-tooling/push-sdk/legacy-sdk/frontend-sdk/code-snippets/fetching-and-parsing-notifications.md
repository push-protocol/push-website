---
description: Javascript API & util functions to fetch & parse notifications.
---

# Fetching & Parsing notifications

Use this snippet to fetch notifications from the Push backend and parse them to use them in your UI later.

```javascript
import { api, utils } from "@epnsproject/frontend-sdk-staging";

// define the variables required to make a request
const walletAddress = "0x1234567890abcdcdefghijklmnopqrstuvwxyz123";
const pageNumber = 1;
const itemsPerPage = 20;
// define the variables required to make a request

//fetch the notifications
const fetchedNotifications = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
console.log({fetchedNotifications]);
//fetch the notifications


//parse the notification fetched
const parsedResponse = utils.parseApiResponse(fetchedNotifications);
console.log(parsedResponse);
//parse the notification fetched

```
