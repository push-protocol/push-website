// CustomLiveEditor.js
import React, { useState } from 'react';
import { LiveEditor } from 'react-live';

const CustomLiveEditor = (props) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`custom-live-editor ${isMinimized ? 'minimized' : ''}`}>
      <div className='editor-header'>
        <button onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? 'Expand' : 'Minimize'}
        </button>
      </div>
      {!isMinimized && <LiveEditor {...props} />}
    </div>
  );
};

export default CustomLiveEditor;
