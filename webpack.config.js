const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears dist on each build
  },
  mode: 'development', // Or 'production'
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    client: {
      overlay: false, // Optional: hides warning overlay in browser
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Realtime Chat',
    }),
  ],
};
