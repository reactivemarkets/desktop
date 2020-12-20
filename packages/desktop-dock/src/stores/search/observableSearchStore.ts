import { action, observable } from "mobx";
import { ISearchStore } from "./iSearchStore";

export class ObservableSearchStore implements ISearchStore {
    @observable
    public term?: string;

    @action
    public clear() {
        this.term = undefined;
    }

    @action
    public update(term: string) {
        this.term = term;
    }
}
