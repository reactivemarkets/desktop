import { action, observable } from "mobx";
import { IFilterStore } from "./iFilterStore";

export class ObservableFilterStore implements IFilterStore {
    @observable
    public filter?: string;

    public clear() {
        this.filter = undefined;
    }

    @action
    public update(filter?: string) {
        this.filter = filter;
    }
}
