import { screen } from "electron";
import { IWindowFactory } from "./iWindowFactory";
import { IApplicationSpecification, IConfiguration } from "@reactivemarkets/desktop-types";
import { ILogger } from "../../logging";

export class CurrentScreenWindowFactory implements IWindowFactory {
    private readonly logger: ILogger;
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory, logger: ILogger) {
        this.windowFactory = windowFactory;
        this.logger = logger;
    }

    public create(configuration: IConfiguration) {
        const window = (configuration.spec as IApplicationSpecification | undefined)?.window;
        if (window === undefined) {
            return this.windowFactory.create(configuration);
        }

        const { height = 600, width = 800, x, y } = window;
        if (x !== undefined || y !== undefined) {
            return this.windowFactory.create(configuration);
        }

        const point = screen.getCursorScreenPoint();

        const display = screen.getDisplayNearestPoint(point);

        const { bounds } = display;

        const newX = bounds.x + (bounds.width - width) / 2;
        const newY = bounds.y + (bounds.height - height) / 2;

        this.logger.verbose(`Positioning window at ${newX} ${newY}`);

        return this.windowFactory.create({
            ...configuration,
            spec: {
                ...configuration.spec,
                window: {
                    ...window,
                    height,
                    x: newX,
                    y: newY,
                    width,
                },
            },
        });
    }
}
