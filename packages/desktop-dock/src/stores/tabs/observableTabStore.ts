import { Subject } from "rxjs";
import { Action, ITabStore } from "./iTabStore";

export class ObservableTabStore implements ITabStore {
    public readonly action = new Subject<Action>();

    public next() {
        this.action.next("next");
    }

    public previous() {
        this.action.next("previous");
    }
}
