// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useContext } from 'react';

import { css } from 'styled-components';
import BlockiesSvg from 'blockies-react-svg';

import { Box, Skeleton, Text } from '@site/src/blocks';

import { useResolveWeb3Name } from '@site/src/hooks/useResolveWeb3Name';

import { shortenText } from '@site/src/helpers/web3helper';

export type LeaderboardListItemProps = {
  rank: number;
  address: string;
  points: number;
  isLoading: boolean;
};

const LeaderboardListItem: FC<LeaderboardListItemProps> = ({
  rank,
  address,
  points,
  isLoading,
}) => {
  const web3NameList = useResolveWeb3Name(address);

  const web3Name = web3NameList?.[address];
  const displayName = web3Name ? web3Name : shortenText(address, 10, 10);

  return (
    <Box
      height='56px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      css={css`
        border-bottom: var(--border-sm) solid var(--stroke-secondary);
      `}
    >
      <Skeleton isLoading={isLoading}>
        <Box display='flex' gap='spacing-xs' alignItems='center'>
          <Box width='34px' justifyContent='center' display='flex'>
            <Text variant='bm-bold' color='text-primary'>
              {rank > 0 && rank}
            </Text>
          </Box>
          <Box display='flex' gap='spacing-xs' alignItems='center'>
            <Box
              width='32px'
              height='32px'
              borderRadius='radius-xl'
              overflow='hidden'
            >
              <BlockiesSvg address={address} size={8} scale={4} />
            </Box>
            <Text
              variant='bm-bold'
              display={{ ml: 'none', initial: 'block' }}
              color='text-primary'
            >
              {displayName}
            </Text>
            <Text
              variant='bs-bold'
              display={{ ml: 'block', initial: 'none' }}
              color='text-primary'
            >
              {displayName}
            </Text>
          </Box>
        </Box>
      </Skeleton>

      <Skeleton isLoading={isLoading}>
        <Box
          width='88px'
          minWidth='88px'
          minHeight='22px'
          display='flex'
          justifyContent='center'
        >
          <Text
            variant='bm-bold'
            display={{ ml: 'none', initial: 'block' }}
            color='text-primary'
          >
            {points?.toLocaleString()}
          </Text>
          <Text
            variant='bs-bold'
            display={{ ml: 'block', initial: 'none' }}
            color='text-primary'
          >
            {points?.toLocaleString()}
          </Text>
        </Box>
      </Skeleton>
    </Box>
  );
};

export { LeaderboardListItem };
