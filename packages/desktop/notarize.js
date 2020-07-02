/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const { notarize } = require("electron-notarize");

exports.default = function notarizing(context) {
    const { electronPlatformName, appOutDir, packager } = context;
    if (electronPlatformName !== "darwin") {
        return;
    }

    const appleId = process.env.APPLE_ID;
    const appleIdPassword = process.env.APPLE_ID_PASSWORD;
    const appBundleId = packager.config.appId;
    const appPath = `${appOutDir}/${packager.appInfo.productFilename}.app`;

    if (appleId === undefined || appleIdPassword === undefined) {
        console.log("notarize: no AppleId or AppleIdPassword specified.");
        return;
    }

    console.log(`notarize: ${appPath}`);

    return notarize({
        appBundleId,
        appPath,
        appleId,
        appleIdPassword,
    });
};
