import { app } from "electron";
import { spawn } from "child_process";
import * as path from "path";
import { logger } from "../logging";

const run = (args: string[], done: () => void) => {
    logger.info(`processing squirrel command: ${JSON.stringify(args)}}`);

    const updateExe = path.resolve(path.dirname(process.execPath), "..", "Update.exe");

    logger.info(`Spawning ${updateExe} with args ${args}`);
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
