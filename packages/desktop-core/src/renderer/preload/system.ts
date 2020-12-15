import { ipcRenderer } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { ReservedChannels } from "../../common";

export class System {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.system_events, (_, event) => {
            this.#emitter.emit(event);
        });
    }

    public getAppName = () => {
        return ipcRenderer.invoke(ReservedChannels.system_getAppName);
    };

    public getAppVersion = () => {
        return ipcRenderer.invoke(ReservedChannels.system_getAppVersion);
    };

    public getVersions = () => {
        return ipcRenderer.invoke(ReservedChannels.system_getVersions);
    };

    public off = (event: string, listener: () => void) => {
        this.#emitter.removeListener(event, listener);

        const listenerCount = this.#emitter.listenerCount(event);
        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.system_off, event);
        }
    };

    public on = (event: string, listener: () => void) => {
        const listenerCount = this.#emitter.listenerCount(event);
        this.#emitter.addListener(event, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.system_on, event);
        }
    };

    public quit = () => {
        return ipcRenderer.invoke(ReservedChannels.system_quit);
    };

    public showAboutPanel = () => {
        return ipcRenderer.invoke(ReservedChannels.system_showAboutPanel);
    };
}
