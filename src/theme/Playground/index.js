import BrowserOnly from '@docusaurus/BrowserOnly';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryErrorMessageFallback,
  usePrismTheme,
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Button, ItemH, ItemV } from '@site/src/css/SharedStyling';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styles from './styles.module.css';
function Header({children}) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>;
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
            )}>
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
          id="theme.Playground.result"
          description="The result label of the live codeblocks">
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
function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}
function EditorWithHeader({ minimized }) {
  const [minimizedState, setMinimizedState] = useState(minimized);

  return (
    <>
      <Header>
        <Button
          onClick={() => {setMinimizedState(!minimizedState)}}
          textTransform="uppercase"
          background="transparent"
          padding="0px"
          width="100%"
          display="flex"
          hoverBackground="transparent"
          borderRadius="0px"
        >
          <ItemH>
            <ItemV flex="1" alignItems="flex-start">
              <Translate
                id="theme.Playground.liveEditor"
                description="The live editor label of the live codeblocks"
              >
                LIVE EDITOR
              </Translate>
            </ItemV>
            { minimizedState ? <FiChevronDown /> : <FiChevronUp /> }
          </ItemH>
        </Button>
      </Header>
      { !minimizedState && 
        <ThemedLiveEditor />
      }
    </>
  );
}
export default function Playground({children, transformCode, ...props}) {
  const {
    siteConfig: {themeConfig},
  } = useDocusaurusContext();
  const {
    liveCodeBlock: {playgroundPosition},
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;
  
  // Look for customPropMinimized, customPropHidden
  let minimized = false;

  let pattern = /customPropMinimized="([^"]+)"/;
  let match = children.match(pattern);
  console.log(match, pattern);
  
  if (match) {
    const customProp = match[1];
    if (customProp === 'true') {
      minimized = true;
      
      // remove the first match
      children = children.replace(pattern, '');
    }
  }

  // Look for customPropHidden
  let hidden = false;

  pattern = /customPropHidden="([^"]+)"\n/;
  match = children.match(pattern);

  if (match) {
    const customProp = match[1];
    if (customProp === 'true') {
      hidden = true;
      
      // remove the first match
      children = children.replace(pattern, '');
    }
  }

  // finally replace if new line is there in the start
  children = children.replace(/\n/, '');

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, '')}
        noInline={noInline}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}>
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader />
            {!hidden && 
              <EditorWithHeader 
                minimized={minimized}
              />
            }
          </>
        ) : (
          <>
            {!hidden && 
              <EditorWithHeader 
                minimized={minimized}
              />
            }
            <ResultWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
