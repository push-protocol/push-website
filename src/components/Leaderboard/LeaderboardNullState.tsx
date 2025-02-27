// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FC } from 'react';

import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

//Hooks
import { LeaderboardModelledResponse } from 'queries';

//Components
import { Box, Button, Refresh, Text, UserSwitch } from '@site/src/blocks';

export type LeaderboardNullStateProps = {
  heading?: string;
  subHeading?: string;
  error?: boolean;
  refetchLeaderboard?:
    | (() => void)
    | ((
        options?: RefetchOptions | undefined
      ) => Promise<QueryObserverResult<LeaderboardModelledResponse, Error>>);
};
const LeaderBoardNullState: FC<LeaderboardNullStateProps> = ({
  heading,
  subHeading,
  error = false,
  refetchLeaderboard,
}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap='spacing-sm'
      padding='spacing-xxxl'
      height='calc(100vh - 356px)'
    >
      <UserSwitch size={48} color='icon-primary' />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='spacing-xxxs'
      >
        {heading && (
          <Text textAlign='center' variant='h5-bold' color='text-primary'>
            {heading}
          </Text>
        )}
        {subHeading && (
          <Text
            textAlign='center'
            variant='bs-regular'
            color='text-tertiary-inverse'
          >
            {subHeading}
          </Text>
        )}
      </Box>

      {error && (
        <Button
          onClick={() => refetchLeaderboard?.()}
          variant='tertiary'
          size='small'
          leadingIcon={<Refresh />}
        >
          Refresh
        </Button>
      )}
    </Box>
  );
};

export { LeaderBoardNullState };
