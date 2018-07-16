const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: nodeENV,
  devtool: 'source-map',
  entry: {
    path: './app/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env'],
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        sourceMap: true
      }),
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app'),
    publicPath: path.resolve(__dirname, '/public/'),
    port: 8080,
    open: true
  },
};
