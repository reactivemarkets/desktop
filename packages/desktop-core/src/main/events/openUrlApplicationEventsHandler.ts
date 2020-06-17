import { ConfigurationKind } from "@reactivemarkets/desktop-types";
import { App } from "electron";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";
import { registryService } from "../registry";
import { logger } from "../logging";
import { configurationGenerator } from "../configuration";
import { launcherService } from "../launcher";

export const registerOpenUrlEventsHandler = (app: App) => {
    app.on("open-url", async (event, desktopUrl) => {
        try {
            event.preventDefault();

            const url = desktopUrl.replace("desktop://", "https://");

            const name = uniqueNamesGenerator({
                dictionaries: [adjectives, colors, animals],
            });

            const configuration = await configurationGenerator.generate({
                kind: ConfigurationKind.Application,
                name,
                url,
            });

            await registryService.register(configuration);

            const instance = await launcherService.launch(configuration);

            logger.info(`Launched ${instance.kind}: ${instance.metadata.name}`);
        } catch (error) {
            logger.error(`Failed to launch from the protocol handler: ${error}`);
        }
    });
};
