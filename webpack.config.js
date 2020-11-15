const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = function (env, argv) {
    const isEnvDevelopmentt = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production';
    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopmentt && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopmentt && 'cheap-module-source-map',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./index.html"
            })
        ],
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
            ]
        }
    }
};