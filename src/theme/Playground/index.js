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

  // Process all top comment lines
  while (idx < lines.length && lines[idx].trim().startsWith('//')) {
    const line = lines[idx];
    if (/\/\/\s*customPropMinimized=['"]true['"]/.test(line)) minimized = true;
    if (/\/\/\s*customPropHidden=['"]true['"]/.test(line)) hidden = true;
    if (/\/\/\s*customPropNodeJSEnv=['"]true['"]/.test(line))
      isNodeJSEnv = true;
    // remove any customProp flags from this line
    lines[idx] = lines[idx]
      .replace(/\/\/\s*customPropMinimized=['"][^'"]+['"]/g, '')
      .replace(/\/\/\s*customPropHidden=['"][^'"]+['"]/g, '')
      .replace(/\/\/\s*customPropNodeJSEnv=['"][^'"]+['"]/g, '');
    // if line is now just whitespace or comment, drop it
    if (lines[idx].trim() === '//') {
      lines.splice(idx, 1);
    } else {
      idx++;
    }
  }

  const strippedChildren = lines.join('\n');

  // ——— remove imports for execution ———
  let inImport = false;
  const execCode = strippedChildren
    .split('\n')
    .filter((l) => {
      const t = l.trim();
      if (t.startsWith('import ')) {
        inImport = !t.endsWith(';');
        return false;
      }
      if (inImport) {
        if (t.endsWith(';')) inImport = false;
        return false;
      }
      return true;
    })
    .join('\n')
    .replace(/^\n/, '')
    .trimEnd();

  // ——— remove empty lines from top and bottom for execution ———
  const displayCode = strippedChildren.replace(/^\s*\r?\n+|\r?\n+\s*$/g, '');
  console.debug('--T--');
  console.debug(displayCode);
  console.debug('----');

  // decide code environment
  const codeEnv = isNodeJSEnv
    ? CodingEnvironment.NODEJS
    : CodingEnvironment.REACT;

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={execCode}
        noInline={noInline}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : undefined}
              codeEnv={codeEnv}
            />
            {!hidden && (
              <EditorWithHeader
                code={displayCode}
                minimized={minimized}
                title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : undefined}
                codeEnv={codeEnv}
              />
            )}
          </>
        ) : (
          <>
            {!hidden && (
              <EditorWithHeader
                code={displayCode}
                minimized={minimized}
                title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : undefined}
                codeEnv={codeEnv}
              />
            )}
            <ResultWithHeader
              title={isNodeJSEnv ? 'VIRTUAL NODE IDE' : undefined}
              codeEnv={codeEnv}
            />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
