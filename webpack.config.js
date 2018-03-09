const path = require('path');
const config = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: path.resolve(__dirname) + '/app/assets/javascripts/components/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /\.ejs$/, /\.erb$/],
        query: {
            presets: [
              ['es2015', { loose: true, modules: false }],
              'react'
            ]
        }
      }

    ]
  }
};

module.exports = config;

// const path = require('path');
//
// module.exports = {
//   entry: './app/assets/frontend/main.jsx',
//   output: {
//     path: path.resolve(__dirname, '/app/assets/javascripts'),
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   module: {
//     rules: [
//       {test: /\.jsx?$/, loader: "babel-loader"}
//     ]
//   }
// };
