import React from 'react';
import { css } from 'styled-components';

import { Box, Button, RewardsBell, Text } from '@site/src/blocks';

const RewardsContent = () => {
  return (
    <Box display='flex' flexDirection='column' gap='spacing-md'>
      <Box
        display='flex'
        flexDirection={{ initial: 'row', tb: 'column' }}
        gap='spacing-md'
      >
        <Box
          backgroundColor='surface-primary'
          padding='spacing-sm spacing-md'
          borderRadius='radius-md'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          css={css`
            flex: 1;
            height: 416px;
          `}
        >
          <div></div>
          <Box>
            <Text variant='h4-semibold' color='text-primary'>
              Send Test Tx on Push Chain
            </Text>

            <Text variant='bm-regular' color='text-tertiary'>
              Visit simulate.push.org and send test transactions to level up.
            </Text>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              margin='spacing-md spacing-none spacing-none spacing-none'
            >
              <Button variant='tertiary' size='small'>
                Claim
              </Button>

              <Box
                display='flex'
                flexDirection='row'
                gap='spacing-xxs'
                alignItems='center'
              >
                <RewardsBell width={23} height={25} />
                <Text variant='bm-semibold'>10,000</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor='surface-primary'
          padding='spacing-sm spacing-md'
          borderRadius='radius-md'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          css={css`
            flex: 2;
            height: 416px;
          `}
        >
          <div></div>

          <Box>
            <Text variant='h3-semibold' color='text-primary'>
              Universal Chess
            </Text>

            <Text variant='bm-regular' color='text-tertiary'>
              Visit chess.push.org, play games of chess with other degens or
              bots on any chain and level up to claim points.
            </Text>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              margin='spacing-md spacing-none spacing-none spacing-none'
            >
              <Button variant='tertiary' size='small' disabled>
                Level Up to Claim
              </Button>

              <Box
                display='flex'
                flexDirection='row'
                gap='spacing-xxs'
                alignItems='center'
              >
                <RewardsBell width={23} height={25} />
                <Text variant='bm-semibold'>10,000</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection={{ initial: 'row', tb: 'column' }}
        gap='spacing-md'
      >
        <Box
          backgroundColor='surface-primary'
          padding='spacing-sm spacing-md'
          borderRadius='radius-md'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          css={css`
            flex: 1;
            height: 416px;
          `}
        >
          <div></div>

          <Box>
            <Text variant='h4-semibold' color='text-primary'>
              Any Chain Email
            </Text>

            <Text variant='bm-regular' color='text-tertiary'>
              Visit email.push.org and send or receive emails to level up.
            </Text>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              margin='spacing-md spacing-none spacing-none spacing-none'
            >
              <Button variant='tertiary' size='small' disabled>
                Level Up to Claim
              </Button>

              <Box
                display='flex'
                flexDirection='row'
                gap='spacing-xxs'
                alignItems='center'
              >
                <RewardsBell width={23} height={25} />
                <Text variant='bm-semibold'>10,000</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor='surface-primary'
          padding='spacing-sm spacing-md'
          borderRadius='radius-md'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          css={css`
            flex: 1;
            height: 416px;
          `}
        >
          <div></div>

          <Box>
            <Text variant='h4-semibold' color='text-primary'>
              Rumors App
            </Text>

            <Text variant='bm-regular' color='text-tertiary'>
              Visit rumors.push.org and create or react to rumors to level up.
            </Text>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              margin='spacing-md spacing-none spacing-none spacing-none'
            >
              <Button variant='tertiary' size='small' disabled>
                Level Up to Claim
              </Button>

              <Box
                display='flex'
                flexDirection='row'
                gap='spacing-xxs'
                alignItems='center'
              >
                <RewardsBell width={23} height={25} />
                <Text variant='bm-semibold'>10,000</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsContent;
