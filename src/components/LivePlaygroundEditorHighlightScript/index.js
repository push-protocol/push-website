// src/components/LivePlaygroundEditorHighlightScript.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useEffect } from 'react';
import './highlight-styles.css';

// Set to true to enable debug logging
const DEBUG = false;

// Debug logger that only logs when DEBUG is true
function debug(...args) {
  if (DEBUG) {
    console.log(...args);
  }
}

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

    // Apply highlights based on start and end regex patterns
    function applyHighlights(container) {
      // Get start regex from attribute
      const startRegexStr = container.getAttribute(
        'data-highlight-regex-start'
      );
      debug('Start regex attribute:', startRegexStr);

      // Get end regex from attribute (optional)
      const endRegexStr = container.getAttribute('data-highlight-regex-end');
      debug('End regex attribute:', endRegexStr);

      // If no start regex, nothing to highlight
      if (!startRegexStr) {
        debug('No start regex found, skipping highlights');
        return;
      }

      let startRegex, endRegex;
      try {
        // Create regex objects
        startRegex = new RegExp(startRegexStr);
        debug('Created start regex object:', startRegex);

        // Create end regex if provided
        if (endRegexStr) {
          endRegex = new RegExp(endRegexStr);
          debug('Created end regex object:', endRegex);
        }
      } catch (e) {
        console.error('Invalid regex pattern', e);
        return;
      }

      const pre = container.querySelector('pre');
      if (!pre) {
        debug('No pre element found in container');
        return;
      }

      debug('Checking spans in pre element');

      // Get all direct child spans of the pre element
      const spans = Array.from(pre.querySelectorAll(':scope > span'));

      let highlightStarted = false;
      let highlightEnded = false;

      debug('Total spans to process:', spans.length);

      // Process all spans
      for (let index = 0; index < spans.length; index++) {
        const span = spans[index];
        const text = span.textContent || '';

        // No need to reset lastIndex since we're not using global flag

        // Reset regex state for each test
        if (startRegex) startRegex.lastIndex = 0;
        if (endRegex) endRegex.lastIndex = 0;

        // Check if this span matches the start pattern
        const startMatch = !highlightStarted && startRegex.test(text);

        // Check for end match only if we've already started highlighting or if we're starting on this line
        let endMatch = false;
        if (endRegex && (highlightStarted || startMatch)) {
          // Reset lastIndex before testing for end match
          endRegex.lastIndex = 0;
          endMatch = endRegex.test(text);
        }

        // Handle the case where both start and end match in the same line
        if (startMatch && endMatch) {
          span.classList.add('highlight-live-editor');
          debug(`[${index}] Both start and end match in same line:`, text);
          highlightStarted = true;
          highlightEnded = true;
          continue;
        }

        // Handle start match
        if (startMatch) {
          highlightStarted = true;
          span.classList.add('highlight-live-editor');
          debug(`[${index}] Started highlighting at:`, text);

          // If no end regex is provided, only highlight this span (single line)
          if (!endRegex) {
            debug(`[${index}] No end regex, single line highlight`);
            highlightEnded = true;
          }
          continue;
        }

        // Check if highlighting has already ended
        if (highlightEnded) {
          debug(`[${index}] Skipping span (highlight ended):`, text);
          continue;
        }

        // Check if this span matches the end pattern
        if (highlightStarted && endMatch) {
          span.classList.add('highlight-live-editor');
          debug(`[${index}] Ended highlighting at:`, text);
          highlightEnded = true;
          continue;
        }

        // Highlight spans between start and end
        if (highlightStarted) {
          span.classList.add('highlight-live-editor');
          debug(`[${index}] Highlighting span:`, text);
        }
      }
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
        debug('No container found in focusout');
        return;
      }

      debug(
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
        debug('Mouse down in container');
        clearHighlights(container);

        // Only mark as modified if clicking inside the editor
        // This helps ensure we can reapply highlights later
        const isEditorClick = event.target.closest('pre') !== null;
        if (isEditorClick) {
          debug('Marking container as modified (editor click)');
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
