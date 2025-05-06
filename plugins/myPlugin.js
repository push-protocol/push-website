const ArticleContent = require('../src/components/Chain/config/ChainKnowledgeBaseConfig');

export default function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      return {
        knowledgeBase: ArticleContent?.knowledgeBaseArticleContent || [],
      };
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;

      const registeredSlugs = new Set(); // Prevent duplicates

      const processItem = async (item, parentSlug = '') => {
        if (!item.slug) {
          console.warn(`🚨 Skipping item (missing slug):`, item);
          return;
        }

        const fullSlug = parentSlug ? `${parentSlug}/${item.slug}` : item.slug;

        if (registeredSlugs.has(fullSlug)) {
          console.warn(`⚠️ Skipping duplicate route: /knowledge/${fullSlug}`);
          return;
        }
        registeredSlugs.add(fullSlug);

        const metadata = await createData(
          `knowledge-metadata-${fullSlug.replace(/\//g, '-')}.json`,
          JSON.stringify(item)
        );

        addRoute({
          path: process.env.GITHUB_ACTIONS
            ? `${process.env.REACT_APP_BASE_URL || ''}/knowledge/${item.slug}`
            : `/knowledge/${item.slug}`,
          exact: true,
          component: '@site/src/pages/knowledge/[slug].tsx',
          modules: { metadata },
        });

        // 🔄 Handle 'list' items that may contain sub-content
        if (item?.content && Array.isArray(item.content)) {
          for (const subItem of item.content) {
            if (subItem.type === 'list' && Array.isArray(subItem.items)) {
              for (const nestedItem of subItem.items) {
                if (nestedItem.slug) {
                  await processItem(nestedItem, fullSlug);
                } else {
                  console.warn(`🚨 List item missing slug:`, nestedItem);
                }
              }
            }
          }
        }
      };

      await Promise.all(content.knowledgeBase.map((item) => processItem(item)));
    },
  };
}
