// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios';

const awaitTimeout = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const BACKEND_API_URL = 'https://api.analytics.epns.io/apis/analytics';
const RSSConverter = 'https://api.rss2json.com/v1/api.json?rss_url=';
const BACKEND_API = 'http://localhost:1337/';

export async function loadKPIData() {
  return axios
    .all([
      axios.post(`${BACKEND_API_URL}/get_notifs_sent`),
      axios.post(`${BACKEND_API_URL}/get_total_subscribers_count`),
      axios.post(`${BACKEND_API_URL}/get_total_channel_count`),
    ])
    .then(
      axios.spread((...responses) => {
        const [totalNotifsSentResponse, totalSubscribersCountResponse, totalChannelCountResponse] = responses || [];

        return {
          totalNotifsSent: totalNotifsSentResponse.data,
          totalSubscribersCount: totalSubscribersCountResponse.data,
          totalChannelCount: totalChannelCountResponse.data,
        };
      })
    )
    .catch((errors) => {
      throw Error(errors);
    });
}

export async function getBlogData(limit = 4) {
  const requrl = `${RSSConverter}https://medium.com/feed/ethereum-push-notification-service/`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data.items;
      return blogs.slice(0, limit);
    })
    .catch((error) => {
      throw Error(error);
    });
}

export async function getAllBlogData(page, size) {
  const requrl = `${BACKEND_API}api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${size}`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data;
      return blogs;
    })
    .catch((error) => {
      throw Error(error);
    });
}

export async function searchBlogData(text) {
  const requrl = `${BACKEND_API}api/blogs?populate=*&filters[title][$containsi]=${text}`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data;
      return blogs;
    })
    .catch((error) => {
      throw Error(error);
    });
}

export async function getSingleBlogData(id) {
  const requrl = `${BACKEND_API}api/blogs/${id}?populate=*`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data;
      return blogs;
      // return blogs.slice(0, limit);
    })
    .catch((error) => {
      throw Error(error);
    });
}

export async function sendEmailToMailingList({ email }) {
  const details = {
    name: '',
    email: email,
    list: 'YPwxHS892tH8Nhs13wzKqWbQ',
    api_key: 'TdzMcZVNTn1mjtAJHBpB',
    boolean: true,
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
    body: formBody,
  }).then((response) => {
    return response.text();
  });
}

export async function getChannels(page) {
  const requrl = `https://backend.epns.io/apis/v1/channels?page=${page}&limit=9&sort=subscribers&order=desc`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const channels = apiResponse?.data?.channels;
      return channels;
    })
    .catch((error) => {
      throw Error(error);
    });
}

export const getChannelsSearch = async (page, query) => {
  const requrl = `https://backend.epns.io/apis/v1/channels/search?page=${page}&limit=9&order=desc&query=${query}`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const channels = apiResponse?.data?.channels;
      return channels;
    })
    .catch((error) => {
      throw Error(error);
    });
};
