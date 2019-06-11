const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'seg-base'
  },
  externals: {
    katex: 'katex'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}