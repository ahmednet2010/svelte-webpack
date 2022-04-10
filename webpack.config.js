const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const preprocess = require("svelte-preprocess")
module.exports = (env, {
    mode
}) => ({
    optimization: {
        "minimize": mode === 'development' ? false : true
    },
    devtool: (mode === 'development' ? 'inline-source-map' : false),
    entry: './src/App.ts',
    output: {
        publicPath: 'public/**/*',
        filename: "assats/js/bundle.js",
        path: path.resolve(__dirname, "public/")
    },
    resolve: {
        alias: {
            svelte: path.dirname(require.resolve('svelte/package.json'))
        },
        extensions: ['.mjs', '.js', '.svelte', '.ts'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
        {
            test: /\.svelte$/,
            use: {
                loader: 'svelte-loader',
                options: {
                compilerOptions: {
                    dev: (mode === 'development')
                },
                emitCss: (mode === 'production'),
                hotReload: (mode === 'development'),
                preprocess: preprocess({
                    postcss: true,
                    typescript: true,
                    sass:true
                })
                }
            }
        },
        {
            test: /node_modules\/svelte\/.*\.mjs$/,
            resolve: {
                fullySpecified: false
            }
        },
        {
            test: /\.ts$/,
            use: ["babel-loader","ts-loader"],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, "src")]
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader","sass-loader"],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, "src")]
        }],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'assats/css/bundle.css',
        chunkFilename: '[id].css',
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
        hot: true,
    }
})