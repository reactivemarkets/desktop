/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.renderer.common.js");

module.exports = merge(
    {
        mode: "production",
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: "production",
            }),
        ],
    },
    config,
);
