// eslint-disable-next-line

module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {},
          fallback: {
            assert: require.resolve('assert'),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            stream: require.resolve('stream-browserify'),
            url: require.resolve('url'),
            zlib: require.resolve("browserify-zlib"),
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
      };
    },
  };
};
