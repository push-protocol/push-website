// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import { useLocation } from '@docusaurus/router';
import { LeaderboardListS1 } from './LeaderboardListS1';
import { LeaderboardListS2 } from './LeaderboardListS2';
import { Box, Text } from '@site/src/blocks';

export type LeaderBoardSectionProps = {};

const LeaderBoardSection: FC<LeaderBoardSectionProps> = () => {
  const location = useLocation();

  const season = location?.pathname?.includes('s1') ? 'S1' : 'S2';

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='spacing-sm'
      backgroundColor='surface-primary'
    >
      <Text
        variant='h4-bold'
        display={{ ml: 'none', initial: 'block' }}
        color='text-primary'
      >
        Leaderboard {season}
      </Text>
      <Text
        variant='h5-bold'
        display={{ ml: 'block', initial: 'none' }}
        color='text-primary'
      >
        Leaderboard {season}
      </Text>

      {season === 's1' ? <LeaderboardListS1 /> : <LeaderboardListS2 />}
    </Box>
  );
};

export { LeaderBoardSection };
