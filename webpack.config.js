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
                template: "./public/index.html"
            })
        ],
        devServer: {
            contentBase: './dist'
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
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    }
};