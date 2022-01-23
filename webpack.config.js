// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const WebpackPWAManifest = require("webpack-pwa-manifest")

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ?
  MiniCssExtractPlugin.loader :
  "style-loader";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: false,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.pug",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [{
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(new WebpackPWAManifest({
      publicPath: "/",
      short_name: "AjVoca",
      start_url: "index.html",
      name: "AjiVocabulary",
      description: "Aji氏は単語を覚えたい",
      crossorigin: "use-credentials",
      ios: true,
      icons: [{
        src: path.resolve("images/logo.png"),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    }))
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }));
  } else {
    config.mode = "development";
    config.devtool = "source-map"
  }
  return config;
};