import { app } from "electron";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessFork } from "./iProcessFork";

export class DesktopEnvironmentProcessFork implements IProcessFork {
    private readonly processFork: IProcessFork;

    public constructor(processFork: IProcessFork) {
        this.processFork = processFork;
    }

    public fork = async (args: string[], env: IEnvironmentVariables) => {

        env.DESKTOP_APP_NAME = app.getName();
        env.DESKTOP_APP_VERSION = app.getVersion();
        env.DESKTOP_APP_PATH = app.getAppPath();
        env.DESKTOP_APP_DATA_PATH = app.getPath("appData");
        env.DESKTOP_EXE_PATH = app.getPath("exe");
        env.DESKTOP_DESKTOP_PATH = app.getPath("desktop");
        env.DESKTOP_DOCUMENTS_PATH = app.getPath("documents");
        env.DESKTOP_DOWNLOADS_PATH = app.getPath("downloads");
        env.DESKTOP_IS_PACKAGED = app.isPackaged;
        env.DESKTOP_LOCALE = app.getLocale();
        env.DESKTOP_LOGS_PATH = app.getPath("logs");
        env.DESKTOP_MUSIC_PATH = app.getPath("music");
        env.DESKTOP_PICTURES_PATH = app.getPath("pictures");
        env.DESKTOP_TEMP_PATH = app.getPath("temp");
        env.DESKTOP_USER_DATA_PATH = app.getPath("userData");
        env.DESKTOP_VERSION = app.getVersion();
        env.DESKTOP_VIDEOS_PATH = app.getPath("videos");
        env.ELECTRON_RUN_AS_NODE = 1;

        return this.processFork.fork(args, env);
    }
}
