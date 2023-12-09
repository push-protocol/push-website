// React + Web3 Essentials
import { useLocation } from "@docusaurus/router";
import NotFound from "@theme-original/NotFound";
import React from "react";

// External Components
import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";

// Internal Components
import Footer from "@site/src/segments/Footer";

export default function NotFoundWrapper(props) {
  // check if location path exists
  function locationPathExists(pathname, condition, comingfrom = null) {
    let result = false;
    pathname = pathname.toUpperCase();

    // Define location
    const location = useLocation();

    const str = location.pathname.toUpperCase();
    const modstr =
      str != null && str.length >= pathname.length
        ? str.substring(0, pathname.length)
        : null;

    result = modstr === pathname ? true : false;
    if (condition === "exact" || condition === "subpaths") {
      // check if sub path exist in pathname and change result;
      if (
        str.length > pathname.length &&
        str.substring(0, pathname.length) === pathname
      ) {
        // path has more
        const remainingLength =
          str.substring(pathname.length, pathname.length + 1) === "/"
            ? str.length - pathname.length - 1
            : str.length - pathname.length;

        if (condition === "exact") {
          result = remainingLength == 0 ? true : false;
        } else if (condition === "subpaths") {
          result = remainingLength > 0 ? true : false;
        }
      }
    }

    return result;
  }

  // Render
  return (
    <>
      {/* {locationPathExists("/DOCS", "subpaths") && (
        // load docusaurus header
        <Layout>
          <Navbar />
        </Layout>
      )} */}

      <NotFound {...props} />
      <Footer />
    </>
  );
}
