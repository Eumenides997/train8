const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
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
                template: "./public/index.html"
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        resolve: {
            alias: {
                '@': path.resolve('src')
            }
        },
        devServer: {
            contentBase: './dist',
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ["file-loader"]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.css$/,
                    include: [path.resolve(__dirname, './src/styles'), /node_modules/],
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.css$/,
                    exclude: [path.resolve(__dirname, './src/styles'), /node_modules/],
                    use: ['style-loader', 'css-loader?modules', 'postcss-loader']
                },
                {
                    test: /\.less$/,
                    include: [path.resolve(__dirname, './src/styles'), /node_modules/],
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
                },
                {
                    test: /\.less$/,
                    exclude: [path.resolve(__dirname, './src/styles'), /node_modules/],
                    use: ['style-loader', 'css-loader?modules', 'postcss-loader', 'less-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: "pre",
                    use: "eslint-loader"
                }
            ]
        }
    }
};