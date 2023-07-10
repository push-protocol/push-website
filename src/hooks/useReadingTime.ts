// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect } from 'react';

const wordsPerMinute = 225;

function useReadingTime(text) {
  if (!text) return 'empty';

  function readingTime(text) {
    return Math.ceil(wordCounter(text) / wordsPerMinute);
  }

  function wordCounter(input) {
    const text = input?.split(/\s+/);
    let wordCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
        wordCount++;
      }
    }
    return wordCount;
  }

  function isWord(str) {
    let alphaNumericFound = false;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }
  return readingTime(text);
}

export default useReadingTime;