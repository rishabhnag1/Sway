module.exports = {
  entry: [
    './src/index.js' //entry point
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/, //process .jsx files with babel
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
//dist is location of bundle and base of dev server
