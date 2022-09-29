// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios';

const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

const BACKEND_API_URL = 'https://api.analytics.epns.io/apis/analytics';


export async function loadKPIData() {
  return axios.all([
    axios.post(`${BACKEND_API_URL}/get_notifs_sent`),
    axios.post(`${BACKEND_API_URL}/get_total_subscribers_count`),
    axios.post(`${BACKEND_API_URL}/get_total_channel_count`),
  ]).then(axios.spread((...responses) => {

    const [
      totalNotifsSentResponse,
      totalSubscribersCountResponse,
      totalChannelCountResponse,
    ] = responses || [];

    return {
      totalNotifsSent: totalNotifsSentResponse.data,
      totalSubscribersCount: totalSubscribersCountResponse.data,
      totalChannelCount: totalChannelCountResponse.data
    };
  })).catch(errors => {
    throw Error(errors);
  });
}

export async function getBlogData(limit = 4) {
  const requrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ethereum-push-notification-service/';

  // await awaitTimeout(50000);

  return axios.get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data.items;
      return blogs.slice(0, limit);
    }).catch(error => {
      throw Error(error);
    });
}

export async function sendEmailToMailingList({ email }) {
  const details = {
    'name': '',
    'email': email,
    'list': 'YPwxHS892tH8Nhs13wzKqWbQ',
    'api_key': 'TdzMcZVNTn1mjtAJHBpB',
    'boolean': true
  };
  
  let formBody = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
    
  return fetch('https://tools.push.org/sendy/subscribe', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody
  })
    .then(response => {
      return response.text();
    });
}