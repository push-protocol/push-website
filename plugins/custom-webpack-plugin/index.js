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
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            zlib: require.resolve("browserify-zlib"),
            util: require.resolve("util/"),
            url: require.resolve("url/"),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert/"),
            crypto: require.resolve("crypto-browserify"),
            process: require.resolve("process/browser.js"),
            os: require.resolve("os-browserify"),
            path: require.resolve("path-browserify"),
            tty: require.resolve("tty-browserify"),
            fs: false,
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: "process/browser.js",
            Buffer: ["buffer", "Buffer"],
            "window.crypto": polyfillPath,
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
