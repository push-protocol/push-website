import axios from 'axios';

import { getRewardsLeaderboardModalCreator } from '../models';
import { LeaderboardParams } from '../types';
import { rewardsBaseURL } from '../baseURL';

export const getRewardsLeaderboardS1 = async ({
  order,
  pageSize,
  pageNumber,
}: LeaderboardParams) =>
  axios({
    method: 'GET',
    url: `${rewardsBaseURL}/users/leaderboard`,
    params: {
      order: order || 'desc',
      pageSize: pageSize || 20,
      pageNumber: pageNumber || 1,
    },
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
