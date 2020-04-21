"use strict";

const request = require('request');
const fs = require('fs');
const cliProgress = require('cli-progress');

module.exports = (url, filename, callback) => {

    const progressBar = new cliProgress.SingleBar({
        format: 'Status: {bar} {percentage}% | ETA: {eta_formatted}'
    }, cliProgress.Presets.shades_classic);

    const r = request.get(url);
    r.on('response', (response) => {
        if (response.statusCode !== 200) {
            return callback('Response status was ' + response.statusCode);
        }

        let receivedBytes = 0
        const file = fs.createWriteStream(filename);
        const totalBytes = response.headers['content-length'];
        progressBar.start(totalBytes, 0);

        r.on('data', (chunk) => {
            receivedBytes += chunk.length;
            progressBar.update(receivedBytes);
        })
            .pipe(file)
            .on('error', (err) => {
                fs.unlink(filename);
                progressBar.stop();
                return callback(err.message);
            })
            .on('close', () => {
                progressBar.stop();
                return callback();
            });
    });
}
