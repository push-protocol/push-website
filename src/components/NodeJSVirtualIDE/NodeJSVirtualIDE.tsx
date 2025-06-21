import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';

interface RepoI {
  title: string;
  url: string;
}

interface Props {
  repo: null | RepoI;
  children: string;
}

export default function NodeJSVirtualIDE({ repo = null, children }: Props) {
  const userPassedCode = children
    .trim()
    .split('\n')
    .map((line) => (line.startsWith(' ') ? line.slice(2) : line))
    .join('\n');

  return (
    <Playground
      showLineNumbers
      // pass everything your snippet needs into the scope
      scope={{
        ...ReactLiveScope,
      }}
      // no-op: we already hand it the fully-wrapped code below
      transformCode={(code: string) => code}
    >
      {returnPlaygroundCode({ userPassedCode, repo })}
    </Playground>
  );
}

interface ReturnPlaygroundCodeProps {
  userPassedCode: string;
  repo: null | RepoI;
}

// wrap the raw snippet into your full IDE harness
function returnPlaygroundCode({
  userPassedCode,
  repo = null,
}: ReturnPlaygroundCodeProps): string {
  // check if customPropHighlightRegexStart is present
  let highlightRegexStart = null;
  // Look for a line that starts with any whitespace, then //, then customPropHighlightRegexStart=
  let lines = userPassedCode.split('\n');
  const highlightLine = lines.find((line) => {
    return line.trim().startsWith('// customPropHighlightRegexStart=');
  });
  const match = highlightLine?.match(
    /\/\/\s*customPropHighlightRegexStart=(.+)$/
  );
  if (match) {
    // rawValue is everything after the “=” on that comment line
    highlightRegexStart = match[1].trim();

    // remove the line from the code
    lines.splice(lines.indexOf(highlightLine), 1);
    userPassedCode = lines.join('\n');
  }

  // check if customPropHighlightRegexEnd is present
  let highlightRegexEnd = null;
  // Look for a line that starts with any whitespace, then //, then customPropHighlightRegexEnd=
  lines = userPassedCode.split('\n');
  const highlightLineEnd = lines.find((line) => {
    return line.trim().startsWith('// customPropHighlightRegexEnd=');
  });
  const matchEnd = highlightLineEnd?.match(
    /\/\/\s*customPropHighlightRegexEnd=(.+)$/
  );
  if (matchEnd) {
    // rawValue is everything after the “=” on that comment line
    highlightRegexEnd = matchEnd[1].trim();

    // remove the line from the code
    lines.splice(lines.indexOf(highlightLineEnd), 1);
    userPassedCode = lines.join('\n');
  }

  // escape backticks in the snippet
  const escaped = userPassedCode.replace(/`/g, '\\`');

  return `
  // customPropHidden='true'
  // customPropNodeJSEnv='true'
function App() {
  const defaultCode = \`${escaped}\`;

  const [code, setCode] = useState(defaultCode);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // tiny ASCII spinner
  function AsciiLoader() {
    const frames = ['|','/','—', '\\\\'];
    const [i, setI] = useState(0);
    useEffect(() => {
      const t = setInterval(() => setI((n) => (n + 1) % frames.length), 100);
      return () => clearInterval(t);
    }, []);
    return <span style={{ fontFamily:'monospace' }}>{frames[i]}</span>;
  }

  const consoleContainerRef = useRef<HTMLDivElement>(null);

  // whenever logs change, scroll to bottom
  useEffect(() => {
    const c = consoleContainerRef.current;
    if (c) {
      c.scrollTop = c.scrollHeight;
    }
  }, [logs]);

  // run virtual node code
  const runCode = async () => {
    setIsRunning(true);
    setLogs([]);

    // let React paint the loader
    await new Promise((r) => setTimeout(r, 0));

    // clean imports
    const cleaned = code.replace(/^\\s*import.*$/gm, '');
    
       // our JSON.stringify shim: BigInts → strings
    const jsonShim = \`
      const _orig = JSON.stringify;
      JSON.stringify = (value, replacer, space) =>
       _orig(value, (key, val) =>
           typeof val === 'bigint' ? val.toString() : val
       , space);
     \`;

      // stub out process.stdin/stdout so readline won't crash
      const processShim = \`
        const process = { stdin: {}, stdout: {} };
      \`;

      // a very minimal browser‐side readline shim
      const readlineShim = \`;
        // override Node’s readline
        const readline = {
          createInterface: ({ input, output }) => ({
            question: (questionText, callback) => {
              // if you want special prefix handling:
              const isPrompt =
                typeof questionText === 'string' &&
                  questionText.startsWith(':::prompt:::');
              const text = isPrompt
                ? questionText.replace(/:::prompt:::/, '')
              : questionText;
            
            if (isPrompt) {
              window.alert(text);
              callback('');
            } else {
              // display prompt
              const answer = window.prompt(text);
              // Node's readline.question calls callback(answer);
              callback(answer);
            }
          },
          close: () => {},
        }),
      };
      \`;
      
    // shim console
    const consoleShim = {
      log: (...args: any[]) => setLogs(prev => [...prev, args.join(' ')]),
      error: (...args: any[]) => setLogs(prev => [...prev, 'Error: ' + args.join(' ')]),
    };
    
    // pass the wrapped code
      const fnBody = \`
      return (async () => {
        \${jsonShim}
        \${processShim}
        \${readlineShim}
        \${cleaned}
      })();
     \`;

      const scope = {
        ethers,
        PushChain,
        http,
        defineChain,
        Keypair,
        PublicKey,
        parseTransaction,
        TypedData,
        TypedDataDomain,
        privateKeyToAccount,
        generatePrivateKey,
        sepolia,
        hexToBytes,
        bytesToHex,
        createWalletClient,
        createPublicClient,
        console: consoleShim,
      }

    try {
      const executor = new Function(...Object.keys(scope), fnBody);
      await executor(...Object.values(scope));
    } catch (e: any) {
      consoleShim.error(e.message || e.toString());
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ margin: '0 auto', width: '100%' }}>
      <div
        style={{ margin: '0 auto', width: 'inherit', backgroundColor: '#282a36' }}
        className="${
          highlightRegexStart
            ? 'push-apply-highlight-in-live-editor'
            : 'push-live-editor'
        }"
        ${highlightRegexStart ? `data-highlight-regex-start="${highlightRegexStart}"` : ''}
        ${highlightRegexEnd ? `data-highlight-regex-end="${highlightRegexEnd}"` : ''}
      >

        {/* FIX: add empty line at the end of the code to ensure typing is not unfocused first time */}
        <LiveEditor
          code={code.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').concat('\\n                                                                                                                               ')}
          onChange={(newCode) => {
            // Remove trailing newlines and spaces before setting the code
            setCode(newCode.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').replace(/\\n\\s+$/g, ''));
          }}
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            width: 'inherit',
          }}
        />
      </div>
    
      <div style={{ margin: '0 auto' }}>
        <div
          style={{
            padding: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            borderBottom: '1px solid var(--ifm-border-color)',
            justifyContent: 'flex-end',
            gap: '12px',
          }}
        >
          {/* Repo button if available */}
          ${
            repo && repo.url
              ? `
                <div 
                  style={{ 
                    display: 'flex', 
                    flex: 'none',
                    alignItems: 'flex-start',
                    gap: '12px', 
                  }}
                >
                  <a 
                    href="${repo.url}" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-btn"
                  >
                    ${repo.title || 'View Code'}
                  </a>
                </div>
              `
              : ''
          }
          <div 
            style={{ 
              display: 'flex', 
               flexWrap: 'wrap',
              gap: '12px', 
              flex: '1', 
              justifyContent: 'flex-end' 
            }}
          >
            <button
              className="clear-btn"
              onClick={() => setLogs([])}
              title="Clear console"
            >
              Clear Console
            </button>

            <button
              className="run-btn"
              onClick={runCode}
            >
              ► Run Code
            </button>
          </div>

          {/* Hover & focus styles */}
          <style>{\`
            .run-btn,
            .clear-btn,
            .repo-btn {
              padding: 8px 12px;
              font-size: 14px;
              border-radius: 6px;
              border: 1px solid #e2e8f0;
              background-color: #fff;
              color: #475569;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 6px;
              transition: background-color 0.2s, border-color 0.2s;
            }
            .run-btn:hover,
            .clear-btn:hover,
            .repo-btn:hover {
              background-color: #dd44b9;
              border-color: #dd44b9;
              color: #fff;
            }
          \`}</style>
        </div>
            
        {/* Virtual “terminal” console */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 13,
            borderRadius: 12,
            overflow: "hidden",
            margin: "20px 20px 0 20px",
            position: "relative",
          }}
        >
          {/* header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              background: "#444",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#f25f58",
                marginRight: 6,
              }}
            />
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#febe2e",
                marginRight: 6,
              }}
            />
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#58cb42",
              }}
            />
          </div>

          {/* log output */}
          <div
            ref={consoleContainerRef}
            style={{
              background: "#1e1e1e",
              color: "#eee",
              padding: 12,
              minHeight: 180,
              maxHeight: 300,
              overflowY: "auto",
            }}
          >
            {logs.length === 0 ? (
              <div style={{ opacity: 0.6 }}>$ Virtual Node Environment with limited capabilities.<br />$ Hit "Run Code" to Execute.</div>
            ) : (
              logs.map((line, i) => (
                <div key={i}>
                  <span style={{ color: "#6a9955", marginRight: 4 }}>$</span>
                  {line}
                </div>
              ))
            )}
          </div>

          {/* ASCII loader, bottom-right */}
          {isRunning && (
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                right: 12,
                padding: '4px 6px',
                background: '#333',
                borderRadius: 4,
                color: '#50fa7b',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <AsciiLoader /> Running...
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
  `
    .replace(/^(?:\s*[\r\n])+/, '')
    .trim();
}
