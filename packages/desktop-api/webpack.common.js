/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const config = {
    entry: "./src/index.ts",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    resolve: {
        alias: {
            uws: "ws",
        },
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
