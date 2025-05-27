/* eslint-disable no-irregular-whitespace */
import React from 'react';

// Knowledge Base Header Configuration:
// This edits the Header, description oon /chain/knowledge
// FOr the header image, if you want to use an image, use the image field.
// If you want to use a youtube link or video, attach the embed link url in the video field

export const ChainKnowledgeBaseHeader = {
  title: 'Knowledge Base',
  description: () => (
    <div>
      <div>
        Push Chain is a shared-state blockchain designed for universal
        (interoperable) applications.
      </div>
      <div>
        <p /> <p />
        By enabling seamless transactions from any chain, abstracting away gas
        and wallet complexities, and fostering interoperability across L1s, L2s,
        and L3s, Push Chain ensures a frictionless web3 experience for users and
        developers alike.
      </div>
    </div>
  ),
  // video: {
  //   src: 'https://www.youtube.com/embed/lhiwW3SfoZE',
  //   title: 'title',
  // },
  image: `knowledge-frame`,
  learnMore: 'Hey! Want to learn more about Push Chain?',
};
