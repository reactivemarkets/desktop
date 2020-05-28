"use strict";

const cliProgress = require("cli-progress");
const fs = require("fs");
const fetch = require("node-fetch");
const proxy = require("./proxy");
const HttpsProxyAgent = require("https-proxy-agent");

module.exports = (url, filename, callback) => {
    const progressBar = new cliProgress.SingleBar(
        {
            format: "Status: {bar} {percentage}% | ETA: {eta_formatted}",
        },
        cliProgress.Presets.shades_classic,
    );

    const options = {};
    const proxyString = proxy();
    if (proxyString !== undefined) {
        options.agent = new HttpsProxyAgent(proxyString);
    }

    fetch(url, options)
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                throw new Error("Response status was " + response.status + " " + response.statusText);
            }
        })
        .then((response) => {
            let receivedBytes = 0;
            const file = fs.createWriteStream(filename);
            const totalBytes = response.headers.get("content-length");
            progressBar.start(totalBytes, 0);
            response.body
                .on("data", (chunk) => {
                    receivedBytes += chunk.length;
                    progressBar.update(receivedBytes);
                })
                .pipe(file)
                .on("error", (err) => {
                    fs.unlink(filename);
                    progressBar.stop();

                    callback(err.message);

                    return;
                })
                .on("close", () => {
                    progressBar.stop();
                    callback();

                    return;
                });
        })
        .catch((err) => {
            callback(err);
        });
};
