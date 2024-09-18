import { getPreviewBasePath } from '../../basePath';

const basePath = getPreviewBasePath();

export const getPublicAssetPath = (path) => {
  console.log('Base Path:', basePath); // Logs the basePath value to the console
  return basePath ? `${basePath}${path}` : `${path}`;
};
