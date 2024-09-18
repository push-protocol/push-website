export const getPublicAssetPath = (path: string) =>
  process.env.GITHUB_ACTIONS
    ? `/push-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}/${path}`
    : `${path}`;
