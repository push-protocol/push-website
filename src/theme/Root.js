import i18nInitialize from '@site/src/utils/i18n';
import React from 'react';

i18nInitialize();

function Root({ children }) {  
  return <>{children}</>;
}

export default Root;
