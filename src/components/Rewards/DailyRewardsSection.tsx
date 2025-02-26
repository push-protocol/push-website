/* eslint-disable @typescript-eslint/ban-types */
// React and other libraries
import React, { FC, useState } from 'react';
import { css } from 'styled-components';

// hooks
// import { useDailyRewards } from '../hooks/useDailyRewards';
// import { useRewardsContext } from 'contexts/RewardsContext';
// import { useDateExpiry } from '../hooks/useDateExpiry';

// type
// import { ActvityType } from 'queries';

// components
import { Alert, Box, Text } from '../../blocks';
import { DailyRewardsItem } from './DailyRewardsItem';
// import { ActivityVerificationButton } from './ActivityVerificationButton';

export type DailyRewardsSectionProps = {};

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // const {
  //   activeItem,
  //   activeDay,
  //   isActivityDisabled,
  //   isLoading,
  //   userDetails,
  //   dailyRewardsActivities,
  //   refetchSendActivities,
  // } = useDailyRewards();
  //
  const dailyRewardsActivities = [
    {
      id: 'daily_check_in_7_days_day1',
      activityType: 'daily_check_in_7_days_day1',
      activityTitle: 'Daily Check in for 7 Days - Day 1',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 1',
      points: 100,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-1',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day2',
      activityType: 'daily_check_in_7_days_day2',
      activityTitle: 'Daily Check in for 7 Days - Day 2',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 2',
      points: 50,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-2',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day3',
      activityType: 'daily_check_in_7_days_day3',
      activityTitle: 'Daily Check in for 7 Days - Day 3',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 3',
      points: 25,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-3',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day4',
      activityType: 'daily_check_in_7_days_day4',
      activityTitle: 'Daily Check in for 7 Days - Day 4',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 4',
      points: 25,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-4',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day5',
      activityType: 'daily_check_in_7_days_day5',
      activityTitle: 'Daily Check in for 7 Days - Day 5',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 5',
      points: 75,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-5',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day6',
      activityType: 'daily_check_in_7_days_day6',
      activityTitle: 'Daily Check in for 7 Days - Day 6',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 6',
      points: 75,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-6',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'daily_check_in_7_days_day7',
      activityType: 'daily_check_in_7_days_day7',
      activityTitle: 'Daily Check in for 7 Days - Day 7',
      activityDesc: 'Earn points by checking in daily for 7 days - Day 7',
      points: 150,
      multiplier: 0,
      expiryType: 0,
      index: 'daily-activity-7',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
  ];

  // const { isLocked } = useRewardsContext();
  // const hasRewardsExpired = useDateExpiry('2025-02-28T23:59:59');

  // const isDailyRewardClaimed = isActivityDisabled && activeDay > 1 && userDetails;

  // const displayDailyRewards = useMemo(() => {
  //   return !isActivityDisabled && activeDay > 0 && activeItem && userDetails;
  // }, [isActivityDisabled, activeDay, userDetails, activeItem]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='spacing-md'
      backgroundColor='surface-primary'
      padding='spacing-md'
      borderRadius='radius-md'
    >
      <Box
        display='flex'
        flexDirection='row'
        width='-webkit-fill-available'
        justifyContent='space-between'
      >
        <Box>
          <Text variant='h4-semibold' color='text-primary'>
            Check-in daily to earn points
          </Text>
          <Text variant='bm-regular' color='text-tertiary'>
            Check-in for 7 days to unlock maximum points.
          </Text>
        </Box>

        {/* daily checkIn button state */}
        {/* {!hasRewardsExpired && isLocked && (
          <Button variant='tertiary' size='small' disabled>
            Locked
          </Button>
        )}
        {hasRewardsExpired && (
          <Button variant='tertiary' size='small' disabled>
            Ended
          </Button>
        )}
        {!hasRewardsExpired && !isLocked && (
          <>
            {isDailyRewardClaimed && (
              <Button variant='tertiary' size='small' disabled>
                Claimed
              </Button>
            )}

            {displayDailyRewards && (
              <ActivityVerificationButton
                activityType={activeItem?.activityType as ActvityType}
                userId={userDetails?.userId as string}
                activityTypeId={activeItem?.id as string}
                refetchActivity={() => refetchSendActivities()}
                setErrorMessage={setErrorMessage}
                isLoadingActivity={false}
                label='Check In'
              />
            )}
          </>
        )}
     */}
      </Box>

      {errorMessage && (
        <Box width='-webkit-fill-available'>
          <Alert
            heading={errorMessage}
            variant='error'
            onClose={() => setErrorMessage('')}
          />
        </Box>
      )}

      <Box
        display='grid'
        gap={{ ml: 'spacing-xs', initial: 'spacing-sm' }}
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));

          @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            .item:last-child {
              grid-column: span 2;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));

              .day-text {
                margin: 0 0 auto 0;
              }

              .count-text {
                margin: auto 0 0 0;
              }
            }

            .item:last-child .inner-item {
              grid-row: span 2; /* Adjust to span 2 rows on small screens */

              span {
                width: 85%;
                height: 85%;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }

          @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            .item:last-child {
              grid-column: span 2; /* Adjust to span 2 columns on small screens */
            }
          }
        `}
      >
        {dailyRewardsActivities?.map((activity) => (
          <DailyRewardsItem
            key={activity.activityType}
            activity={activity}
            activeDay={2}
            isLoading={false}
            isActivityDisabled={false}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
