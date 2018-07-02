const path = require('path');

module.exports = {
entry:'./src/app.js',
mode: 'development',
output:{
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules:[{
      test:/\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules'
    },
    {
      test:/\.scss$/,
      use: ['style-loader',
            'css-loader',
          'sass-loader'],
      exclude: '/node_modules'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
