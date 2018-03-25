const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ttf$/,
        loader: "url-loader",
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["es2015", "react", "react-native"],
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
    extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
    mainFields: ["jsnext:main", "browser", "main"],
  },
};
