const path = require('path');
(function(){
  console.log(path.resolve(__dirname));
})();

const config = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts/components/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /\.ejs$/, /\.erb$/],
        query: {
            presets: ['react', 'es2015']
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
