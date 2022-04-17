const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "[name]-[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/static/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s(c|a)?ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        }),
        new BundleTracker({
            path:__dirname,
            filename: 'webpack-stats.json'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
    ],
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, 'src', 'assets'),
            'components': path.resolve(__dirname, 'src', 'components'),
        }
    }
 
}