/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const config = require("./webpack.common.js");

module.exports = merge(
    {
        devtool: "source-map",
        devServer: {
            compress: true,
            contentBase: "dist",
            disableHostCheck: true,
            historyApiFallback: true,
            inline: true,
            watchContentBase: true,
            port: 8080,
        },
        mode: "development",
        output: {
            devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        },
    },
    config,
);
