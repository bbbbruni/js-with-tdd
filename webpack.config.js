const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    path: './src/app.js',
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
        },
      }
    ]
  }
};
