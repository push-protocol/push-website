const ArticleContent = require('../src/config/KnowledgeBaseArticle');

export default function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      // Simulated content for dynamic routes
      return ArticleContent?.knowledgeBaseArticleContent;
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;

      // Add dynamic routes for knowledge pages
      await Promise.all(
        content.map(async (item, index) => {
          const metadata = await createData(
            `knowledge-metadata-${index}.json`,
            JSON.stringify(item)
          );

          addRoute({
            path: `/chain/knowledge/${item.slug}`,
            exact: true,
            component: '@site/src/pages/chain/knowledge/[slug].tsx',
            modules: { metadata },
          });
        })
      );
    },
  };
}
