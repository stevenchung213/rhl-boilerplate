const webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        include: __dirname + '/src',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
