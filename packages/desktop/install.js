"use strict";

const extract = require("extract-zip");
const fs = require("fs");
const os = require("os");
const path = require("path");
const util = require("util");
const download = require("./download");

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
const desktopUrl = `${baseUrl}/v${version}/desktop-${version}-${platform}-${arch}.zip`;
const desktopZipDestination = path.join(__dirname, "desktop.zip");
const desktopExtractDestination = path.join(__dirname, "desktop");

console.log(version + ": Downloading from " + desktopUrl);

download(desktopUrl, desktopZipDestination, (err) => {
    if (err) {
        console.error("Error: " + err);

        return;
    }

    console.log("Status: Extracting to " + desktopExtractDestination);

    const extractOptions = {
        dir: desktopExtractDestination,
    };

    extract(desktopZipDestination, extractOptions)
        .then(() => {
            console.log("Status: Deleting " + desktopZipDestination);

            return util.promisify(fs.unlink)(desktopZipDestination);
        })
        .catch((error) => {
            console.error("Status: Failed to extract to " + desktopZipDestination);
            console.error("Error: " + error);
        });
});
