var webpack = require('webpack');
var path = require('path');                 //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');
var outputFile, minimize = false;
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == '--minimize') {
        minimize = true;
    }
}
var plugins = [new HtmlwebpackPlugin({
    title: 'Hello React',
    template: path.resolve(__dirname, 'templates/index.ejs'),
    inject: 'head'
})];

if (minimize) {
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = 'bundle.min.js';
} else {
    outputFile = 'bundle.js';
}
var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.js'      //入口文件
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),  // 指定编译后的代码位置为 dist/bundle.js
        filename: outputFile
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }, plugins: plugins,
    devtool: 'source-map'
}

module.exports = config;