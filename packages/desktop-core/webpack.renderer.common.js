/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const config = {
    entry: {
        preload: "./src/renderer/preload/index.ts",
    },
    target: "electron-renderer",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                sideEffects: true,
            },
        ],
    },
};

module.exports = config;
