import { Accelerator, ipcRenderer } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { ReservedChannels } from "../../common";

export class GlobalShortcut {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.globalShortcut_invoked, (_, accelerator) => {
            this.#emitter.emit(accelerator);
        });
    }

    public isRegistered = (accelerator: Accelerator) => {
        return this.#emitter.listenerCount(accelerator as string) !== 0;
    };

    public register = (accelerator: Accelerator, listener: () => void) => {
        const event = accelerator as string;
        const listenerCount = this.#emitter.listenerCount(event);
        this.#emitter.addListener(event, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.globalShortcut_register, accelerator);
        }
    };

    public unregister = (accelerator: Accelerator, listener: () => void) => {
        const event = accelerator as string;
        this.#emitter.removeListener(event, listener);

        const listenerCount = this.#emitter.listenerCount(event);
        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.globalShortcut_unregister, accelerator);
        }
    };

    public unregisterAll = () => {
        this.#emitter.eventNames().forEach((event) => {
            this.#emitter.removeAllListeners(event);
        });
        ipcRenderer.send(ReservedChannels.globalShortcut_unregisterAll);
    };
}
