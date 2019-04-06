const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss|\.sass$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'videos/[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: require('html-webpack-template'),
      inject: false,
      mobile: true,
      cache: false,
      minify: true,
      title: 'the.Portal',
      meta: [
        {
          charset: 'UTF-8'
        },
        {
          name: 'author',
          content: 'Steven Chung'
        },
        {
          name: 'description',
          content: 'Save your favorite images and access them anywhere'
        }
      ],
      links: [
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      ],
      appMountId: 'root',
      bodyHtmlSnippet: `<noscript>Please enable JavaScript...</noscript>`,
      scripts: []
    })
  ],
};
