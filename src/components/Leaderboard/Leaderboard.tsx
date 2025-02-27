// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import { css } from 'styled-components';

import { Box, Button, Points, Text, CaretLeft, Tabs } from '@site/src/blocks';
import { LeaderBoardSection } from './LeaderBoardSection';
import { LeaderboardHeader } from './LeaderboardHeader';
import { useLocation, useHistory } from '@docusaurus/router';

const Leaderboard: FC = () => {
  const location = useLocation();

  const season = location?.pathname?.includes('s1') ? 'S1' : 'S2';

  const history = useHistory();

  const handleSetActiveTab = (season) => {
    history.push(`/rewards/leaderboard${season === 'S1' ? '-s1' : ''}`);
  };

  return (
    <Box
      display='flex'
      width={{ initial: '1200px', ll: 'calc(100% - 32px)', ml: '100%' }}
      flexDirection='column'
      gap='spacing-md'
      css={css`
        margin: var(--spacing-md) auto;
      `}
      height={{ initial: 'calc(100vh - 130px)', ml: 'calc(100vh - 80px)' }}
      padding={{ ml: 'spacing-sm' }}
    >
      <LeaderboardHeader />
      <Box
        backgroundColor='surface-primary'
        padding='spacing-md'
        width='100%'
        borderRadius='radius-md'
        overflow='hidden'
      >
        <Tabs
          items={[
            {
              key: 'S2',
              label: 'Season 2',
              children: <LeaderBoardSection />,
            },
            {
              key: 'S1',
              label: 'Season 1',
              children: <LeaderBoardSection />,
            },
          ]}
          activeKey={season}
          onChange={(activeKey) => handleSetActiveTab(activeKey)}
        />
      </Box>
    </Box>
  );
};

export default Leaderboard;
