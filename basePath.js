export const getPreviewBasePath = () => {
  if (typeof process !== 'undefined' && process.env) {
    // Node.js environment (e.g., during the build process)
    return process.env.REACT_APP_PR_PREVIEW_BASE
      ? `/push-website/pr-preview/${process.env.REACT_APP_PR_PREVIEW_BASE}`
      : '';
  }
  return '';
};
