import * as path from "path";
import { Configuration } from "webpack";

const rootPath = path.resolve(__dirname, "..");

const config: Configuration = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  entry: path.resolve(rootPath, "src/main", "main.ts"),
  target: "electron-main",
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
    ],
  },
  externals: {
    "puppeteer-extra-plugin-stealth":
      "commonjs2 puppeteer-extra-plugin-stealth",
    "react-hot-loader": "commonjs2 react-hot-loader",
    "react-dom": "commonjs2 react-dom",
    react: "commonjs2 react",
    "react-router-dom": " commonjs2 react-router-dom",
    "react-router": "commonjs2 react-router",
    "@mui/material": "commonjs2 @mui/material",
    playwright: "commonjs2 playwright",
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(rootPath, "dist"),
    filename: "[name].js",
  },
};

export default config;
