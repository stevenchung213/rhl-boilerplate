const merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  CssNano = require('cssnano'),
  WebpackPwaManifest = require('webpack-pwa-manifest'),
  AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: 'warning'
  },
  output: {
    pathinfo: false
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: CssNano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          },
          safe: true
        },
        canPrint: false
      })
    ],
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          enforce: true,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 8192,
      minRatio: 0.8
    }),
    new WebpackPwaManifest({
      inject: true,
      filename: './dist/assets/manifest.json',
      includeDirectory: true,
      name: 'the.Portal',
      short_name: 'the.Portal',
      description: 'check out the Portal now',
      display: 'standalone',
      start_url: 'index.html',
      theme_color: '#ffffff',
      background_color: '#000000',
      crossorigin: null,
      icons: [
        {
          src: './src/assets/profile.png',
          sizes: [512],
          destination: '/dist/assets'
        }
      ],
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dist/*.js'),
      includeSourcemap: false
    })
  ],
});
