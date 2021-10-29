const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/main.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                plugins: [
                    "transform-react-jsx"
                ]
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
  },
  externals: {
    scenegraph:  "scenegraph",
    assets: "assets",
    uxp: "uxp",
    clipboard: "clipboard",
    application: "application"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/images", to: "images" },
      ],
    }),
    //new BundleAnalyzerPlugin()
  ],
};