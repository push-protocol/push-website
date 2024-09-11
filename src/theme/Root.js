// // React + Web3 Essentials
// import { useLocation } from '@docusaurus/router';
// import React from 'react';

// // External Components
// import i18nInitialize from '@site/src/utils/i18n';

// // Internal Components
// import Footer from '@site/src/segments/Footer';
// import ServerStyle from '@site/src/theme/ServerStyle';
// import CookieComponent from '../components/CookieComponent';
// import { getPreviewBasePath } from '../../basePath';

// // Initialize Internalization
// i18nInitialize();

// export default function Root({ children }) {
//   const previewBasePath = getPreviewBasePath();

//   // superimposed conditions
//   const superimposedConditions = [
//     {
//       classname: 'DocsHub PushDocs DocusaurusNavbar NavBarDark',
//       pathname: '/DOCS',
//       condition: 'exact',
//     },
//     {
//       classname: 'PushDocs DocusaurusNavbar',
//       pathname: '/DOCS',
//       condition: 'subpaths',
//     },
//     {
//       classname: 'BlogHub PushBlog DocusaurusNavbar',
//       pathname: '/BLOG',
//       condition: 'exact',
//     },
//     {
//       classname: 'PushBlog DocusaurusNavbar',
//       pathname: '/BLOG',
//       condition: 'subpaths',
//     },
//   ];

//   // return superimposed class names if conditions are met
//   function returnAdditionalClasses(conditions) {
//     let result = '';
//     for (var i = 0; i < conditions.length; i++) {
//       const item = conditions[i];

//       if (locationPathExists(item.pathname, item.condition)) {
//         result = item.classname;
//         break;
//       }
//     }

//     // return result
//     return result;
//   }

//   // enable disable default config
//   function excludeDefaultConfigAt(pathname, condition) {
//     return !locationPathExists(pathname, condition);
//   }

//   // check if location path exists
//   function locationPathExists(pathname, condition, comingfrom = null) {
//     let result = false;
//     pathname = pathname.toUpperCase();

//     // Define location
//     const location = previewBasePath || useLocation();

//     const str = location.pathname.toUpperCase();
//     const modstr =
//       str != null && str.length >= pathname.length
//         ? str.substring(0, pathname.length)
//         : null;

//     result = modstr === pathname ? true : false;
//     if (condition === 'exact' || condition === 'subpaths') {
//       // check if sub path exist in pathname and change result;
//       if (
//         str.length > pathname.length &&
//         str.substring(0, pathname.length) === pathname
//       ) {
//         // path has more
//         const remainingLength =
//           str.substring(pathname.length, pathname.length + 1) === '/'
//             ? str.length - pathname.length - 1
//             : str.length - pathname.length;

//         if (condition === 'exact') {
//           result = remainingLength == 0 ? true : false;
//         } else if (condition === 'subpaths') {
//           result = remainingLength > 0 ? true : false;
//         }
//       }
//     }

//     return result;
//   }

//   return (
//     <div className={returnAdditionalClasses(superimposedConditions)}>
//       <ServerStyle from={children} />

//       {/* Main react children */}
//       {children}

//       {excludeDefaultConfigAt('/BRB') &&
//         excludeDefaultConfigAt('/DOCS') &&
//         excludeDefaultConfigAt('/BOOTCAMP') && (
//           <>
//             <Footer />
//             <CookieComponent />
//           </>
//         )}
//     </div>
//   );
// }

import { useLocation } from '@docusaurus/router';
import React from 'react';
import i18nInitialize from '@site/src/utils/i18n';
import Footer from '@site/src/segments/Footer';
import ServerStyle from '@site/src/theme/ServerStyle';
import CookieComponent from '../components/CookieComponent';
import { getPreviewBasePath } from '../../basePath';

// Initialize Internalization
i18nInitialize();

export default function Root({ children }) {
  const location = useLocation(); // Correctly use useLocation
  const previewBasePath = getPreviewBasePath();

  // Superimposed conditions
  const superimposedConditions = [
    {
      classname: 'DocsHub PushDocs DocusaurusNavbar NavBarDark',
      pathname: '/DOCS',
      condition: 'exact',
    },
    {
      classname: 'PushDocs DocusaurusNavbar',
      pathname: '/DOCS',
      condition: 'subpaths',
    },
    {
      classname: 'BlogHub PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'exact',
    },
    {
      classname: 'PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'subpaths',
    },
  ];

  // Return additional classes based on conditions
  const returnAdditionalClasses = (conditions) => {
    let result = '';
    for (const item of conditions) {
      if (locationPathExists(item.pathname, item.condition)) {
        result = item.classname;
        break;
      }
    }
    return result;
  };

  // Check if location path exists
  const locationPathExists = (pathname, condition) => {
    const str = (previewBasePath || location.pathname).toUpperCase();
    pathname = pathname.toUpperCase();

    if (str.startsWith(pathname)) {
      const remainingLength = str.length - pathname.length;
      if (condition === 'exact') {
        return remainingLength === 0;
      } else if (condition === 'subpaths') {
        return remainingLength > 0;
      }
    }
    return false;
  };

  // Exclude default configuration for certain paths
  const excludeDefaultConfigAt = (pathname) =>
    !locationPathExists(pathname, 'exact');

  return (
    <div className={returnAdditionalClasses(superimposedConditions)}>
      <ServerStyle from={children} />
      {children}
      {excludeDefaultConfigAt('/BRB') &&
        excludeDefaultConfigAt('/DOCS') &&
        excludeDefaultConfigAt('/BOOTCAMP') && (
          <>
            <Footer />
            <CookieComponent />
          </>
        )}
    </div>
  );
}
