import { IConfiguration, WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { mock } from "jest-mock-extended";

import { ILogger } from "../../logging";
import { IWindowService } from "../../windowing";
import { ApplicationLauncherService } from "../applicationLauncherService";

describe("canLaunch", () => {
    describe("can launcher", () => {
        test("when kind is application", () => {
            const windowService = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ApplicationLauncherService(logger, windowService);

            const configuration: IConfiguration = {
                kind: WellKnownConfigurationKind.Application,
                metadata: {
                    name: "name",
                },
                spec: {
                    url: "app-url",
                },
            };

            expect(launcher.canLaunch(configuration)).toBe(true);
        });
    });

    describe("can't launch", () => {
        test("when kind is service", () => {
            const windowFactory = mock<IWindowService>();

            const logger = mock<ILogger>();

            const launcher = new ApplicationLauncherService(logger, windowFactory);

            const configuration: IConfiguration = {
                kind: WellKnownConfigurationKind.Service,
                metadata: {
                    name: "name",
                },
                spec: {
                    main: "service.asar",
                },
            };

            expect(launcher.canLaunch(configuration)).toBe(false);
        });
    });
});
