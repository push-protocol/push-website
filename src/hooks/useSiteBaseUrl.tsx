import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useSiteBaseUrl = () => {
  const { siteConfig } = useDocusaurusContext();
  const baseURL = siteConfig?.baseUrl.slice(0, -1);

  return baseURL;
};
