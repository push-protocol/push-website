// Internal Components
import { getNotifications, getSubscribers } from '@site/src/api';

const startDate = new Date('2022-01-01');
const endDate = new Date();

// get subscribers count
export const getSubscribersCount = async () => {
  let totalSubscribers = 0;
  const subscriberResponse = await getSubscribers({
    startDate: startDate,
    endDate: endDate,
    channel: 'All',
    chain: 'All',
  });

  const subscriberAnalyticsData = subscriberResponse?.subscriberAnalytics;
  for (let i = 0; i < subscriberAnalyticsData?.length; i++) {
    for (const key in subscriberAnalyticsData[i]) {
      if (key === 'date') {
        continue;
      } else {
        totalSubscribers += subscriberAnalyticsData[i][key].subscriber;
      }
    }
  }

  return totalSubscribers;
};

// get notifications count
export const getNotificationsCount = async () => {
  let totalNotifications = 0;

  const notificationResponse = await getNotifications({
    startDate: startDate,
    endDate: endDate,
    channel: 'All',
    chain: 'All',
  });

  const notificationAnalyticsData = notificationResponse?.notificationAnalytics;
  for (let i = 0; i < notificationAnalyticsData?.length; i++) {
    for (const key in notificationAnalyticsData[i]) {
      if (key === 'date') {
        continue;
      } else {
        totalNotifications += notificationAnalyticsData[i][key].notification;
      }
    }
  }

  return totalNotifications;
};
