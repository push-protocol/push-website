// eslint-disable-next-line
const webpack = require("webpack");
const path = require("path");

module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      const polyfillPath = path.resolve(__dirname, "crypto-polyfill.js");

      return {
        resolve: {
          alias: {},
          fallback: {
            assert: require.resolve("assert/"),
            buffer: require.resolve('buffer'),
            child_process: false,
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            fs: false,
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util/'),
            stream: require.resolve("stream-browserify"),
            zlib: require.resolve("browserify-zlib"),
          },
          extensions: [
            '.ts',
            '.js',
          ]
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          }),
        ],
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
