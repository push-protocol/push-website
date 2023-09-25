---
description: >-
  This is a step-by-step introductory tutorial that will teach you how to build
  a channel based on a specific service related notifications. Its a great way
  to get hang of service based channels!
---

# Service Based Notification via Showrunner Example

**Greetings!!**<br/>
If you are new to Push protocol and don't have a proper idea of how to create an service-based channel for notifications on top of [showrunners](https://docs.push.org/developers/developer-tooling/showrunners-framework). This guide is for you ;)

We will walk through coding and interacting with the [ENS](https://ens.domains/) Domain service to create the notification if a user's domain is expiring. 

And don’t worry if you don’t understand what any these words mean yet, I'll explain everything!

You can access the [code ](https://github.com/ethereum-push-notification-service/epns-showrunners-framework-staging/tree/main/src/sample\_showrunners/ens)for the channel and get some vibe for how the code is looking !!

### Create a  folder

For starting with showrunners and setting it up follow this guide here. // need to add link

First we need to create a folder in `src/showrunners/<`_`your_channel_name>`_

### USE CASE:

The notifications for the ENS channel are mainly focused on informing the user about the Domain Validity

#### [Channel File](https://github.com/ethereum-push-notification-service/push-showrunners-framework/blob/main/src/sample\_showrunners/ens/ensChannel.ts)

The channel file is the brain for every channel notification logic. The file follows basic steps of input obtainment, some processed logic and conditions and when the condition for logic is satisfied the code generates the notification.

#### The Channel Class Creation (The Boilerplate)

Every development procedure initiates with creating a channel specific class with contains various information regarding the concerned channel, such as:

* The network to monitor for the Channel
* Name of the Channel
* The URL of channel owner
* Whether channel uses off chain notification or not

```jsx
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import config, { defaultSdkSettings } from '../../config';
import { EPNSChannel } from '../../helpers/epnschannel';

export default class EnsExpirationChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger) {
    super(logger, {
      sdkSettings: {
        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,
        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,
        networkSettings: defaultSdkSettings.networkSettings,
      },
      networkToMonitor: NETWORK_TO_MONITOR,
      dirname: __dirname,
      name: 'ENS',
      url: '<https://ens.domains/>',
      useOffChain: true,
    });
  }
```

#### The Notification Trigger Function

The notification trigger function is the function which calls all the trigger logic functions in a specific order to successfully trigger a notification that will be sent to the concerned user.

```jsx
async checkDomainExpiryTask(simulate) {
    this.logInfo(`checkDomainExpiryTask`);
    const sdk = await this.getSdk();
    const users = simulate?.logicOverride?.mode ? [simulate?.logicOverride?.user] : await sdk.getSubscribedUsers();

    for (let user of users) {
      user = user.toLowerCase();
      const regs = await this.getUserRegistredDomains(user);

      for (const reg of regs) {
        await this.processRegistration(reg, simulate);
      }
    }
  }
```

The above functions first gets the number of the users from the registered domains data, then checks all the domains existing for that user, whether any domain has verified the condition for triggering a notification.

#### The Notification Trigger Logic

The ENS channel follows a simple logic for sending a notification to the user.

First of all we get the data of domains for a specific user using GraphQL Queries.

**Getting the User Registered Domain data**

```tsx
async getUserRegistredDomains(user: string): Promise<Registration[]> {
    this.logInfo(`get user registred domains for ${user}`);
    const query = gql`{
      registrations(where:{registrant:"${user}"}){
        id
       labelName
        expiryDate
        registrant{
          id
        }
        domain {
          id
          name
          owner {
            id
          }
        }
      }
    }`;

    let res = await request(ensSettings.ensEndpoint, query);
    let registrations = res?.registrations;

    return registrations;
  }
```

After getting the data the task shifts upon triggering a notification for a specific case.

**Getting the information about the status of expiry**&#x20;

We at the starting of the code has assigned a threshold time span, reaching which a user should be informed about his/her expiring domain. The value of this variable is taken in seconds and the threshold for the ENS channel is 7 days.

```jsx
const TRIGGER_THRESHOLD_SECS = 60 * 60 * 24 * 7;// Seconds for 7 Days
```

We also calculate the remaining time for the expiration of the certain domain. Using the expiration date timestamp and the present timestamp and taking their difference.

```jsx
const secDiff = reg.expiryDate - Math.floor(Date.now() / 1000);
const expiresInDays = Math.floor(secDiff / (60 * 60 * 24));
```

We now compare both Threshold and the difference, to check if the expiry is beyond the threshold by any chance .

```jsx
if (secDiff < TRIGGER_THRESHOLD_SECS && secDiff >= 0) {
```

If the above condition is verified the process of triggering a notification is initiated. For this we use an inbuilt Push class function called “sendNotification”. This function to send the notification requires certain data from our side. The following data is what we generally provide in a notification:

* Recipient Address
* Notification Title
* Notification Message
* Call to Action Link (The link which redirects the user to the channel holders domain for further actions)

```jsx
      const message = `Your ENS Domain ${reg.domain.name} is set to expire 
      ${expiresInDays > 0 ? `in ${expiresInDays} day(s)` : `today`}.`;
      const title = 'ENS Domain Expiry Alert!!';
      const cta = `https://app.ens.domains/name/${reg.domain.name}/details`;
```

**Cushioning Up for any exceptional condition**

Due to large amount of user base, many exceptional cases can sometimes surpass the main logic. We as the developer sometimes provide a cushion logic so that the notification is successfully sent to the correct user.

In this channel logic, there can be a case where the Owner of the domain can be different from the Registrant, so for this we put a IF condition to filter out, and then send the notification to the owner of the domain.

```jsx
if (reg.registrant.id.toLowerCase() != reg.domain.owner.id.toLowerCase()) {
        this.logInfo(`Owner and registrant different sending notif to owner`);
        await this.sendNotification({
          recipient: reg.domain.owner.id,
          image: null,
          message: message,
          payloadMsg: payloadMsg,
          title: title,
          payloadTitle: title,
          notificationType: 3,
          simulate: simulate,
          cta: cta,
        });
      }
```

**Setting up a Notification**

After getting all the data from our side the notification is good-to-go, and the sendNotification function is implemented.

```jsx
      await this.sendNotification({
        recipient: reg.registrant.id,
        image: null,
        message: message,
        payloadMsg: payloadMsg,
        title: title,
        payloadTitle: title,
        notificationType: 3,
        simulate: simulate,
        cta: cta,
      });
```

#### [Jobs File](https://github.com/ethereum-push-notification-service/push-showrunners-framework/blob/main/src/sample\_showrunners/ens/ensJobs.ts)

This folder is responsible to run the Cron Jobs. Expanding on the “Cron Jobs”, this is a function which uses a module called Node-Schedule to run a code at a specific, repeating time interval. Though the main logic resides in the Channel file, the logic is constantly run by this file, so that as soon as the function satisfies the condition when its called, a notification is sent.

**Creation of a Time Rule**

This involves creating a type of countdown values for a specific job to run.This is customised on the basis of the requirement of a certain use case. For example in this case we create a Daily Rule which makes the channel logic run once in every 24 Hours interval.

```jsx
  const startTime = new Date(new Date().setHours(0, 0, 0, 0));

  const dailyRule = new schedule.RecurrenceRule();
  dailyRule.hour = 0;
  dailyRule.minute = 0;
  dailyRule.second = 0;
  dailyRule.dayOfWeek = new schedule.Range(0, 6);
  const channel = Container.get(EnsExpirationChannel);
```

**Calling the Channel Function for a Job**

Once the schedule job is set to run. The below stated function calls the Task Function from the Channel file to run and send the notification if need be.

```jsx
schedule.scheduleJob({ start: startTime, rule: dailyRule }, async function() {
    const taskName = `${channel.cSettings.name} checkDomainExpiryTask`;

    try {
      await channel.checkDomainExpiryTask(false);
      channel.logInfo(`🐣 Cron Task Completed -- ${taskName}`);
    } catch (err) {
      logger.error(`[${new Date(Date.now())}] ❌ Cron Task Failed -- ${taskName}`);
      logger.error(`[${new Date(Date.now())}] Error Object: %o`, err);
    }
  });
```



The local [settings ](https://github.com/ethereum-push-notification-service/epns-showrunners-framework-staging/blob/main/src/sample\_showrunners/ens/ensSettings.json)file also play an influential in the code flow for reference you can have a look into that too.

You can now heat up the server by running `docker-compose up` and `npm run dev` and start sending notification.&#x20;

That's all for now :)

If you enjoyed this tutorial, Do join our [Discord server](https://discord.gg/YVPB99F9W5) to meet other dev and builders.
