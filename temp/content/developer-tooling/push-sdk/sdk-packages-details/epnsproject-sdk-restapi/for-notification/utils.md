---
description: Helper functions
---

# Notification Helper Utils

## **Parse notifications**

Utils method to parse raw Push Feeds API response into a pre-defined shape as below.

```typescript
// fetch some raw feeds data
const apiResponse = await PushAPI.user.getFeeds({
  user: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address
  raw: true,
  env: 'staging'
});
// parse it to get a specific shape of object.
const parsedResults = PushAPI.utils.parseApiResponse(apiResponse);

const [oneNotification] = parsedResults;

// Now this object can be directly used by for e.g. "@pushprotocol/uiweb"  NotificationItem component as props.
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
```

_We get the above `object / keys` after the parsing of the API response._
