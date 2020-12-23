import { ipcRenderer, Point } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { ReservedChannels } from "../../common";

export class Screen {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.screen_events, (_, event, ...args) => {
            this.#emitter.emit(event, ...args);
        });
    }

    public getAllDisplays = () => {
        return ipcRenderer.invoke(ReservedChannels.screen_allDisplays);
    };

    public getCursorScreenDisplay = () => {
        return ipcRenderer.invoke(ReservedChannels.screen_cursorScreenDisplay);
    };

    public getCursorScreenPoint = () => {
        return ipcRenderer.invoke(ReservedChannels.screen_cursorScreenPoint);
    };

    public getDisplayNearestPoint = (point: Point) => {
        return ipcRenderer.invoke(ReservedChannels.screen_displayNearestPoint, point);
    };

    public getPrimaryDisplay = () => {
        return ipcRenderer.invoke(ReservedChannels.screen_primaryDisplay);
    };

    public off = (event: string, listener: () => void) => {
        this.#emitter.removeListener(event, listener);

        const listenerCount = this.#emitter.listenerCount(event);
        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.screen_off, event);
        }
    };

    public on = (event: string, listener: () => void) => {
        const listenerCount = this.#emitter.listenerCount(event);
        this.#emitter.addListener(event, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.screen_on, event);
        }
    };
}
