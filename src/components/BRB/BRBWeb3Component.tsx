// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React, { useEffect, useRef, useState } from 'react';

// External Components
import { useLocation } from '@docusaurus/router';

// Internal Components
import { BRBMainComponent } from '@site/src/components/BRB/BRBMainComponent';

// Import Assets

// Internal Configs

export const BRBWeb3Component = () => {
  const location = useLocation();

  return (
    <BRBMainComponent />
  );
}
