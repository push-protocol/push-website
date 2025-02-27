import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboardS2 } from '../queryKeys';
import { getRewardsLeaderboardS2 } from '../services';
import { LeaderboardModelledResponse, LeaderboardParams } from '../types';

export const useGetRewardsLeaderboardS2 = ({
  order,
  pageSize,
}: LeaderboardParams) =>
  useInfiniteQuery<LeaderboardModelledResponse>({
    queryKey: [rewardsLeaderboardS2],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getRewardsLeaderboardS2({
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
