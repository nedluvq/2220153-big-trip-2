const path = require('path')
const HtmlWebpackPlugin = require('html=webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module: {
  rules: [
    {
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
Options


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },

    build: {
      build: path.resolve(__dirname, './build')
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
  ],
  };

