/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const webpack = require('webpack');
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    path: require.resolve('path-browserify'),
    zlib: require.resolve('browserify-zlib'),
    tls: require.resolve('tls-browserify'),
    net: require.resolve('net-browserify'),
    child_process: false,
    util: require.resolve('util/'),
    fs: false,
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });
  
  return config;
};

// module.exports = function override(config, env) {
//   config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin));
//   return config;
// };
