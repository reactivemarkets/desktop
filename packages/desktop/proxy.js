"use strict";

const npmConf = require("npm-conf");

const conf = npmConf();

module.exports = () => {
    return (
        process.env.HTTPS_PROXY ||
        process.env.https_proxy ||
        conf.get("https-proxy") ||
        process.env.HTTP_PROXY ||
        process.env.http_proxy ||
        conf.get("proxy") ||
        undefined
    );
};
