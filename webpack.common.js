require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['.jsx', '.js'],
        },
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss|\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'videos/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
            <head/>
            <body>
                <div id="root"></div>
            </body>
        </html>
      `,
      inject: true,
      mobile: false,
      cache: false,
      minify: true,
      hash: true,
      title: 'FILL_ME_IN -> webpack.common',
      meta: [
        {
          charset: 'UTF-8',
        },
        {
          name: 'author',
          content: 'FILL_ME_IN -> webpack.common',
        },
        {
          name: 'description',
          content: 'FILL_ME_IN -> webpack.common',
        },
      ],
      links: ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'],
      appMountId: 'root',
      headHtmlSnippet: '<style>body { margin: 0; padding: 0; }</style>',
      bodyHtmlSnippet: '<noscript>Please enable JavaScript...</noscript>',
      scripts: [/*insert urls as strings, ie. links above*/],
    }),
    new webpack.DefinePlugin({ ...process.env }),
  ],
};
