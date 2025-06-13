import Link from '@docusaurus/Link';
import React, { useEffect, useState } from 'react';

interface RemixIDEProps {
  examples: {
    [filename: string]: {
      absoluteFileURL: string;
      ctaTitle: string;
      ctaURL: string;
    };
  };
}

export default function RemixIDE({ examples }: RemixIDEProps) {
  // Force examples to be treated as a plain object to ensure proper key extraction
  const examplesObj = { ...examples };

  // Extract keys directly from the examples object
  const exampleKeys = Object.keys(examplesObj);

  const defaultRemixURL = 'https://remix.push.org';

  // Initialize state with the first key from our extracted keys
  const [selected, setSelected] = useState<string | null>(
    exampleKeys.length > 0 ? exampleKeys[0] : null
  );

  // Force update selected if it doesn't match any key in examples
  useEffect(() => {
    if (
      exampleKeys.length > 0 &&
      (!selected || !exampleKeys.includes(selected))
    ) {
      setSelected(exampleKeys[0]);
    }
  }, [exampleKeys, selected]);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRemixURL = () => {
    if (
      !selected ||
      !examplesObj[selected] ||
      !examplesObj[selected].absoluteFileURL
    ) {
      return defaultRemixURL;
    }

    try {
      const githubUrl = examplesObj[selected].absoluteFileURL;
      const remixUrl = new URL(defaultRemixURL);
      remixUrl.hash = `url=${githubUrl}`;
      return remixUrl.toString();
    } catch (error) {
      return defaultRemixURL;
    }
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
          gap: '16px',
        }}
      >
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#475569' }}>
          Remix IDE
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flex: '1',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {/* Render CTA */}
          {exampleKeys.length > 0 &&
            selected &&
            examplesObj[selected]?.ctaURL && (
              <Link
                to={examplesObj[selected].ctaURL}
                target='_blank'
                rel='noopener noreferrer'
                className='topbar-btn'
              >
                {examplesObj[selected]?.ctaTitle || 'View Code'}
              </Link>
            )}

          {exampleKeys.length > 0 && (
            <select
              value={selected ?? ''}
              onChange={(e) => setSelected(e.target.value)}
              className='topbar-btn'
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
            className='topbar-btn'
          >
            {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          </button>

          {/* Hover & focus styles */}
          <style>{`
            .topbar-btn {
              padding: 8px 12px;
              height: 35px;
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
            .topbar-btn:hover {
              background-color: #dd44b9;
              border-color: #dd44b9;
              color: #fff;
            }
          `}</style>
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
