import { app } from "electron";
import { spawn } from "child_process";
import * as path from "path";

const run = (args: string[], done: () => void) => {
    const updateExe = path.resolve(path.dirname(process.execPath), "..", "Update.exe");

    console.log(`Spawning ${updateExe} with args ${args}`);
    spawn(updateExe, args, {
        detached: true,
    }).on("close", done);
};

export const checkForSquirrelEvents = () => {
    if (process.platform !== "win32") {
        return false;
    }

    const cmd = process.argv[1];
    const target = path.basename(process.execPath);

    console.log(`processing squirrel command: ${cmd}, target: ${target}`);

    switch (cmd) {
        case "--squirrel-firstrun":
        case "--squirrel-install":
        case "--squirrel-updated":
            run(["--createShortcut=" + target + ""], app.quit);
            return true;
        case "--squirrel-uninstall":
            run(["--removeShortcut=" + target + ""], app.quit);
            return true;
        case "--squirrel-obsolete":
            return true;
        default:
            return false;
    }
};
