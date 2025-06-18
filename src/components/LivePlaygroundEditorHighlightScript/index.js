// src/components/LivePlaygroundEditorHighlightScript.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect } from 'react';
import './highlight-styles.css';

export default function LivePlaygroundEditorHighlightScript() {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const modifiedContainers = new Set();

    // Clear highlights inside a container
    function clearHighlights(container) {
      container
        .querySelectorAll('.highlight-live-editor')
        .forEach((span) => span.classList.remove('highlight-live-editor'));
    }

    // Apply highlights by regex only
    function applyHighlights(container) {
      // Get regex from attribute
      const regexStr = container.getAttribute('data-highlight-regex');
      console.log('Container regex attribute:', regexStr);

      // If no regex, nothing to highlight
      if (!regexStr) {
        console.log('No regex found, skipping highlights');
        return;
      }

      let regex;
      try {
        // Create regex object - try both with and without global flag
        // Some regex patterns might need the global flag to work properly
        regex = new RegExp(regexStr, 'g');
        console.log('Created regex object with global flag:', regex);
      } catch (e) {
        console.error('Invalid regex pattern', regexStr, e);
        return;
      }

      const pre = container.querySelector('pre');
      if (!pre) {
        console.log('No pre element found in container');
        return;
      }

      console.log('Checking spans in pre element');

      // Check each span against the regex
      Array.from(pre.children)
        .filter((el) => el.tagName.toLowerCase() === 'span')
        .forEach((span) => {
          const text = span.textContent || '';

          // Reset lastIndex before each test to ensure consistent behavior
          regex.lastIndex = 0;

          // Test if the text matches the regex
          const matches = regex.test(text);
          console.log(`Text: "${text}", Matches: ${matches}`);

          if (matches) {
            span.classList.add('highlight-live-editor');
            console.log('Added highlight to span');
          }
        });
    }

    // On editor focus: clear highlights
    function handleFocusIn(event) {
      const container = event.target.closest(
        '.push-apply-highlight-in-live-editor'
      );
      if (container) {
        clearHighlights(container);
      }
    }

    // On editor blur/out: reapply highlights
    function handleFocusOut(event) {
      const container = event.target.closest(
        '.push-apply-highlight-in-live-editor'
      );

      if (!container) {
        console.log('No container found in focusout');
        return;
      }

      console.log(
        'Focus out on container, modified:',
        modifiedContainers.has(container)
      );

      // Always reapply highlights on focus out, regardless of modified status
      // This ensures highlights are shown when editor loses focus
      applyHighlights(container);

      // Reset modified status so future focus events work correctly
      modifiedContainers.delete(container);
    }

    // On mouse down: clear highlights and mark as modified
    function handleMouseDown(event) {
      const container = event.target.closest(
        '.push-apply-highlight-in-live-editor'
      );
      if (container) {
        console.log('Mouse down in container');
        clearHighlights(container);

        // Only mark as modified if clicking inside the editor
        // This helps ensure we can reapply highlights later
        const isEditorClick = event.target.closest('pre') !== null;
        if (isEditorClick) {
          console.log('Marking container as modified (editor click)');
          modifiedContainers.add(container);
        }
      }
    }

    // Initial one‐time highlight pass after mount
    function initialPass() {
      document
        .querySelectorAll('.push-apply-highlight-in-live-editor')
        .forEach((container) => {
          if (!modifiedContainers.has(container)) {
            applyHighlights(container);
          }
        });
    }

    // Set up listeners
    document.addEventListener('focusin', handleFocusIn, true);
    document.addEventListener('focusout', handleFocusOut, true);
    document.addEventListener('mousedown', handleMouseDown, true);

    // Delay initial highlight so editor content is fully rendered
    const timer = setTimeout(initialPass, 700);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('focusin', handleFocusIn, true);
      document.removeEventListener('focusout', handleFocusOut, true);
      document.removeEventListener('mousedown', handleMouseDown, true);
    };
  }, []);

  return null;
}
