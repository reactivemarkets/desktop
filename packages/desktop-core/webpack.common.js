const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const config = {
    entry: {
        api: "./src/api/index.ts",
        main: "./src/index.ts",
    },
    target: "electron-main",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};

module.exports = config;
