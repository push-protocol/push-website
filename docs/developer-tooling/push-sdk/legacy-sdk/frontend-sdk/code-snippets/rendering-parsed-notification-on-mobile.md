---
description: React Native UI component to display a single notification.
---

# Rendering parsed notification on mobile

We also provide a React Native component for displaying the **notification** in a React Native App.&#x20;

```
import { NotificationItem} from  '@epnsproject/frontend-sdk-staging/dist/native';

<NotificationItem
   notificationTitle={parsedResponse.title}
   notificationBody={parsedResponse.message}
   cta={parsedResponse.cta}
   app={parsedResponse.app}
   icon={parsedResponse.icon}
   image={parsedResponse.image}
/>
```

:::warning
Requires React Native
:::
