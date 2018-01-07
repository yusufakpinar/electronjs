var path = require('path');
module.exports = [
  {
      test : /\.js(x?)$/,
      include : path.join(__dirname, 'src'),
      loader : 'babel-loader'
  },
  {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1'],
      exclude: ['node_modules']
  },
  {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1','sass-loader'],
    exclude: ['node_modules']
  },
  {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader"
  },
  {
      test: /\.(woff|woff2)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader?prefix=font/&limit=5000"
  },
  {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader?limit=10000&mimetype=application/octet-stream"
  },
  {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ["file-loader?limit=10000&mimetype=image/svg+xml","url-loader?mimetype=image/svg"]
  },
  {
      test: /\.gif/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader?limit=10000&mimetype=image/gif",
      options: {name:"static/img/[name].[ext]"}
  },
  {
      test: /\.jpg/,
      exclude: /(node_modules|bower_components)/,
      loader: "file-loader?limit=10000&mimetype=image/jpg",
      options: {name:"static/img/[name].[ext]"}
  },
  {
      test: /\.png/,
      exclude: /(node_modules|bower_components)/,
      loaders: ["file-loader?limit=10000&mimetype=image/png","url-loader?mimetype=image/png"]
  }
];
