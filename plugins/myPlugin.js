module.exports = function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      // Simulated content for dynamic routes
      return [
        { slug: 'page1', title: 'Page 1', content: '...' },
        { slug: 'page2', title: 'Page 2', content: '...' },
      ];
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
};
