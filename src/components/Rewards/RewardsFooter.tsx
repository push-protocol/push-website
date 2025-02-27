import React from 'react';

import { BsDiscord, BsGithub, BsTwitterX } from 'react-icons/bs';

import { Box, Link } from '../../blocks';

const RewardsFooter = () => {
  return (
    <Box
      display='flex'
      flexDirection={{ ml: 'column', initial: 'row' }}
      justifyContent='space-between'
      alignItems='center'
      margin='spacing-lg spacing-none spacing-none spacing-none'
      gap={{ ml: 'spacing-md' }}
    >
      <Box display='flex' flexDirection='row' gap='spacing-md'>
        <Link to='https://x.com/PushChain' title='Push Twitter' target='_blank'>
          <BsTwitterX size={30} />
        </Link>

        <Link
          to='https://github.com/push-protocol/'
          title='Push Github'
          target='_blank'
        >
          <BsGithub size={30} />
        </Link>

        <Link
          to='https://discord.gg/pushprotocol'
          title='Push Discord'
          target='_blank'
        >
          <BsDiscord size={30} />
        </Link>
      </Box>

      <Box display='flex' flexDirection='row' gap='spacing-lg'>
        <Link to='/tos' title='Terms of Service' target='_blank'>
          Terms of Service
        </Link>

        <Link to='/privacy' title='Privacy Policy' target='_blank'>
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default RewardsFooter;
