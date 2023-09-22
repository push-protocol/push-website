
// React + Web3 Essentials
import React from 'react';

// External Components
import i18nInitialize from '@site/src/utils/i18n';

// Internal Components
import Footer from '@site/src/segments/Footer';
import Header from '@site/src/segments/Header';

// Initialize Internalization
i18nInitialize();

function customHeaderAt(pathname) {
  pathname = pathname.toUpperCase();
  const str = location.pathname.toUpperCase();
  const modstr = (str != null && str.length >= pathname.length) ? str.substring(0, pathname.length) : null;
  console.log(modstr + "|" + pathname);

  return modstr === pathname ? false : true;
}

function Root({ children }) {  
  
  return (
    <>
      {
        customHeaderAt('/BRB') && customHeaderAt('/DOCS') && customHeaderAt('/BLOG') &&
          
        <Header />
      }
      {children}

      {
        customHeaderAt('/BRB') && customHeaderAt('/DOCS') && customHeaderAt('/BLOG') &&
          
        <Footer />
      }
    </>
  );
}

export default Root;
