import { app } from "electron";
import * as path from "path";
import { pathToFileURL } from "url";

export const normalizePath = (mainPath: string) => {
    const modulePath = path.normalize(mainPath);
    if (path.isAbsolute(modulePath)) {
        return modulePath;
    }

    const basePath = app.getAppPath();

    const resourcesPath = path.dirname(basePath);

    return path.join(resourcesPath, modulePath);
};

export const normalizeUrl = (urlPath: string) => {
    if (urlPath.includes("://")) {
        return urlPath;
    }

    const modulePath = normalizePath(urlPath);

    const indexPath = path.join(modulePath, "index.html");

    return pathToFileURL(indexPath).toString();
};
