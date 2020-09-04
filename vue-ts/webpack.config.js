const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            meta: { viewport: 'phone' }, //添加meta
            minify: false,//是否压缩
            hash: false, // 
            templateParameters: {
                title: '测试',
                context: '测试内容'
            },
        }),
        new CleanWebpackPlugin(),
        new ManifestPlugin({
            writeToFileEmit:true,
        }),
    ]
}