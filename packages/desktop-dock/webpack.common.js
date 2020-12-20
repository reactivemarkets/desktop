/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const template = require("html-webpack-template");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
    bail: true,
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                ],
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            fallback: "file-loader",
                            name: "[name].[hash:8].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|woff2?|otf|ttf|eot|ico|mp4)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash:8].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: ["src/img"],
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template,
            appMountId: "app",
            bodyHtmlSnippet: "<noscript>You need to enable JavaScript to run this app!</noscript>",
            lang: "en",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            mobile: false,
            title: "Dock",
        }),
        new CspHtmlWebpackPlugin(
            {
                "default-src": "'none'",
                "base-uri": "'none'",
                "connect-src": "'self'",
                "img-src": ["'self'", "https://*"],
                "manifest-src": "'self'",
                "font-src": ["'self'", "data:"],
                "form-action": "'none'",
                "media-src": "'none'",
                "object-src": "'none'",
                "script-src": ["'self'"],
                "style-src": ["'unsafe-inline'", "'self'"],
            },
            {
                hashEnabled: {
                    "style-src": false,
                },
            },
        ),
    ],
};

module.exports = config;
