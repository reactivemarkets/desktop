import { ipcMain } from "electron";
import { launcherService } from "../launcher";
import { ReservedChannels } from "../../common";

export const launcherIpcEvents = () => {
    ipcMain.handle(ReservedChannels.launcher_launch, (_, configuration) => {
        return launcherService.launch(configuration);
    });
};
