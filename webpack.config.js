const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const preprocess = require("svelte-preprocess")
module.exports = (env, {
    mode
}) => ({
    optimization: {
        "minimize": mode === 'development' ? false : true
    },
    mode:mode,
    devtool: (mode === 'development' ? 'inline-source-map' : false),
    entry: path.resolve(__dirname, "src/App.ts"),
    output: {
        filename: "assats/js/bundle.js",
        path: path.resolve(__dirname, "public/"),
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
            test: /\.svelte$/i,
            use: {
                loader: 'svelte-loader',
                options: {
                emitCss :true,
                compilerOptions: {
                    dev: (mode === 'development')
                },
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
            test: /\.t|js$/i,
            use: ["babel-loader","ts-loader"],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, "src")]
        }, {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader","sass-loader"],
            exclude: /node_modules/,
        }],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'assats/css/bundle.css',
        chunkFilename: '[id].css',
    })],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public/'),
        },
        compress: true,
        hot: true,
        open:true,
        historyApiFallback: true,
    }
})