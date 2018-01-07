var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var loaders = require('./webpack.loaders');

var BUILD_DIR = path.resolve(__dirname, 'dist-web');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: BUILD_DIR,
        //inline: true,
        compress: true,
        port: 9000,
        open: false
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: APP_DIR + '/index.html',
            filename: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' }
        ])      
    ],
    module : {
        loaders
    }
};

module.exports = config;

