import { IDesktop } from "./iDesktop";
import { IRouter } from "./iRouter";

export class RouterClient implements IRouter {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public publish<T>(channel: string, payload: T) {
        this.desktop.api.router.publish(channel, payload);
    }

    public subscribe<T>(channel: string, listener: (payload: T) => void) {
        this.desktop.api.subscribe(channel, listener);
    }

    public unsubscribe<T>(channel: string, listener: (payload: T) => void) {
        this.desktop.api.unsubscribe(channel, listener);
    }
}
