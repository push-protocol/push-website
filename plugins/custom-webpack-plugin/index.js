// eslint-disable-next-line
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = function (context, options) {
  // Read the file
  const filePath = path.join(
    context.siteDir,
    '/docs/roadmap/01-Push-Roadmap.mdx'
  );

  // Get the last modified date of the file
  const stats = fs.statSync(filePath);
  const lastUpdated = stats.mtime;

  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {},
          fallback: {
            assert: require.resolve('assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url'),
            zlib: require.resolve('browserify-zlib'),
            crypto: require.resolve('crypto-browserify'),
            vm: require.resolve('vm-browserify'),
          },
        },
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            LAST_UPDATED: JSON.stringify(
              lastUpdated.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
            ),
          }),
        ],
      };
    },
  };
};
