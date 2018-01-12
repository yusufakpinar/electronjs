var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var loaders = require('./webpack.loaders');

var BUILD_DIR = path.resolve(__dirname, 'out');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    target: "electron",
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        APP_DIR + '/app/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '',
        filename: 'bundle.js?[hash]'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: BUILD_DIR,
        publicPath: '/',
        // inline: true,
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
            template: APP_DIR + '/app/index.html',
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

