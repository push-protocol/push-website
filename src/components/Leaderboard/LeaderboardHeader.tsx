// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
import { Box, Button, Points, Text, CaretLeft } from '@site/src/blocks';
import { useHistory } from '@docusaurus/router';

const LeaderboardHeader = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/rewards');
  };
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      flexDirection={{ initial: 'row', ml: 'column' }}
      gap='spacing-sm'
    >
      <Box
        display='flex'
        gap='spacing-sm'
        flexDirection={{ initial: 'row', ml: 'column' }}
        alignItems={{ ml: 'center' }}
      >
        <Points />
        <Box
          display='flex'
          flexDirection='column'
          display={{ initial: 'flex', ml: 'none' }}
        >
          <Text variant='h3-semibold'>
            Welcome to Push Chain Devnet Drop S2!
          </Text>
          <Text variant='bm-regular'>
            Explore Push Chain Devnet, complete quests, bang out multipliers,
            and earn airdrops.
          </Text>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          display={{ initial: 'none', ml: 'flex' }}
        >
          <Text variant='h3-semibold' textAlign='center'>
            Welcome to Push Chain Devnet Drop S2!
          </Text>
          <Text variant='bm-regular' textAlign='center'>
            Explore Push Chain Devnet, complete quests, bang out multipliers,
            and earn airdrops.
          </Text>
        </Box>
      </Box>
      <Box display={{ initial: 'flex', ml: 'none' }}>
        <Button
          variant='outline'
          leadingIcon={<CaretLeft />}
          onClick={handleGoBack}
        >
          Back to Home
        </Button>
      </Box>
      <Box display={{ initial: 'none', ml: 'flex' }} width='100%'>
        <Button
          variant='outline'
          leadingIcon={<CaretLeft />}
          block={true}
          onClick={handleGoBack}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export { LeaderboardHeader };
