const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, options) => {
  var setting = {
    mode: "development",

    devtool: "inline-source-map",

    devServer: {
      open: true,
      contentBase: `${__dirname}/dist`,
      watchContentBase: true
    },

    entry: "./src/index.tsx",

    output: {
      path: `${__dirname}/dist`,
      filename: "main.[hash].js"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "~/src": `${__dirname}/src/`
      }
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
    ]
  };

  if (options.mode === "production") {
    setting.mode = "production";
    setting.devtool = false;
    setting.devServer = {};
  }

  return setting;
};
