import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import { Configuration } from "webpack";

const rootPath = path.resolve(__dirname, "..");

const config: Configuration = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["main", "module", "browser"],
    fallback: { "pg-native": require.resolve("pg-native") },
  },
  entry: path.resolve(rootPath, "src/renderer", "index.tsx"),
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  externals: {
    "puppeteer-extra-plugin-stealth":
      "commonjs2 puppeteer-extra-plugin-stealth",
    "react-hot-loader": "commonjs2 react-hot-loader",
    "react-dom": "commonjs2 react-dom",
    react: "commonjs2 react",
    "react-router-dom": "commonjs2 react-router-dom",
    "react-router": "commonjs2 react-router",
    "@mui/material": "commonjs2 @mui/material",
    playwright: "commonjs2 playwright",
    "clone-deep": "commonjs2 clone-deep",
    "user-agents": "commonjs2 user-agents",
  },
  devServer: {
    static: {
      directory: path.resolve(rootPath, "dist/renderer"),
      publicPath: "/",
    },
    port: 4000,
    historyApiFallback: true,
    compress: true,
  },
  output: {
    path: path.resolve(rootPath, "dist/renderer"),
    filename: "js/[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(rootPath, "index.html") }),
  ],
};

export default config;
