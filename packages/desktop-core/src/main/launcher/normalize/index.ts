import { app } from "electron";
import * as path from "path";

export const normalize = (mainPath: string) => {
    let modulePath = path.normalize(mainPath);
    if (!path.isAbsolute(modulePath)) {
        const basePath = app.getAppPath();
        const resourcesPath = path.dirname(basePath);
        modulePath = path.join(resourcesPath, modulePath);
    }

    return modulePath;
};
