import { Accelerator, globalShortcut } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { IGlobalShortcutService } from "./iGlobalShortcutService";

export class GlobalShortcutService implements IGlobalShortcutService {
    #emitter = new TypedEmitter();

    public constructor(maxListeners = 50) {
        this.#emitter.setMaxListeners(maxListeners);
    }

    public register(accelerator: Accelerator, listener: () => void) {
        const acceleratorEvent = accelerator as string;
        const listenerCount = this.#emitter.listenerCount(acceleratorEvent);

        this.#emitter.addListener(acceleratorEvent, listener);

        if (listenerCount === 0) {
            globalShortcut.register(accelerator, () => {
                this.#emitter.emit(acceleratorEvent);
            });
        }
    }

    public unregister(accelerator: Accelerator, listener: () => void) {
        const acceleratorEvent = accelerator as string;
        this.#emitter.removeListener(acceleratorEvent, listener);

        const listenerCount = this.#emitter.listenerCount(acceleratorEvent);
        if (listenerCount === 0) {
            globalShortcut.unregister(accelerator);
        }
    }

    public unregisterAll() {
        this.#emitter.eventNames().forEach((event) => {
            this.#emitter.removeAllListeners(event);
        });

        globalShortcut.unregisterAll();
    }
}
