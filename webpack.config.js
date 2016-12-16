var webpack = require('webpack');
var path = require('path'); //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var outputFile,
    minimize = false;
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == '--minimize') {
        minimize = true;
    }
}
var plugins = [new HtmlwebpackPlugin({
        title: 'Hello React',
        template: path.resolve(__dirname, 'templates/index.ejs'),
        inject: 'head',
        hash: true,
        //favicon:'' //指定favicon.ico的位置
    })];
plugins.push(new NpmInstallPlugin({
    cacheMin: 999999, // --cache-min=999999 (prefer NPM cached version)
    //registry: "https://registry.npm.taobao.org",   // --registry="..."
    save: true, // --save
    saveDev: true, // --save-dev
    saveExact: true, // --save-exact
}));
if (minimize) {
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({minimize: true}));
    outputFile = 'bundle.min.js';
} else {
    outputFile = 'bundle.js';
}
var config = {
    entry: [
        'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:3000', './src/index.js' //入口文件
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // 指定编译后的代码位置为 dist/bundle.js
        filename: outputFile
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css?sourceMap!postcss",
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.less$/,
                loader: "style!css!less!postcss",
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.sass$/,
                loader: "style!css!sass!postcss",
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: "url?limit=8192",
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file',
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'raw'
            }, {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: plugins,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = config;