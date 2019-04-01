const webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
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
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
