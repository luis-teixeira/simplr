var webpack = require('webpack');
var path = require('path');
var env = (process.env.NODE_ENV === 'production');


module.exports = {
  cache: env ? true : false,
  debug: env ? true : false,
  devtool: env ? 'source-map' : 'cheap-module-source-map',
  context: path.join(process.cwd(), 'app'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: env ? 'simplrt.min.js' : 'simplrt.js',
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules', 'app'],
    fallback: __dirname,
    modules: ['app', 'node_modules'],
    mainFields: [
      'browser',
      'main',
      'jsnext:main',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react','stage-0' ] }
      },{
        // Transform our own .css files with PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
            'style-loader',
            'css-loader?modules&-autoprefixer&importLoaders=1!postcss-loader',
            'postcss-loader',
          ],
        // Load the CSS in a style tag in development
        // loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      },{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: env ?
    [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]:[
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NamedModulesPlugin(),
      new webpack.NoErrorsPlugin(),
  ],
};
