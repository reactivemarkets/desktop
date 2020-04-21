import { mock } from "jest-mock-extended";

import { ConfigurationKind } from "../../src/configuration/configurationKind";
import { IConfiguration } from "../../src/configuration/iConfiguration";
import { ServiceHost } from "../../src/configuration/serviceHost";
import { ElectronServiceLauncherService } from "../../src/launcher/electronServiceLauncherService";
import { ILogger } from "../../src/logging";
import { IWindowFactory } from "../../src/windowing/iWindowFactory";

describe("canLaunch", () => {

    describe("can launch", () => {

        test("when kind is service and host is electron", () => {

            const windowFactory = mock<IWindowFactory>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowFactory);

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
                .toBe(true);
        });
    });

    describe("can't launch", () => {

        test("when host is node", () => {
            const windowFactory = mock<IWindowFactory>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowFactory);

            const configuration: IConfiguration = {
                kind: ConfigurationKind.Service,
                metadata: {
                    name: "name",
                },
                spec: {
                    host: ServiceHost.Node,
                    main: "service.asar",
                },
            };

            expect(launcher.canLaunch(configuration))
                .toBe(false);
        });

        test("when kind is application", () => {
            const windowFactory = mock<IWindowFactory>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowFactory);

            const configuration: IConfiguration = {
                kind: ConfigurationKind.Application,
                metadata: {
                    name: "name",
                },
                spec: {
                    url: "url",
                },
            };

            expect(launcher.canLaunch(configuration))
                .toBe(false);
        });
    });
});
