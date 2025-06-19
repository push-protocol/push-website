// src/components/LivePlaygroundEditorHighlightScript.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useIsBrowser from '@docusaurus/useIsBrowser';
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
  const isBrowser = useIsBrowser();

  // Clear highlights inside a container
  function clearHighlights(container) {
    if (!container) return;
    container
      .querySelectorAll('.highlight-live-editor')
      .forEach((span) => span.classList.remove('highlight-live-editor'));
  }

  // Apply highlights based on start and end regex patterns
  function applyHighlights(container) {
    if (!container) return;

    // Get start regex from attribute
    const startRegexStr = container.getAttribute('data-highlight-regex-start');
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

    debug('Total spans to process:', spans.length);

    // Process all spans
    let highlightStarted = false;
    for (let index = 0; index < spans.length; index++) {
      const span = spans[index];
      const text = span.textContent || '';

      // Reset regex state for each test
      if (startRegex) startRegex.lastIndex = 0;
      if (endRegex) endRegex.lastIndex = 0;

      // If we're not in a highlighting section, check for a start match
      if (!highlightStarted) {
        // Check if this span matches the start pattern
        const startMatch = startRegex.test(text);
        if (startMatch) {
          highlightStarted = true;
          span.classList.add('highlight-live-editor');
          debug(`[${index}] Started highlighting at:`, text);

          // Check if this same line also has an end match
          if (endRegex) {
            endRegex.lastIndex = 0;
            const endMatch = endRegex.test(text);
            if (endMatch) {
              debug(`[${index}] Both start and end match in same line:`, text);
              // Reset for next potential highlight section
              highlightStarted = false;
            }
          } else {
            // If no end regex is provided, only highlight this span (single line)
            debug(`[${index}] No end regex, single line highlight`);
            // Reset for next potential highlight section
            highlightStarted = false;
          }
        }
      } else {
        // If we're in a highlighting section, check for an end match or continue highlighting
        // Always highlight the current span if we're in a highlighting section
        span.classList.add('highlight-live-editor');
        debug(`[${index}] Highlighting span:`, text);

        // Check if this span matches the end pattern
        if (endRegex) {
          endRegex.lastIndex = 0;
          const endMatch = endRegex.test(text);
          if (endMatch) {
            debug(`[${index}] Ended highlighting at:`, text);
            // Reset for next potential highlight section
            highlightStarted = false;
          }
        }
      }
    }
  }

  // Function to initialize and apply highlights
  function initializeHighlights() {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    debug('Initializing highlights');

    // Find all containers that need highlighting
    const containers = document.querySelectorAll(
      '.push-apply-highlight-in-live-editor'
    );
    containers.forEach((container) => {
      // Clear any existing highlights first
      clearHighlights(container);
      // Apply new highlights
      applyHighlights(container);
    });
  }

  // Run once on mount
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Create a mutation observer to detect DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldReapply = false;

      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if any of the added nodes contain our target containers
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 && // Element node
              (node.classList?.contains(
                'push-apply-highlight-in-live-editor'
              ) ||
                node.querySelector?.('.push-apply-highlight-in-live-editor'))
            ) {
              shouldReapply = true;
            }
          });
        }
      });

      if (shouldReapply) {
        debug('DOM changes detected, reapplying highlights');
        setTimeout(initializeHighlights, 100); // Small delay to ensure DOM is ready
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });

    const modifiedContainers = new Set();

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
      if (container) {
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
      initializeHighlights();
    }

    // Set up event listeners for focus and blur events
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('mousedown', handleMouseDown);

    // Listen for Docusaurus route changes
    const handleRouteChange = () => {
      debug('Route changed, scheduling highlight reapplication');
      // Wait for DOM to update after route change
      setTimeout(initializeHighlights, 300);
    };

    // Add event listener for route changes if we're in a browser
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);

      // For Docusaurus navigation
      const pushState = window.history.pushState;
      window.history.pushState = function () {
        pushState.apply(window.history, arguments);
        handleRouteChange();
      };
    }

    // Delay initial highlight so editor content is fully rendered
    const timer = setTimeout(initialPass, 700);

    // Cleanup event listeners on unmount
    return () => {
      clearTimeout(timer);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();

      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
        // Restore original pushState
        if (pushState) {
          window.history.pushState = pushState;
        }
      }
    };
  }, []);

  return null;
}
