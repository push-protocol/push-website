---
description: >-
  This is a step-by-step introductory tutorial that will teach you how to build
  a channel based on Off-chain News Broadcasting. Its a great way to get hang of
  news-based channels!
---

# Off-chain (or Web2) based notification via Showrunner example

Greetings !<br/>
If you are new to Push protocol and don't have a proper idea of how to create an news-based channel for notifications on top of [showrunners](https://docs.push.org/developers/developer-tooling/showrunners-framework). This guide is for you ;)

We will walk through coding and interacting with the [The Defiant](https://thedefiant.io/)  for fetching the articles. 

And don’t worry if you don’t understand what any these words mean yet, I'll explain everything!

### Create a  folder

For starting with showrunners and setting it up follow this guide here. // need to add link

First we need to create a folder in `src/showrunners/<`_`your_channel_name>`_

### USE CASE:

The notifications for _`The Defiant`_ channel are mainly focused on informing the user about the latest article posted on their domain.

**Data Provided**

In the news article type of channels we most try to get the RSS-FEED URL. They are easy to operate on due to a Module called "xml2js" which converts the XML code to Java script making it usable to our codebase.

In the case of Defiant, they have provided the feed [URL](https://thedefiant.io/feed/)&#x20;

#### [Channel File](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/defiant/defiantChannel.ts)

The channel file is the brain for every channel notification logic. The file follows basic steps of input obtainment, some processed logic and conditions and when the condition for logic is satisfied the code generates the notification.

#### The Channel Class Creation (The Boilerplate)

Every development procedure initiates with creating a channel specific class with contains various information regarding the concerned channel, such as:

* The network to monitor for the Channel
* Name of the Channel
* The URL of channel owner
* Whether channel uses off chain notification or not

```
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import config, { defaultSdkSettings } from '../../config';
import { EPNSChannel } from '../../helpers/epnschannel';

export default class DefiantChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {
    super(logger, {
      sdkSettings: {
        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,
        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,
        networkSettings: defaultSdkSettings.networkSettings,
      },
      networkToMonitor: config.web3MainnetNetwork,
      dirname: __dirname,
      name: 'The Defiant',
      url: 'https://thedefiant.io/',
      useOffChain: true,
    });
  }
```

If you observe the variable "useOffChain" is assigned as True,  this enables the Off chain notification for the channel.

**The channel logic function**

The main channel logic function follows to sequence of function calling and conditions.They are chronologically listed and explained below:-

&#x20;1.) Calling the fetch article function

2.) Getting the locally stored date for comparison

3.) Condition to check presence of a new article

4.) Calling the send Notification function

```
async checkForNewArticles(simulate) {
    try {
      // Get the articles from the RSS Feed
      const articles = await this.getArticles(simulate);

      // Get the comparer pub date stored in db to compare for finding new articles
      const compDate = await this.getComparerDate();
      let latestDate = compDate;
      const upto = simulate?.logicOverride?.mode ? articles.length - 2 : 0;

      for (let i = articles.length - 1; i >= upto; i--) {
        const article = articles[i];
        const publicationTimestamp = Date.parse(article.pubDate[0]) / 1000;
        this.logInfo(
          `publicationTimestamp : ${publicationTimestamp} compDate : ${compDate} publicationTimestamp > compDate : ${publicationTimestamp >
            compDate}`,
        );
        if (publicationTimestamp > compDate || simulate?.logicOverride?.mode) {
          this.logInfo(`publicationTimestamp > compDate. New Article Found!!`);

          if (publicationTimestamp > latestDate) {
            this.logInfo(`publicationTimestamp > latestDate updating latestDate`);
            latestDate = publicationTimestamp;
          }

          const info = {
            title: article.title[0],
            link: article.link[0],
            description: article.description,
            publicationTimestamp: publicationTimestamp,
          };

          this.log(info);

          this.logInfo('Found new article sending notification');
          await this.sendNewArticleNotification(info, simulate);
        }
      }

      return { success: true };
    } catch (error) {
      this.logError(error);
    }
  }

  public async getArticles(simulate): Promise<any> {
    this.logInfo('getArticles called.. Checking For New Articles');

    const url = defiantSettings.FEED_URL;

    this.logInfo('Fetching Articles');
    let res = await axios.get(url);
    xml2js.parseStringPromise = util.promisify(xml2js.parseString);
    let result = await xml2js.parseStringPromise(res.data);
    this.logInfo('Articles obtained');

    return result.rss.channel[0].item;
  }
```

**Fetching the Articles**

This function imports and reads the RSS Feed and tries to convert the code to JavaScript. These articles are then fetched and worked upon.

```
  public async getArticles(simulate): Promise<any> {
    this.logInfo('getArticles called.. Checking For New Articles');

    const url = defiantSettings.FEED_URL;
    // const parser = new xml2js.Parser();

    this.logInfo('Fetching Articles');
    let res = await axios.get(url);
    xml2js.parseStringPromise = util.promisify(xml2js.parseString);
    let result = await xml2js.parseStringPromise(res.data);
    this.logInfo('Articles obtained');

    return result.rss.channel[0].item;
  }

```

**Triggering the notification**

The function takes the data such as heading, preview message and CTA Link.Then sendNotification from our sdk is used.\
Note: The notification are both Off Chain and Broadcast Type

```
async sendNewArticleNotification(info, simulate) {
    try {
      const title = `${info.title}`;
      const payloadTitle = `${info.title}`;
      const message = `${info.description}`;
      const payloadMsg = `${info.description}`;
      const notificationType = 1;

      await this.sendNotification({
        recipient: this.channelAddress,
        title: title,
        message: message,
        payloadMsg: payloadMsg,
        payloadTitle: payloadTitle,
        notificationType: notificationType,
        simulate: simulate,
        image: null,
        cta: info.link,
        timestamp: info.publicationTimestamp,
      });
    } catch (e) {
      this.logError(e);
    }
  }
```

**Fetching the Dates for comparison**

We first fetch the timestamp from the local database and then create a variable called the comparer date which is basically a timestamp for the latest notification which was sent.\
This timestamp is then used to compare the RSS Feed timestamp and then generate a notification.

#### [Jobs File](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/defiant/defiantJobs.ts)

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

You can now heat up the server by running `docker-compose up` and `npm run dev` and start sending notification.

_In the channel file you can also track the last publication date for which last notification was sent by using `database` , so that next time the jobs hit the engine, it won't repeat sending notification from same block again i.e. repeated notifications_

That's all for now :)

If you enjoyed this tutorial, Do join our [Discord server](https://discord.gg/YVPB99F9W5) to meet other dev and builders.
