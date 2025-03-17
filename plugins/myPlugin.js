const ArticleContent = require('../src/components/Chain/config/ChainKnowledgeBaseConfig');
const Push101Content = require('../src/components/Chain/config/ChainKnowledgeBase101Config');
const PushDeepdivesContent = require('../src/components/Chain/config/ChainKnowledgeBaseDeepdivesConfig');

export default function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      return {
        knowledgeBase: ArticleContent?.knowledgeBaseArticleContent || [],
        knowledgeBase101: Push101Content?.ChainKnowledgeBase101Config || [],
        knowledgeBaseDeepdives:
          PushDeepdivesContent?.ChainKnowledgeBaseDeepdivesConfig || [],
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
          path: `/knowledge/${fullSlug}`,
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
      await Promise.all(
        content.knowledgeBase101.map((item) => processItem(item, '101'))
      );
      await Promise.all(
        content.knowledgeBaseDeepdives.map((item) =>
          processItem(item, 'deep-dives')
        )
      );
    },
  };
}

// const ArticleContent = require('../src/components/Chain/config/ChainKnowledgeBaseConfig');
// const Push101Content = require('../src/components/Chain/config/ChainKnowledgeBase101Config');
// const PushDeepdivesContent = require('../src/components/Chain/config/ChainKnowledgeBaseDeepdivesConfig');

// export default function myPlugin() {
//   return {
//     name: 'dynamic-routes-plugin',
//     async loadContent() {
//       return {
//         knowledgeBase: ArticleContent?.knowledgeBaseArticleContent || [],
//         knowledgeBase101: Push101Content?.ChainKnowledgeBase101Config || [],
//         knowledgeBaseDeepdives:
//           PushDeepdivesContent?.ChainKnowledgeBaseDeepdivesConfig || [],

//       };
//     },
//     async contentLoaded({ content, actions }) {
//       const { addRoute, createData } = actions;

//       // Create routes for knowledge base articles
//       await Promise.all(
//         content.knowledgeBase.map(async (item, index) => {
//           const metadata = await createData(
//             `knowledge-metadata-${index}.json`,
//             JSON.stringify(item)
//           );

//           addRoute({
//             path: process.env.GITHUB_ACTIONS
//               ? `${process.env.REACT_APP_BASE_URL}/knowledge/${item.slug}`
//               : `/knowledge/${item.slug}`,
//             exact: true,
//             component: '@site/src/pages/knowledge/[slug].tsx',
//             modules: { metadata },
//           });
//         })
//       );

//       // Create routes for 101 content
//       await Promise.all(
//         content.knowledgeBase101.map(async (item, index) => {
//           const metadata = await createData(
//             `one-on-one-metadata-${index}.json`,

//             JSON.stringify(item)
//           );

//           addRoute({
//             path: process.env.GITHUB_ACTIONS
//               ? `${process.env.REACT_APP_BASE_URL}/knowledge/101/${item.slug}`
//               : `/knowledge/101/${item.slug}`,

//             exact: true,
//             component: '@site/src/pages/knowledge/101/[slug].tsx',
//             modules: { metadata },
//           });
//         })
//       );

//       // Create routes for deep-dives content
//       await Promise.all(
//         content.knowledgeBaseDeepdives.map(async (item, index) => {
//           const metadata = await createData(
//             `push-deep-dives-metadata-${index}.json`,
//             JSON.stringify(item)
//           );

//           addRoute({
//             path: process.env.GITHUB_ACTIONS
//               ? `${process.env.REACT_APP_BASE_URL}/knowledge/deep-dives/${item.slug}`
//               : `/knowledge/deep-dives/${item.slug}`,
//             exact: true,
//             component: '@site/src/pages/knowledge/deep-dives/[slug].tsx',
//             modules: { metadata },
//           });
//         })
//       );

//     },
//   };
// }
