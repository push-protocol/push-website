---
description: React Web UI component to display a single notification.
---

# Rendering parsed notification on the web

This UI component will help you render an individual Notification **item** that you received earlier in the `fetchNotifications` API. you can display a list of these in your UI to show the Push Notifications in a group.

```javascript

import { NotificationItem } from  "@epnsproject/frontend-sdk-staging";

// This is used to render the text present in a notification body as a JSX element

<NotificationItem
    notificationTitle={parsedResponse.title}
    notificationBody={parsedResponse.message}
    cta={parsedResponse.cta}
    app={parsedResponse.app}
    icon={parsedResponse.icon}
    image={parsedResponse.image}
/>
```

