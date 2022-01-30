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
    },

plugins: [
  new WebpackPwaManifest({
    inject: false,
    fingerprints: false,
    name: 'Budget Tracker',
    start_url: '/',
    theme_color: "#ffffff",
    background_color: "#ffffff",

    icons: [
      {
        src: path.resolve(
          __dirname,
          "public/icons/icon-512x512.png",
          "public/icons/icon-192x192.png"
          ),
        size: [72, 96, 128, 144, 152, 192, 384, 512]
      }
    ]
  })
  
]
}

module.exports = config;