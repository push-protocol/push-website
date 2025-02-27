/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';

import { css } from 'styled-components';

import { Box, Lock, Text } from '../../blocks';
// import { useAccount } from 'hooks';
// import { walletToCAIP10 } from 'helpers/w2w';
// import {
//   Activity,
//   StakeActivityResponse,
//   useGetRewardsActivities,
//   useGetRewardsActivity,
//   useGetUserRewardsDetails,
// } from 'queries';
// import { useRewardsContext } from 'contexts/RewardsContext';

import { RewardsActivitiesListItem } from './RewardsActivitiesListItem';
// import SocialHandleItem from './SocialHandleItem';

export type RewardActivitiesProps = {};

const RewardsActivitiesSection: FC<RewardActivitiesProps> = () => {
  // const { account, isWalletConnected } = useAccount();

  // const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } =
  //   useGetRewardsActivities();

  // // Getting user Id by wallet address
  // const caip10WalletAddress = walletToCAIP10({ account });
  // const { data: userDetails } = useGetUserRewardsDetails({
  //   caip10WalletAddress: caip10WalletAddress,
  // });

  // const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  // const activityList =
  //   rewardActivitiesResponse?.activities?.map((page) => page) || [];

  // Filter activities based on the index
  const socialActivities = [
    {
      id: 'follow_push_on_twitter',
      activityType: 'follow_push_on_twitter',
      activityTitle: 'Follow [@PushChain](https://x.com/pushchain) on X',
      activityDesc: 'Earn points by following Push on Twitter',
      points: 10000,
      multiplier: 1.5,
      expiryType: 0,
      index: 'social-activity-1',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
    {
      id: 'follow_push_on_discord',
      activityType: 'follow_push_on_discord',
      activityTitle:
        'Join [Push Discord Community](https://discord.com/invite/pushprotocol)',
      activityDesc: 'Earn points by following Push on Discord',
      points: 10000,
      multiplier: 0,
      expiryType: 0,
      index: 'social-activity-2',
      tags: [],
      status: 'ENABLED',
      internal: false,
      isExpired: false,
    },
  ];

  // const emailTelegramActivities = activityList.filter(
  //   (activity) =>
  //     activity.index.startsWith(`custom-delivery`) &&
  //     activity?.status === 'ENABLED'
  // )[0];

  // const platformRewardActivities = isLoading
  //   ? Array(7).fill(0)
  //   : activityList.filter(
  //       (activity) =>
  //         activity.index.startsWith(`reward-activity`) &&
  //         activity?.status === 'ENABLED'
  //     );

  // const channelSubscriptionActivities = activityList.filter((activity) =>
  //   activity.index.startsWith(`channel-subscription`)
  // );

  // const { isLocked } = useRewardsContext();

  // Combine all activities into a single array
  const allActivities = [...socialActivities];

  // Extract the `activityType` from each activity and filter out any undefined values
  const activityTypes = allActivities
    .map((activity) => activity?.activityType) // Extract `activityType`
    .filter(Boolean); // Remove undefined/null values

  // const {
  //   data: allUsersActivity,
  //   isLoading: isAllActivitiesLoading,
  //   refetch: refetchActivity,
  // } = useGetRewardsActivity(
  //   { userId: userDetails?.userId as string, activityTypes: activityTypes },
  //   { enabled: !!userDetails?.userId && activityTypes.length > 0 }
  // );
  //
  const allUsersActivity = {
    follow_push_on_twitter: {
      activityId:
        'follow_push_on_twitter:twitter:corlard3y|user:67f8937|epoch:1739824059',
      userId: '67f8937',
      activityTypeId: 'follow_push_on_twitter',
      data: {
        twitter: 'corlard3y',
      },
      status: 'COMPLETED',
      points: 10000,
      verificationProof:
        '-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJns5u6CZDe7G0AzUNswBYhBDWGK68quEm9sP8jyd7sbQDN\nQ2zAAAA9Wwf/SRnCAKCHRm0vPqOC+xdm46IQsSuDhjHSlxcIW3L5DrX/X5jJ\nRuTGyUaxvrvdrHnJ9PXGjucpEwb6436kWZlsOLFBEXw6E7k/K4EpVQm+R0U6\nPGehbdBchJRmsazFa2vvuIrXskjImFWUvUGcwGFlYYsHnm9tkjSvHL2jq/tH\nE6aH6/9HyT97oKyMl8zYYhcaKbbPAuM78BoaauXuofwdWTLJapGJyZwf/GMh\ngum/Y6yimEuXWUcwz2HiE6LMOsFVAhNbP5XIRshOdN+SN45VYM2Pota78TUK\nKUKdd6S3R0bANa8OvNoZXajx8tgRMKI57LjGsktaHHgZKcuCJcnFdg==\n=yEel\n-----END PGP SIGNATURE-----\n',
      createdAt: '2025-02-17T20:27:46.254Z',
      updatedAt: '2025-02-17T20:27:46.254Z',
      multiplier: 1.5,
    },
    follow_push_on_discord: {
      activityId:
        'follow_push_on_discord:discord:corlard3y|discord_token:vb3FGf8sYtmOxMIDKMxfer96KegG6K|user:67f8937|epoch:1729597608',
      userId: '67f8937',
      activityTypeId: 'follow_push_on_discord',
      data: {
        discord: 'corlard3y',
        discord_token: 'vb3FGf8sYtmOxMIDKMxfer96KegG6K',
      },
      status: 'COMPLETED',
      points: 10000,
      verificationProof:
        '-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJnF5CnCZDe7G0AzUNswBYhBDWGK68quEm9sP8jyd7sbQDN\nQ2zAAABfFAf/X7Sqo/qPIkyBjPEeZ6jZrE0xmj/knyfTiP5tWC1s6gKTT8Mr\nYsrfaYLv5W/CScq5n2IzVkxoM9LqNxUoXJSMZm54YRAXcZd+gwp0JmrxrN71\nhqEXpDn+/qHAeao69IYPQPj0k48TQPiQLfJO+gjFkdSuQ+zylNqZiwsXWqEW\nO1reboL1klwZOP+H3IehHEoFCmbgnZ03WMxMSQ/XRs30npT1XSf8gWImr056\npruesVgEWXszVvsdc/Sl72f8n0zXaBDhwadTbN0FIWqR1+jTOiggJzWU2aIp\nI107/8CQ6w6rZbbLIO9oTNKTZNb3kDtK9ASeXBIkJsZp+Fp+pVNRkg==\n=+wN7\n-----END PGP SIGNATURE-----\n',
      createdAt: '2024-10-22T11:46:50.647Z',
      updatedAt: '2024-10-22T11:46:50.647Z',
      multiplier: 0,
    },
    create_gated_group_push_chat: {
      error: 'Not Found',
    },
    setup_push_user_profile: {
      activityId: 'setup_push_user_profile:|user:67f8937|epoch:1730456174',
      userId: '67f8937',
      activityTypeId: 'setup_push_user_profile',
      data: {},
      status: 'COMPLETED',
      points: 500,
      verificationProof:
        '-----BEGIN PGP SIGNATURE-----\n\nwsBzBAEBCAAnBYJnJKpsCZDe7G0AzUNswBYhBDWGK68quEm9sP8jyd7sbQDN\nQ2zAAABwhgf/cuS0s++BrqRsHzbZWQpCfJmHcEpxL94Ciyr1J0s2/smeDyPt\nowNBZxUp3UpsFopvqQTrpzEjKjnNanTwSrpyPCNQBMqAyrOXMLi7v3RjADYS\nmte3i2tVyPPBk5iyYy7jRrCa7xFv7Fc3qW6opEXwuegPU5PTiYIqm2HDI9FH\nV13knJqS6ixg+hMnrvDyN7PrZ8ZqDrLixyHrQZU6l1tzVdRSCsr/kNZFdfja\n0g6A1N1XzRXlfl3l4DkG6OmoESW8YnLiwjYZRkofCnZTBnL/SIKSkRenroWb\nUxLTRYTZzrk3PwRtDunaH7LGT/2VU5k97NDYvVVkDSxsxn7wGYnK8Q==\n=vdhk\n-----END PGP SIGNATURE-----\n',
      createdAt: '2024-11-01T10:16:17.383Z',
      updatedAt: '2024-11-01T10:16:17.383Z',
      multiplier: 0,
    },
    active_push_chat_user: {
      error: 'Not Found',
    },
    hold_push_alpha_access_nft: {
      error: 'Not Found',
    },
    hold_push_rockstar_nft: {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:WALLETTRACKER_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:PRICETRACKER_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:BTC_PRICE_TRACKER_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:UNSTOPPABLE_DOMAINS_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:PWN_NOTIFICATIONS_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:REVOKE_NOTIFICATIONS_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:CYBER_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:SHAPESHIFT_CHANNEL': {
      error: 'Not Found',
    },
    'channel_specific_subscriptions:QUICKSWAP_CHANNEL': {
      error: 'Not Found',
    },
    notifications_integration_email_telegram_discord: {
      error: 'Not Found',
    },
  };

  return (
    <Box display='flex' flexDirection='column' gap='spacing-md'>
      <Box
        gap='spacing-sm'
        backgroundColor='surface-primary'
        borderRadius='radius-md'
        display='flex'
        flexDirection='column'
        margin='spacing-none spacing-none spacing-none spacing-none'
        padding={{ ml: 'spacing-sm', initial: 'spacing-md' }}
      >
        <Text variant='h4-bold' color='text-primary'>
          Activities
        </Text>

        {/* These are the social activites Twitter and discord */}
        {socialActivities.map((activity: any) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={'67f8937' || ''}
            activity={activity}
            isLoadingItem={false}
            isLocked={false}
            allUsersActivity={allUsersActivity!}
            isAllActivitiesLoading={false}
            refetchActivity={() => console.log()}
          />
        ))}
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          margin='spacing-xxs spacing-none'
          gap='spacing-xxs'
          css={css`
            &:before,
            &:after {
              content: '';
              flex: 1 1;
              border-bottom: 1px solid var(--stroke-secondary);
              margin: auto;
            }
            &:before {
              margin-right: var(--s3);
            }
            &:after {
              margin-left: var(--s3);
            }
          `}
        >
          <Lock size={28} color='icon-tertiary' />
          <Text variant='bs-semibold' color='text-tertiary'>
            Verify X and Discord to unlock more activities
          </Text>
        </Box>

        {socialActivities.map((activity: any) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={'67f8937' || ''}
            activity={activity}
            isLoadingItem={false}
            isLocked={false}
            allUsersActivity={allUsersActivity!}
            isAllActivitiesLoading={false}
            refetchActivity={() => console.log()}
          />
        ))}

        {/* <SocialHandleItem
          key={emailTelegramActivities?.activityType}
          userId={userDetails?.userId || ''}
          activity={emailTelegramActivities!}
          isLoadingItem={isLoading}
          isLocked={isLocked}
          allUsersActivity={allUsersActivity as StakeActivityResponse}
          isAllActivitiesLoading={isAllActivitiesLoading}
          refetchActivity={refetchActivity}
        /> */}
      </Box>
    </Box>
  );
};

export default RewardsActivitiesSection;
