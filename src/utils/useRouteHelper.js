export const getPublicAssetPath = (path) => {
  console.log(
    'Process.env:',
    process.env,
    'process.env.preview-base',
    process.env.REACT_APP_PREVIEW_BASE
  ); // Logs the basePath value to the console
  return process.env.GITHUB_ACTIONS
    ? `/push-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}${path}`
    : `${path}`;
};
