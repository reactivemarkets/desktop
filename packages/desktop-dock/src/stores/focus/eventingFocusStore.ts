import { TypedEmitter } from "tiny-typed-emitter";
import { IFocusStore } from "./iFocusStore";

interface IFocusEvents {
    "focus-input": () => void;
}

export class EventingFocusStore extends TypedEmitter<IFocusEvents> implements IFocusStore {
    public focusInput() {
        this.emit("focus-input");
    }
}
