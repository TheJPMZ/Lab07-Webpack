const path = require('path');

module.exports = {

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
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    // Compiles Sass to CSS
                    "sass-loader",
                    "css-loader",
                ],
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
        ],
    },
}