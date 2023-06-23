import { getSubscribers, getNotifications } from 'api';
import getDatesArray from 'helpers/utils';


const startDate = new Date('2022-01-01');
const endDate = new Date();

// get subscribers count
export const getSubscribersCount = async () => {
  const localSubscriberData: any[] = [];
  let totalSubscribers = 0;
  const subscriberResponse = await getSubscribers({
    startDate: startDate,
    endDate: endDate,
    channel: 'All',
    chain: 'All',
  });

  const dateArray = getDatesArray({
    start: startDate,
    end: endDate,
    interval: 1,
  });

  const subscriberAnalyticsData = subscriberResponse?.subscriberAnalytics;
  const subscriberArray: any[] = [];
  for (let i = 0; i < subscriberAnalyticsData?.length; i++) {
    let total = 0,
      dat = '';
    for (const key in subscriberAnalyticsData[i]) {
      if (key === 'date') {
        dat = subscriberAnalyticsData[i][key];
      } else {
        total += subscriberAnalyticsData[i][key].subscriber;
      }
    }
    subscriberArray.push({ date: dat, subscribers: total });
  }


  for (let i = 0; i < dateArray.length; i++) {
    let isFound = false;
    for (let j = 0; j < subscriberArray.length; j++) {
      if (
        new Date(subscriberArray[j].date).toDateString() ===
          new Date(dateArray[i]).toDateString()
      ) {
        isFound = true;
        totalSubscribers += subscriberArray[j].subscribers;
        localSubscriberData.push([
          subscriberArray[j].date,
          totalSubscribers,
        ]);
        break;
      }
    }
    if (!isFound) {
      localSubscriberData.push([dateArray[i], totalSubscribers]);
    }
  }
  return totalSubscribers;
};


// get notifications count
export const getNotificationsCount = async () => {
  const localNotificationData: any[] = [];
  let totalNotifications = 0;
  const dateArray = getDatesArray({
    start: startDate,
    end: endDate,
    interval: 1,
  });

  const notificationResponse = await getNotifications({
    startDate: startDate,
    endDate: endDate,
    channel: 'All',
    chain: 'All',
  });

  const notificationAnalyticsData =
    notificationResponse?.notificationAnalytics;
  const notificationsArray: any[] = [];
  for (let i = 0; i < notificationAnalyticsData?.length; i++) {
    let total = 0,
      dat = '';

    for (const key in notificationAnalyticsData[i]) {
      if (key === 'date') {
        dat = notificationAnalyticsData[i][key];
      } else {
        total += notificationAnalyticsData[i][key].notification;
      }
    }
    notificationsArray.push({ date: dat, notifications: total });
  }

  for (let i = 0; i < dateArray.length; i++) {
    let isFound = false;
    for (let j = 0; j < notificationsArray?.length; j++) {
      if (
        new Date(notificationsArray[j].date).toDateString() ===
        new Date(dateArray[i]).toDateString()
      ) {
        isFound = true;
        totalNotifications += notificationsArray[j].notifications;
        localNotificationData.push([
          notificationsArray[j].date,
          totalNotifications,
        ]);

        break;
      }
    }
    if (!isFound) {
      localNotificationData.push([dateArray[i], totalNotifications]);
    }
  }
  return totalNotifications;
};
