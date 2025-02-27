// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useLocation } from 'react-router-dom';
import { css } from 'styled-components';
import {
  useGetRewardsLeaderboardS1,
  ModelledLeaderBoardUser,
} from '@site/src/queries';
import { Box, Spinner } from '@site/src/blocks';

import { LeaderboardListItem } from './LeaderBoardListItem';

import { pCAIP10ToWallet } from '@site/src/helpers/web3helper';
import { LeaderBoardNullState } from './LeaderboardNullState';
import { LeaderboardListColumns } from './LeaderboardListColumns';

const LeaderboardListS1: FC = () => {
  const {
    data,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetRewardsLeaderboardS1({ pageSize: 20 });

  // If there are channels then render them else render 10 skeletons
  const leaderboardList = isLoading
    ? Array(10).fill(0)
    : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  return !leaderboardList.length ? (
    <LeaderBoardNullState
      refetchLeaderboard={isError ? refetch : undefined}
      heading='No Users Found'
      error={isError}
      subHeading={isError ? 'Please refresh to view the Leaderboard' : ''}
    />
  ) : (
    !!leaderboardList.length && (
      <Box gap='spacing-sm' display='flex' flexDirection='column'>
        <LeaderboardListColumns />
        <Box
          height='calc(100vh - 356px)'
          customScrollbar={true}
          css={css`
            overflow: scroll;
            overflow-x: hidden;
          `}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasMoreData}
            useWindow={false}
            threshold={150}
          >
            {leaderboardList.map(
              (item: ModelledLeaderBoardUser, index: number) => (
                <LeaderboardListItem
                  key={`${index}`}
                  rank={item.rank}
                  address={pCAIP10ToWallet(item.userWallet)}
                  points={item.totalPoints}
                  isLoading={isLoading}
                />
              )
            )}

            {isFetchingNextPage && (
              <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='center'
                margin='spacing-sm spacing-none'
              >
                <Spinner size='medium' variant='primary' />
              </Box>
            )}
          </InfiniteScroll>
        </Box>
      </Box>
    )
  );
};

export { LeaderboardListS1 };
