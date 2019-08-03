const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

  mode: "development",

  devtool: "source-map",

  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/dist`,
    filename: "main.[hash].js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`
    })
  ],

  devServer: {
    open: true,
    contentBase: `${__dirname}/dist`,
    watchContentBase: true
  }
}
