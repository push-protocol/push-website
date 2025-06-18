// src/components/LivePlaygroundEditorHighlightScript.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect } from 'react';
import './highlight-styles.css';

export default function LivePlaygroundEditorHighlightScript() {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    let isUserTyping = false;
    const modifiedContainers = new Set();
    let typingTimeout;

    // One-time pass to highlight matching spans
    function initialHighlight() {
      document
        .querySelectorAll('div.push-apply-highlight-in-live-editor')
        .forEach((container) => {
          if (modifiedContainers.has(container)) return;
          const regexStr = container.getAttribute('data-highlight-regex');
          if (!regexStr) return;
          let regex;
          try {
            regex = new RegExp(regexStr);
          } catch (e) {
            console.error('Invalid regex pattern', regexStr, e);
            return;
          }

          const pre = container.querySelector('pre');
          if (!pre) return;
          Array.from(pre.children)
            .filter((el) => el.tagName.toLowerCase() === 'span')
            .forEach((span) => {
              const text = span.textContent || '';
              // match regex or a fallback for toUniversal text
              if (regex.test(text) || text.includes('toUniversal')) {
                span.classList.add('highlight-live-editor');
              }
            });
        });
    }

    // Throttle typing flag
    function handleInput() {
      isUserTyping = true;
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        isUserTyping = false;
      }, 500);
    }

    // Clear highlights when user interacts (click or keydown) but not while typing
    function clearHighlights(event) {
      if (isUserTyping) return;
      const container = event.target.closest(
        '.push-apply-highlight-in-live-editor'
      );
      if (!container) return;
      container
        .querySelectorAll('.highlight-live-editor')
        .forEach((span) => span.classList.remove('highlight-live-editor'));
      modifiedContainers.add(container);
    }

    // Schedule the one-time highlight
    const timerId = window.setTimeout(initialHighlight, 800);

    // Setup listeners
    document.addEventListener('input', handleInput, { passive: true });
    document.addEventListener('mousedown', clearHighlights, { passive: true });
    document.addEventListener('keydown', clearHighlights, { passive: true });

    return () => {
      clearTimeout(timerId);
      document.removeEventListener('input', handleInput);
      document.removeEventListener('mousedown', clearHighlights);
      document.removeEventListener('keydown', clearHighlights);
    };
  }, []);

  return null;
}
