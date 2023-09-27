import OriginalHtml from '@docusaurus/Html';
import React from 'react';

import { ServerStyleSheet } from 'styled-components';

export default function Html(props) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = props.renderPage;

  props.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        sheet.collectStyles(<App {...props} />),
    });

  return (
    <OriginalHtml {...props}>
      {sheet.getStyleElement()}
      {props.headTags}
    </OriginalHtml>
  );
}
