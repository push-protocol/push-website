// basePath.js
function getPreviewBasePath() {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // react environment
    return import.meta.env.REACT_APP_PREVIEW_BASE
      ? `/push-dapp/pr-preview/${import.meta.env.REACT_APP_PREVIEW_BASE}`
      : '';
  } else if (typeof process !== 'undefined' && process.env) {
    // Node.js environment (e.g., during the build process)
    return process.env.REACT_APP_PREVIEW_BASE
      ? `/push-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}`
      : '';
  }
  return '';
}

module.exports = { getPreviewBasePath };
