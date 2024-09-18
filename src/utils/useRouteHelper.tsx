import { getPreviewBasePath } from '@site/basePath';

export const getPublicAssetPath = (path: string) =>
  getPreviewBasePath() ? `${getPreviewBasePath()}/${path}` : `${path}`;
