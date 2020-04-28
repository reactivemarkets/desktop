import { mock } from "jest-mock-extended";

import { ConfigurationKind } from "../../configuration/configurationKind";
import { IConfiguration } from "../../configuration/iConfiguration";
import { ServiceHost } from "../../configuration/serviceHost";
import { ILogger } from "../../logging";
import { IWindowService } from "../../windowing/iWindowService";
import { ElectronServiceLauncherService } from "../electronServiceLauncherService";

describe("canLaunch", () => {

    describe("can launch", () => {

        test("when kind is service and host is electron", () => {

            const windowService = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowService);

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
            const windowService = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowService);

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
            const windowService = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ElectronServiceLauncherService(logger, windowService);

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
