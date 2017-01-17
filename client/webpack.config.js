let webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',//webpack dev server client side library
    'webpack/hot/only-dev-server',//webpack hot module loader
    './src/index.js' //entry point
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: "style-loader!css-loader?root=."
    }
    ]
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
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
//dist is location of bundle and base of dev server
