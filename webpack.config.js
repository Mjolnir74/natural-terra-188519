const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: './client/src/app.js',

    output: {
        path: path.resolve('.', 'client', 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('.', 'client', 'src'),
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    }, {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }, {
                test: /\.html$/,
                use: 'html-loader',   
            }, {
                test: /\.(jade|pug)$/,
                use: 'pug-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(png|woff)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]'
                    }
                }
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.pug'
        }),
        new NodemonWebpackPlugin({
            watch: 'server',
            script: './server/server.js',
            ext: 'js json'
        })
    ]
};