
// React + Web3 Essentials
import React from 'react';

// External Components
import i18nInitialize from '@site/src/utils/i18n';

// Internal Components
import Header from '@site/src/segments/Header';

// Initialize Internalization
i18nInitialize();

function Root({ children }) {  
  
  return (
    <>
      {
        location.pathname.toUpperCase() !== '/BRB' &&
        location.pathname.toUpperCase() !== '/BLOG' && 
        location.pathname.toUpperCase() !== '/DOCS' && 
          
        <Header />
      }
      {children}
    </>
  );
}

export default Root;
