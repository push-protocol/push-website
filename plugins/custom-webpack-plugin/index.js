// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
          },
          fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            util: require.resolve('util/'),
            url: require.resolve('url/'),
            stream: require.resolve('stream-browserify'),
            assert: require.resolve('assert/')
          },
        },
      };
    },
  };
};