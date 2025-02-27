import React, { FC } from 'react';
import styled from 'styled-components';
// import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

import { device } from '@site/src/config/globals';

import RewardsDashboard from './RewardsDashboard';
import RewardsContent from './RewardsContent';
import ReferralSection from './ReferralSection';
import RewardsActivities from './RewardsActivities';
import RewardsFooter from './RewardsFooter';

const Rewards: FC = () => {
  // const { universalAddress } = usePushWalletContext();

  return (
    <RewardsWrapper>
      <RewardsDashboard />

      <RewardsActivities />

      <RewardsContent />

      <ReferralSection />

      <RewardsFooter />
    </RewardsWrapper>
  );
};

export default Rewards;

const RewardsWrapper = styled.div`
  width: 1200px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.laptopM} {
    width: calc(100% - 32px);
  }
`;
