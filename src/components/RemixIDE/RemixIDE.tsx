import React, { useEffect, useRef, useState } from 'react';

export default function RemixIDE({ examples = {} }) {
  const exampleKeys = Object.keys(examples);
  const defaultRemixURL = 'https://remix.ethereum.org';
  const [selected, setSelected] = useState(exampleKeys[0] || null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullScreen]);

  // Handle iframe load and transition
  useEffect(() => {
    const handleIframeLoad = () => {
      // Wait 3 seconds after load before showing
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      return () => iframe.removeEventListener('load', handleIframeLoad);
    }
  }, []);

  const containerStyle = isFullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: 'rgb(40, 42, 54)',
      }
    : {
        position: 'relative',
        width: '100%',
        height: '80vh',
        maxHeight: '600px',
        backgroundColor: 'rgb(40, 42, 54)',
        overflow: 'hidden',
      };

  const getRemixURL = () => {
    if (!selected || !examples[selected]) return defaultRemixURL;
    return `https://remix.ethereum.org/#url=${examples[selected]}`;
  };

  return (
    <div style={containerStyle} onFocus={(e) => e.stopPropagation()}>
      <style>{`
        .remix-button {
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          background-color: #D548EC;
          color: #fff;
          opacity: 0.5;
          border: none;
        }
        .remix-button:hover {
          opacity: 1;
        }
        .remix-button:active {
          background-color: rgba(0, 0, 0, 0.4);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #D548EC;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 99,
          display: 'flex',
          gap: '10px',
        }}
      >
        {exampleKeys.length > 0 && (
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '6px' }}
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
          className='remix-button'
        >
          {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <div className='loading-spinner' />
        </div>
      )}

      <div
        style={{
          position: isLoading ? 'fixed' : 'relative',
          top: isLoading ? '10000px' : 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: isLoading ? 'none' : 'top 0.3s ease',
        }}
      >
        <iframe
          ref={iframeRef}
          src={getRemixURL()}
          title='Remix IDE'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
