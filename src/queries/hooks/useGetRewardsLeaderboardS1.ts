import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboardS1 } from '../queryKeys';
import { getRewardsLeaderboardS1 } from '../services';
import { LeaderboardModelledResponse, LeaderboardParams } from '../types';

export const useGetRewardsLeaderboardS1 = ({
  order,
  pageSize,
}: LeaderboardParams) =>
  useInfiniteQuery<LeaderboardModelledResponse>({
    queryKey: [rewardsLeaderboardS1],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getRewardsLeaderboardS1({
        order,
        pageSize,
        pageNumber: pageParam as number,
      }),
    getNextPageParam: ({ page, total, pageSize }) => {
      if (pageSize * page >= total) {
        return null;
      }
      return page + 1;
    },
  });
