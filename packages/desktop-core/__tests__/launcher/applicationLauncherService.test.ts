import { mock } from "jest-mock-extended";

import { ConfigurationKind } from "../../src/main/configuration/configurationKind";
import { IConfiguration } from "../../src/main/configuration/iConfiguration";
import { ServiceHost } from "../../src/main/configuration/serviceHost";
import { ApplicationLauncherService } from "../../src/main/launcher/applicationLauncherService";
import { ILogger } from "../../src/main/logging";
import { IWindowService } from "../../src/main/windowing/IWindowService";

describe("canLaunch", () => {

    describe("can launcher", () => {

        test("when kind is application", () => {

            const windowService = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ApplicationLauncherService(logger, windowService);

            const configuration: IConfiguration = {
                kind: ConfigurationKind.Application,
                metadata: {
                    name: "name",
                },
                spec: {
                    url: "app-url",
                },
            };

            expect(launcher.canLaunch(configuration))
                .toBe(true);
        });
    });

    describe("can't launch", () => {

        test("when kind is service", () => {
            const windowFactory = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ApplicationLauncherService(logger, windowFactory);

            const configuration: IConfiguration = {
                kind: ConfigurationKind.Service,
                metadata: {
                    name: "name",
                },
                spec: {
                    host: ServiceHost.Electron,
                    main: "service.asar",
                },
            };

            expect(launcher.canLaunch(configuration))
                .toBe(false);
        });
    });
});
