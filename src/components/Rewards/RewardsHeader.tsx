import React, { FC } from 'react';
import { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useTheme } from '@site/src/context/themeContext';
import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';
import {
  PushWalletButton,
  usePushWalletContext,
} from '@pushprotocol/pushchain-ui-kit';

import { Box, LightFilled, MoonFilled } from '@site/src/blocks';
import ChainLogo from '@site/static/assets/website/chain/ChainLogo.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';

const RewardsHeader: FC = () => {
  const baseURL = useSiteBaseUrl() || '';
  const history = useHistory();
  const { darkMode, toggleTheme } = useTheme();

  const { universalAddress } = usePushWalletContext();

  const GoToHome = () => {
    const targetUrl = baseURL;
    history.push(targetUrl);
  };
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      padding='spacing-sm'
      alignItems='center'
      backgroundColor='surface-secondary'
    >
      <Box cursor='pointer' onClick={GoToHome}>
        {darkMode ? <ChainLogoDark /> : <ChainLogo />}
      </Box>

      <Box
        display='flex'
        alignItems='center'
        css={css`
          margin: 0 16px 0 auto;
        `}
        onClick={toggleTheme}
        cursor='pointer'
      >
        {darkMode ? (
          <LightFilled size={24} color='icon-primary' />
        ) : (
          <MoonFilled size={24} />
        )}
      </Box>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='fit-content'
        css={css`
          button {
            font-family: FK Grotesk Neue !important;
          }

          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        <PushWalletButton
          universalAddress={universalAddress}
          title='Connect Push Wallet'
          styling={{
            width: 'inherit',
          }}
        />
      </Box>

      {/* <Button
        variant='primary'
        css={css`
          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        Login using Push Wallet
      </Button> */}
    </Box>
  );
};

export default RewardsHeader;
