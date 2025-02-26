import React from 'react';

import { Box } from '@site/src/blocks';

import RewardsActivitiesSection from './RewardsActivitiesSection';
import { DailyRewardsSection } from './DailyRewardsSection';

const RewardsActivities = () => {
  return (
    <Box display='flex' flexDirection='column' gap='spacing-md'>
      {/* RewardsActivities  */}
      <RewardsActivitiesSection />

      {/* Daily Rewards */}
      <DailyRewardsSection />
    </Box>
  );
};

export default RewardsActivities;
