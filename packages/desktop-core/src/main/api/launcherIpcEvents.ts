import { ipcMain } from "electron";
import { launcherService } from "../launcher";
import { ReservedChannels } from "../../common";

export const launcherIpcEvents = () => {
    ipcMain.handle(ReservedChannels.launcher_launch, async (_, configuration) => {
        return await launcherService.launch(configuration);
    });
};
