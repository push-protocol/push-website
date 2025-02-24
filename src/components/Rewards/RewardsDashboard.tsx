// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';

import { device } from '@site/src/config/globals';

import { Box, Button, Leaderboard, Points } from '@site/src/blocks';
import { DashboardSectionPoints } from './DashboardSectionPoints';

const RewardsDashboard: FC = () => {
  return (
    <RewardsDashboardWrapper>
      <HeaderSection>
        <Points />
        <HeaderText>
          <h2>Welcome to Push Chain Devnet Drop S2!</h2>
          <div>
            Explore Push Chain Devnet, complete quests, bang out multipliers,
            and earn airdrops.
          </div>
        </HeaderText>
        <Button variant='secondary' leadingIcon={<Leaderboard />}>
          Leaderboard
        </Button>
      </HeaderSection>

      <Box
        width='100%'
        display='flex'
        gap='spacing-sm'
        flexDirection={{ tb: 'column', initial: 'row' }}
      >
        <DashboardSectionPoints
          title='Total Points'
          points={20000}
          rank={2}
          isLoading={false}
          isFetching={false}
          data={''}
          // refetch={() => refetch()}
        />

        <DashboardSectionPoints
          title='Multiplier'
          multiplier={true}
          points={2000}
          data={''}
          isLoading={false}
        />

        <DashboardSectionPoints
          title='Referral Points'
          points={2000}
          usersInvited={3}
          isLoading={false}
        />
      </Box>
    </RewardsDashboardWrapper>
  );
};

export default RewardsDashboard;

const RewardsDashboardWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  gap: 32px;
  border-radius: 24px;
  background: radial-gradient(
    circle at top left,
    #c0fff7 0%,
    #c0fff7 20%,
    #d6adff 45%,
    #d6adff 70%,
    #c0fff7 100%
  );
  font-family: 'FK Grotesk Neue';
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.laptopM} {
    flex-direction: column;
    gap: 16px;
  }
`;

const HeaderText = styled.div`
  align-self: flex-start;
  margin-right: auto;
  margin-left: 16px;

  h2 {
    color: #000;
    font-family: 'FK Grotesk Neue';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin: 0;
  }

  div {
    color: #000;
    font-family: 'FK Grotesk Neue';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
  }

  @media ${device.laptopM} {
    text-align: center;
  }
`;
