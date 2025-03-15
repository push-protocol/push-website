const ArticleContent = require('../src/components/Chain/config/ChainKnowledgeBaseConfig');
const Push101Content = require('../src/components/Chain/config/ChainKnowledgeBase101Config');

export default function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      // Simulated content for dynamic routes
      return {
        knowledgeBase: ArticleContent?.knowledgeBaseArticleContent || [],
        oneOnOne: Push101Content?.knowledgeBase101Content || [],
      };
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;

      // Create routes for knowledge base articles
      await Promise.all(
        content.knowledgeBase.map(async (item, index) => {
          const metadata = await createData(
            `knowledge-metadata-${index}.json`,
            JSON.stringify(item)
          );

          addRoute({
            path: process.env.GITHUB_ACTIONS
              ? `${process.env.REACT_APP_BASE_URL}/knowledge/${item.slug}`
              : `/knowledge/${item.slug}`,
            exact: true,
            component: '@site/src/pages/knowledge/[slug].tsx',
            modules: { metadata },
          });
        })
      );

      // Create routes for one-on-one content
      await Promise.all(
        content.oneOnOne.map(async (item, index) => {
          const metadata = await createData(
            `101-metadata-${index}.json`,
            JSON.stringify(item)
          );

          addRoute({
            path: process.env.GITHUB_ACTIONS
              ? `${process.env.REACT_APP_BASE_URL}/101/${item.slug}`
              : `/101/${item.slug}`,
            exact: true,
            component: '@site/src/pages/knowledge/101/[slug].tsx',
            modules: { metadata },
          });
        })
      );
    },
  };
}
