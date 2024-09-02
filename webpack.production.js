const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // Must be set to true if using source-maps in production
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 20,
    }),
    new CompressionPlugin(),
    new webpack.DefinePlugin({
    'process.env': {
      REACT_APP_PLANET_API_KEY: JSON.stringify(process.env.REACT_APP_PLANET_API_KEY),
      REACT_APP_GFW_DATA_API_KEY: JSON.stringify(process.env.REACT_APP_GFW_DATA_API_KEY),
     },
   }),
 ],
 });
