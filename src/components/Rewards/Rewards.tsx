import React, { FC } from 'react';
import styled from 'styled-components';
import RewardsDashboard from './RewardsDashboard';
import RewardsContent from './RewardsContent';
import ReferralSection from './ReferralSection';
import { device } from '@site/src/config/globals';

const Rewards: FC = () => {
  return (
    <RewardsWrapper>
      <RewardsDashboard />

      <RewardsContent />

      <ReferralSection />
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
