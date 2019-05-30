"use strict";

const extract = require("extract-zip");
const fs = require("fs");
const os = require("os");
const path = require("path");
const request = require("request");
const util = require("util");

const devPath = path.join("packages", "desktop");
if (__dirname.endsWith(devPath)) {
    console.log("Assuming your running in dev mode. Skipping download...");
    process.exit(0);
}

const version = process.env.npm_package_version;
if (version === undefined) {
    console.error("npm_package_version was not set. Are you running under npm?");
    process.exit(1);
}

const platform = os.platform();
const arch = "x64";
const baseUrl = "https://github.com/reactivemarkets/desktop/releases/download";
const desktopUrl = `${baseUrl}/${version}/desktop-${version}-${platform}-${arch}.zip`;
const desktopZipDestination = path.join(__dirname, "desktop.zip");
const desktopExtractDestination = path.join(__dirname, "desktop");

const file = fs.createWriteStream(desktopZipDestination);

console.log(`Downloading ${desktopUrl} to ${desktopZipDestination}...`);

request(desktopUrl)
    .pipe(file)
    .on("close", () => {
        console.log(`Downloaded ${desktopUrl} to ${desktopZipDestination}`);
        console.log(`Extracting ${desktopZipDestination}`);

        const extractOptions = {
            dir: desktopExtractDestination,
        };

        util.promisify(extract)(desktopZipDestination, extractOptions)
            .then(() => {
                console.log(`Deleting ${desktopZipDestination}`);

                return util.promisify(fs.unlink)(desktopZipDestination);
            })
            .catch((error) => {
                console.error(`Failed to extract ${desktopZipDestination}: ${error}`);
            });
    });
