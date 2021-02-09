const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.PRODUCTION_MODE,
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'out')
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}