const path = require("path");
const webpack = require("webpack");



const entryPath = "coderslab/ONL_FEU_W_03_Projekt_zaliczeniowy";

module.exports = {
    mode: "none",
    entry: `./${entryPath}/js/app.js`,
    devtool: "source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
        clean: true,
    },
    devServer: {
        open: true,
        hot: true,
        static: [
            {
                directory: path.join(__dirname, entryPath),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};
