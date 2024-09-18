import * as dotenv from 'dotenv';
dotenv.config();

export const getPublicAssetPath = (path) => {
  return process.env.REACT_APP_PREVIEW_BASE
    ? `/push-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}${path}`
    : `${path}`;
};
