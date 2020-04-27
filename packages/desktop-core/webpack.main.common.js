const path = require("path");

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
        warningsFilter: [/node_modules\/yargs/]
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        }],
    },
};

module.exports = config;
