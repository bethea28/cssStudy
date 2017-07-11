const webpack = require('webpack');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./entry.js"],
  output: {
    path: __dirname + "/bundle",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      { test:[/\.css$/,/\.scss$/],
        loaders: ['style-loader', 'css-loader', "sass-loader"]


      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    // new LiveReloadPlugin()
  ]
};