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

const CodingEnvironment = {
  REACT: 'React',
  NODEJS: 'NodeJS',
};

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader({ codeEnv }) {
  return (
    <div
      style={{
        padding: codeEnv == CodingEnvironment.NODEJS ? '1rem 1rem 0 1rem' : '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner
        size={42}
        color={GLOBALS.COLORS.PRIMARY_COLOR}
        type={SPINNER_TYPE.PROCESSING}
      />
    </div>
  );
}

function Preview({ codeEnv }) {
  return (
    <BrowserOnly fallback={<LivePreviewLoader codeEnv={codeEnv} />}>
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

function ResultWithHeader({ title, codeEnv }) {
  const displayTitle = title || (
    <Translate
      id='theme.Playground.result'
      description='The result label of the live codeblocks'
    >
      LIVE PREVIEW
    </Translate>
  );
  const previewClass = `${styles.playgroundPreview} preview${codeEnv}`;
  return (
    <>
      <Header>{displayTitle}</Header>
      <div className={previewClass}>
        <Preview codeEnv={codeEnv} />
      </div>
    </>
  );
}

function ThemedLiveEditor({ code, className }) {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      key={String(isBrowser)}
      className={clsx(styles.playgroundEditor, className)}
      code={code}
    />
  );
}

function EditorWithHeader({ minimized, code, title, codeEnv }) {
  const [minimizedState, setMinimizedState] = useState(minimized);
  const liveEditorClasses = `liveEditor${codeEnv}`;

  const displayTitle = title || (
    <Translate
      id='theme.Playground.liveEditor'
      description='The live editor label of the live codeblocks'
    >
      LIVE EDITOR
    </Translate>
  );

  return (
    <>
      <Header>
        <Button
          onClick={() => setMinimizedState(!minimizedState)}
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
              {displayTitle}
            </ItemV>
            {minimizedState ? <FiChevronDown /> : <FiChevronUp />}
          </ItemH>
        </Button>
      </Header>
      {!minimizedState && (
        <ThemedLiveEditor code={code} className={liveEditorClasses} />
      )}
    </>
  );
}

function changeToExecutableCode(code, isNodeJSEnv) {
  const execCode = !isNodeJSEnv
    ? code
        .split('\n')
        .reduce(
          (acc, line) => {
            // If we're not in an import statement and this line doesn't start an import,
            // keep the line
            if (!acc.inImport && !line.trim().startsWith('import')) {
              return {
                inImport: false,
                lines: [...acc.lines, line],
              };
            }

            // If this line contains a semicolon, we're done with the import
            if (line.includes(';')) {
              return {
                inImport: false,
                lines: acc.lines,
              };
            }

            // Otherwise we're in an import statement
            return {
              inImport: true,
              lines: acc.lines,
            };
          },
          {
            inImport: false,
            lines: [],
          }
        )
        .lines.join('\n')
        .replace(/^\n/, '')
        .trimEnd()
    : code;

  return execCode;
}

export default function Playground({
  children: rawChildren,
  transformCode,
  ...props
}) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes('noInline') ?? false;

  // ——— Custom props from any leading comment lines ———
  const lines = rawChildren.split('\n');
  let idx = 0;
  let minimized = false;
  let hidden = false;
  let isNodeJSEnv = false;
  let highlightRegexStart = null;
  let highlightRegexEnd = null;

  // Process all top comment lines
  while (idx < lines.length && lines[idx].trim().startsWith('//')) {
    const line = lines[idx];
    if (/\/\/\s*customPropMinimized=['"]true['"]/.test(line)) minimized = true;
    if (/\/\/\s*customPropHidden=['"]true['"]/.test(line)) hidden = true;
    if (/\/\/\s*customPropNodeJSEnv=['"]true['"]/.test(line))
      isNodeJSEnv = true;

    // Check for start regex
    const matchStart = line.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);
    if (matchStart) {
      // rawValue is everything after the "=" on that comment line
      highlightRegexStart = matchStart[1].trim();
    }

    // Check for end regex
    const matchEnd = line.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);
    if (matchEnd) {
      highlightRegexEnd = matchEnd[1].trim();
    }

    // remove any customProp flags from this line
    lines[idx] = lines[idx]
      .replace(/\/\/\s*customPropMinimized=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropHidden=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropNodeJSEnv=['"](\w+)['"]/, '')
      .replace(/\/\/\s*customPropHighlightRegexStart=.*$/, '')
      .replace(/\/\/\s*customPropHighlightRegexEnd=.*$/, '');

    // if line is now just whitespace or comment, drop it
    if (lines[idx].trim() === '//') {
      lines.splice(idx, 1);
    } else {
      idx++;
    }
  }

  const strippedChildren = lines.join('\n');

  // ——— remove imports for execution ———
  // but only if it's not a nodejs environment
  const execCode = changeToExecutableCode(strippedChildren, isNodeJSEnv);

  // ——— remove empty lines from top and bottom for execution ———
  const displayCode = strippedChildren.trim();

  // decide code environment
  const codeEnv = isNodeJSEnv
    ? CodingEnvironment.NODEJS
    : CodingEnvironment.REACT;

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={execCode}
        noInline={noInline}
        transformCode={(code) =>
          `${changeToExecutableCode(code, isNodeJSEnv)};`
        }
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : 'LIVE APP PREVIEW'}
              codeEnv={codeEnv}
            />
            {!hidden && (
              <div
                className={
                  highlightRegexStart
                    ? 'push-apply-highlight-in-live-editor'
                    : 'push-live-editor'
                }
                data-highlight-regex-start={highlightRegexStart}
                data-highlight-regex-end={highlightRegexEnd}
              >
                <EditorWithHeader
                  code={displayCode}
                  minimized={minimized}
                  title={
                    isNodeJSEnv ? 'VIRTUAL NODE IDE INNER' : 'LIVE REACT EDITOR'
                  }
                  codeEnv={codeEnv}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {!hidden && (
              <div
                className={
                  highlightRegexStart
                    ? 'push-apply-highlight-in-live-editor'
                    : 'push-live-editor'
                }
                data-highlight-regex-start={highlightRegexStart}
                data-highlight-regex-end={highlightRegexEnd}
              >
                <EditorWithHeader
                  code={displayCode}
                  minimized={minimized}
                  title={
                    isNodeJSEnv ? 'VIRTUAL NODE IDE INNER' : 'LIVE REACT EDITOR'
                  }
                  codeEnv={codeEnv}
                />
              </div>
            )}
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : 'LIVE APP PREVIEW'}
              codeEnv={codeEnv}
            />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
