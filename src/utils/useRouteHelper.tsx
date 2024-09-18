import { getPreviewBasePath } from '../../basePath';

const basePath = getPreviewBasePath();

export const getPublicAssetPath = (path: string) =>
  basePath ? `${basePath}/${path}` : `${path}`;
