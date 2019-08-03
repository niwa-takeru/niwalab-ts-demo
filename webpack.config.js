module.exports = {

  mode: "development",

  devtool: "source-map",

  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
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
  }
}
