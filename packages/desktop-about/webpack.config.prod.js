/* eslint-disable @typescript-eslint/no-var-requires */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const SriPlugin = require("webpack-subresource-integrity");
const config = require("./webpack.common.js");

module.exports = merge(
    {
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 8,
                        mangle: true,
                        output: {
                            comments: false,
                        },
                        warnings: false,
                    },
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: {
                                    removeAll: true,
                                },
                            },
                        ],
                    },
                }),
            ],
        },
        output: {
            crossOriginLoading: "anonymous",
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: "production",
            }),
            new SriPlugin({
                hashFuncNames: ["sha512"],
                enabled: true,
            }),
        ],
    },
    config,
);
