import React, { useEffect, useState } from 'react';

interface RemixIDEProps {
  examples?: Record<string, string>;
}

export default function RemixIDE({ examples = {} }: RemixIDEProps) {
  const exampleKeys = Object.keys(examples);
  const defaultRemixURL = 'https://remix.ethereum.org';
  const [selected, setSelected] = useState(exampleKeys[0] || null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRemixURL = () => {
    if (!selected || !examples[selected]) {
      return defaultRemixURL;
    }
    const githubUrl = examples[selected];
    const remixUrl = new URL(defaultRemixURL);
    remixUrl.hash = `url=${githubUrl}`;
    return remixUrl.toString();
  };

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
      }}
    >
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

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
          Remix IDE
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {exampleKeys.length > 0 && (
            <select
              value={selected ?? ''}
              onChange={(e) => setSelected(e.target.value)}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: '1px solid rgb(226, 232, 240)',
                backgroundColor: '#fff',
                color: '#475569',
                cursor: 'pointer',
              }}
            >
              {exampleKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          )}

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

      {/* Iframe container */}
      <div
        style={{
          width: '100%',
          height: isFullScreen ? 'calc(100vh - 56px)' : '600px',
          position: 'relative',
        }}
      >
        <iframe
          src={getRemixURL()}
          title='Remix IDE'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'relative',
            zIndex: 1,
          }}
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid #D548EC',
                borderTop: '3px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
