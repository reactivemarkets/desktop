/* eslint-disable @typescript-eslint/no-var-requires */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const config = {
    entry: {
        main: "./src/main/index.ts",
    },
    target: "electron-main",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    stats: {
        warningsFilter: [/node_modules\/yargs/],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/img",
                },
            ],
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

module.exports = config;
