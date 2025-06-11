import {
  Sandpack,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import React, { useEffect, useState } from 'react';

interface SandboxIDEProps {
  files: Record<string, string>;
}

export default function SandboxIDE({ files }: SandboxIDEProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullScreen]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid rgb(226, 232, 240)',
        overflow: 'hidden',
        position: isFullScreen ? 'fixed' : 'relative',
        top: isFullScreen ? 0 : 'auto',
        left: isFullScreen ? 0 : 'auto',
        right: isFullScreen ? 0 : 'auto',
        bottom: isFullScreen ? 0 : 'auto',
        zIndex: isFullScreen ? 9999 : 1,
        margin: isFullScreen ? 'auto' : '20px 0',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 15px',
          borderBottom: '1px solid rgb(226, 232, 240)',
          backgroundColor: '#f8fafc',
        }}
      >
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#475569' }}>
          Virtual Node Environment
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              borderRadius: '6px',
              border: '1px solid rgb(226, 232, 240)',
              backgroundColor: '#fff',
              color: '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          </button>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: isFullScreen ? 'calc(100vh - 56px)' : '80vh',
          maxHeight: isFullScreen ? 'auto' : '800px',
          position: 'relative',
        }}
      >
        <SandpackProvider
          template='node'
          customSetup={{
            dependencies: {
              '@pushchain/core': 'latest',
              ethers: 'latest',
            },
          }}
          files={files}
          options={{
            visibleFiles: ['/index.js'],
            activeFile: '/index.js',
            externalResources: [],
            recompileMode: 'immediate',
            recompileDelay: 300,
          }}
          style={{
            height: '100%',
          }}
        >
          <SandpackLayout
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 'inherit',
              gap: 1,
            }}
          >
            <SandpackCodeEditor
              showTabs={false}
              showLineNumbers={true}
              showInlineErrors={true}
              wrapContent={true}
              style={{ flex: 5 }}
            />
            <SandpackConsole showHeader={true} style={{ flex: 3 }} />
            <SandpackPreview style={{ flex: 2 }} />
          </SandpackLayout>
        </SandpackProvider>
      </div>
      <Sandpack
        template='node'
        options={{
          classes: {
            'sp-wrapper': 'custom-wrapper',
            'sp-layout': 'custom-layout',
            'sp-tab-button': 'custom-tab',
          },
        }}
      />
    </div>
  );
}
