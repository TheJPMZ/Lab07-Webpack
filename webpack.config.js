const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        }),
        new MiniCSSExtractPlugin()
    ],

    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'aud/',
                    publicPath: 'aud/'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            },
        ],
    },
}