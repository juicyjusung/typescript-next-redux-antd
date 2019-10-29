const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withCSS({
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    );
    if (prod) {
      config.plugins.push(new CompressionPlugin()); // main.js.gz
    }
    return config;
  },
  cssModules: true,
});
