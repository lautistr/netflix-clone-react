const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: { 
        extensions: ['.js', '.jsx'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@html-version': path.resolve(__dirname, 'src/assets/html-version'),
        }
    },
    module: {
        rules: [ 
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 3005,
        historyApiFallback: true,
      }
}
