import BrowserOnly from '@docusaurus/BrowserOnly';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryErrorMessageFallback,
  usePrismTheme,
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Spinner, {
  SPINNER_TYPE,
} from '@site/src/components/reusables/spinners/SpinnerUnit';
import GLOBALS from '@site/src/config/globals';
import { Button, ItemH, ItemV } from '@site/src/css/SharedStyling';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styles from './styles.module.css';
function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return (
    <Spinner
      size={42}
      color={GLOBALS.COLORS.PRIMARY_COLOR}
      type={SPINNER_TYPE.PROCESSING}
    />
  );
}
function Preview() {
  // No SSR for the live preview
  // See https://github.com/facebook/docusaurus/issues/5747
  return (
    <BrowserOnly fallback={<LivePreviewLoader />}>
      {() => (
        <>
          <ErrorBoundary
            fallback={(params) => (
              <ErrorBoundaryErrorMessageFallback {...params} />
            )}
          >
            <LivePreview />
          </ErrorBoundary>
          <LiveError />
        </>
      )}
    </BrowserOnly>
  );
}
function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id='theme.Playground.result'
          description='The result label of the live codeblocks'
        >
          LIVE PREVIEW
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <Preview />
      </div>
    </>
  );
}
function ThemedLiveEditor({ code }) {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
      code={code}
    />
  );
}
function EditorWithHeader({ minimized, code }) {
  const [minimizedState, setMinimizedState] = useState(minimized);

  return (
    <>
      <Header>
        <Button
          onClick={() => {
            setMinimizedState(!minimizedState);
          }}
          textTransform='uppercase'
          background='transparent'
          padding='0px'
          width='100%'
          display='flex'
          hoverBackground='transparent'
          borderRadius='0px'
        >
          <ItemH>
            <ItemV flex='1' alignItems='flex-start'>
              <Translate
                id='theme.Playground.liveEditor'
                description='The live editor label of the live codeblocks'
              >
                LIVE EDITOR
              </Translate>
            </ItemV>
            {minimizedState ? <FiChevronDown /> : <FiChevronUp />}
          </ItemH>
        </Button>
      </Header>
      {!minimizedState && <ThemedLiveEditor code={code} />}
    </>
  );
}
export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;

  // console.debug('Original children content:', children);
  // Look for customPropMinimized

  let minimized = false;
  const lines = children.split('\n');

  if (lines.length > 0) {
    const firstLine = lines[0];
    if (firstLine.includes('// customPropMinimized=')) {
      // Define regex patterns
      const minimizedPattern = /\/\/\s*customPropMinimized=['"]([^'"]+)['"]/;
      const match = firstLine.match(minimizedPattern);
      console.debug('customPropMinimized match:', match);

      if (match) {
        // if ture then mark minimized as true
        if (match && match[1] === 'true') {
          minimized = true;
        }

        // remove the customPropMinimized from the first line
        lines[0] = firstLine.replace(
          /\s*\/\/\s*customPropMinimized=['"][^'"]+['"]/g,
          ''
        );

        children = lines.join('\n');
      }
    }
  }

  // Store the original code for display (with imports and props)
  const displayCode = children;

  // Look for customPropHidden
  let hidden = false;
  if (lines.length > 0) {
    const firstLine = lines[0];
    if (firstLine.includes('// customPropHidden=')) {
      // Define regex pattern
      const hiddenPattern = /\/\/\s*customPropHidden=['"]([^'"]+)['"]/;
      const match = firstLine.match(hiddenPattern);
      console.debug('customPropHidden match:', match);

      if (match) {
        // if true then mark hidden as true
        if (match[1] === 'true') {
          hidden = true;
        }

        // Remove the customPropHidden from the first line
        lines[0] = firstLine.replace(
          /\s*\/\/\s*customPropHidden=['"][^'"]+['"]/g,
          ''
        );

        children = lines.join('\n');
      }
    }
  }

  // Remove imports from execution code
  let inImport = false;
  children = children
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('import ')) {
        inImport = !trimmed.endsWith(';');
        return false;
      }
      if (inImport) {
        if (trimmed.endsWith(';')) {
          inImport = false;
        }
        return false;
      }
      return true;
    })
    .join('\n');

  // finally replace if new line is there in the start
  children = children.replace(/\n/, '');
  // console.debug('Final children content passed to LiveProvider:', children);

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, '')}
        noInline={noInline}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader />
            {!hidden && (
              <EditorWithHeader code={displayCode} minimized={minimized} />
            )}
          </>
        ) : (
          <>
            {!hidden && (
              <EditorWithHeader code={displayCode} minimized={minimized} />
            )}
            <ResultWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
