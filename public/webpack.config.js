const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
      app: '/index.js',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    }
}

plugins: [
  new WebpackPwaManifest({
    fingerprints: false,
    name: 'Budget Tracker',
    description: 'An application that allows you to view your budget info offline.',
    start_url: '/',
  })
]

module.exports = config;