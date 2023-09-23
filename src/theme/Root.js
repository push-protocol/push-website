
// React + Web3 Essentials
import React from 'react';

// External Components
import i18nInitialize from '@site/src/utils/i18n';

// Internal Components
import Footer from '@site/src/segments/Footer';
import Header from '@site/src/segments/Header';

// Initialize Internalization
i18nInitialize();

// return superimposed class names if conditions are met
function returnAdditionalClasses(conditions) {
  let result = '';
  for(var i = 0; i < conditions.length; i++) {
    const item = conditions[i];

    if (locationPathExists(item.pathname, item.condition)) {
      result = item.classname;
      break;
    }
  }
  
  // return result
  return result;
}

// enable disable default config
function excludeDefaultConfigAt(pathname, condition) {
  return !locationPathExists(pathname, condition);
}

// check if location path exists
function locationPathExists(pathname, condition, comingfrom = null) {
  pathname = pathname.toUpperCase();
  const str = location.pathname.toUpperCase();
  const modstr = (str != null && str.length >= pathname.length) ? str.substring(0, pathname.length) : null;

  let result = modstr === pathname ? true : false;
  if (condition === "exact" || condition === "subpaths") {

    // check if sub path exist in pathname and change result;
    if (str.length > pathname.length) {
      // path has more 
      const remainingLength = str.substring(pathname.length, pathname.length + 1) === "/" ? str.length - pathname.length - 1 : str.length - pathname.length;
      
      if (condition === "exact") {
        result = remainingLength == 0 ? true : false;
      } else if (condition === "subpaths") {
        result = remainingLength > 0 ? false : true;
      }
    }
  }

  return result;
}

function Root({ children }) {  
  const superimposedConditions = [
    {
      classname: 'DocsHub',
      pathname: '/DOCS',
      condition: 'exact'
    }
  ];

  return (
    <div class={returnAdditionalClasses(superimposedConditions)}>
      {excludeDefaultConfigAt('/BRB') && excludeDefaultConfigAt('/DOCS') && excludeDefaultConfigAt('/BLOG') &&
        <Header />
      }
      
      {/* Main react children */}
      {children}

      {excludeDefaultConfigAt('/BRB') && excludeDefaultConfigAt('/DOCS') && excludeDefaultConfigAt('/BLOG') &&
        <Footer />
      }
    </div>
  );
}

export default Root;
