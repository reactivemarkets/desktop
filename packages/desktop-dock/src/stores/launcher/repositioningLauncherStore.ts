import { IConfiguration, launcher } from "@reactivemarkets/desktop-sdk";
import { ILauncherStore } from "./iLauncherStore";

export class RepositioningLauncherStore implements ILauncherStore {
    public async launch(configuration: IConfiguration): Promise<void> {
        try {
            console.info("Launching application", configuration);

            await launcher.launch(configuration);
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    }
}
