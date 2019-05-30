#!/usr/bin/env node

const child_process = require("child_process");
const os = require("os");
const path = require("path");

const getExecutablePath = () => {
    const platform = os.platform();
    switch (platform) {
        case "darwin":
            return path.join(__dirname, "desktop", "desktop.app", "Contents", "MacOS", "desktop");
        case "linux":
            return path.join(__dirname, "desktop", "desktop");
        case "win32":
            return path.join(__dirname, "desktop", "desktop.exe");
        default:
            throw new Error(`${platform} is not currently supported.`);
    }
};

const skipArguments = 2;
const args = process.argv.slice(skipArguments);
const exe = getExecutablePath();

const child = child_process.spawn(exe, args, {
    stdio: "inherit",
    windowsHide: false,
});

child.on("close", (code) => {
    process.exit(code);
});

const handleTerminationSignal = (signal) => {
    process.on(signal, () => {
        if (!child.killed) {
            child.kill(signal);
        }
    });
};

handleTerminationSignal("SIGINT");
handleTerminationSignal("SIGTERM");
