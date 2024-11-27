import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react';
import BrowserOnly from '@docusaurus/BrowserOnly';
/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzMyNzg3MDE1OTY2Mzc4MGQ0NTM2MjQiLCJpYXQiOjE3MzEzNjA4ODAsImV4cCI6MjA0NjkzNjg4MH0.RqZAvNBAUcTMNxsGvYLKa-lpGE0s3P3A2PsJB_SoyZE';
export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>
        {() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />}
      </BrowserOnly>
    </>
  );
}
